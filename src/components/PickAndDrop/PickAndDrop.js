import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import transportImage from "../../Assets/PickAndDrop/pickanddrop.webp";
import { PhoneCall } from 'lucide-react'; // Added the icon import

import {
  TransportWrapper,
  Overlay,
  TransportHero,
  TransportContent,
  TransportTitle,
  TransportSubtitle,
  PriceCard,
  PriceRow,
  PriceLabel,
  PriceValue,
  HighlightText,
  FloatingCallBtn // Imported the new button
} from "./PickAndDropElements";

const PickAndDrop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      <TransportWrapper bg={transportImage}>
        <Overlay />

        <TransportHero>
          <TransportContent>
            <TransportTitle>
              Pet Pick & Drop 🚗🐾
            </TransportTitle>

            <TransportSubtitle>
              Busy day? Let us handle the commute. Safe, reliable, and 
              comfortable transport service right from your doorstep.
            </TransportSubtitle>

            <PriceCard>
              <PriceRow>
                <PriceLabel>📍 1–5 km</PriceLabel>
                <PriceValue>Rs 300</PriceValue>
              </PriceRow>

              <PriceRow>
                <PriceLabel>🛣️ 6–10 km</PriceLabel>
                <PriceValue>Rs 400</PriceValue>
              </PriceRow>

              <PriceRow>
                <PriceLabel>🗺️ 11–15 km</PriceLabel>
                <PriceValue>Rs 500</PriceValue>
              </PriceRow>

              <HighlightText>
                ✨ +Rs 100 for every extra 5 km
              </HighlightText>
            </PriceCard>
          </TransportContent>
        </TransportHero>
      </TransportWrapper>

      {/* FLOATING CALL BUTTON */}
      <FloatingCallBtn href="tel:+919217326357">
        <PhoneCall />
        <span>Enquire Now</span>
      </FloatingCallBtn>
    </>
  );
};

export default PickAndDrop;