import React from "react";
//import { useNavigate } from "react-router-dom";

import services1 from "../../../../Assets/Services/services1.webp";
import services2 from "../../../../Assets/Services/services2.webp";
import services3 from "../../../../Assets/Services/services3.webp";
import services4 from "../../../../Assets/Services/services4.webp";
import services5 from "../../../../Assets/Services/services5.webp";
import services6 from "../../../../Assets/Services/services6.webp";
import services7 from "../../../../Assets/Services/services7.webp";
import services8 from "../../../../Assets/Services/services8.webp";
import services9 from "../../../../Assets/Services/services9.webp";
//import pickanddrop from "../../../../Assets/PickAndDrop/pickanddrop.webp";


import {
  ServicesContainer,
  TitleContainer,
  Title,
  SubText,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  TitleServices,
  CardText,
  ExploreLink
} from "./ServiceElements";

const Services = () => {
//  const navigate = useNavigate();
  return (
    <ServicesContainer id="services">
      <TitleContainer>
        <Title>Our Services</Title>
        <SubText>
          At Pet Me Maa, we go beyond ordinary dog care. We're a full-service heaven where your furry family members are treated with love, comfort, and top-tier care. Our offerings include:
        </SubText>
      </TitleContainer>

      <ServicesWrapper>
        {/* Card 1 */}
        <ServicesCard to="/services/boarding">
          <ServicesIcon src={services1} alt="Boarding/Daycare" />
          <TitleServices>Boarding/Daycare</TitleServices>
          <CardText>
            Comfortable, clean, and fully supervised accommodations that make your pet feel safe and loved while you're away.
          </CardText>
          <ExploreLink>View Details</ExploreLink>
        </ServicesCard>

        {/* Card 2 */}
        <ServicesCard to="/services/grooming">
          <ServicesIcon src={services2} alt="Grooming" />
          <TitleServices>Grooming</TitleServices>
          <CardText>
            Pamper your pup with our professional grooming services — from basic baths to stylish makeovers.
          </CardText>
          <ExploreLink>View Details</ExploreLink>
        </ServicesCard>
        {/* Card 3 */}
        <ServicesCard to="/services/Veterinary">
          <ServicesIcon src={services3} alt="Veterinary Care" />
          <TitleServices>Veterinary Care</TitleServices>
          <CardText>
            All types of veterinary support for routine checkups, preventive care, and emergencies — your pet's health is in expert hands.
          </CardText>
          <ExploreLink>View Details</ExploreLink>
        </ServicesCard>

        {/* Card 4 */}
        

        {/* Card 5 */}
        <ServicesCard to="/services/pool">
          <ServicesIcon src={services5} alt="Swimming Pool" />
          <TitleServices>Swimming Pool</TitleServices>
          <CardText>
            Let your dog dive into joy! Our secure pet-friendly pool is perfect for exercise, therapy, or just splashing fun.
          </CardText>
          <ExploreLink>View Details</ExploreLink>
        </ServicesCard>

        {/* Card 6 */}
        <ServicesCard to="/services/cafe">
          <ServicesIcon src={services6} alt="Cafeteria" />
          <TitleServices>Cafeteria</TitleServices>
          <CardText>
            At Cafe Pooch, every guest matters—two-legged or four!
            Cafe Pooch, where we serve you delicious cuisines to be enjoyed with family and friends along with your furry companion.
          </CardText>
          <ExploreLink>View Details</ExploreLink>
        </ServicesCard>

        {/* Card 7 */}
        <ServicesCard to="/services/training">
          <ServicesIcon src={services7} alt="Training/School" />
          <TitleServices>Training/School</TitleServices>
          <CardText>
            Opportunities for basic obedience training and supervised socialization sessions for your pups.
          </CardText>
          <ExploreLink>View Details</ExploreLink>
        </ServicesCard>

        {/* Card 8 */}
        <ServicesCard to="/services/transport">
          <ServicesIcon src={services8} alt="Pick and drop" />
          <TitleServices>Pick and drop</TitleServices>
          <CardText>
            Busy day? We offer reliable and safe pick-up and drop-off services for your furry friend.
          </CardText>
          <ExploreLink>View Details</ExploreLink>
        </ServicesCard>

        {/* Card 9 */}
        <ServicesCard to="/services/playground">
          <ServicesIcon src={services9} alt="Playground" />
          <TitleServices>Playground</TitleServices>
          <CardText>
            A safe and supervised indoor/outdoor play zone for your dogs to socialize and burn off energy.
          </CardText>
          <ExploreLink>View Details</ExploreLink>
        </ServicesCard>
        
        <ServicesCard to="/services/boutique">
          <ServicesIcon src={services4} alt="Shopping Boutique" />
          <TitleServices>Shopping Boutique</TitleServices>
          <CardText>
            Explore our curated collection of pet toys, accessories, treats, and essentials — all under one roof.
          </CardText>
          <ExploreLink>View Details</ExploreLink>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;