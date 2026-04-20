import React from "react";
// import Products from "./Pages/Products";
import Intro from "./Pages/Intro";
import Secondary from "./Pages/Intro/Secondary";
//import Chatbot from '../Chatbot/Chatbot';
import Services from "./Pages/Services";
//import Cafe from "./Pages/Cafe";
//import Offers from "./Pages/Offers";
import Dining from "./Pages/Dining";
//import Customers from "./Pages/Customers";
import Feedback from "./Pages/Feedback";
import midassest from '../../Assets/Pageservices/midassest.png';
import "./Home.css"
import Payment from './Pages/Payment';
import Testimonials from './Pages/Testimonial';
import About from "./Pages/About"; //why us image is in Intro folder

const Home = () => {
  
  return (
    <div className="container">
      <Intro />
      <Secondary />
      <div className='mainhead'>
        <img className='head2' src={midassest} alt='mid' />
      </div>
      <About />
      <Services />
      <Dining />
      <Testimonials />
      <Payment />
      <Feedback />
    </div>
  );
};

export default Home;
