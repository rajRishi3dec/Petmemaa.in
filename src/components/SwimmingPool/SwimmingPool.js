import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import swimImg from "../../Assets/Swimming/swimmingpool.png";
import { PhoneCall } from 'lucide-react'; // Imported the icon

import {
  PoolWrapper,
  PoolHero,
  Overlay,
  PoolContent,
  PoolTitle,
  PoolSubtitle,
  PriceCard,
  PriceRow,
  PriceLabel,
  PriceValue,
  HighlightText,
  FloatingCallBtn 
} from "./SwimmingPoolElements";

const SwimmingPool = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      <PoolWrapper bg={swimImg}>
        <Overlay />

        <PoolHero>
          <PoolContent>
            <PoolTitle>
              Splash. Play. Relax 🐶💦
            </PoolTitle>

            <PoolSubtitle>
              Give your furry friend the ultimate summer experience! 
              A safe, hygienic & fun swimming pool designed for 
              fitness, therapy, and pure joy.
            </PoolSubtitle>

            <PriceCard>
              <PriceRow>
                <PriceLabel>⏱ Session</PriceLabel>
                <PriceValue>45 Min</PriceValue>
              </PriceRow>

              <PriceRow>
                <PriceLabel>💳 Price</PriceLabel>
                <PriceValue>Rs 600</PriceValue>
              </PriceRow>

              <HighlightText>
                ✨ Blow Dry Included
              </HighlightText>
               <HighlightText>
                               <span className="emoji">📅</span> Prior Appointment Required
                             </HighlightText>
              
            </PriceCard>
          </PoolContent>
        </PoolHero>
      </PoolWrapper>
      <FloatingCallBtn href="tel:+919217326357">
              <PhoneCall />
              <span>Enquire Now</span>
            </FloatingCallBtn>
    </>
  );
};

export default SwimmingPool;