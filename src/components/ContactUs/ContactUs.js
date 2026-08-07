import React, { useState, useEffect } from "react";
import Footer from "../Footer";
import emailjs from "emailjs-com";
import img from "../../Assets/contactus/dogimg.png";
import "./ContactUs.css";
import vector from "../../Assets/Feedback/Vector.webp";
import vector2 from "../../Assets/Feedback/Vector2.webp";
import mail from "../../Assets/contactus/mail.png";
import location from "../../Assets/contactus/location.png";
import social from "../../Assets/contactus/social.png";

const ContactUs = () => {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const phone = e.target.elements.phone.value;
    const message = e.target.elements.message.value;

    const templateParams = {
      from_name: name,
      from_email: email,
      phone: phone,
      message: message,
    };

    emailjs.send('service_kwl9j42', 'template_v34fkbc', templateParams, 'i3v5KIZxmHKMyr9i-')
      .then((response) => {
        console.log("Email sent successfully:", response);
        setSent(true);
        e.target.reset();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <>
      <div className="topmost">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap" />

        {/* HERO SECTION */}
        <div className="first">
          <div className="innerfirst">
            <p className="get"><b>Get in touch 🐾</b> </p>
            <p className="getxt">We'd love to hear from you! Whether you have questions about our service or want to book an appointment.</p>
            <a href="https://wa.me/message/UWTA3D7SB6OZA1" target="_blank" rel="noopener noreferrer">
              <button className="firstbtn">Book an appointment</button>
            </a>
          </div>
          <div className="innerimgfirst">
            <img className="imagedog" src={img} alt="dog" />
          </div>
        </div>

        {/* CONTACT FORM SECTION */}
        <div>
          <h2 className="head2"><b>Didn't find what you needed? Let us know!</b></h2>
          <div className="contactbox">
            <div className="contactside">
              <h1 className="specialtxt"><b>Write to us!</b></h1>
              <p className="spltxt">
                We're always striving to improve our services to better meet the needs of our furry customers and their owners. If you have any feedback, suggestions, or comments, we'd love to hear from you.
                <br /><br />
                Your input helps us continue to provide top-notch care and create a welcoming environment for all pets.
              </p>
            </div>
            
            <div className="contactFormContainer">
              <form onSubmit={handleSubmit} className="contactForm">
                <input className="fname" type="text" name="name" placeholder="Pet Parent's Name" required />
                <input className="fname" type="email" name="email" placeholder="Email" required />
                <input className="fname" type="tel" name="phone" placeholder="Phone" required />
                <textarea className="fname" name="message" placeholder="Message" rows="4" required></textarea>
                <button className="fbtn" type="submit">Submit</button>
              </form>
              {sent && <p className="successMessage">Your message has been sent successfully!</p>}
            </div>
          </div>
        </div>

        {/* CALL TO ACTION */}
        <div className="callcon">
          <h3 className="callsec"><b>🐾 Call Us: +91-9217326357 🦴</b></h3>
        </div>

        {/* ADDRESS & INFO GRID */}
        <div className="grid">
          <div className="vector-container left">
            <img className="vector" src={vector2} alt="left decoration" />
          </div>

          <div className="innergrid">
            <div className="addressRow">
              <div className="add">
                <img className="location-icon" src={location} alt="location" />
                <p><b>Location 1 – Sorkha</b><br />
                  Village Sorkha, FNG Highway, beside Indian National Public School, Sector-115, Noida-201304
                </p>
              </div>
              <div className="add">
                <img className="location-icon" src={location} alt="location" />
                <p><b>Location 2 – Gulavali</b><br />
                  Khasra no. 822, Pragana Dankuar, Tehsil Gulavali, Noida, Uttar Pradesh 201310
                </p>
              </div>
            </div>

            <div className="infoRow">
              <div className="mail">
                <img className="mailimg" src={mail} alt="mail" />
                <p><b>Mail</b><br />
                  <a href="mailto:petmemaa@gmail.com" style={{color: 'inherit', textDecoration: 'none'}}>petmemaa@gmail.com</a>
                </p>
              </div>

              <div className="social">
                <img className="socialimg" src={social} alt="social" />
                <p className="innersocial"><b>Connect on Social Media</b><br />
                  Stay updated on the latest news, adorable pet photos, and special promotions by following us.
                </p>
              </div>
            </div>
          </div>

          <div className="vector-container right">
            <img className="vector2" src={vector} alt="right decoration" />
          </div>
        </div>

        {/* GOOGLE MAPS SECTION */}
        <div className="mapsWrapper">
          <div className="mapBlock">
            <p className="mapLabel"><b>📍 Location 1 – Sorkha</b></p>
            <iframe
              title="map-location-1"
              className="map_part"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?q=Pet+Me+Maa,+Sorkha,+Noida,+Uttar+Pradesh+201301&t=&z=14&ie=UTF8&iwloc=B&output=embed">
            </iframe>
          </div>

          <div className="mapBlock">
            <p className="mapLabel"><b>📍 Location 2 – Gulavali</b></p>
            <iframe
              title="map-location-2"
              className="map_part"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?q=Pet+Me+Maa,+Sector+162,+Gulavali,+Noida,+Uttar+Pradesh&t=&z=16&ie=UTF8&iwloc=B&output=embed">
            </iframe>
          </div>
        </div>

        {/* BUSINESS HOURS */}
        <div className="timecss">
          <p className="thead"><b>Business Hours:</b></p>
          <p className="time">Monday - Sunday: 9 AM - 8 PM</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;