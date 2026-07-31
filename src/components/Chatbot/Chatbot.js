import React, { useState, useRef, useEffect } from "react";
import "./Chatbot.css";
import shvanImg from '../../Assets/shvan.png';
//import logoImg from '../../Assets/logo.webp'; 
import ReactMarkdown from 'react-markdown';

// ── Constants ──────────────────────────────────────────
const BACKEND = "https://petmemaashvan.onrender.com";
//const INSTAGRAM_URL = "https://www.instagram.com/petmemaa";
const MAPS_URL      = "https://maps.app.goo.gl/hqdw6uYGftR9khKU8"; 
const MAPS_URL_162  = "https://maps.app.goo.gl/vQLwbLSSZK9XT6zi7"; 
const PHONE_115     = "8826791521"; 
const PHONE_162     = "9217326357"; 

const ALL_SERVICES = [
  { id: "boarding",    label: "🏨 Boarding",           emoji: "🏨" },
  { id: "daycare",     label: "📅 Daycare",            emoji: "📅" },
  { id: "grooming",    label: "✂️ Grooming",           emoji: "✂️" },
  { id: "veterinary",  label: "💉 Veterinary",         emoji: "💉" },
  { id: "playground",  label: "🌿 Play Area",          emoji: "🌿" },
  { id: "swimming",    label: "🏊 Swimming",           emoji: "🏊" },
  { id: "training",    label: "🎓 Training",           emoji: "🎓" },
  { id: "pickup_drop", label: "🔄 Pickup & Drop",      emoji: "🔄" },
  { id: "cafe",        label: "☕ Cafe Pooch",         emoji: "☕" },
  { id: "boutique",    label: "🛍️ Shopping Boutique",  emoji: "🛍️" },
];


