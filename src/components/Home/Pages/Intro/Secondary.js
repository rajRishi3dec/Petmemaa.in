import React from "react";

import {
  SecondaryContainer,
  SecondaryWrapper,
  ContentContainer,
  ImgWrapLook,
  MainHeading,
  FounderName,
  FounderTitle,
  QuoteContainer,
  QuoteText,
} from "./IntroElements";

import founder from "../../../../Assets/Intro/founder.webp";

const Secondary = () => {
  return (
    <SecondaryContainer id="founder">
      <SecondaryWrapper>
        {/* The image area remains the same as requested */}
        <ImgWrapLook src={founder} alt="Founder of Pet Me Maa" />
        
        <ContentContainer>
          <MainHeading>
            A heartfelt message
          </MainHeading>
          
          <FounderName>Priyanka Yadav</FounderName>
          <FounderTitle>Founder</FounderTitle>

          <QuoteContainer>
            <QuoteText>
              Pet Me Maa began with a single, profound love story—the bond between our founder, Priyanka Yadav, and her beloved pet dog, Shvan.

Shvan was more than just a dog; he was her child. In his cherished memory, Priyanka created Pet Me Maa to be a sanctuary of kindness, respect, and boundless affection. Our mission is to provide a true "SECOND HOME" for your furry babies, surrounding them with the exact same warmth, care, and comfort that Shvan experienced.

With Shvan’s memory forever guiding our mission, we dedicate ourselves to celebrating and nurturing the irreplaceable bond between humans and their furry companions. Thank you for being a beautiful part of our journey.
            </QuoteText>
          </QuoteContainer>
        </ContentContainer>
      </SecondaryWrapper>
    </SecondaryContainer>
  );
};

export default Secondary;