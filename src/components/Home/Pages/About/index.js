import React from "react";
import {
  AboutContainer,
  AboutWrapper,
  AboutImageWrap,
  AboutImage,
  AboutContent,
  AboutHeading,
  AboutSubheading,
  AboutText,
  EnquireButton
} from "./AboutElements";

// Replace this import with the actual path to your image (the dog with the pink blob)
import aboutImg from "../../../../Assets/Intro/about_img.webp"; 

const About = () => {
  return (
    /* id="about" is crucial for the Navbar HashLink to scroll here */
    <AboutContainer id="about">
      <AboutWrapper>
        
        {/* LEFT SIDE: Image */}
        <AboutImageWrap>
          <AboutImage src={aboutImg} alt="Pet Me Maa Dog" />
        </AboutImageWrap>

        {/* RIGHT SIDE: Text Content */}
        <AboutContent>
          <AboutHeading>Pet Me Maa</AboutHeading>
          <AboutSubheading>Premium Daycare & Wellness Hub</AboutSubheading>
          
          <AboutText>
            At Pet Me Maa, we aren't just a daycare—we’re your pet’s true second home. Built by founder Priyanka Yadav in loving memory of her dog, Shavan, our facility is a premium, all-in-one wellness hub. From supervised boarding, grooming, and expert vet care to a secure swimming pool and our very own Cafe Pooch, we provide everything your furry family member needs under one roof. Enjoy complete peace of mind knowing your pet is experiencing endless love, expert care, and boundless fun while you work or travel.
          </AboutText>

          {/* Connect this to your WhatsApp or contact link */}
          <EnquireButton href="https://wa.me/message/UWTA3D7SB6OZA1" target="_blank" rel="noopener noreferrer">
            Enquire Now
          </EnquireButton>
        </AboutContent>

      </AboutWrapper>
    </AboutContainer>
  );
};

export default About;