import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import shoppingImg from "../../Assets/Shopping/shopping.png";
import { PhoneCall } from 'lucide-react'; 

import {
  BoutiqueWrapper,
  Overlay,
  BoutiqueHero,
  BoutiqueContent,
  BoutiqueTitle,
  BoutiqueSubtitle,
  InfoCard,
  FeatureList,
  FeatureItem,
  StoreText, // Imported the plain text component
  FloatingCallBtn 
} from "./BoutiqueElements";

const ShoppingBoutique = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      <BoutiqueWrapper bg={shoppingImg}>
        <Overlay />

        <BoutiqueHero>
          <BoutiqueContent>
            <BoutiqueTitle>
              Pet Shopping Boutique 🛍️🐾
            </BoutiqueTitle>

            <BoutiqueSubtitle>
              Discover premium essentials for your furry friend. Stylish outfits,
              fun toys, and healthy treats — everything in one place!
            </BoutiqueSubtitle>

            <InfoCard>
              <h3>✨ New Arrivals</h3>

              <FeatureList>
                <FeatureItem>🧸 Toys</FeatureItem>
                <FeatureItem>👗 Outfits</FeatureItem>
                <FeatureItem>🍪 Treats</FeatureItem>
                <FeatureItem>🧼 Grooming</FeatureItem>
              </FeatureList>

              {/* Just plain text now */}
              <StoreText>Because your pet deserves a shopping spree too! Visit our boutique for all their favorite goodies and gear.</StoreText>
            </InfoCard>
          </BoutiqueContent>
        </BoutiqueHero>
      </BoutiqueWrapper>

      {/* FLOATING CALL BUTTON */}
      <FloatingCallBtn href="tel:+919217326357">
        <PhoneCall size={24} />
        <span>Enquire Now</span>
      </FloatingCallBtn>
    </>
  );
};

export default ShoppingBoutique;