import React from "react";
//import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
//import styled from "styled-components";
import { FaWhatsapp, FaPhoneAlt} from 'react-icons/fa'; // Update your icons import
//import { MdOutlineMedicalServices } from 'react-icons/md';
import team1 from "../../../../Assets/Intro/team1.webp";
import team2 from "../../../../Assets/Intro/team2.webp";
import team3 from "../../../../Assets/Intro/team3.webp";
import team4 from "../../../../Assets/Intro/team4.webp";
import team5 from "../../../../Assets/Intro/team5.webp";
import team6 from "../../../../Assets/Intro/team6.webp";
import team7 from "../../../../Assets/Intro/team7.webp";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Column2,
  ImgWrap,
  OurLovingTeam,
  OurLovingTeamHeading,
  OurLovingTeamImages,
  TeamImage,
  TeamMemberWrapper,
  ButtonContainer, 
} from "./IntroElements";

import imgIntro from "../../../../Assets/Intro/Intro.webp";
//import puppies from "../../../../Assets/Intro/puppies.gif";
const StaticActionButtons = () => {
  return (
    <ButtonContainer>
      <a href="tel:+91-9217326357" className="action-btn phone-btn">
        <FaPhoneAlt className="action-icon" />
        <span>Call to enquire</span>
      </a>

      <a href="https://wa.me/9217326357" className="action-btn whatsapp-btn" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="action-icon" />
        <span>Message to book</span>
      </a>
    </ButtonContainer>
  );
};
const InfoSection = () => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>
  Complete Pet Care Services in Delhi NCR
</TopLine>

<Heading>
  Boarding, Grooming & More 🐾
</Heading>

<Subtitle>
  Safe, hygienic and fun environment with expert care for your pets
</Subtitle>

                <OurLovingTeam>
                  <OurLovingTeamHeading>Our Loving Team</OurLovingTeamHeading>
                  
                  <OurLovingTeamImages>
                    <TeamMemberWrapper>
                      <TeamImage src={team1} alt="Team Member 1" />
                      <span>Priyanka Yadav</span> 
                    </TeamMemberWrapper>

                    <TeamMemberWrapper>
                      <TeamImage src={team2} alt="Team Member 2" />
                      <span>Neha Gupta</span>
                    </TeamMemberWrapper>

                    <TeamMemberWrapper>
                      <TeamImage src={team3} alt="Team Member 3" />
                      <span>Dr. Pratyush Gautam</span>
                    </TeamMemberWrapper>

                    <TeamMemberWrapper>
                      <TeamImage src={team4} alt="Team Member 4" />
                      <span>Mukesh Kumar</span>
                    </TeamMemberWrapper>

                    <TeamMemberWrapper>
                      <TeamImage src={team5} alt="Team Member 5" />
                      <span>Abhimanyu Singh</span>
                    </TeamMemberWrapper>

                    <TeamMemberWrapper>
                      <TeamImage src={team6} alt="Team Member 6" />
                      <span>Vikas</span>
                    </TeamMemberWrapper>

                    <TeamMemberWrapper>
                      <TeamImage src={team7} alt="Team Member 7" />
                      <span>Laxman Kalauni</span>
                    </TeamMemberWrapper>
                  </OurLovingTeamImages>
                  
                </OurLovingTeam>
                <StaticActionButtons />
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap src={imgIntro} alt="Pet fun" />
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;