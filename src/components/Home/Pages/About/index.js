import React from "react";
import {
  AboutContainer,
  AboutWrapper,
  AboutImageWrap,
  AboutImage,
  AboutContent,
  AboutHeading,
  AboutSubheading,
  AboutPoints,
  EnquireButton,
  HighlightName
} from "./AboutElements";

import aboutImg from "../../../../Assets/Intro/about_img.webp";

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutWrapper>
        
        {/* LEFT SIDE: Image */}
        <AboutImageWrap>
          <AboutImage src={aboutImg} alt="Happy pets at Pet Me Maa" />
        </AboutImageWrap>

        {/* RIGHT SIDE: Content */}
        <AboutContent>

          <AboutHeading>
            A Second Home for Your Furry Babies 🐾
          </AboutHeading>

          <AboutSubheading>
            Premium Boarding • Daycare • Grooming & more
          </AboutSubheading>

          <AboutPoints>

            <li>
              🏡 More than a daycare—we provide a{" "}
              <strong style={{ color: "#ec4899" }}>true second home</strong>{" "}
              where your companions feel safe and loved.
            </li>

            <li>
  ❤️ Founded by <HighlightName>Priyanka Yadav</HighlightName> in loving memory of{" "}
  <strong>Shvan</strong>, built on trust and emotional care.
</li>

            <li>
              🏥 Complete care under one roof:{" "}
              <strong>boarding, grooming, and expert vet support with pick and drop facility</strong>.
            </li>

            <li>
              🌊 Unique experiences like a <strong>hygienic swimming pool, lush green playground</strong>{" "}
              and our exclusive <strong>Cafe Pooch</strong>.
            </li>

            <li>
              ✨ Enjoy complete peace of mind while your pet experiences{" "}
              <strong>love, comfort, and endless fun</strong>.
            </li>

          </AboutPoints>

          {/* CTA */}
          <EnquireButton
            href="https://wa.me/message/UWTA3D7SB6OZA1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Stay Now 🐾
          </EnquireButton>

        </AboutContent>

      </AboutWrapper>
    </AboutContainer>
  );
};

export default About;