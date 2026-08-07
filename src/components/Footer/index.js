import React from "react";

import insta from "../../Assets/Footer/insta.webp";
import face from "../../Assets/Footer/face.webp";
import wats from "../../Assets/Footer/wats.webp";
import loc from "../../Assets/Footer/loc.webp";
import logo from "../../Assets/Footer/logo.webp";

import {
  FooterContainer,
  FooterWrap,
  FooterContent,
  FooterColumn,
  BrandColumn,
  QuickLinksColumn,
  SocialColumn,
  FooterLogoImage,
  FooterTagline,
  FooterLinkTitle,
  FooterLink,
  StyledAnchor,
  SocialDescription,
  SocialIcons,
  SocialIconLink,
  SocialLogoImage,
  HorizontalLine,
  WebsiteRights,
  CopyrightIcon,
  PawDecoration,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>

        {/* Main Footer Content */}
        <FooterContent>

          {/* ================= BRAND ================= */}
          <FooterColumn as={BrandColumn}>
            <FooterLogoImage src={logo} alt="Pet Me Maa Logo" />

            <FooterTagline>
              We love to extend the
              <br />
               family of Pet Me Maa!
            </FooterTagline>
          </FooterColumn>


          {/* ================= QUICK LINKS ================= */}
          <FooterColumn as={QuickLinksColumn}>
            <FooterLinkTitle>
              Quick Links
            </FooterLinkTitle>

            <FooterLink to="/faq">
              <span>›</span>
              FAQ
            </FooterLink>

            <FooterLink to="/contactus">
              <span>›</span>
              Contact Us
            </FooterLink>

            <StyledAnchor
              href="/pdfs/tou.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>›</span>
              Terms and Conditions
            </StyledAnchor>

            <StyledAnchor
              href="/pdfs/pp.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>›</span>
              Privacy Policy
            </StyledAnchor>
          </FooterColumn>


          {/* ================= SOCIAL MEDIA ================= */}
          <FooterColumn as={SocialColumn}>
            <FooterLinkTitle>
              Social Media
            </FooterLinkTitle>

            <SocialIcons>

              {/* Instagram */}
              <SocialIconLink
                href="https://www.instagram.com/petmemaa/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <SocialLogoImage
                  src={insta}
                  alt="Instagram"
                />
              </SocialIconLink>


              {/* Facebook */}
              <SocialIconLink
                href="https://www.facebook.com/profile.php?id=61552258406579"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <SocialLogoImage
                  src={face}
                  alt="Facebook"
                />
              </SocialIconLink>


              {/* WhatsApp */}
              <SocialIconLink
                href="https://wa.me/message/UWTA3D7SB6OZA1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <SocialLogoImage
                  src={wats}
                  alt="WhatsApp"
                />
              </SocialIconLink>


              {/* Google Maps */}
              <SocialIconLink
                href="https://www.google.com/maps/dir//Indian+National+Public+School,+beside+to,+Sorkha,+Noida,+Uttar+Pradesh+201301/@28.5766954,77.3290014,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390cef469e19f1c7:0x4832248696d14ab4!2m2!1d77.4100828!2d28.5767203?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps"
              >
                <SocialLogoImage
                  src={loc}
                  alt="Google Maps"
                />
              </SocialIconLink>

            </SocialIcons>

            <SocialDescription>
              Follow us on social media
              <br />
              and stay updated!
            </SocialDescription>
          </FooterColumn>

        </FooterContent>


        {/* Divider */}
        <HorizontalLine />


        {/* Copyright */}
        <WebsiteRights>
          <CopyrightIcon>♥</CopyrightIcon>
          All rights reserved © Pet Me Maa
        </WebsiteRights>


        {/* Decorative Paw Prints */}
        <PawDecoration className="left-paws">
          🐾
        </PawDecoration>

        <PawDecoration className="right-paws">
          🐾
        </PawDecoration>

      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;