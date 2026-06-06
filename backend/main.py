from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Optional
import os
from groq import Groq
from dotenv import load_dotenv
import json
import re
import edge_tts
import base64
import re
# =====================================================
# LOAD ENV
# =====================================================
load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins = [
"http://localhost:3000",
"https://www.petmemaa.in",
"https://petmemaa.in"
],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = Groq(api_key=os.environ.get("GROQ_API_KEY"))

# =====================================================
# MODELS
# =====================================================

class ChatRequest(BaseModel):
    message: str
    history: Optional[List[Dict[str, str]]] = []

# =====================================================
# LOAD DATA
# =====================================================

def load_data():
    try:
        with open("petmemaa_data.json", "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception as e:
        print(f"WARNING: Could not load petmemaa_data.json: {e}")
        return {}

PET_DATA = load_data()

# =====================================================
# SERVICE → VALID PETS MAP 
# =====================================================

SERVICE_PET_MAP = {
    "boarding":    ["dog", "cat", "bird", "small pet"],
    "daycare":     ["dog", "cat", "bird", "small pet"],
    "grooming":    ["dog", "cat"],
    "veterinary":  ["dog", "cat", "bird", "small pet"],
    "swimming":    ["dog"],
    "playground":  ["dog"],
    "training":    ["dog"],
    "boutique":    [],   
    "transport":   [],   
}

PET_EMOJI = {
    "dog":    "🐶 Dog",
    "cat":    "🐱 Cat",
    "bird":   "🐦 Bird",
    "small pet": "🐹 Small Pets",
}

def valid_pets_for(service: str) -> list:
    return SERVICE_PET_MAP.get(service, [])

def pet_options_text(service: str) -> str:
    pets = valid_pets_for(service)
    return "\n".join(f"• {PET_EMOJI[p]}" for p in pets)


# =====================================================
# BUILD SYSTEM PROMPT FROM JSON
# =====================================================

def build_system_prompt() -> str:
    d = PET_DATA
    bi = d.get("business_info", {})
    contact = d.get("contact", {})
    boarding = d.get("boarding_services", {})
    grooming = d.get("grooming_services", {})
    vet = d.get("veterinary_and_vaccinations", {})
    training = d.get("training_and_daycare", {})
    wallet = d.get("wallet_offers", {})
    amenities = d.get("amenities", {})
    safety = d.get("safety_and_policies", {})

    dog_boarding_lines = []
    for room in boarding.get("dogs", []):
        p = room.get("pricing_inr", {})
        price_str = " | ".join([f"{k}: ₹{v}" for k, v in p.items()])
        dog_boarding_lines.append(f"  • {room['name']} ({room['category']}): {price_str}")

    cat_boarding_lines = []
    for room in boarding.get("cats", []):
        p = room.get("pricing_inr", {})
        price_str = " | ".join([f"{k}: ₹{v}" for k, v in p.items()])
        cat_boarding_lines.append(f"  • {room['name']} ({room['category']}): {price_str}")

    small_pet_boarding_lines = []
    friendly_names = {
        "Guinea Pigs & Rabbits": "Small Pets (Rabbits, Guinea Pigs, Hamsters)",
        "Avian Boarding":        "Birds (Parrots, Cockatiels, Macaws, Budgies)",
    }
    for room in boarding.get("small_pets", []):
        p = room.get("pricing_inr", {})
        price_str = " | ".join([f"{k}: ₹{v}" for k, v in p.items()])
        display_name = friendly_names.get(room["name"], room["name"])
        small_pet_boarding_lines.append(f"  • {display_name}: {price_str}")

    dog_groom = grooming.get("dog_packages_inr", {})
    dog_groom_lines = []
    for pkg, sizes in dog_groom.items():
        label = pkg.replace("_", " ").title()
        size_str = " | ".join([f"{s.title()}: ₹{v}" for s, v in sizes.items()])
        dog_groom_lines.append(f"  • {label}: {size_str}")

    dog_indiv = grooming.get("dog_individual_services_inr", {})
    dog_indiv_lines = []
    for svc, sizes in dog_indiv.items():
        label = svc.replace("_", " ").title()
        size_str = " | ".join([f"{s.title()}: ₹{v}" for s, v in sizes.items()])
        dog_indiv_lines.append(f"  • {label}: {size_str}")

    cat_groom = grooming.get("cat_grooming", {})
    upgrades = grooming.get("upgrades_inr", {})

    vaccine_lines = []
    for v in vet.get("vaccines_inr", []):
        onsite = "✅ available at facility" if v.get("onsite_available") else "❌ must be done before arrival"
        vaccine_lines.append(f"  • {v['pet']} – {v['name']}: ₹{v['price']} ({onsite})")

    silver = wallet.get("silver", {})
    gold = wallet.get("gold", {})

    prompt = f"""You are Shvan 🐾, the warm, friendly, and knowledgeable assistant of Pet Me Maa.

IMPORTANT RULES:
1. Always start with "Woof!" 🐾
2. ONLY use facts from this knowledge base. NEVER invent services, prices, or policies.
3. If a user asks how to book or reserve a spot, instruct them to call the respective branch phone number.

RESPONSE FORMAT — STRICTLY FOLLOW:
- Maximum 4 short lines per reply. Each line = one clear idea.
- NEVER write a long paragraph. Break every answer into short, separate lines.
- CRITICAL: Never use markdown bullet points ('-', '*', '•') or numbered lists (1, 2, 3) when explaining features, facilities, or policies. Standard lists break our chat window design.
- Instead of bulleted lists, separate distinct thoughts using simple double line breaks (\\n\\n) and place a clean emoji at the start of the line (e.g., '🏥 Medical facility fact here\\n\\n🩺 Trained staff fact here').
- For policy or trust questions, pick the 2-3 most relevant facts and present them as short punchy lines.
- Never end with questions asking if they want to book or learn more.

=== ABOUT PET ME MAA ===
Name: {bi.get('name')}
Description: {bi.get('description')}
Founder: {bi.get('founder')} | Manager: {bi.get('manager')}
Staff: {bi.get('staffing')}
Medical Support: {bi.get('medical_support')}
Infrastructure: {bi.get('infrastructure')}
Philosophy: {bi.get('core_philosophy')}

Phone: {contact.get('phone')}
Timings: {contact.get('timings')}
Location: {contact.get('location_status')}
Google Maps (Sector 115): https://maps.app.goo.gl/hqdw6uYGftR9khKU8
Google Maps (Sector 162): https://maps.app.goo.gl/vQLwbLSSZK9XT6zi7
Website: {', '.join(contact.get('websites', []))}

=== AMENITIES ===
Meals: {amenities.get('meals')}
Play Area: ₹{amenities.get('play_area', {}).get('price_inr')} for {amenities.get('play_area', {}).get('duration_mins')} mins. {amenities.get('play_area', {}).get('notes')}
Pet Pool: ₹{amenities.get('pet_pool', {}).get('price_inr')} for {amenities.get('pet_pool', {}).get('duration_mins')} mins. Includes: {', '.join(amenities.get('pet_pool', {}).get('included', []))}.
Cafe Pooch: {amenities.get('cafe_pooch')}
Events: {amenities.get('events')}

=== DOG BOARDING PRICES ===
{chr(10).join(dog_boarding_lines)}
Includes: {', '.join(boarding.get('dog_boarding_includes', []))}

=== CAT BOARDING PRICES ===
{chr(10).join(cat_boarding_lines)}

=== SMALL PETS & BIRDS BOARDING ===
{chr(10).join(small_pet_boarding_lines)}

=== DOG GROOMING PACKAGES ===
{chr(10).join(dog_groom_lines)}
Upgrades: Premium Shampoo +₹{upgrades.get('premium_shampoo')} | Medicated Shampoo +₹{upgrades.get('medicated_shampoo')}

=== DOG INDIVIDUAL GROOMING SERVICES ===
{chr(10).join(dog_indiv_lines)}

=== CAT GROOMING ===
  • Flat rate: ₹{cat_groom.get('price_inr')} — {cat_groom.get('features')}

=== VACCINE REQUIREMENTS & PRICES ===
Dogs (mandatory before boarding): Rabies + 9-in-1 (Available at facility)
Cats (mandatory before boarding): Rabies + Tri-cat (Available at facility)
Small pets & birds: No vaccines required, but we administer necessary medicines when required (ONLY mention if specifically asked).
{chr(10).join(vaccine_lines)}

=== TRAINING & DAYCARE ===
Daycare: {training.get('daycare_schedule')}
Pet Training: Min {training.get('pet_training', {}).get('duration')} | Starts at ₹{training.get('pet_training', {}).get('price_starts_inr')} {training.get('pet_training', {}).get('notes')}

=== WALLET OFFERS ===
Silver: Recharge ₹{silver.get('recharge_inr')} → get {silver.get('discount_percent')}% off boarding. {silver.get('details')}
Gold: Recharge ₹{gold.get('recharge_inr')} → get {gold.get('discount_percent')}% off boarding. {gold.get('details')}

=== SAFETY POLICIES ===
Conflict Management: {safety.get('conflict_and_behavior_management')}
Female Pet Safety: {safety.get('female_pet_safety')}
CCTV & Updates: {safety.get('cctv_and_monitoring')}

=== BREEDS POLICY ===
{d.get('breeds_policy', {}).get('rule')}
"""
    return prompt

SYSTEM_PROMPT = build_system_prompt()


# =====================================================
# DETECTION ENGINE
# =====================================================

def detect_pet(msg: str) -> Optional[str]:
    msg = msg.lower()
    if re.search(r"\bdog\b|\bdogs\b", msg):
        return "dog"
    if re.search(r"\bcat\b|\bcats\b", msg):
        return "cat"
    if re.search(r"\bbird\b|\bbirds\b|\bparrot\b|\bmacaw\b|\bcockatiel\b|\bbudgie\b", msg):
        return "bird"
    # --- FIXED: Added hamster here! ---
    if re.search(r"\brabbit\b|\brabbits\b|\bguinea pig\b|\bhamster\b|\bhamsters\b|\bsmall pet\b|\bsmall pets\b", msg):
        return "small pet"
    return None


def detect_service(msg: str) -> Optional[str]:
    msg = msg.lower()
    if "daycare" in msg:
        return "daycare"
    if "boarding" in msg or re.search(r"\bstay\b|\bstaying\b", msg):
        return "boarding"
    if "grooming" in msg or re.search(r"\bgroom\b|\bgroomed\b|\bbath\b|\bbathing\b", msg):
        return "grooming"
    if "training" in msg or re.search(r"\btrain\b|\btraining\b|\btrained\b", msg):
        return "training"
    if "swimming" in msg or re.search(r"\bpool\b|\bswim\b", msg):
        return "swimming"
    if re.search(r"\bplayground\b|\bplay area\b|\bplay\b", msg):
        return "playground"
    if re.search(r"\bvet\b|\bvets\b|\bdoctor\b|\bvaccination\b|\bvaccine\b|\bvaccines\b", msg):
        return "veterinary"
    if re.search(r"\btransport\b|\bpickup\b|\bdrop\b|\bpick up\b", msg):
        return "transport"
    if re.search(r"\bboutique\b|\bshop\b|\bshopping\b", msg):
        return "boutique"
    return None


def is_price_query(msg: str) -> bool:
    pattern = r"\b(price|prices|cost|costs|charge|charges|pricing|rate|rates|how much|fee|fees|discount|offer|coupon)\b"
    return bool(re.search(pattern, msg.lower()))

def is_booking_query(msg: str) -> bool:
    words = ["book", "booking", "reserve", "appointment", "schedule", "slot"]
    msg = msg.lower()
    return any(w in msg for w in words)

def is_individual_services_query(msg: str) -> bool:
    msg = msg.lower()
    patterns = [
        r"\bindividual\b", r"\badd.?on\b", r"\bseparate\b",
        r"\ball service", r"\blist.*service", r"\bservice.*list",
        r"\bshow.*service", r"\bwhat.*service", r"\bsingle\b",
        r"\bà la carte\b", r"\bitem\b"
    ]
    return any(re.search(p, msg) for p in patterns)


INDIVIDUAL_SERVICE_KEYWORDS = {
    "ear":          "ear_cleaning",
    "ear clean":    "ear_cleaning",
    "paw":          "paw_trimming",
    "paw trim":     "paw_trimming",
    "nail":         "nail_cut",
    "nail cut":     "nail_cut",
    "teeth":        "teeth_brushing",
    "teeth brush":  "teeth_brushing",
    "gland":        "gland_cleaning",
    "intimate":     "intimate_cut",
    "massage":      "oil_massage",
    "oil massage":  "oil_massage",
    "haircut":      "haircut",
    "hair cut":     "haircut",
    "styling":      "haircut",
    "zero cut":     "zero_cut",
    "zero":         "zero_cut",
}

DOG_ONLY_INDIVIDUAL = {
    "ear_cleaning", "paw_trimming", "nail_cut", "teeth_brushing",
    "gland_cleaning", "intimate_cut", "oil_massage", "haircut", "zero_cut"
}

def detect_specific_grooming_service(msg: str) -> Optional[str]:
    msg = msg.lower()
    for keyword in sorted(INDIVIDUAL_SERVICE_KEYWORDS, key=len, reverse=True):
        if keyword in msg:
            return INDIVIDUAL_SERVICE_KEYWORDS[keyword]
    return None


def individual_price_lookup(pet: str, service_key: str) -> str:
    grooming = PET_DATA.get("grooming_services", {})
    indiv = grooming.get("dog_individual_services_inr", {})

    label_map = {
        "ear_cleaning":   "Ear Cleaning",
        "paw_trimming":   "Paw Trimming",
        "nail_cut":       "Nail Cut",
        "teeth_brushing": "Teeth Brushing",
        "gland_cleaning": "Gland Cleaning",
        "intimate_cut":   "Intimate Cut",
        "oil_massage":    "Oil Massage",
        "haircut":        "Haircut / Styling",
        "zero_cut":       "Zero Cut",
    }
    label = label_map.get(service_key, service_key.replace("_", " ").title())

    if service_key in DOG_ONLY_INDIVIDUAL:
        if pet and pet != "dog":
            return (
                f"Woof! Sorry, **{label}** is only available as part of **Dog grooming** 🐾\n"
                f"For cats we offer a flat-rate grooming session at ₹{PET_DATA.get('grooming_services', {}).get('cat_grooming', {}).get('price_inr', '')} "
                f"which includes bath, fur perfume, and blow dry."
            )
        sizes = indiv.get(service_key, {})
        if sizes:
            return (
                f"Woof! Here's the price for **{label}** 🐾\n\n"
                f"• Small: ₹{sizes.get('small')}\n"
                f"• Medium: ₹{sizes.get('medium')}\n"
                f"• Large: ₹{sizes.get('large')}"
            )

    return f"Woof! Please contact our team for pricing on that 🐾\n📞 +91-9217326357"


# =====================================================
# MEMORY FROM CHAT HISTORY
# =====================================================

def extract_from_history(history: list) -> tuple:
    pet, service = None, None
    for item in reversed(history):
        if item.get("role") != "user":
            continue
        text = item.get("content", "").lower()
        if not pet:
            pet = detect_pet(text)
        if not service:
            service = detect_service(text)
        if pet and service:
            break
    return pet, service


# =====================================================
# PRICE LOOKUP
# =====================================================

def price_lookup(pet: str, service: str) -> Optional[str]:
    boarding = PET_DATA.get("boarding_services", {})
    grooming = PET_DATA.get("grooming_services", {})
    amenities = PET_DATA.get("amenities", {})

    def boarding_price_row(p: dict) -> str:
        rows = []
        for duration, base in p.items():
            if "24" in str(duration):  
                rows.append(f"  • **{duration}:** ₹{base}")
        return "\n".join(rows)

    lines = []

    if service == "boarding":
        if pet == "dog":
            for room in boarding.get("dogs", []):
                lines.append(f"\n**{room['name']}** ({room['category']})")
                lines.append(f"  _{room['features']}_")
                lines.append(boarding_price_row(room["pricing_inr"]))
        elif pet == "cat":
            for room in boarding.get("cats", []):
                lines.append(f"\n**{room['name']}** ({room['category']})")
                lines.append(f"  _{room['features']}_")
                lines.append(boarding_price_row(room["pricing_inr"]))
        elif pet in ("bird", "small pet"):
            friendly_names = {
                "Guinea Pigs & Rabbits": "Small Pets (Rabbits, Guinea Pigs, Hamsters)",
                "Avian Boarding":        "Birds (Parrots, Cockatiels, Macaws, Budgies)",
            }
            for room in boarding.get("small_pets", []):
                if pet == "bird" and room["name"] != "Avian Boarding": continue
                if pet == "small pet" and room["name"] != "Guinea Pigs & Rabbits": continue
                
                display_name = friendly_names.get(room["name"], room["name"])
                lines.append(f"\n**{display_name}**")
                lines.append(f"  _{room['features']}_")
                lines.append(boarding_price_row(room["pricing_inr"]))
            

    elif service == "grooming":
        if pet == "dog":
            dog_pkgs = grooming.get("dog_packages_inr", {})
            lines.append("**Packages (Small | Medium | Large):**")
            pkg_labels = {
                "grooming_hygiene": "Grooming + Hygiene",
                "grooming_styling": "Grooming + Styling",
                "grooming_hygiene_styling": "Grooming + Hygiene + Styling"
            }
            for key, label in pkg_labels.items():
                sizes = dog_pkgs.get(key, {})
                lines.append(f"  • {label}: ₹{sizes.get('small')} | ₹{sizes.get('medium')} | ₹{sizes.get('large')}")
            upgrades = grooming.get("upgrades_inr", {})
            lines.append(f"\n**Upgrades:** Premium Shampoo +₹{upgrades.get('premium_shampoo')} | Medicated Shampoo +₹{upgrades.get('medicated_shampoo')}")
        elif pet == "cat":
            cat = grooming.get("cat_grooming", {})
            lines.append(f"**Cat Grooming:** ₹{cat.get('price_inr')} flat")
            lines.append(f"  {cat.get('features')}")
    
    elif service == "daycare":
        boarding_data = PET_DATA.get("boarding_services", {})
        
        def daycare_price_row(p: dict) -> str:
            rows = []
            for duration, base in p.items():
                if "24" not in str(duration):  # Excludes 24hr for dogs
                    rows.append(f"  • **{duration}:** ₹{base}")
            return "\n".join(rows) if rows else "  • _Hourly daycare pricing unavailable._"

        def standard_price_row(p: dict) -> str:
            rows = []
            for duration, base in p.items():
                if "24" in str(duration):  # Keeps 24hr for cats & small pets
                    rows.append(f"  • **{duration}:** ₹{base}")
            return "\n".join(rows)

        lines.append("📅 **Daycare at Pet Me Maa:**")

        if pet == "dog":
            for room in boarding_data.get("dogs", []):
                lines.append(f"\n**{room['name']}** ({room['category']})")
                lines.append(f"  _{room['features']}_")
                lines.append(daycare_price_row(room["pricing_inr"]))
        elif pet == "cat":
            for room in boarding_data.get("cats", []):
                lines.append(f"\n**{room['name']}** ({room['category']})")
                lines.append(f"  _{room['features']}_")
                lines.append(standard_price_row(room["pricing_inr"]))
        elif pet in ("bird", "small pet"):
            friendly_names = {
                "Guinea Pigs & Rabbits": "Small Pets (Rabbits, Guinea Pigs, Hamsters)",
                "Avian Boarding":        "Birds (Parrots, Cockatiels, Macaws, Budgies)",
            }
            for room in boarding_data.get("small_pets", []):
                if pet == "bird" and room["name"] != "Avian Boarding": continue
                if pet == "small pet" and room["name"] != "Guinea Pigs & Rabbits": continue
                
                display_name = friendly_names.get(room["name"], room["name"])
                lines.append(f"\n**{display_name}**")
                lines.append(f"  _{room['features']}_")
                lines.append(standard_price_row(room["pricing_inr"]))
            lines.append("\n_Note: For birds and small pets, the minimum charge is the 24-hour rate, even if the stay is less than 24 hours._")
    
    elif service == "transport":
        transport = PET_DATA.get("transport_pricing", {})
        lines.append("🔄 **Pickup & Drop Pricing:**")
        lines.append(f"📍 **Service Area:** {transport.get('service_area', 'Delhi NCR')}")
        for b in transport.get("brackets_inr", []):
            note = f" ({b['note']})" if "note" in b else ""
            lines.append(f"  • {b['range_km']} km: ₹{b['price']}{note}")
        if transport.get("additional_distance"):
            lines.append(f"  • {transport.get('additional_distance')}")
        lines.append("\n_Note: This service is available for ALL pets._")
    
    elif service == "swimming":
        pool = amenities.get("pet_pool", {})
        lines.append(f"**Pet Pool:** ₹{pool.get('price_inr')} for {pool.get('duration_mins')} mins")
        lines.append(f"  Includes: {', '.join(pool.get('included', []))}")
        lines.append("\n_Note: This service is exclusively for dogs._")

    elif service == "playground":
        play = amenities.get("play_area", {})
        lines.append(f"**Play Area:** ₹{play.get('price_inr')} for {play.get('duration_mins')} mins")
        lines.append(f"  {play.get('notes')}")
        lines.append("\n_Note: This service is exclusively for dogs._")

    elif service == "veterinary":
        vet = PET_DATA.get("veterinary_and_vaccinations", {})
        lines.append("**Vaccine Prices:**")
        for v in vet.get("vaccines_inr", []):
            if pet and v["pet"].lower() != pet.lower():
                continue
            onsite = "✅ at facility" if v.get("onsite_available") else "❌ before arrival"
            lines.append(f"  • {v['pet']} – {v['name']}: ₹{v['price']} ({onsite})")

    elif service == "training":
        tr = PET_DATA.get("training_and_daycare", {}).get("pet_training", {})
        lines.append(f"**Pet Training:** Starts at ₹{tr.get('price_starts_inr')}")
        lines.append(f"  Duration: {tr.get('duration')}")
        lines.append(f"  {tr.get('notes')}")
        lines.append("\n_Note: This service is exclusively for dogs._")
        
    elif service == "boutique":
        lines.append("Woof! We have a curated Shopping Boutique for toys, treats, and accessories! 🐾")
        lines.append("Please visit us in-store to check out our collection.")

    return "\n".join(lines) if lines else None


# =====================================================
# SERVICE INFO LOOKUP
# =====================================================

def service_info_lookup(pet: Optional[str], service: str, show_individual: bool = False) -> Optional[str]:
    boarding = PET_DATA.get("boarding_services", {})
    grooming = PET_DATA.get("grooming_services", {})
    amenities = PET_DATA.get("amenities", {})
    training = PET_DATA.get("training_and_daycare", {})
    vet = PET_DATA.get("veterinary_and_vaccinations", {})

    if service == "boarding":
        if not pet:
            return None

        def price_row(p: dict) -> str:
            rows = []
            for duration, base in p.items():
                if "24" in str(duration):  
                    rows.append(f"  • **{duration}:** ₹{base}")
            return "\n".join(rows)

        lines = []
        if pet == "dog":
            lines.append("🏨 **Dog Boarding at Pet Me Maa** includes:\n")
            lines.append("• " + " • ".join(boarding.get("dog_boarding_includes", [])))
            lines.append("\n**Room Options & Pricing:**")
            for room in boarding.get("dogs", []):
                lines.append(f"\n**{room['name']}** _{room['category']}_")
                lines.append(f"  {room['features']}")
                lines.append(price_row(room["pricing_inr"]))

        elif pet == "cat":
            lines.append("🏨 **Cat Boarding at Pet Me Maa:**\n")
            lines.append("**Room Options & Pricing:**")
            for room in boarding.get("cats", []):
                lines.append(f"\n**{room['name']}** _{room['category']}_")
                lines.append(f"  {room['features']}")
                lines.append(price_row(room["pricing_inr"]))

        elif pet in ("bird", "rabbit", "small pet"):
            lines.append("🏨 **Small Pet & Bird Boarding:**\n")
            friendly_names = {
                "Guinea Pigs & Rabbits": "Small Pets (Rabbits, Guinea Pigs, Hamsters)",
                "Avian Boarding":        "Birds (Parrots, Cockatiels, Macaws, Budgies)",
            }
            for room in boarding.get("small_pets", []):
                display_name = friendly_names.get(room["name"], room["name"])
                lines.append(f"\n**{display_name}**")
                lines.append(f"  {room['features']}")
                lines.append(price_row(room["pricing_inr"]))

        return "\n".join(lines)

    elif service == "grooming":
        if not pet:
            return None

        lines = []
        cats_grm = grooming.get("cat_grooming", {})
        upgrades = grooming.get("upgrades_inr", {})
        pkg_labels = {
            "grooming_hygiene": "Grooming + Hygiene",
            "grooming_styling": "Grooming + Styling",
            "grooming_hygiene_styling": "Grooming + Hygiene + Styling"
        }

        if pet == "dog":
            if show_individual:
                indiv = grooming.get("dog_individual_services_inr", {})
                svc_labels = {
                    "ear_cleaning":    "Ear Cleaning",
                    "paw_trimming":    "Paw Trimming",
                    "nail_cut":        "Nail Cut",
                    "teeth_brushing":  "Teeth Brushing",
                    "gland_cleaning":  "Gland Cleaning",
                    "intimate_cut":    "Intimate Cut",
                    "oil_massage":     "Oil Massage",
                    "haircut":         "Haircut / Styling",
                    "zero_cut":        "Zero Cut",
                }
                lines.append("✂️ **Dog Individual Grooming Services** _(Small | Medium | Large)_:\n")
                for key, label in svc_labels.items():
                    sizes = indiv.get(key, {})
                    lines.append(f"• **{label}:** ₹{sizes.get('small')} | ₹{sizes.get('medium')} | ₹{sizes.get('large')}")
                lines.append(f"\n**Shampoo Upgrades:** Premium +₹{upgrades.get('premium_shampoo')} | Medicated +₹{upgrades.get('medicated_shampoo')}")
                lines.append("\n_These can be added on top of any grooming package too!_")
            else:
                lines.append("✂️ **Dog Grooming Packages** _(Small | Medium | Large)_:\n")
                for key, label in pkg_labels.items():
                    sizes = grooming.get("dog_packages_inr", {}).get(key, {})
                    lines.append(f"• **{label}:** ₹{sizes.get('small')} | ₹{sizes.get('medium')} | ₹{sizes.get('large')}")
                lines.append(f"\n**Shampoo Upgrades:** Premium +₹{upgrades.get('premium_shampoo')} | Medicated +₹{upgrades.get('medicated_shampoo')}")
                lines.append("\n_We also offer individual services (ear cleaning, nail cut, oil massage & more)._")
        elif pet == "cat":
            lines.append("✂️ **Cat Grooming:**\n")
            lines.append(f"• Flat rate: **₹{cats_grm.get('price_inr')}**")
            lines.append(f"  {cats_grm.get('features')}")

        return "\n".join(lines)

    elif service == "training":
        tr = training.get("pet_training", {})
        dc = training.get("daycare_schedule", "")
        lines = [
            "🎓 **Pet Training at Pet Me Maa:**\n",
            f"• Duration: **{tr.get('duration')}**",
            f"• Starts at: **₹{tr.get('price_starts_inr')}** {tr.get('notes')}",
            f"\n📅 **Daycare:** {dc}",
            "\n_Note: This service is exclusively for dogs._"
        ]
        return "\n".join(lines)

    elif service == "swimming":
        pool = amenities.get("pet_pool", {})
        lines = [
            "🏊 **Pet Swimming Pool:**\n",
            f"• **₹{pool.get('price_inr')}+GST** for {pool.get('duration_mins')} mins",
            f"• Includes: {', '.join(pool.get('included', []))}",
            f"• {pool.get('features')}",
            "\n_Note: This service is exclusively for dogs._"
        ]
        return "\n".join(lines)

    elif service == "playground":
        play = amenities.get("play_area", {})
        lines = [
            "🌿 **Play Area:**\n",
            f"• **₹{play.get('price_inr')}+GST** for {play.get('duration_mins')} mins",
            f"• {play.get('features')}",
            f"• _{play.get('notes')}_",
            "\n_Note: This service is exclusively for dogs._"
        ]
        return "\n".join(lines)

    elif service == "veterinary":
        vet = PET_DATA.get("veterinary_and_vaccinations", {})
        mandatory = vet.get("mandatory_rules", {})
        vaccines = vet.get("vaccines_inr", [])
        
        lines = ["💉 **Veterinary & Vaccinations:**\n"]

        if not pet or pet == "dog":
            lines.append(f"• **Dogs:** {mandatory.get('dogs')}")
            dog_vacs = [f"{v['name']} (₹{v['price']})" for v in vaccines if v['pet'].lower() == "dog"]
            if dog_vacs:
                lines.append(f"\n**Available vaccines at facility:** {', '.join(dog_vacs)}")

        if not pet or pet == "cat":
            if not pet: lines.append("") 
            lines.append(f"• **Cats:** {mandatory.get('cats')}")
            cat_vacs = [f"{v['name']} (₹{v['price']})" for v in vaccines if v['pet'].lower() == "cat"]
            if cat_vacs:
                lines.append(f"\n**Available vaccines at facility:** {', '.join(cat_vacs)}")

        if pet in ("bird", "small pet"):
            lines.append(f"• **Small Pets & Birds:** {mandatory.get('small_pets_and_birds')}")

        return "\n".join(lines).strip()
    
    elif service == "daycare":
        boarding_data = PET_DATA.get("boarding_services", {})
        
        def daycare_price_row(p: dict) -> str:
            rows = []
            for duration, base in p.items():
                if "24" not in str(duration):  
                    rows.append(f"  • **{duration}:** ₹{base}")
            return "\n".join(rows) if rows else "  • _Hourly daycare pricing unavailable._"

        def standard_price_row(p: dict) -> str:
            rows = []
            for duration, base in p.items():
                if "24" in str(duration):  
                    rows.append(f"  • **{duration}:** ₹{base}")
            return "\n".join(rows)

        lines = ["📅 **Daycare at Pet Me Maa:**\n"]

        if pet == "dog":
            for room in boarding_data.get("dogs", []):
                lines.append(f"\n**{room['name']}** ({room['category']})")
                lines.append(f"  _{room['features']}_")
                lines.append(daycare_price_row(room["pricing_inr"]))
        elif pet == "cat":
            for room in boarding_data.get("cats", []):
                lines.append(f"\n**{room['name']}** ({room['category']})")
                lines.append(f"  _{room['features']}_")
                lines.append(standard_price_row(room["pricing_inr"]))
        elif pet in ("bird", "rabbit", "small pet"):
            friendly_names = {
                "Guinea Pigs & Rabbits": "Small Pets (Rabbits, Guinea Pigs, Hamsters)",
                "Avian Boarding":        "Birds (Parrots, Cockatiels, Macaws, Budgies)",
            }
            for room in boarding_data.get("small_pets", []):
                display_name = friendly_names.get(room["name"], room["name"])
                lines.append(f"\n**{display_name}**")
                lines.append(f"  _{room['features']}_")
                lines.append(standard_price_row(room["pricing_inr"]))
                
        return "\n".join(lines)
    
    elif service == "boutique":
        lines = [
            "🛍️ **Shopping Boutique:**\n",
            "Woof! We have a curated Shopping Boutique for toys, treats, and accessories! 🐾",
            "Please visit us in-store to check out our collection."
        ]
        return "\n".join(lines)
    
    elif service == "transport":
        transport = PET_DATA.get("transport_pricing", {})
        lines = [
            "🔄 **Pickup & Drop / Transport:**\n",
            "Woof! Our secure transport service is available for ALL pets! 🐾\n",
            f"📍 **Service Area:** {transport.get('service_area', 'Delhi NCR')}",
            "**Pricing:**"
        ]
        for b in transport.get("brackets_inr", []):
            note = f" ({b['note']})" if "note" in b else ""
            lines.append(f"  • {b['range_km']} km: ₹{b['price']}{note}")
        if transport.get("additional_distance"):
            lines.append(f"  • {transport.get('additional_distance')}")
        return "\n".join(lines)
    
    return None


# =====================================================
# AUDIO
# =====================================================

async def generate_audio(text: str) -> Optional[str]:
    try:
        clean = re.sub(r"\*\*|#{1,3} ", "", text)
        clean = clean.encode("ascii", "ignore").decode("ascii")

        filename = "temp_shvan.mp3"
        communicate = edge_tts.Communicate(
            clean,
            "en-IN-PrabhatNeural",
            rate="+10%",
            pitch="+15Hz"
        )
        await communicate.save(filename)

        with open(filename, "rb") as f:
            audio_b64 = base64.b64encode(f.read()).decode("utf-8")

        os.remove(filename)
        return audio_b64
    except Exception as e:
        print(f"Audio generation error: {e}")
        return None


# =====================================================
# CHAT API
# =====================================================

@app.post("/api/chat")
async def chat(request: ChatRequest):
    try:
        msg = request.message.strip()
        lower = msg.lower()
        
        if "menu" in lower:
            reply = (
                "Woof! Welcome to Cafe Pooch! 🐾☕\n\n"
                "Our cozy cafe is designed for human pet parents to unwind while watching their babies play! Our menu features freshly brewed coffees, refreshing coolers, artisanal teas, pizzas, pastas, sandwiches, and delicious finger foods.\n\n"
                "🧁 Don't worry, we haven't forgotten the fur babies—we also feature a dedicated 'Doggy Treat Menu' packed with pet-safe cupcakes, ice creams, and healthy baked snacks!"
            )
            audio = await generate_audio(reply)
            return {"reply": reply, "audio": audio}

        # ── 2. FIXED BOOKING GUIDANCE INTERCEPTOR ──
        if "book" in lower or "reservation" in lower or "appointment" in lower:
            reply = (
                "Woof! Booking a pawsome experience with us is incredibly simple! 📅🐾\n\n"
                "📞 **The Quickest Way:** Please call or WhatsApp our team directly at **+91-9217326357**.\n"
                "✨ Simply let us know your preferred date, timings, branch choice, and service requirements (Boarding, Daycare, Grooming, or Pool), and our team will book your spot instantly!"
            )
            audio = await generate_audio(reply)
            return {"reply": reply, "audio": audio}

        # ── 3. FIXED PACKAGES & MEMBERSHIPS INTERCEPTOR ──
        if any(p in lower for p in ["package", "membership", "plan"]):
            reply = (
                "Woof! Here are our **Wallet Offers & Packages** 🐾\n\n"
                "🥈 **Silver Wallet:** Recharge ₹5,000 → 20% off boarding\n"
                "🥇 **Gold Wallet:** Recharge ₹10,000 → 30% off boarding\n\n"
                "📌 **Please Note:**\n"
                "- Wallet packages and discounts are applicable ONLY on Boarding and Daycare services.\n"
                "- Your wallet balance is completely safe and valid until used."
            )
            audio = await generate_audio(reply)
            return {"reply": reply, "audio": audio}
        
        current_pet = detect_pet(msg)
        current_service = detect_service(msg)
        old_pet, old_service = extract_from_history(request.history)

        pet = current_pet or old_pet
        service = current_service or old_service
        
        if service and not pet:
            valid_pets = valid_pets_for(service)
            if len(valid_pets) == 1:
                pet = valid_pets[0]
        
        show_indiv = is_individual_services_query(lower)

        # ── Specific individual grooming service price ──
        specific_groom_svc = detect_specific_grooming_service(lower)
        if specific_groom_svc and is_price_query(lower):
            reply = individual_price_lookup(pet, specific_groom_svc)
            audio = await generate_audio(reply)
            return {"reply": reply, "audio": audio}
        
        # ── NEW: Polite Booking Interceptor ──
        if is_booking_query(lower) and not is_price_query(lower):
            reply = (
                "Woof! We would love to host your pet! 🐾\n\n"
                "To secure your spot, please **call us at +91-9217326357**.\n"
                "Our team is ready and excited to help you with your reservation!"
            )
            audio = await generate_audio(reply)
            return {"reply": reply, "audio": audio}
        
        # ── DAYCARE TO BOARDING TRANSITION (12-24 HOURS) ──
        if "12" in lower and ("24" in lower or "more" in lower or "less" in lower or "between" in lower):
            reply = (
                "Woof! If your furry friend stays for more than 12 hours in a single day but less than 24 hours, it transitions into our Overnight Boarding service. 🛌🐾\n\n"
                "Please note that for this extended stay, the full **24-hour boarding price will be applicable**.\n\n"
                "This ensures your pet gets a dedicated room, premium bedding, delicious meals, and 24x7 expert care for their comfort!\n\n"
                "You can see our exact room rates by clicking the Boarding button or typing 'boarding prices'."
            )
            audio = await generate_audio(reply)
            return {"reply": reply, "audio": audio}
        
        # ── FAQ Handlers ──
        discount_triggers = ["discount", "offer", "coupon", "deal", "wallet"]
        if any(t in lower for t in discount_triggers) and not is_price_query(lower):
            reply = (
                "Woof! Here are our **Wallet Offers** 🐾\n\n"
                "🥈 **Silver Wallet:** Recharge ₹5,000 → 20% off boarding\n"
                "🥇 **Gold Wallet:** Recharge ₹10,000 → 30% off boarding\n\n"
                "_Please note: Wallet offers and discounts are applicable ONLY on Boarding and Daycare services. Your wallet balance is safe until used._"
            )
            audio = await generate_audio(reply)
            return {"reply": reply, "audio": audio}
        
        # Document requirements (What we need from you)
        # Document requirements (What we need from you)
        # ── FAQ Handlers ──
        
        # ── MOVED HIGHER: Document requirements (What we need from you) ──
        doc_triggers = ["what we need from you", "documents required", "onboarding form", "require", "requirements"]
        if any(t in lower for t in doc_triggers):
            # Check if it's a bird or small pet
            is_exotic = any(p in lower for p in ["bird", "small pet", "hamster", "guinea pig", "rabbit"])
            
            if is_exotic:
                reply = (
                    "Woof! To board your pet with us, we just require a few quick things: 🐾\n\n"
                    "🆔 **Pet Parent's Government ID Proof**\n"
                    "📝 **Completed Onboarding Form**\n\n"
                    "Once we have these, your kid is all set for a pawsome stay!"
                )
            else:
                reply = (
                    "Woof! To board your pet with us, we just require a few quick things: 🐾\n\n"
                    "💉 **Updated Vaccination Details**\n"
                    "🆔 **Pet Parent's Government ID Proof**\n"
                    "📝 **Completed Onboarding Form**\n\n"
                    "Once we have these, your kid is all set for a pawsome stay!"
                )
                
            audio = await generate_audio(reply)
            return {"reply": reply, "audio": audio}

        # ── DISCOUNT TRIGGERS (Moved below document triggers) ──
        # ── DISCOUNT TRIGGERS ──
        discount_triggers = ["package", "packages", "membership", "memberships", "plan", "plans", "discount", "discounts", "offer", "offers"]
        if any(p in lower for p in discount_triggers):
            reply = (
                "Woof! Here are our **Wallet Offers & Packages** 🐾\n\n"
                "🥈 **Silver Wallet:** Recharge ₹5,000 → 20% off boarding\n"
                "🥇 **Gold Wallet:** Recharge ₹10,000 → 30% off boarding\n\n"
                "📌 **Please Note:**\n"
                "- Wallet packages and discounts are applicable ONLY on Boarding and Daycare services.\n"
                "- Your wallet balance is completely safe and valid until used."
            )
            audio = await generate_audio(reply)
            return {"reply": reply, "audio": audio}
        
        
        food_triggers = ["food", "meal", "meals", "eat", "diet", "feeding"]
        if any(t in lower for t in food_triggers):
            reply = (
                "Woof! We provide freshly prepared, healthy meals cooked by our in-house lady chef! 🐾\n\n"
                "🟢 **Veg:** Paneer, curd, fresh seasonal veggies, and fruits.\n"
                "🔴 **Non-Veg:** Freshly boiled chicken, chicken broth, and eggs.\n\n"
                "_If your kid has any special dietary needs, allergies, or a specific feeding schedule, just let us know and we will happily customize their meals!_"
            )
            audio = await generate_audio(reply)
            return {"reply": reply, "audio": audio}
        
        routine_triggers = ["routine", "schedule", "daily routine", "day like", "daycare schedule", "day look like"]
        if any(t in lower for t in routine_triggers):
            reply = (
                "Woof! Here's a look at a pawsome day at Pet Me Maa 🐾\n\n"
                "🌅 **Morning:** Wake up, morning walk, and freshen up.\n"
                "🍳 **Breakfast:** Customized, freshly prepared meals served in their own space.\n"
                "🎾 **Mid-Day:** Supervised playtime and socialization.\n"
                "💤 **Afternoon:** Rest and nap time in centrally AC rooms.\n"
                "🌙 **Evening:** Dinner service followed by an evening walk.\n"
                "🛏️ **Night:** Bedtime with 24x7 caretaker monitoring for a safe sleep.\n\n"
                "Your kid will have a perfectly balanced day with us!"
            )
            audio = await generate_audio(reply)
            return {"reply": reply, "audio": audio}

        # Location
        # Location
        location_triggers = [
            "location", "address", "where are you", "where is", "directions",
            "how to reach", "how to find", "find you", "navigate", "maps",
            "sector 115", "sector 162", "noida", "come to", "nearest branch", "branches"
        ]
        if any(t in lower for t in location_triggers):
            reply = (
                "Woof! We now have TWO pawsome branches open for your fur babies! 🐾\n\n"
                "📍 **Branch 1:** Sector 115, Noida\n"
                "📞 **Phone:** +91-8826791521\n"
                "🗺️ [Click here for Sector 115 Map](https://maps.app.goo.gl/hqdw6uYGftR9khKU8)\n\n"
                "📍 **Branch 2:** Sector 162, Noida\n"
                "📞 **Phone:** +91-9217326357\n"
                "🗺️ [Click here for Sector 162 Map](https://maps.app.goo.gl/vQLwbLSSZK9XT6zi7)\n\n"
                "🕗 **Timings:** Open all 7 days, 8 AM – 8 PM (Both Branches)"
            )
            audio = await generate_audio(reply)
            return {"reply": reply, "audio": audio}

        female_triggers = [
            "female", "girl dog", "girl cat", "in heat", "female safety",
            "female pet", "female dog", "female cat", "girl pet"
        ]
        if any(t in lower for t in female_triggers):
            reply = (
                "Woof! The safety of our female kids is taken very seriously 🐾\n\n"
                "🔒 We maintain **separate enclosures** and adjusted playtimes for female pets.\n"
                "🌡️ If your girl is in heat, just let us know — we activate an isolated care protocol immediately.\n"
                "👀 Our staff monitors all female pets with extra attention throughout their stay.\n\n"
                "Your girl is in safe paws here! 🐾"
            )
            audio = await generate_audio(reply)
            return {"reply": reply, "audio": audio}
        
        # ── INTERCEPTOR: POOL & PLAYGROUND EXTRA CHARGES ──
        if "pool" in lower or "play" in lower or "ground" in lower or "park" in lower:
            if any(t in lower for t in ["charge", "extra", "price", "cost", "fee", "include"]):
                reply = (
                    "Woof! Yes, our specialized Swimming Pool and Play Area / Playground are premium individual services and carry separate charges! 🏊‍♂️⚽🐾\n\n"
                    "💦 **Pet Pool:** ₹600 for a 45-minute splash session (includes a post-swim blow dry!).\n"
                    "🌿 **Play Area / Playground:** Standard entry is ₹400 per hour for a cage-free, supervised fun session.\n\n"
                    "📌 *Note:* If your pet is staying with us for overnight boarding or daycare, structured group playtime is already included in their room package! However, exclusive solo pool sessions or private playground access are charged separately."
                )
                audio = await generate_audio(reply)
                return {"reply": reply, "audio": audio}

        # ── INTERCEPTOR: CAFE POOCH HUMAN MENU ──
        if "menu" in lower and any(c in lower for c in ["cafe", "pooch", "human", "eat", "drink"]):
            reply = (
                "Woof! Welcome to Cafe Pooch! 🐾☕\n\n"
                "Our cozy cafe is designed for human pet parents to unwind while watching their babies play! Our menu features freshly brewed coffees, refreshing coolers, artisanal teas, pizzas, pastas, sandwiches, and delicious finger foods.\n\n"
                "🧁 Don't worry, we haven't forgotten the fur babies—we also feature a dedicated 'Doggy Treat Menu' packed with pet-safe cupcakes, ice creams, and healthy baked snacks!"
            )
            audio = await generate_audio(reply)
            return {"reply": reply, "audio": audio}

        # ── INTERCEPTOR: HOW TO BOOK A SERVICE ──
        book_triggers = ["how do i book", "how to book", "booking a service", "make a reservation", "reserve", "appointment"]
        if any(t in lower for t in book_triggers):
            reply = (
                "Woof! Booking a pawsome experience with us is incredibly simple! 📅🐾\n\n"
                "📞 **The Quickest Way:** Please call or WhatsApp our team directly at **+91-9217326357**.\n"
                "✨ Simply let us know your preferred date, timings, branch choice, and service requirements (Boarding, Daycare, Grooming, or Pool), and our team will book your spot instantly!"
            )
            audio = await generate_audio(reply)
            return {"reply": reply, "audio": audio}

        # ── INTERCEPTOR: STRICT VACCINATION POLICY ──
        policy_triggers = ["vaccinated pets only", "only vaccinated", "vaccination mandatory", "vaccine requirement", "are vaccinated pets"]
        if any(t in lower for t in policy_triggers) or ("vaccin" in lower and "allow" in lower):
            reply = (
                "Woof! Yes, absolutely. For the safety and health of all our campus kids, **we strictly maintain a 100% vaccinated-only policy**! 🛡️🐾\n\n"
                "🚫 No unvaccinated pet is permitted to enter our boarding, daycare, or socialization playgroups.\n"
                "🐶 **Dogs:** Must have active, up-to-date DHPPi/L (9-in-1) and Anti-Rabies (ARV) vaccinations.\n"
                "🐱 **Cats:** Must have active Tricat and Anti-Rabies vaccinations.\n\n"
                "📋 Please remember to bring a clear copy or photo of your pet's latest vaccination record card at the time of check-in!"
            )
            audio = await generate_audio(reply)
            return {"reply": reply, "audio": audio}
        
        # ── INTERCEPTOR: VET AVAILABILITY, TIMINGS & COST ──
        vet_triggers = ["vet", "veterinary", "doctor", "consultation", "paravet", "timing", "cost"]
        if any(t in lower for t in vet_triggers) and not ("vaccin" in lower or "vaccine" in lower):
            
            # 1. Timing Query
            if any(t in lower for t in ["timing", "time", "hour", "when"]):
                reply = (
                    "Woof! Our veterinary consultation and paravet services are available during our regular facility hours! 🩺🐾\n\n"
                    "🕗 **Timings:** 8:00 AM – 8:00 PM (Open all 7 days, both branches)\n\n"
                    "📌 For routine checkups or doctor consultations, we highly recommend calling ahead to confirm the doctor's exact rotation schedule for the day!"
                )
                audio = await generate_audio(reply)
                return {"reply": reply, "audio": audio}
            
            # 2. Cost / Price Query
            elif any(t in lower for t in ["cost", "price", "fee", "charge", "much"]):
                reply = (
                    "Woof! Our standard veterinary consultation fee is **₹500** across our centers. 🩺💰\n\n"
                    "✨ This covers a thorough checkup by our medical team. Any additional treatments, tests, or localized applications administered on-campus will be charged separately based on requirement."
                )
                audio = await generate_audio(reply)
                return {"reply": reply, "audio": audio}
            
            # 3. General Availability (e.g., "Is there a vet available?")
            else:
                reply = (
                    "Woof! Yes, absolutely! We have a dedicated, professional medical support team ready to assist your fur babies! 🩺🐾\n\n"
                    "👨‍⚕️ We feature a **24x7 on-campus paravet** for immediate medical attention and overnight monitoring, backed by professional on-call veterinary doctors.\n\n"
                    "Whether it is a routine wellness check, minor treatment, or keeping a medical eye on your kid during boarding, they are in highly qualified hands!"
                )
                audio = await generate_audio(reply)
                return {"reply": reply, "audio": audio}
            
        # ── NEW: Direct Vaccination Prices Interceptor ──
        vaccine_triggers = ["vaccine price", "vaccine prices", "vaccination price", "vaccination prices", "vaccination details", "vaccine cost"]
        if any(t in lower for t in vaccine_triggers):
            reply = (
                "Woof! Protecting your fur babies is our top priority! 🐾\n\n"
                "🛡️ **Mandatory Requirements:**\n"
                "• **Dogs:** Rabies & 9-in-1 are required.\n"
                "• **Cats:** Tricat & Rabies are required.\n\n"
                "💉 **Our On-Site Vaccine Menu:**\n"
                "🐶 **Dogs:** 9-in-1: ₹900 | Kennel Cough: ₹1000 | Corona: ₹600 | Rabies: ₹500\n"
                "🐱 **Cats:** Tri-cat: ₹1100 | Rabies: ₹500\n\n"
                "✨ All vaccines are safely administered by our professional team on-campus!"
            )
            audio = await generate_audio(reply)
            return {"reply": reply, "audio": audio}

        # ── INTERCEPTOR: GROOMING DURATION / TIME ──
        duration_triggers = ["how long", "duration", "time taken", "grooming session take", "time does it take"]
        if any(t in lower for t in duration_triggers) and "groom" in lower:
            reply = (
                "Woof! A standard grooming session usually takes between **1 to 2.5 hours**, depending entirely on your pet's breed, coat condition, and behavior! ⏰🐾\n\n"
                "🧼 Basic baths and hygiene cuts are faster, while full styling or de-matting sessions take a bit longer.\n\n"
                "We always prioritize your kid's comfort and take our time to ensure a completely stress-free, happy experience!"
            )
            audio = await generate_audio(reply)
            return {"reply": reply, "audio": audio}

        # ── INTERCEPTOR: PUPPY / KITTEN GROOMING SAFETY ──
        safety_groom_triggers = ["safe for puppy", "safe for puppies", "safe for kitten", "safe for kittens", "puppy safe", "kitten safe", "age for grooming"]
        if any(t in lower for t in safety_groom_triggers) or ("safe" in lower and "groom" in lower):
            reply = (
                "Woof! Yes, professional grooming is completely safe and highly recommended for young puppies and kittens! 👶🐾\n\n"
                "🍼 **When to Start:** Once they complete their basic vaccination rounds (usually around 3–4 months old), it is the perfect time to introduce them to grooming.\n\n"
                "✨ Early sessions help your babies get used to the water, dryers, and handling, turning grooming into a fun, lifelong habit instead of a scary chore. Our team handles them with extra love, patience, and care!"
            )
            audio = await generate_audio(reply)
            return {"reply": reply, "audio": audio}
        
        # ── NEW: Dog Grooming Size Pricing Interceptor ──
        # ── GROOMING PACKAGES (HARDCODED LOGIC) ──
        if "package" in lower and "dog" in lower:
            # Determine size (defaulting to Large if not small/medium)
            size = "Small" if "small" in lower else "Medium" if "medium" in lower else "Large"
            
            # Assign exact prices based on Screenshot (261).jpg
            if size == "Small":
                p1, p2, p3 = 650, 850, 1250
            elif size == "Medium":
                p1, p2, p3 = 750, 1050, 1350
            else: # Large
                p1, p2, p3 = 850, 1150, 1450
            
            reply = (
                f"Woof! Here are the Combo Packages for your **{size} Dog**! 🛁🐾\n\n"
                f"📦 **Grooming + Hygiene:** ₹{p1}\n"
                f"📦 **Grooming + Styling:** ₹{p2}\n"
                f"📦 **Grooming + Hygiene + Styling:** ₹{p3}\n\n"
                "✨ **Add-ons:**\n"
                "🧴 **Premium Shampoo:** +₹200\n"
                "🧴 **Anti-tick / Medicated Shampoo:** +₹300"
            )
            audio = await generate_audio(reply)
            return {"reply": reply, "audio": audio}

        # ── INDIVIDUAL GROOMING (HARDCODED LOGIC) ──
        if "individual" in lower and "dog" in lower:
            # Determine size
            size = "Small" if "small" in lower else "Medium" if "medium" in lower else "Large"
            
            # Assign exact prices based on Screenshot (262).jpg
            if size == "Small":
                prices = {"ear": 100, "paw": 100, "nail": 100, "teeth": 100, "gland": 100, "intimate": 150, "oil": 400, "haircut": 700, "zero": 500}
            elif size == "Medium":
                prices = {"ear": 100, "paw": 100, "nail": 150, "teeth": 150, "gland": 150, "intimate": 150, "oil": 500, "haircut": 800, "zero": 600}
            else: # Large
                prices = {"ear": 150, "paw": 150, "nail": 150, "teeth": 150, "gland": 150, "intimate": 150, "oil": 600, "haircut": 900, "zero": 700}
            
            reply = (
                f"Woof! Here are the Regular Services for your **{size} Dog**! ✂️🐾\n\n"
                f"• Ear cleaning: ₹{prices['ear']}\n"
                f"• Paw trimming: ₹{prices['paw']}\n"
                f"• Nail cut: ₹{prices['nail']}\n"
                f"• Teeth brushing: ₹{prices['teeth']}\n"
                f"• Gland cleaning: ₹{prices['gland']}\n"
                f"• Intimate cut: ₹{prices['intimate']}\n"
                f"• Oil massage: ₹{prices['oil']}\n"
                f"• Styling/Haircut: ₹{prices['haircut']}\n"
                f"• Zero Cut: ₹{prices['zero']}\n\n"
            )
            audio = await generate_audio(reply)
            return {"reply": reply, "audio": audio}
            
        fight_triggers = [
            "fight", "fighting", "conflict", "aggressive", "aggression",
            "don't fight", "dont fight", "kids fight", "pets fight",
            "fight with other", "mixing pets", "socialize", "playgroup"
        ]
        if any(t in lower for t in fight_triggers):
            reply = (
                "Woof! We take conflict prevention very seriously at Pet Me Maa 🐾\n\n"
                "🧠 Every pet gets a **temperament assessment** before mixing with others.\n"
                "📏 Playgroups are split by **size, breed, and energy level** — no mismatched pairs.\n"
                "👥 Our trained staff provides **24x7 hands-on supervision** during all activities.\n\n"
                "Your kid's peace of mind is our priority! 🐾"
            )
            audio = await generate_audio(reply)
            return {"reply": reply, "audio": audio}

        cctv_triggers = [
            "cctv", "camera", "live feed", "live access", "watch live",
            "see my pet", "view my pet", "monitor my pet", "cctv access",
            "camera access", "live stream", "watch online"
        ]
        if any(t in lower for t in cctv_triggers):
            reply = (
                "Woof! Great question — here's how we keep you in the loop 🐾\n\n"
                "📹 We have **24x7 CCTV monitoring** across the entire facility for security and staff supervision.\n"
                "🔒 Live CCTV access is not shared directly with parents to maintain facility security.\n"
                "📸 Instead, we proactively send **regular high-quality photos and videos** of your kid's daily activities.\n\n"
                "You'll always know your pet is happy and safe! 🐾"
            )
            audio = await generate_audio(reply)
            return {"reply": reply, "audio": audio}
        
        # ... (CCTV block ends above this)
        
        # ── INTERCEPTOR: VISITATION RULES ──
        visit_triggers = ["visit my pet", "can i visit", "visitation", "come see my pet", "visiting hours"]
        if any(t in lower for t in visit_triggers):
            reply = (
                "Woof! Yes, you are more than welcome to visit your furry kid during their stay! 🐾\n\n"
                "🕒 **Visiting Hours:** 11:00 AM – 4:00 PM (Any day of the week)\n\n"
                "📌 To ensure a smooth visit that doesn't disrupt our regular feeding and play schedules, we kindly ask that you drop us a message or call your branch at least 1 hour before arriving."
            )
            audio = await generate_audio(reply)
            return {"reply": reply, "audio": audio}

        # ── INTERCEPTOR: WHAT TO BRING (PACKING LIST) ──
        # By using "bring" or "packing", we intercept luggage queries safely without triggering the transport cab rule
        bring_triggers = ["what should i bring", "what to bring", "packing list", "bring along", "should i pack"]
        if any(t in lower for t in bring_triggers) or ("bring" in lower and "boarding" in lower):
            reply = (
                "Woof! To make your kid's stay comfortable, here is what you should pack for drop-off: 🐾\n\n"
                "🟢 **Mandatory:** Valid Government ID proof of the pet parent and an updated vaccination card.\n"
                "🔵 **Optional but Recommended:** Your pet's favorite toy, a personal blanket or t-shirt with your scent to help them settle, and any specific treats or ongoing medicines.\n\n"
                "🥣 *Note on food:* We happily provide freshly prepared veg and non-veg meals cooked by our chef, but you are welcome to bring their regular kibble if they are on a strict diet!"
            )
            audio = await generate_audio(reply)
            return {"reply": reply, "audio": audio}

        # ── INTERCEPTOR: BOARDING SAFETY ──
        # This catches general worries about boarding safety and blocks the raw pricing menu
        if "safe" in lower and "boarding" in lower:
            reply = (
                "Woof! Rest assured, your kid's safety is our absolute highest priority! 🐾\n\n"
                "🧠 **Behavior Tests:** Every pet undergoes a temperament assessment before mixing with groups.\n"
                "👥 **Expert Eyes:** Our handlers provide 24x7 hands-on supervision during play and rest.\n"
                "🩺 **Medical Care:** We have a dedicated paravet on-campus 24x7 for immediate health support.\n"
                "📹 **Constant Vigilance:** The entire facility is monitored by continuous CCTV coverage.\n\n"
                "Your baby is in incredibly safe, loving paws with us!"
            )
            audio = await generate_audio(reply)
            return {"reply": reply, "audio": audio}
        
        if any(word in lower for word in ["pickup", "transport", "cab", "pick and drop", "pick & drop"]):
            reply = (
                "Woof! Yes, we do offer a convenient pick and drop facility for your pets! 🚗🐾\n\n"
                "Please note that transportation is **not included** in the standard boarding or daycare rates. It is charged separately based on the actual distance from your location to our campus.\n\n"
                "To check availability and calculate the exact transport charges for your area, please call our branch directly!"
            )
            audio = await generate_audio(reply)
            return {"reply": reply, "audio": audio}
        
        # ── DAYCARE ──
        daycare_triggers = ["daycare", "day care", "day-care", "creche"]
        if any(t in lower for t in daycare_triggers):
            reply = (
                "Woof! Our Daycare is an exclusive, cage-free playground just for dogs! 🐶🎾\n\n"
                "Your furry friend will enjoy socialization, structured play, and rest under 24x7 expert supervision in our specialized daycare rooms.\n\n"
                "💰 **Pricing by Room Type:**\n"
                "🏡 **Tail Town House:** 6 Hours: ₹400 + GST | 9 Hours: ₹600 + GST | 12 Hours: ₹800 + GST\n\n"
                "🛋️ **Cozy Den:** 6 Hours: ₹600 + GST | 9 Hours: ₹800 + GST | 12 Hours: ₹1000 + GST\n\n"
                "🐾 **Gentle Giant Suite:** 6 Hours: ₹800 + GST | 9 Hours: ₹1000 + GST | 12 Hours: ₹1200 + GST"
            )
            audio = await generate_audio(reply)
            return {"reply": reply, "audio": audio}
        
        # ── NEW: Climate Control & Temperature Interceptor ──
        climate_pattern = r'\b(hot|cold|ac|air condition|temperature|weather|summer|winter|heat)\b'
        
        if re.search(climate_pattern, lower):
            reply = (
                "Woof! Your pet's comfort is guaranteed at Pet Me Maa 🐾\n\n"
                "❄️ **Summers:** Our entire facility is fully **Centrally Air-Conditioned** so your kids (dogs, cats, birds, and small pets) stay cool, safe, and happy!\n"
                "🔥 **Winters:** We provide cozy environments with warm bedding and strict climate-control.\n\n"
                "You never have to worry about the weather outside when they are staying with us!"
            )
            audio = await generate_audio(reply)
            return {"reply": reply, "audio": audio}
        
        # ── CAFE POOCH ──
        cafe_triggers = ["cafe", "cafe pooch", "coffee", "food for me", "human food"]
        if any(t in lower for t in cafe_triggers):
            reply = (
                "Woof! Welcome to Cafe Pooch! 🐾☕\n\n"
                "It's the perfect spot for pet parents to relax, grab a bite, and watch their furry kids play. We offer a delicious menu for humans and special doggy treats!\n\n"
                "🎉 **Celebrate With Us!**\n"
                "We specialize in hosting unforgettable **Pet Birthdays** and organizing pre-scheduled private parties. Let us make your baby's special day truly magical!"
            )
            audio = await generate_audio(reply)
            return {"reply": reply, "audio": audio}
            
        # ── SHOPPING BOUTIQUE ──
        # ── UPGRADED SHOPPING BOUTIQUE INTERCEPTOR ──
        boutique_triggers = [
            "boutique", "shopping", "shop", "store", "buy", "accessories", "toys",
            "product", "products", "item", "items", "food", "leash", "collar", 
            "supplies", "shampoo", "treats", "kibble", "sell"
        ]
        # Ensure we don't accidentally hijack a human food query meant for the cafe
        if any(t in lower for t in boutique_triggers) and not any(c in lower for c in ["cafe", "coffee", "human food", "food for me"]):
            reply = (
                "Woof! Treat your fur baby at our premium Shopping Boutique! 🛍️🐾\n\n"
                "We stock a fantastic range of high-quality pet products, including premium pet food, grooming supplies, interactive toys, treats, and stylish accessories to keep your kid happy and healthy.\n\n"
                "🏪 **Great News:** Our Shopping Boutique is fully stocked and available for you to explore at **both of our centers** (Sector 115 & Sector 162)!"
            )
            audio = await generate_audio(reply)
            return {"reply": reply, "audio": audio}
        
        # General safety
        # General safety
        general_safety_triggers = [
            "how safe", "safety measures", "ensure safety", "safety of my pet",
            "safety at your", "how do you ensure", "what measures",
            "safety protocol", "safety protocols", "keep safe", "safe environment", "supervised", "supervision"
        ]
        if any(t in lower for t in general_safety_triggers):
            reply = (
                "Woof! Safety is woven into every part of Pet Me Maa 🐾\n\n"
                "💉 **Vaccination Checks:** Every pet's medical records are strictly verified before entry.\n"
                "🔍 **Temperament Tests:** Pets get a brief behavioral check before joining any playgroup.\n"
                "👥 **Smart Playgroups:** Dogs are split by size, breed & energy — no mismatched mixing.\n"
                "🩺 **Paravet & Medical Support:** We have a dedicated 24x7 on-campus paravet for immediate medical attention.\n"
                "🎀 **Female Pet Care:** We maintain specialized safe care protocols and adjusted routines for our female kids.\n"
                "📹 **24x7 CCTV:** Facility-wide monitoring for top-tier security and staff supervision.\n"
                "📸 **Daily Updates:** We share regular photo & video updates so you know your kid is safe and happy!"
            )
            audio = await generate_audio(reply)
            return {"reply": reply, "audio": audio}

        trust_triggers = [
            "trust", "reliable", "credible", "legit", "legitimate",
            "how do i know", "can i trust", "background", "experience",
            "who runs", "who is behind", "founder", "team", "staff",
            "doctor", "paravet"
        ]
        if any(t in lower for t in trust_triggers):
            bi = PET_DATA.get("business_info", {})
            reply = (
                "Woof! We completely understand — your pet deserves only the best 🐾\n\n"
                f"🏡 Founded by **{bi.get('founder')}** and managed by **{bi.get('manager')}** — both pet parents themselves.\n"
                f"👨‍⚕️ **{bi.get('medical_support')}**\n"
                f"👥 {bi.get('staffing')} — trained, dedicated, and pet-obsessed.\n"
                f"📸 We share regular photo & video updates so you're never out of touch with your kid.\n"
            )
            audio = await generate_audio(reply)
            return {"reply": reply, "audio": audio}

        # ── Individual services flow ─
        if show_indiv:
            indiv_service = "grooming" if (old_service == "grooming" or current_service == "grooming") else current_service
            indiv_pet = pet

            if indiv_service == "grooming":
                if not indiv_pet:
                    reply = (
                        "Woof! Which pet's individual grooming services would you like to see? 🐾\n"
                        f"{pet_options_text('grooming')}"
                    )
                elif indiv_pet not in valid_pets_for("grooming"):
                    reply = "Woof! Individual grooming services are available for Dogs and Cats only 🐾"
                else:
                    info = service_info_lookup(indiv_pet, "grooming", show_individual=True)
                    reply = f"Woof! 🐾\n\n{info}"
                audio = await generate_audio(reply)
                return {"reply": reply, "audio": audio}

        # ── Price flow ──
        if is_price_query(lower):
            if not service:
                reply = (
                    "Woof! Which service would you like pricing for? 🐾\n"
                    "• Boarding\n• Grooming\n• Training\n• Swimming\n"
                    "• Play Area\n• Vaccines\n• Boutique"
                )
            elif valid_pets_for(service) and not pet:
                reply = (
                    f"Woof! Which pet are we pricing **{service}** for? 🐾\n"
                    f"{pet_options_text(service)}"
                )
            elif valid_pets_for(service) and pet and pet not in valid_pets_for(service):
                valid = ", ".join(p.title() for p in valid_pets_for(service))
                reply = (
                    f"Woof! Sorry, **{service.title()}** is only available for: {valid} 🐾\n"
                    "Can I help you with something else?"
                )
            else:
                prices = price_lookup(pet, service)
                if prices:
                    header = "Woof! Here are our"
                    if pet:
                        header += f" **{pet.title()}**"
                    header += f" **{service.title()}** prices 🐾\n\n"
                    reply = header + prices
                    if any(t in lower for t in discount_triggers):
                        reply += (
                            "\n\n🎁 **Wallet Offers (Discounts):**\n"
                            "• **Silver:** Recharge ₹5,000 → 20% off boarding\n"
                            "• **Gold:** Recharge ₹10,000 → 30% off boarding"
                        )
                else:
                    reply = "Woof! Please contact our team directly for custom pricing on that 🐾\n📞 +91-9217326357"

            audio = await generate_audio(reply)
            return {"reply": reply, "audio": audio}

        # ── Service info flow ──
        if current_service and not is_price_query(lower):
            valid_pets = valid_pets_for(current_service)

            if current_pet and valid_pets and current_pet not in valid_pets:
                valid = ", ".join(p.title() for p in valid_pets)
                reply = (
                    f"Woof! Sorry, **{current_service.title()}** is only available for: {valid} 🐾\n"
                    "Can I help you with something else for your pet?"
                )
                audio = await generate_audio(reply)
                return {"reply": reply, "audio": audio}

            if valid_pets and len(valid_pets) > 1 and not pet:
                reply = (
                    f"Woof! Which pet are we looking at **{current_service}** for? 🐾\n"
                    f"{pet_options_text(current_service)}"
                )
                audio = await generate_audio(reply)
                return {"reply": reply, "audio": audio}

            info_pet = current_pet or (pet if pet in valid_pets else None) if valid_pets else pet
            info = service_info_lookup(info_pet, current_service, show_individual=show_indiv)
            if info:
                reply = f"Woof! 🐾\n\n{info}"
                audio = await generate_audio(reply)
                return {"reply": reply, "audio": audio}

        if current_pet and not current_service and old_service and not is_price_query(lower):
            valid_pets = valid_pets_for(old_service)
            if valid_pets and current_pet not in valid_pets:
                valid = ", ".join(p.title() for p in valid_pets)
                reply = (
                    f"Woof! Sorry, **{old_service.title()}** is only available for: {valid} 🐾\n"
                    "Can I help you with something else?"
                )
                audio = await generate_audio(reply)
                return {"reply": reply, "audio": audio}

            info = service_info_lookup(current_pet, old_service, show_individual=show_indiv)
            if info:
                reply = f"Woof! 🐾\n\n{info}"
                audio = await generate_audio(reply)
                return {"reply": reply, "audio": audio}

        # ── Service menu ──
        generic_keywords = ["service", "explore", "what do you offer", "what can you do", "offerings", "menu"]
        specific_keywords = ["boarding", "grooming", "training", "swim", "pool", "play", "vet", "vaccin", "boutique", "shop", "individual"]
        
        is_generic = any(x in lower for x in generic_keywords)
        mentions_specific = any(x in lower for x in specific_keywords)
        
        if is_generic and not mentions_specific:
            reply = (
                "Woof! Here's what we offer at Pet Me Maa 🐾\n\n"
                "• 🏨 Boarding\n"
                "• 📅 Daycare\n"
                "• ✂️ Grooming\n"
                "• 💉 Veterinary & Vaccinations\n"
                "• 🌿 Play Area\n"
                "• 🏊 Swimming Pool\n"
                "• 🎓 Training\n"
                "• 🔄 Pickup & Drop\n"
                "• ☕ Cafe Pooch\n"
                "• 🛍️ Shopping Boutique"
            )
            audio = await generate_audio(reply)
            return {"reply": reply, "audio": audio}

        # ── AI generic chat — with full knowledge base injected ──
        system = SYSTEM_PROMPT

        messages = [{"role": "system", "content": system}]

        for h in request.history[-10:]:
            messages.append({"role": h["role"], "content": h["content"]})

        messages.append({"role": "user", "content": msg})

        completion = client.chat.completions.create(
            model="llama-3.1-8b-instant",
            messages=messages,
            temperature=0.3,
            max_tokens=400
        )

        reply = completion.choices[0].message.content.strip()
        audio = await generate_audio(reply)
        return {"reply": reply, "audio": audio}

    except Exception as e:
        print(f"CHAT ERROR: {e}")
        return {
            "reply": "Woof! My brain had a hiccup. Please try again 🐾",
            "audio": None
        }