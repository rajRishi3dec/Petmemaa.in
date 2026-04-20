import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import playImg from "../../Assets/Playground/playground.png";
import { PhoneCall } from 'lucide-react'; 

import {
  PlayWrapper,
  Overlay,
  PlayHero,
  PlayContent,
  PlayTitle,
  PlaySubtitle,
  PriceCard,
  PriceRow,
  PriceLabel,
  PriceValue,
  HighlightText,
  FloatingCallBtn 
} from "./PlaygroundElements";

const Playground = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      <PlayWrapper bg={playImg}>
        <Overlay />

        <PlayHero>
          <PlayContent>
            <PlayTitle>
              Pet Playground 🐾🎾
            </PlayTitle>

            <PlaySubtitle>
              A safe, fun, and fully supervised play zone where your dogs
              can socialize, play, and burn off energy in a joyful environment.
            </PlaySubtitle>

            <PriceCard>
              <PriceRow>
                <PriceLabel><span className="emoji">⏱</span> Session</PriceLabel>
                <PriceValue>45 min</PriceValue>
              </PriceRow>

              <PriceRow>
                <PriceLabel><span className="emoji">💳</span> Entry</PriceLabel>
                <PriceValue>Rs 499</PriceValue>
              </PriceRow>

              <HighlightText>
                <span className="emoji">📅</span> Prior Appointment Required
              </HighlightText>
            </PriceCard>
          </PlayContent>
        </PlayHero>
      </PlayWrapper>

      {/* FLOATING CALL BUTTON */}
      <FloatingCallBtn href="tel:+919217326357">
        <PhoneCall size={24} />
        <span>Enquire Now</span>
      </FloatingCallBtn>
    </>
  );
};

export default Playground;