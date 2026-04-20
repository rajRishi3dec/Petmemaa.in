import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar"; 
import "./GroomingDetails.css";
import { PhoneCall } from 'lucide-react';

// Restored all 4 Hero Images!
import groomingHeroImg from '../../Assets/Grooming/grooming-hero.png';
import dogbath from '../../Assets/Grooming/dogbath.png';
import catbath from '../../Assets/Grooming/catbath.png';
import catgr from '../../Assets/Grooming/catgr.png';

// Kept this one for the Section 2 Cat Banner
import catGroomingImg from '../../Assets/Grooming/cat-grooming.png';

const GroomingDetails = () => {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Data from PDF
  const packageInclusions = [
    { title: "Grooming", items: ["Shampoo", "Conditioner", "Blow dry", "Perfume"], icon: "🛁" },
    { title: "Hygiene", items: ["Nails trim", "Ear Clean", "Paw Clean", "Brushing"], icon: "🧼" },
    { title: "Styling", items: ["Haircut", "Intimate cut", "Combing", "Face trim"], icon: "✂️" }
  ];

  const mainPackages = [
    { name: "Grooming + Hygiene", small: "650", medium: "750", large: "850" },
    { name: "Grooming + Styling", small: "850", medium: "1050", large: "1150" },
    { name: "Grooming + Hygiene + Styling", small: "1250", medium: "1350", large: "1450" }
  ];

  const alaCarte = [
    { service: "Ear cleaning", small: "100", medium: "100", large: "150" },
    { service: "Paw trimming", small: "100", medium: "100", large: "150" },
    { service: "Nail cut", small: "100", medium: "150", large: "150" },
    { service: "Teeth brushing", small: "100", medium: "150", large: "150" },
    { service: "Gland cleaning", small: "100", medium: "150", large: "150" },
    { service: "Intimate cut", small: "150", medium: "150", large: "150" },
    { service: "Oil massage", small: "400", medium: "500", large: "600" },
    { service: "Styling/Haircut", small: "700", medium: "800", large: "900" },
    { service: "Zero Cut", small: "500", medium: "600", large: "700" }
  ];

  return (
    <>
      <Navbar />

      <div className="grooming-wrapper">
        <div className="grooming-page">
          
          {/* SECTION 1: Hero Section */}
          <header className="grooming-hero">
            <div className="hero-text-content">
              <h1>Because every furry friend deserves a relaxing spa day 🧴</h1>
            </div>
            
            {/* Restored the 4-Image Gallery */}
            <div className="hero-image-gallery">
              <img src={groomingHeroImg} alt="Dog Grooming Hero" />
              <img src={dogbath} alt="Dog Bath" />
              <img src={catbath} alt="Cat Bath" />
              <img src={catgr} alt="Cat Grooming" />
            </div>
          </header>

          {/* SECTION 2: Cat Banner */}
<section className="cat-banner">
  <div className="cat-image-container">
    <img src={catGroomingImg} alt="Cat Spa Day" className="cat-image" />
  </div>

  <div className="cat-content">
    <h2>🐱 Exclusive Cat Grooming</h2>

    <p className="cat-subtext">
      A calm, stress-free grooming experience specially designed for cats — gentle, hygienic, and handled with care.
    </p>

    <ul className="cat-services">
      <li>🛁 Gentle, low-stress bathing with pet-safe products</li>
      <li>🧴 Deep coat cleansing to remove dirt & excess oil</li>
      <li>🌸 Light fur fragrance for a fresh, pleasant smell</li>
      <li>💨 Safe blow drying for a soft & fluffy finish</li>
      <li>🐾 Gentle handling to keep your cat relaxed</li>
      <li>✨ Clean, neat & well-groomed final look</li>
    </ul>
  </div>

  <div className="cat-price">
    <span>JUST</span>
    <strong>₹600</strong>
  </div>
</section>

          {/* SECTION 3: What's Included Section */}
          <section className="inclusions-section">
            <h2>What's Included in Dog Grooming? 🐶</h2>
            <div className="inclusions-grid">
              {packageInclusions.map((inc, index) => (
                <div className="inclusion-card" key={index}>
                  <div className="inc-icon">{inc.icon}</div>
                  <h3>{inc.title}</h3>
                  <ul>
                    {inc.items.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 4: Main Dog Packages Table */}
          <section className="packages-section">
            <h2>Pamper Your Dog (Combo Packages) 🐶</h2>
            <div className="table-container highlight-table">
              <div className="table-header">
                <span className="col-service">Package</span>
                <span>Small Breed</span>
                <span>Medium Breed</span>
                <span>Large Breed</span>
              </div>
              {mainPackages.map((pkg, i) => (
                <div className="table-row" key={i}>
                  <strong className="col-service">{pkg.name}</strong>
                  <span data-label="Small Breed">₹{pkg.small}</span>
                  <span data-label="Medium Breed">₹{pkg.medium}</span>
                  <span data-label="Large Breed">₹{pkg.large}</span>
                </div>
              ))}
            </div>
            
            {/* Shampoo Add-ons */}
            <div className="addons-container">
              <div className="addon-badge premium">
                <strong>+ ₹200</strong> for Premium Shampoo
              </div>
              <div className="addon-badge medicated">
                <strong>+ ₹300</strong> for Anti-tick / Medicated Shampoo
              </div>
            </div>
          </section>

          {/* SECTION 5: A La Carte Rates Table */}
          <section className="alacarte-section">
            <h2>Individual Dog Hygiene & Styling Rates 🐶</h2>
            <div className="table-container">
              <div className="table-header secondary-header">
                <span className="col-service">Regular Service</span>
                <span>Small</span>
                <span>Medium</span>
                <span>Large</span>
              </div>
              {alaCarte.map((item, i) => (
                <div className="table-row" key={i}>
                  <strong className="col-service">{item.service}</strong>
                  <span data-label="Small">₹{item.small}</span>
                  <span data-label="Medium">₹{item.medium}</span>
                  <span data-label="Large">₹{item.large}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div> 
      
      {/* FLOATING CALL BUTTON */}
      <a href="tel:+919217326357" className="floating-call-btn">
        <PhoneCall size={24} />
        <span>Enquire Now</span>
      </a>
    </>
  );
};

export default GroomingDetails;