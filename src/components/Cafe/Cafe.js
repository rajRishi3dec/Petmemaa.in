import React, { useEffect } from "react";
import Navbar from '../Navbar/Navbar';   
import { PhoneCall } from 'lucide-react'; // Added icon import
import "./Cafe.css";

import head from '../../Assets/Cafe/head.png';
import mobilew from '../../Assets/Cafe/mobilew.png';
import line from '../../Assets/Cafe/line.png';
import dogbowl from '../../Assets/Cafe/dogbowl.png';
//import human from '../../Assets/Cafe/human.png';
import ldog from '../../Assets/Cafe/ldog.png';
import grpdog from '../../Assets/Cafe/grpdog.png';
import menu1 from '../../Assets/Cafe/menu1.jpg';
import menu2 from '../../Assets/Cafe/menu2.jpg';
import menu3 from '../../Assets/Cafe/menu3.jpg';

const Cafe = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="cafe-wrapper">
        <div className="cafe-page">
          
          <section className="cafe-section hero-top">
            <img className="head" src={head} alt='head' />
            <img className="mobilew" src={mobilew} alt='mobilew' />
            <img className='line' src={line} alt='line' />
          </section>
          
          <section className="cafe-section intro-frame">
            <div className="img-box">
              <img src={dogbowl} alt='dogbowl' />
            </div>
            <div className="content-box">
              <span className="heading">Serving up <b>Smiles</b>, 🐾🦴🐈<br />one <b>Paw-some</b> meal at a time.</span>
              <p className="description">From gourmet treats to hearty meals, our chefs craft each item with care, using only the finest ingredients to ensure that every bite is both delicious and nutritious.</p>
            </div>
          </section>

          <section className="cafe-section healthy-meals">
            <h2 className="f2head"><b>Healthy Meals</b></h2>
            <p className="description centered">With our professional in-house chef, we have the pawfect VEG & NON-VEG menu created for your kid. We source the best quality ingredients and ensure hygienic preparations.</p>
            <h3 className="custom-options-title">CUSTOM MEAL OPTIONS ALSO AVAILABLE</h3>
            <div className="ingredients-grid">
              {["🍗 Chicken", "🍎 Fruits", "🥦 Veggies", "🧀 Paneer", "🥣 Curd", "🥚 Eggs"].map(item => (
                <span key={item} className="ingredient-badge">{item}</span>
              ))}
            </div>
          </section>
              
          <section className="cafe-section delivery-frame">
            <div className="content-box">
              <p className="heading">Delivering Tail-Wagging<br /> Taste to Your <b>Doorstep</b> <br />as well!</p>
            </div>
            <div className="img-box">
              <img src={ldog} alt='lastdog' />
            </div>
          </section>
            
          <section className="cafe-section social-frame">
            <div className="content-box">
              <p className="heading">A Spot for <b>You</b> & <br />Your <b>Furry Friend</b></p>
              <p className="description">
                Cafe Pooch isn't just a coffee shop, it's a tail-wagging good time for you and your furry best friend! <br /><br />
                We've designed a space where both pet owners and pets can relax, socialise, and create lasting memories.
              </p>
            </div>
            <div className="img-box">
              <img className="grp-img" src={grpdog} alt='grpdog' />
            </div>
          </section>

          <section className="cafe-section menu-gallery">
            <h2 className="f2head"><b>Our Delicious Menu</b></h2>
            <div className="menu-grid">
              <img src={menu1} alt="Menu 1" />
              <img src={menu2} alt="Menu 2" />
              <img src={menu3} alt="Menu 3" />
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

export default Cafe;