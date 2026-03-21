import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import {
  SecondaryContainer,
  SecondaryWrapper,
  ContentContainer,
  ImgWrapLook,
  TopLine2,
  Heading,
  ContactBtn,
} from "./IntroElements";

import look from "../../../../Assets/Intro/look.webp";

const Secondary = () => {
  return (
    <SecondaryContainer>
      <SecondaryWrapper>
        <ImgWrapLook src={look} alt="loading..." />
        <ContentContainer>
          <TopLine2>
            A world of <b>Wagging Tails 🐶 & Purring Hearts 🐱</b>
          </TopLine2>
          <Heading>
            Founded by Priyanka, our journey began with a simple vision: to
            offer more than just grooming and boarding services- to become a
            second home for our furry family members.
          </Heading>
          {/* Use Link component to create a link */}
          <Link to="/services">
            <ContactBtn>
              <h3>Know More</h3>
            </ContactBtn>
          </Link>
        </ContentContainer>
      </SecondaryWrapper>
    </SecondaryContainer>
  );
};

export default Secondary;
