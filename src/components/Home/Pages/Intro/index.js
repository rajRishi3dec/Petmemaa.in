import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
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
  ContactBtn,
  GifWrap,
  OurLovingTeam,
  OurLovingTeamHeading,
  OurLovingTeamImages,
  TeamImage,
  TopLineBold,
  TeamMemberWrapper, // ADDED THIS: Importing the new wrapper
  // IntroButton,
} from "./IntroElements";

import imgIntro from "../../../../Assets/Intro/Intro.webp";
import puppies from "../../../../Assets/Intro/puppies.gif";

// Create a wrapper styled component for the Link
const LinkWrapper = styled(Link)`
  text-decoration: none; /* Reset text-decoration to none */
  color: inherit; /* Inherit the color from the parent */
`;

const InfoSection = () => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>
                  World of <TopLineBold><b>Wonders,</b></TopLineBold>
                  <br />
                  <GifWrap src={puppies} alt="loading..." />{" "}
                  <TopLineBold><b>Whiskers</b></TopLineBold> and{" "}
                  <TopLineBold><b>Wagging Tails</b></TopLineBold>
                </TopLine>
                <Heading>
                  Pet Me Maa is born out of a deep-seated love for animals and a
                  desire to create a safe , comfortable, and nurturning
                  enviornment for pets and their owners alike.
                </Heading>
                <Subtitle>
                  <LinkWrapper to="/contactus">
                    <ContactBtn>
                      <h3>Contact Us ›</h3>
                    </ContactBtn>
                  </LinkWrapper>
                  {/* <u>Free Consulation</u> */}
                </Subtitle>
                <OurLovingTeam>
                  <OurLovingTeamHeading>Our Loving Team</OurLovingTeamHeading>
                  
                  {/* UPDATED THIS SECTION: Wrapped images and added names */}
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
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap src={imgIntro} alt="Pet fun" />
              {/* <IntroButton src={introButton} alt="loading..." /> */}
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;