const Chatbot = () => {
  const [isOpen, setIsOpen]         = useState(false);
  const [inputText, setInputText]   = useState("");
  const [isLoading, setIsLoading]   = useState(false);

  const [stage, setStage]         = useState("start_menu");
  const [chatHistory, setChatHistory] = useState([
    { sender: "bot", text: "Woof! Welcome to Pet Me Maa! I'm Shvan, your friendly mascot. 🐾 How can I help you today?" }
  ]);
  const [activeService, setActiveService] = useState(null); 
  const [activePet, setActivePet] = useState(null);
  const [activeSize, setActiveSize] = useState(null); 

  const messagesEndRef  = useRef(null);

  // ── Drag & Drop States ─────────────────────────────
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragStart]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  // ── Helpers ────────────────────────────────────────
  const addBotMsg  = (text) => setChatHistory(p => [...p, { sender: "bot",  text }]);
  const addUserMsg = (text) => setChatHistory(p => [...p, { sender: "user", text }]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }), 150);
    }
  }, [chatHistory, isOpen, stage]);

  const sendToBackend = async (messageToSend) => {
    try {
      const formattedHistory = chatHistory
        .filter(m => m.text)
        .slice(-6) // ── FIXED: Only sends the most recent context so the AI doesn't get stuck repeating menus! ──
        .map(m => ({ role: m.sender === "bot" ? "assistant" : "user", content: m.text }));

      const response = await fetch(`${BACKEND}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: messageToSend,
          history: formattedHistory
        }),
      });
      const data = await response.json();

      const replyText = data.reply?.trim();
      if (replyText) addBotMsg(replyText);
    } catch {
      addBotMsg("Server issue 🐶 Try again!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleTextSubmit = async (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    const msg = inputText;
    addUserMsg(msg);
    setInputText("");

    const lowerMsg = msg.toLowerCase();
    
    const genericKeywords = ["service", "explore", "what do you offer", "what can you do", "offerings", "menu"];
    const isGeneric = genericKeywords.some(w => lowerMsg.includes(w));
    
    const mentionsSpecific = ["boarding", "grooming", "training", "swim", "pool", "play", "vet", "vaccin", "boutique", "shop", "individual"].some(w => lowerMsg.includes(w));

    if (isGeneric && !mentionsSpecific) {
      addBotMsg("Woof! Which service are you looking for? 🐾");
      setStage("services_menu");
      return;
    }

    setIsLoading(true);
    await sendToBackend(msg);
  };

  const handleStartMenu = async (choice) => {
    addUserMsg(choice);
    if (choice === "📍 Location") {
      addBotMsg(
        `Woof! We now have TWO pawsome branches open! 🐾\n\n` +
        `📍 **Branch 1:** Sector 115, Noida\n` +
        `📞 **Phone:** +91-${PHONE_115}\n` +
        `🗺️ [Click here for Sector 115 Map](${MAPS_URL})\n\n` +
        `📍 **Branch 2:** Sector 162, Noida\n` +
        `📞 **Phone:** +91-${PHONE_162}\n` +
        `🗺️ [Click here for Sector 162 Map](${MAPS_URL_162})\n\n` +
        `🕗 **Timings:** Open all 7 days, 8 AM – 8 PM (Both Branches)`
      );
      setStage("start_menu");
    } else if (choice === "🔒 Safety Protocols") {
      setIsLoading(true);
      await sendToBackend("what are your safety protocols");
      setStage("start_menu");
    } else if (choice === "▶️ Virtual Tour") {
      // ── UPDATED: Virtual Tour with multiple specific links ──
      addBotMsg(
        "Woof! Take a peek inside Pet Me Maa through our Instagram! 🐾\n\n" +
        "🌿 [**Playground & Outdoor Fun**](https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDEwNzE4MTA4MTE2MDg1?story_media_id=3236447553075291973_62240447612&igsh=Y2dlNjc1dHMzODIz)\n\n" +
        "✂️ [**Grooming Spa & Makeovers**](https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDA1OTIxODY3MDEwODY2?story_media_id=3255358660133469821_62240447612&igsh=ODFoMTQ3Y2FoZW9t)\n\n" +
        "☕ [**Cafe Pooch Experiences**](https://www.instagram.com/pet_me_maa?igsh=ZHA1cnk5NGs3aWlp)\n\n" +
        "🐶 [**Meet Our Furry Babies**](https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTIxOTU3ODUzMjY3MzQ3?story_media_id=3841029121862893078_62240447612&igsh=MTFnYXZ5dXVldno1bw==)\n\n" +
        "_Click any link above to see the magic!_"
      );
      setStage("start_menu");
    } else if (choice === "🐾 Services") {
      addBotMsg("Woof! Which service are you looking for today? 🐾");
      setStage("services_menu");
    }
  };

  const handleCallMenu = (choice) => {
    addUserMsg(choice);
    if (choice === "1️⃣ Call Sector 115") {
      addBotMsg(`Woof! Connecting you to our Sector 115 branch 🐾\n📞 [+91-${PHONE_115}](tel:${PHONE_115})`);
      setStage("start_menu");
    } else if (choice === "2️⃣ Call Sector 162") {
      addBotMsg(`Woof! Connecting you to our Sector 162 branch 🐾\n📞 [+91-${PHONE_162}](tel:${PHONE_162})`);
      setStage("start_menu");
    } else {
      addBotMsg("Woof! Sure, ask me anything and I'll do my best to help! 🐾");
      setStage("free_chat");
    }
  };

  const handleServiceSelect = async (serviceId, serviceLabel) => {
    addUserMsg(serviceLabel);
    
    // ── RESET all previous service state ──
    setActiveService(serviceId);
    setActivePet(null);
    setActiveSize(null);
    
    if (serviceId === "boarding" || serviceId === "grooming") {
      addBotMsg(`Woof! Which pet are we looking at ${serviceId} for? 🐾`);
      setStage("select_pet");
    } else {
      setIsLoading(true);
      setStage("other_service_actions"); 
      await sendToBackend(serviceLabel);
    }
};
  
  const handleOtherServiceAction = async (action) => {
    addUserMsg(action);
    
    if (action === "💬 Ask Anything") {
      addBotMsg("Woof! Sure, ask me anything and I'll do my best to help! 🐾");
    } else if (action === "📅 Book Appointment") {
      addBotMsg(
        "Woof! We would love to host your pet! 🐾\n\n" +
        "To secure your spot, please **call us at +91-9217326358**.\n" +
        "Our team is ready and excited to help you with your reservation!"
      );
    }
    
    // This instantly hides the buttons and turns the text box back on!
    setStage("free_chat"); 
  };

  const handlePetSelect = async (petId, petLabel) => {
    addUserMsg(petLabel);
    setActivePet(petId);
    setStage(null);

    if (activeService === "boarding") {
      const pitch = `Woof! Boarding at Pet Me Maa means your furry friend becomes part of our family! 🐾\n\nThey'll enjoy a cage-free, loving environment with 24x7 supervision, personalized fresh meals, and endless playtime. It's a true home away from home! ❤️`;
      addBotMsg(pitch);
      setStage("boarding_actions");
    } else if (activeService === "grooming" && petId === "dog") {
      addBotMsg("Woof! What size is your dog? 🐾");
      setStage("select_breed_size");
    } else {
      setIsLoading(true);
      const query = (activeService === "daycare") 
          ? `${activeService} price for ${petId}` 
          : `${activeService} for ${petId}`;
      
      await sendToBackend(query);

      if (activeService === "grooming") {
        // ── FIXED: This removes the Dog button and adds the Booking button for Cats ──
        setStage("other_service_actions"); 
      } else if (activeService === "daycare") {
        setStage("other_service_actions"); 
      } else {
        setStage("free_chat");
      }
    }
  };

  const handleBreedSizeSelect = (sizeId, sizeLabel) => {
    addUserMsg(sizeLabel);
    setActiveSize(sizeId);
    addBotMsg(`Woof! Would you like to see the package prices or individual services for your ${sizeId} dog? 🐾`);
    setStage("grooming_pricing_type");
  };

  const handlePricingTypeSelect = async (actionLabel) => {
    addUserMsg(actionLabel);
    setStage("other_service_actions");

    if (actionLabel.includes("Package")) {
        const size = activeSize;
        const prices = {
            small:  [650, 850, 1250],
            medium: [750, 1050, 1350],
            large:  [850, 1150, 1450],
        };
        const [p1, p2, p3] = prices[size] || prices.large;
        const sizeLabel = size.charAt(0).toUpperCase() + size.slice(1);
        addBotMsg(
            `Woof! Here are the Combo Packages for your **${sizeLabel} Dog**! 🛁🐾\n\n` +
            `📦 **Grooming + Hygiene:** ₹${p1}\n` +
            `📦 **Grooming + Styling:** ₹${p2}\n` +
            `📦 **Grooming + Hygiene + Styling:** ₹${p3}\n\n` +
            `✨ **Add-ons:**\n` +
            `🧴 **Premium Shampoo:** +₹200\n` +
            `🧴 **Anti-tick / Medicated Shampoo:** +₹300`
        );
    } else {
        const size = activeSize;
        const prices = {
            small:  {ear:100,paw:100,nail:100,teeth:100,gland:100,intimate:150,oil:400,haircut:700,zero:500},
            medium: {ear:100,paw:100,nail:150,teeth:150,gland:150,intimate:150,oil:500,haircut:800,zero:600},
            large:  {ear:150,paw:150,nail:150,teeth:150,gland:150,intimate:150,oil:600,haircut:900,zero:700},
        };
        const p = prices[size] || prices.large;
        const sizeLabel = size.charAt(0).toUpperCase() + size.slice(1);
        addBotMsg(
            `Woof! Here are the Individual Services for your **${sizeLabel} Dog**! ✂️🐾\n\n` +
            `• Ear cleaning: ₹${p.ear}\n` +
            `• Paw trimming: ₹${p.paw}\n` +
            `• Nail cut: ₹${p.nail}\n` +
            `• Teeth brushing: ₹${p.teeth}\n` +
            `• Gland cleaning: ₹${p.gland}\n` +
            `• Intimate cut: ₹${p.intimate}\n` +
            `• Oil massage: ₹${p.oil}\n` +
            `• Styling/Haircut: ₹${p.haircut}\n` +
            `• Zero Cut: ₹${p.zero}`
        );
    }
};

  

  const handleBoardingAction = async (action) => {
    addUserMsg(action);
    
    if (action === "💬 Any Other Question") {
      addBotMsg("Woof! Sure, ask me anything and I'll do my best to help! 🐾");
      setStage("boarding_actions_chat"); 
    } else {
      setIsLoading(true);
      let query = "";
      
      if (action === "💰 Prices") {
        query = `tell me the 24hr boarding prices for ${activePet}`;
      } else if (action === "🎁 Discounts") {
        query = "show wallet plans"; 
      } else if (action === "🍗 Food Options") {
        query = "food options";
      } else if (action === "📋 Daily Routine") {
        query = "what is the daily routine";
      } else if (action === "🐾 What we need from you") {
        query = `what we need from you for ${activePet}`; 
      }
      
      await sendToBackend(query);
      setStage("boarding_actions"); // Stays on the buttons so they can check other options
    }
  };

  const handleGroomingAction = async (action) => {
    addUserMsg(action);

    if (action === "🐶 Dog") {
      setActivePet("dog");
      addBotMsg("Woof! What size is your dog? 🐾");
      setStage("select_breed_size");
    } else if (action === "💬 Ask Anything") {
      addBotMsg("Woof! Sure, ask me anything and I'll do my best to help! 🐾");
      setStage("grooming_actions_chat");
    }
  };

  // ── FIXED: Super Smart Back Button Logic ──
  const handleBack = () => {
    // 1. Top level menus always go back to start
    if (stage === "start_menu" || stage === "services_menu" || stage === "call_menu" || stage === "free_chat") {
      setStage("start_menu");
      return;
    }

    // 2. ── THE OVERRIDE ── 
    // If we are inside any service EXCEPT boarding or grooming, take them straight to start!
    if (activeService !== "boarding" && activeService !== "grooming") {
      setStage("start_menu");
      return;
    }

    // 3. Custom step-by-step routing ONLY for Boarding and Grooming
    if (stage === "select_pet") {
      setStage("services_menu");
      
    } else if (stage === "select_breed_size" || stage === "boarding_actions") {
      setStage("select_pet");
      
    } else if (stage === "grooming_pricing_type") {
      setStage("select_breed_size");
      
    } else if (stage === "other_service_actions") {
      if (activeService === "grooming" && activePet === "dog") {
        setStage("grooming_pricing_type"); // Dogs go back to package choice
      } else if (activeService === "grooming" && activePet === "cat") {
        setStage("select_pet"); // Cats go back to pet choice
      } else {
        setStage("services_menu");
      }
    }
  };

  const toggleChat = () => {
    setIsOpen(o => {
      if (!o) setPosition({ x: 0, y: 0 }); 
      return !o;
    });
  };

  // ── Render helpers ─────────────────────────────────
  const renderButtons = (buttons, onClick, className = "btn-group") => (
    <div className={className}>
      {buttons.map(btn => (
        <button
          key={btn.id || btn}
          className="flow-btn"
          onClick={() => onClick(btn.id || btn, btn.label || btn)}
        >
          {btn.label || btn}
        </button>
      ))}
    </div>
  );

  const showTextInput = stage === "start_menu" || stage === "free_chat" || stage === "boarding_actions_chat" || stage === "daycare_chat" || stage === "grooming_pricing_chat" || stage === "grooming_actions_chat" || stage === null;

  // ── JSX ────────────────────────────────────────────
  return (
    <>
      <div className="shvan-launcher-container" onClick={toggleChat}>
        {!isOpen && <div className="shvan-speech-bubble">Hi, I am Shvan! 🐾</div>}
        {isOpen  && <div className="shvan-close-button">✖ Close</div>}
        <div className="shvan-toggle-wrapper">
          <img src={shvanImg} alt="Shvan" className="shvan-free-img"
            onError={e => { e.target.style.display = "none"; }} />
        </div>
      </div>

      {isOpen && (
        <div 
          className="chat-window" 
          onClick={e => e.stopPropagation()}
          style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        >
          <div 
            className="chat-header" 
            onMouseDown={handleMouseDown}
            style={{ 
              cursor: isDragging ? "grabbing" : "grab",
              userSelect: "none" 
            }}
          >
            
            
            Pet Me Maa
            
            {stage && stage !== "start_menu" && stage !== "call_menu" && (
              <button 
                className="header-back-btn" 
                onClick={handleBack} 
              >
                ← Back
              </button>
            )}
          </div>

          <div className="chat-body">
            {chatHistory.map((msg, i) => (
              <div key={i}>
                {msg.text && (
                  <div className={`chat-bubble ${msg.sender} format-text`}>
                    <ReactMarkdown
                      components={{
                        a: ({href, children}) => (
                          <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
                        )
                      }}
                    >{msg.text}</ReactMarkdown>
                  </div>
                )}
              </div>
            ))}
            {isLoading && <div className="chat-bubble bot typing-indicator">Shvan is thinking... 🦴</div>}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-footer">
            {stage === "start_menu" && (
              <div className="flow-panel">
                <p className="flow-panel-hint">Select an option below or type a message:</p>
                {renderButtons(
                  ["📍 Location", "🔒 Safety Protocols", "▶️ Virtual Tour", "🐾 Services"],
                  handleStartMenu
                )}
              </div>
            )}

            {stage === "call_menu" && (
              <div className="flow-panel">
                <p className="flow-panel-hint">Choose an option:</p>
                {renderButtons(
                  ["1️⃣ Call Sector 115", "2️⃣ Call Sector 162", "💬 Chat with Shvan"],
                  handleCallMenu
                )}
              </div>
            )}

            {stage === "services_menu" && (
              <div className="flow-panel">
                <p className="flow-panel-hint">Select a service below:</p>
                <div className="btn-group services-grid">
                  {ALL_SERVICES.map(s => (
                    <button key={s.id} className="flow-btn"
                      onClick={() => handleServiceSelect(s.id, s.label)}>
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {stage === "select_pet" && (
              <div className="flow-panel">
                <p className="flow-panel-hint">Which pet is this for?</p>
                {renderButtons(
                  activeService === "daycare" 
                    ? ["🐶 Dog"] // Daycare is Dogs only
                    : activeService === "boarding"
                      ? ["🐶 Dog", "🐱 Cat", "🦜 Birds", "🐹 Small Pets"] // Boarding gets all 4
                      : ["🐶 Dog", "🐱 Cat"], // Grooming gets Dogs and Cats
                  (petLabel) => {
                    // This ensures the backend gets the correct, clean pet name
                    let petId = "dog";
                    if (petLabel.includes("Cat")) petId = "cat";
                    else if (petLabel.includes("Birds")) petId = "birds";
                    else if (petLabel.includes("Small")) petId = "small_pets";
                    
                    handlePetSelect(petId, petLabel);
                  }
                )}
              </div>
            )}
            
            {stage === "select_breed_size" && (
              <div className="flow-panel">
                <p className="flow-panel-hint">Select your dog's size:</p>
                {renderButtons(
                  [
                    {id: "small", label: "🐕 Small Breed"},
                    {id: "medium", label: "🐩 Medium Breed"},
                    {id: "large", label: "🦮 Large Breed"}
                  ],
                  handleBreedSizeSelect
                )}
              </div>
            )}

            {/* FIXED: Buttons disappear exactly when the chat stage is active */}
            {stage === "grooming_pricing_type" && (
              <div className="flow-panel">
                <p className="flow-panel-hint">Select an option:</p>
                {renderButtons(
                  [
                    "📦 Package Prices", 
                    "✂️ Individual Services", 
                    "📅 Book Appointment", 
                    "💬 Ask Anything"
                  ],
                  (action) => {
                    // Route both booking and ask anything to your new text
                    if (action === "📅 Book Appointment" || action === "💬 Ask Anything") {
                      handleOtherServiceAction(action); 
                    } else {
                      // Route the pricing options to the backend
                      handlePricingTypeSelect(action); 
                    }
                  }
                )}
              </div>
            )}

            {/* FIXED: Buttons disappear exactly when the chat stage is active */}
            {stage === "boarding_actions" && (
              <div className="flow-panel">
                <p className="flow-panel-hint">What would you like to know next?</p>
                {renderButtons(
                  activePet === "dog" 
                    ? [
                        "💰 Prices", 
                        "🎁 Discounts", 
                        "🍗 Food Options", 
                        "📋 Daily Routine", 
                        "🐾 What we need from you",
                        "📅 Book Appointment",  /* <-- Added here for dogs! */
                        "💬 Any Other Question"
                      ]
                    : [
                        "💰 Prices", 
                        "🎁 Discounts", 
                        "🐾 What we need from you",
                        "📅 Book Appointment",  /* <-- Added here for cats! */
                        "💬 Any Other Question"
                      ],
                  (action) => {
                    if (action === "📅 Book Appointment") {
                      handleOtherServiceAction(action); 
                    } else {
                      handleBoardingAction(action); /* <-- FIXED: Added (action); */
                    }
                  }
                )}
              </div>
            )}

            {stage === "grooming_actions" && (
              <div className="flow-panel">
                <p className="flow-panel-hint">What would you like to do next?</p>
                {renderButtons(
                  ["🐶 Dog", "💬 Ask Anything"],
                  handleGroomingAction
                )}
              </div>
            )}
            
            {/* ── NEW: Booking Buttons for other services ── */}
            {stage === "other_service_actions" && (
              <div className="flow-panel">
                <p className="flow-panel-hint">What would you like to do next?</p>
                {renderButtons(
                  ["📅 Book Appointment", "💬 Ask Anything"],
                  handleOtherServiceAction
                )}
              </div>
            )}

            {showTextInput && (
              <form className="chat-input-area" onSubmit={handleTextSubmit}>
                <div className="chat-input-wrapper">
                  <input type="text" placeholder="Ask Shvan anything..."
                    value={inputText}
                    onChange={e => setInputText(e.target.value)}
                    disabled={isLoading}
                    style={{ flex: 1 }} />
                  <div className="input-actions">
                    <button type="submit" className="action-btn send-btn"
                      disabled={isLoading || !inputText.trim()}>
                      <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;