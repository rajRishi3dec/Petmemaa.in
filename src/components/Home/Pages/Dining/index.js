import React from "react";
// import union from "../../../../Assets/Dining/Union.webp";
// import dining from "../../../../Assets/Dining/dining.webp"
import dog1 from "../../../../Assets/Dining/dog1.jpeg";
import dog2 from "../../../../Assets/Dining/dog2.jpeg";
import dog3 from "../../../../Assets/Dining/dog3.jpeg";
import dog4 from "../../../../Assets/Dining/dog4.jpeg";
import dog5 from "../../../../Assets/Dining/dog5.jpeg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Link } from "react-router-dom"; // Commented out to fix unused warning
// import styled from "styled-components"; // Commented out to fix unused warning

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
  ImgWrapCar
} from "./DiningElements";
import { SubText } from "../Services/ServiceElements";

// Commented out to fix the ESLint warning since it's not currently being used in the return block
// const LinkWrapper = styled(Link)`
//   text-decoration: none;
//   color: inherit; 
// `;

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
          <Title> <b>Meet our furry babies</b></Title>
          
          <br />
          <br />
          <Slider {...settings}>
            <div>
              <ImgWrapCar src={dog1} alt="car1"></ImgWrapCar>
            </div>
            <div>
              <ImgWrapCar src={dog2} alt="car1"></ImgWrapCar>
            </div>
            <div>
              <ImgWrapCar src={dog3} alt="car1"></ImgWrapCar>
            </div>
            <div>
              <ImgWrapCar src={dog4} alt="car1"></ImgWrapCar>
            </div>
            <div>
              <ImgWrapCar src={dog5} alt="car1"></ImgWrapCar>
            </div>
          </Slider>
          <br />
          <br />
          <SubText>
            Welcome to Pet Me Maa, where we treat your pets like our own family! We are more than just a pet care center; we are your trusted partners in your pet's happiness. With our premium grooming, safe boarding, behavioral training, and fun-filled play zones, we provide a haven of love and expert care for your best friend.
          </SubText>
          
        </DiningWrapper2>
      </DiningContainer>
    </>
  );
};

export default Dining;