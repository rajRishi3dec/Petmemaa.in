import React from "react";
// import union from "../../../../Assets/Dining/Union.webp";
// import dining from "../../../../Assets/Dining/dining.webp"
import car1 from "../../../../Assets/Dining/car1.webp";
import car2 from "../../../../Assets/Dining/car2.webp";
import car3 from "../../../../Assets/Dining/car3.webp";
import car4 from "../../../../Assets/Dining/car4.webp";
import car5 from "../../../../Assets/Dining/car5.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  DiningContainer,
  // DiningWrapper,
  // DiningRow,
  // Column1,
  // Column2,
  // ImgWrap,
  // Col2Title,
  // Col2Subtext,
  // DiningBtn,
  // DiningImage,
  DiningWrapper2,
  Title,
  SubText2,
  ImgWrapCar,
  DiningBtn2,
  ButtonWrapper,
} from "./DiningElements";
import { SubText } from "../Services/ServiceElements";

// Create a wrapper styled component for the Link
const LinkWrapper = styled(Link)`
  text-decoration: none; /* Reset text-decoration to none */
  color: inherit; /* Inherit the color from the parent */
`;

const Dining = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <DiningContainer>
        {/* <Title>Fur-tastic updates incoming!</Title>
        <SubText>
          At Pet Me Maa, we pamper pets like royalty because even fur babies
          deserve a good hair day and a wagging tail time!
        </SubText>
        <DiningImage src={dining} alt="..loading"/> */}
        {/* <DiningWrapper>
          <DiningRow>
            <Column1>
              <ImgWrap src={union} />
            </Column1>
            <Column2>
              <Col2Title>
                An amazing dining experience for you and your pet
              </Col2Title>
              <Col2Subtext>
                Our cozy cafe provides a safe and comfortable space for you to
                relax, enjoy delicious refreshments, and spend quality time with
                your beloved pets.
              </Col2Subtext>
              <DiningBtn>Explore Pet Cafe</DiningBtn>
            </Column2>
          </DiningRow>
        </DiningWrapper> */}

        <DiningWrapper2>
          <Title> <b>Get Started Now</b></Title>
          <SubText2>By Signing Up</SubText2>
          <br />
          <br />
          <Slider {...settings}>
            <div>
              <ImgWrapCar src={car1} alt="car1"></ImgWrapCar>
            </div>
            <div>
              <ImgWrapCar src={car2} alt="car1"></ImgWrapCar>
            </div>
            <div>
              <ImgWrapCar src={car3} alt="car1"></ImgWrapCar>
            </div>
            <div>
              <ImgWrapCar src={car4} alt="car1"></ImgWrapCar>
            </div>
            <div>
              <ImgWrapCar src={car5} alt="car1"></ImgWrapCar>
            </div>
          </Slider>
          <br />
          <br />
          <SubText>
            Welcome to Pet Me Maa your one-stop destination for all things pet
            care! Our mission is to provide you with the most comprehensive and
            reliable information, tips, and resources to ensure your furry,
            feathery, or scaly companions lead happy, healthy lives.
          </SubText>
          <ButtonWrapper>
            <LinkWrapper to="/contactus">
              <DiningBtn2>
                <h3>Contact Us ›</h3>
              </DiningBtn2>
            </LinkWrapper>
          </ButtonWrapper>
        </DiningWrapper2>
      </DiningContainer>
    </>
  );
};

export default Dining;
