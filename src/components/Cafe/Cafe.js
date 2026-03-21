import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer';
import './Cafe.css';

//assests import
import head from '../../Assets/Cafe/head.png';
import mobilew from '../../Assets/Cafe/mobilew.png';
import line from '../../Assets/Cafe/line.png';
import dogbowl from '../../Assets/Cafe/dogbowl.png';
// import emoji from '../../Assets/Cafe/emoji.png';
import human from '../../Assets/Cafe/human.png';
import menu from '../../Assets/Cafe/menu.png';
import ldog from '../../Assets/Cafe/ldog.png';
// import emo2 from '../../Assets/Cafe/emo2.png';
import grpdog from '../../Assets/Cafe/grpdog.png';

const Cafe = () => {
  return (
    <>
      <Navbar />
      <div className='body'>
        <div className='mainhead'>
          <img className="head" src={head} alt='head'></img>
          <img className="mobilew" src={mobilew} alt='mobilew'></img>
          <img className='line' src={line} alt='line'></img>
        </div>
        <div>
          <div className='frame1'>
            <div className='img1'>
              <img className="" src={dogbowl} alt='dogbowl'></img>
            </div>
            <div className='alignhead'>
              <span className='heading'>Serving up <b>Smiles</b>, 🐾🦴🐈<br></br>one <b>Paw-some</b> meal at a time.</span>
              {/* <img className='emo' src={emoji} alt='emoji'></img> */}
              <p className='textbhead'>From gourmet treats to hearty meals, our chefs craft each item with care, <br></br>using only the finest ingredients to ensure that every bite is both delicious and nutritious.</p>
              <a href="https://wa.me/message/4ODVQUII4OFVD1" target="_blank" rel="noopener noreferrer">
                <button className='btn'>Book a Reservation Now</button>
              </a>

            </div>
          </div>
          <br></br>
          <div className='frame2'>
            <div>
              <img src={human} alt='human'></img>
            </div>
            <div className='inf2'>
              <h2 className='f2head'>
                <b>CAFE POOCH</b>
              </h2>
              <p className='txtinf2'>
                At Cafe Pooch, we believe in fostering a sense of community among pets and  their owners alike. <br></br>Whether you're looking to socialise with fellow pet enthusiasts or simply enjoy a peaceful moment with your furry friend, <br></br>our café is the perfect spot to connect and create lasting memories. <br></br>Join us at Cafe Pooch, where every wag and meow is celebrated, and the bond between pets and people is cherished.
              </p>
              <Link to="/services">
                <button className='btn'>Check out Gallery</button>
              </Link>
            </div>
          </div>
          <br></br>
          <div className='frame1'>
            <div className='widthf3'>
              <br></br>
              <br></br>
              <p className='heading'>A Spot for <b>You</b> & <br></br>Your <b>Furry Friend</b></p>
              <p className='textbhead2'>Cafe Pooch isn't just a coffee shop, it's a tail-wagging good time for you and your furry best friend!
                <br></br>
                We've designed a space where both pet owners and pets can relax, socialise, and create lasting memories.
                <br></br>
                At Cafe Pooch, we believe pets are family. So, come join us for a day of fun, friendship, and unforgettable moments with your furry companion!</p>
              <a className="btnm4" href="https://wa.me/message/4ODVQUII4OFVD1" target="_blank" rel="noopener noreferrer">
                <button className="btn">Book an Reservation</button>
              </a>

            </div>
            <div className='newgrp'>
              <img className='grpdog' src={grpdog} alt='grpdog'></img>
            </div>
          </div>
          <br></br>
          <div className='img1'>
            <Link className="imgimp" to="/cafe"> {/* Replace '/menu-page' with the path to your target page */}
              <img src={menu} alt="menu" />
            </Link>
          </div>
          <div className='frame1'>
            <div className='newframe'>
              <p className='heading'>Delivering Tail-Wagging<br></br> Taste to Your <b>Doorstep</b> <br></br>as well!</p>
              <Link to="/cafe">
                <button className="btn2">Order Now</button>
              </Link>

            </div>
            <br></br>
            <div className='ldoggo'>
              <img className="img1" src={ldog} alt='lastdog'></img>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Cafe