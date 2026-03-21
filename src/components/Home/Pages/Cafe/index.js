import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  CafeContainer,
  CafeWrapper,
  ContentContainer,
  ImgWrapLook,
  TopLine2,
  Heading,
  ContactBtn,
} from "./CafeElements";
import look from "../../../../Assets/Cafe/Dog.webp";

// Create a wrapper styled component for the Link
const LinkWrapper = styled(Link)`
  text-decoration: none; /* Reset text-decoration to none */
  color: inherit; /* Inherit the color from the parent */
`;

const Cafe = () => {
  return (
    <CafeContainer>
      <CafeWrapper>
        <ImgWrapLook src={look} alt="loading..." />
        <ContentContainer>
          <TopLine2>
            Welcome to Cafe Pooch -
            <br />
            <b>Where Pets & Families Come Together!</b>
          </TopLine2>
          <Heading>
            We're proud to provide a one-of-a-kind destination where pets and
            their families can relax, unwind, and create lasting memories
            together. Our cozy cafe offers a welcoming atmosphere, delicious
            treats, and plenty of opportunities for fun and connection.
          </Heading>
          <LinkWrapper to="/Cafe">
            <ContactBtn src="/Cafe">
              <h3>Explore Cafe {">"}</h3>
            </ContactBtn>
          </LinkWrapper>
        </ContentContainer>
      </CafeWrapper>
    </CafeContainer>
  );
};

export default Cafe;
