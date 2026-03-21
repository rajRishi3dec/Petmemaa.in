import React from "react";
import insta from "../../Assets/Footer/insta.webp";
import face from "../../Assets/Footer/face.webp";
import wats from "../../Assets/Footer/wats.webp";
import loc from "../../Assets/Footer/loc.webp";
import logo from "../../Assets/Footer/logo.webp";

import {
  AboveFooter,
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLogoImage,
  FooterLinkTitle,
  FooterLink,
  StyledAnchor,
  SocialMedia,
  SocialIconLink,
  SocialMediaWrap,
  SocialIcons,
  WebsiteRights,
  SocialLogoImage,
  HorizontalLine,
} from "./FooterElements";

const Footer = () => {
  return (
    <>
      <AboveFooter></AboveFooter>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLogoImage src={logo} alt="...loading" />
                <span
                  style={{
                    fontSize: "14px",
                    opacity: "0.8",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "21px",
                    marginTop: "10px",
                  }}
                >
                  We love to extend the family of Pet Me Maa!
                </span>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/">Services we provide</FooterLink>
                <FooterLink to="/">Feedbacks</FooterLink>
                <FooterLink to="/cafe">Cafe</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Quick Links</FooterLinkTitle>
                <FooterLink to="/contactus">Contact Us</FooterLink>
                <StyledAnchor href="/pdfs/tou.pdf" target="_blank" rel="noopener noreferrer">Terms and Conditions</StyledAnchor>
                <StyledAnchor href="/pdfs/pp.pdf" target="_blank" rel="noopener noreferrer">Privacy Policy</StyledAnchor>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <SocialMedia>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <SocialMediaWrap>
                <SocialIcons>
                  <SocialIconLink
                    href="https://www.instagram.com/petmemaa/"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <SocialLogoImage src={insta} alt="...loading" />
                  </SocialIconLink>
                  <SocialIconLink
                    href="https://www.facebook.com/profile.php?id=61552258406579"
                    target="_blank"
                    aria-label="Facebook"
                  >
                    <SocialLogoImage src={face} alt="...loading" />
                  </SocialIconLink>
                  <SocialIconLink
                    href="https://wa.me/918826791521"
                    target="_blank"
                    aria-label="Whatsapp"
                  >
                    <SocialLogoImage src={wats} alt="...loading" />
                  </SocialIconLink>
                  <SocialIconLink
                    href="https://www.google.com/maps/dir//Indian+National+Public+School,+beside+to,+Sorkha,+Noida,+Uttar+Pradesh+201301/@28.5766954,77.3290014,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390cef469e19f1c7:0x4832248696d14ab4!2m2!1d77.4100828!2d28.5767203?entry=ttu"
                    target="_blank"
                    aria-label="Location"
                  >
                    <SocialLogoImage src={loc} alt="...loading" />
                  </SocialIconLink>
                </SocialIcons>
              </SocialMediaWrap>
            </SocialMedia>
          </FooterLinksContainer>
          <HorizontalLine />
          <WebsiteRights>All rights reserved © Pet Me Maa</WebsiteRights>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
