import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar"; 
//import Footer from "../Footer";        
import "./BoardingDetails.css";
// Added PhoneCall icon here 👇
import { UserCheck, Utensils, ThermometerSun, TreePine, HeartPulse, Camera, PhoneCall } from 'lucide-react';
import heroImg1 from '../../Assets/Boarding/bird.jpeg'; 
import heroImg2 from '../../Assets/Boarding/cat.jpeg';
import heroImg3 from '../../Assets/Boarding/rabbit.jpeg';
import heroImg4 from '../../Assets/Boarding/dog.png';

const BoardingDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // DOG / GENERAL PACKAGES
  const dogPackages = [
    {
      name: "Tail Town House",
      subtitle: "Common Fun Rooms",
      description: "A cozy, well-ventilated common room where pets stay safely in individual spaces. Perfect for budget-friendly stays.",
      perks: ["Individual bowl & bedding", "Daily playtime outside space"],
      icon: "🏘️",
      color: "#f7b2b0", 
      pricing: [
        { hours: "6 hrs", base: "400", silver: "320", gold: "280" },
        { hours: "9 hrs", base: "600", silver: "480", gold: "420" },
        { hours: "12 hrs", base: "800", silver: "640", gold: "560" },
        { hours: "24 hrs", base: "1200", silver: "960", gold: "840" },
      ]
    },
    {
      name: "Cozy Den",
      subtitle: "Rooms With Partition",
      description: "Spacious partitioned rooms giving pets a private zone while staying close to caretakers.",
      perks: ["More space & comfort", "Enhanced privacy"],
      icon: "🏕️",
      color: "#f4a261", 
      pricing: [
        { hours: "6 hrs", base: "600", silver: "480", gold: "420" },
        { hours: "9 hrs", base: "800", silver: "640", gold: "560" },
        { hours: "12 hrs", base: "1000", silver: "800", gold: "700" },
        { hours: "24 hrs", base: "1500", silver: "1200", gold: "1050" },
      ]
    },
    {
      name: "Gentle Giant Suite",
      subtitle: "Luxury Individual Rooms",
      description: "An exclusive room designed for complete privacy and royal treatment. Perfect for anxious pets or home-like care.",
      perks: ["Cozy bed & toys", "Constant caretaker attention"],
      icon: "👑",
      color: "#e9c46a", 
      pricing: [
        { hours: "6 hrs", base: "800", silver: "640", gold: "560" },
        { hours: "9 hrs", base: "1000", silver: "800", gold: "700" },
        { hours: "12 hrs", base: "1200", silver: "960", gold: "840" },
        { hours: "24 hrs", base: "1800", silver: "1440", gold: "1260" },
      ]
    }
  ];

  // CAT PACKAGES
  const catPackages = [
    {
      name: "Kitty Corner",
      subtitle: "Cubical Room",
      description: "Cozy private cubical rooms designed for cats who love a quiet, secure, and comfortable personal space.",
      perks: [
        "Parents to provide litter & sand tray",
        "Fresh food available on request",
        "Professional trained care team",
        "Clean, safe & comfortable stay"
      ],
      icon: "🐱",
      color: "#a855f7", 
      flatRate: { duration: "24 hrs", price: "600" }
    },
    {
      name: "Gentle Giant Room",
      subtitle: "Spacious Luxury Rooms",
      description: "Spacious luxury rooms for bigger or more active cats who enjoy extra space to relax, stretch, and play.",
      perks: [
        "Professional trained care team",
        "Clean, safe & comfortable stay"
      ],
      icon: "🦁",
      color: "#fbbf24", 
      flatRate: { duration: "24 hrs", price: "1800" }
    }
  ];

  // BIRD & SMALL PET PACKAGES
  const specialtyPackages = [
    {
      name: "Rabbit & Guinea Pig",
      subtitle: "Cozy Stays",
      description: "Safe, cozy stays for your small pets. We ensure they feel secure and well-rested.",
      perks: [
        "Clean, safe & comfortable stay",
        "Professional trained care team"
      ],
      icon: "🐰",
      color: "#10b981", 
      flatRate: { duration: "Per Day", price: "400" }
    },
    {
      name: "Bird Rooms",
      subtitle: "Peaceful Environment",
      description: "A peaceful environment carefully designed to keep birds calm and stress-free.",
      perks: [
        "Daily cage cleaning for hygiene",
        "Nutritious bird feed on request",
        "Fresh drinking water at all times",
        "Caring team monitoring throughout the day",
        "Regular observation for health"
      ],
      icon: "🦜",
      color: "#0ea5e9", 
      flatRate: { duration: "Per Day", price: "400" }
    }
  ];

  return (
    <>
      <Navbar />

      <div className="boarding-wrapper">
        <div className="boarding-page">
          
          {/* SECTION 1: Hero Section */}
          <header className="hero-section">
            <div className="hero-text">
              <h1>A Perfect Stay for Every Furry & Feathered Friend 🐾</h1>
              {/* Added Call to Action in Hero */}
              
            </div>

            <div className="hero-image-gallery">
              <img src={heroImg4} alt="Dog boarding" />
              <img src={heroImg2} alt="Cat care" />
              <img src={heroImg3} alt="Rabbit care" />
              <img src={heroImg1} alt="Bird boarding" />
            </div>
          </header>

          {/* SECTION 2: Why Trust Us Section */}
          <section className="amenities-section">
            <h2>Why trust us with your kids? 🐾</h2>
            <div className="amenities-grid">
              <div className="amenity-card">
                <div className="amenity-icon"><UserCheck size={32} strokeWidth={1.5} /></div>
                <strong>Compassionate Care</strong>
              </div>
              <div className="amenity-card">
                <div className="amenity-icon"><Utensils size={32} strokeWidth={1.5} /></div>
                <strong>Customized Nutritious Meals</strong>
              </div>
              <div className="amenity-card">
                <div className="amenity-icon"><ThermometerSun size={32} strokeWidth={1.5} /></div>
                <strong>Climate-Controlled Stay</strong>
              </div>
              <div className="amenity-card">
                <div className="amenity-icon"><TreePine size={32} strokeWidth={1.5} /></div>
                <strong>Outdoor Play & Socialization</strong>
              </div>
              <div className="amenity-card">
                <div className="amenity-icon"><HeartPulse size={32} strokeWidth={1.5} /></div>
                <strong>24x7 Medical Support</strong>
              </div>
              <div className="amenity-card">
                <div className="amenity-icon"><Camera size={32} strokeWidth={1.5} /></div>
                <strong>Daily Photo & Video Updates</strong>
              </div>
            </div> 
          </section>

          {/* SECTION 3: Wallet Offers Highlight */}
          <section className="wallet-banner">
            <h2>💰 Save More with Pet Me Maa Wallet!</h2>
            <div className="wallet-cards">
              <div className="wallet-card gold">
                <h3>🥇 Gold Package</h3>
                <p>Recharge with <strong>Rs. 10000</strong></p>
                <div className="discount-tag">Get 30% OFF</div>
                <small>
                  <ul className="wallet-list">
                    <li>Unlimited validity</li>
                    <li>Balance is safe until used</li>
                  </ul>
                </small>
              </div>
              <div className="wallet-card silver">
                <h3>🥈 Silver Package</h3>
                <p>Recharge with <strong>Rs. 5000</strong></p>
                <div className="discount-tag">Get 20% OFF</div>
                <small>
                  <ul className="wallet-list">
                    <li>Unlimited validity</li>
                    <li>Balance is safe until used</li>
                  </ul>
                </small>
              </div>
            </div>
          </section>

          {/* SECTION 4: DOG PACKAGES */}
          <section className="packages-section dog-section">
            <h2>Exclusive Dog Boarding 🐶</h2>
            <div className="packages-grid">
              {dogPackages.map((pkg, index) => (
                <div className="package-card" key={`dog-${index}`} style={{ borderTop: `5px solid ${pkg.color}` }}>
                  <div className="package-header">
                    <span className="package-icon">{pkg.icon}</span>
                    <h3>{pkg.name}</h3>
                    <h4>{pkg.subtitle}</h4>
                  </div>
                  <p className="package-desc">{pkg.description}</p>
                  <ul className="package-perks">
                    {pkg.perks.map((perk, i) => <li key={i}>✔️ {perk}</li>)}
                  </ul>
                  
                  <div className="pricing-table">
                    <div className="table-header">
                      <span>Duration</span>
                      <span>Base</span>
                      <span>Silver</span>
                      <span>Gold</span>
                      
                    </div>
                    {pkg.pricing.map((price, i) => (
  <div className="table-row" key={i}>
    <strong>{price.hours}</strong>
    {/* Applying a style or class here to match the 'strong' color */}
    <span className="price-value">₹{price.base}</span>
<span className="price-value">₹{price.silver}</span>
<span className="price-value">₹{price.gold}</span>
    
  </div>
))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 5: CAT PACKAGES */}
          <section className="packages-section cat-section">
            <h2>Exclusive Cat Boarding 🐱</h2>
            <div className="packages-grid">
              {catPackages.map((pkg, index) => (
                <div className="package-card" key={`cat-${index}`} style={{ borderTop: `5px solid ${pkg.color}` }}>
                  <div className="package-header">
                    <span className="package-icon">{pkg.icon}</span>
                    <h3>{pkg.name}</h3>
                    <h4>{pkg.subtitle}</h4>
                  </div>
                  <p className="package-desc">{pkg.description}</p>
                  <ul className="package-perks">
                    {pkg.perks.map((perk, i) => <li key={i}>✔️ {perk}</li>)}
                  </ul>
                  
                  {pkg.flatRate && (
                    <div className="flat-price-tag">
                      <strong>{pkg.flatRate.duration}</strong>
                      <span>₹{pkg.flatRate.price}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 6: BIRD & SMALL PET PACKAGES */}
          <section className="packages-section bird-section">
            <h2>Avian & Small Pets 🐰🦜</h2>
            <div className="packages-grid">
              {specialtyPackages.map((pkg, index) => (
                <div className="package-card" key={`bird-${index}`} style={{ borderTop: `5px solid ${pkg.color}` }}>
                  <div className="package-header">
                    <span className="package-icon">{pkg.icon}</span>
                    <h3>{pkg.name}</h3>
                    <h4>{pkg.subtitle}</h4>
                  </div>
                  <p className="package-desc">{pkg.description}</p>
                  <ul className="package-perks">
                    {pkg.perks.map((perk, i) => <li key={i}>✔️ {perk}</li>)}
                  </ul>
                  
                  {pkg.flatRate && (
                    <div className="flat-price-tag">
                      <strong>{pkg.flatRate.duration}</strong>
                      <span>₹{pkg.flatRate.price}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

        </div>
      </div> 

      {/* NEW FLOATING CALL BUTTON */}
      <a href="tel:+919217326357" className="floating-call-btn">
        <PhoneCall size={24} />
        <span>Enquire Now</span>
      </a>
    </>
  );
};

export default BoardingDetails;