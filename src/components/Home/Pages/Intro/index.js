import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import team1 from "../../../../Assets/Intro/team1.webp";
import team2 from "../../../../Assets/Intro/team2.webp";
import team3 from "../../../../Assets/Intro/team3.webp";

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
  TeamImageText,
  TopLineBold,
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
                  <OurLovingTeamImages>
                    <TeamImage src={team1} alt="..team1" />
                    <TeamImage src={team2} alt="..team1" />
                    <TeamImage src={team3} alt="..team1" />
                    <TeamImageText>+ 10 more</TeamImageText>
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
