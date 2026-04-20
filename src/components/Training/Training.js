import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import trainingImage from "../../Assets/Training/training.png";
import { PhoneCall } from 'lucide-react'; // Added the icon import

import {
  TrainingWrapper,
  Overlay,
  TrainingHero,
  TrainingContent,
  TrainingTitle,
  TrainingSubtitle,
  PriceCard,
  PriceRow,
  PriceLabel,
  PriceValue,
  HighlightText,
  HighlightList,
  FloatingCallBtn // Imported the new button
} from "./TrainingElements";

const Training = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      <TrainingWrapper bg={trainingImage}>
        <Overlay />

        <TrainingHero>
          <TrainingContent>
            <TrainingTitle>
              Train. Transform. Thrive 🐶🎓
            </TrainingTitle>

            <TrainingSubtitle>
              Transform your pup into the best-behaved companion with our
              immersive training program covering obedience, behavior,
              and social skills.
            </TrainingSubtitle>

            <PriceCard>
              <PriceRow>
                <PriceLabel>⏳ Duration</PriceLabel>
                <PriceValue>4–5 Months</PriceValue>
              </PriceRow>

              <PriceRow>
                <PriceLabel>💳 Pricing</PriceLabel>
                <PriceValue>Rs 20,000+</PriceValue>
              </PriceRow>

              <HighlightText>✨ Includes</HighlightText>

              <HighlightList>
                <span>🛏️ Boarding</span>
                <span>🥩 Meals</span>
                <span>🎓 Training</span>
              </HighlightList>
            </PriceCard>
          </TrainingContent>
        </TrainingHero>
      </TrainingWrapper>

      {/* FLOATING CALL BUTTON */}
      <FloatingCallBtn href="tel:+91-9217326357">
        <PhoneCall />
        <span>Enquire Now</span>
      </FloatingCallBtn>
    </>
  );
};

export default Training;