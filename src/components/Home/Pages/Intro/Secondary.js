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
  FounderPoints
} from "./IntroElements";

import founder from "../../../../Assets/Intro/founder.webp";

const Secondary = () => {
  return (
    <SecondaryContainer id="founder">
      <SecondaryWrapper>

        <ImgWrapLook src={founder} alt="Founder of Pet Me Maa" />
        
        <ContentContainer>

          <MainHeading>
            A heartfelt message
          </MainHeading>

          <FounderName>Priyanka Yadav</FounderName>
          <FounderTitle>Founder</FounderTitle>

          <QuoteContainer>

            <QuoteText>
              A story built on love, trust, and a bond that never fades ❤️
            </QuoteText>

            <FounderPoints>

              <li>
                🐾 Pet Me Maa began with a deep bond between our founder, <strong>Priyanka Yadav</strong>, and her beloved dog <strong>Shvan</strong>.
              </li>

              <li>
                ❤️ For her, Shvan wasn’t just a pet—he was family, her child, and her constant companion.
              </li>

              <li>
                🌸 In his loving memory, Pet Me Maa was created as a space filled with kindness, respect, and genuine care.
              </li>

              <li>
                🏡 Our mission is simple: to provide a true{" "}
                <strong style={{ color: "#ec4899" }}>“SECOND HOME”</strong>{" "}
                where your companions feel safe, loved, and comfortable.
              </li>

              <li>
                ✨ Inspired by Shvan, we continue to nurture the beautiful bond between humans and their furry companions every single day.
              </li>

            </FounderPoints>

          </QuoteContainer>

        </ContentContainer>
      </SecondaryWrapper>
    </SecondaryContainer>
  );
};

export default Secondary;