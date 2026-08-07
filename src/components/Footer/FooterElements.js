import styled from "styled-components";
import { Link } from "react-router-dom";

/* =========================================================
   FOOTER CONTAINER
========================================================= */

export const FooterContainer = styled.footer`
  background: #d2f2fa;
  border-radius: 40px;
  margin: 0 4% 3%;
  overflow: hidden;

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.07);

  position: relative;

  @media screen and (max-width: 820px) {
    margin: 0 3% 4%;
    border-radius: 28px;
  }
`;


/* =========================================================
   FOOTER WRAPPER
========================================================= */

export const FooterWrap = styled.div`
  position: relative;

  max-width: 1150px;
  margin: 0 auto;

  padding: 38px 45px 22px;

  @media screen and (max-width: 820px) {
    padding: 32px 25px 20px;
  }

  @media screen and (max-width: 480px) {
    padding: 28px 18px 18px;
  }
`;


/* =========================================================
   MAIN CONTENT
========================================================= */

export const FooterContent = styled.div`
  display: grid;

  grid-template-columns:
    1.2fr
    1fr
    1fr;

  align-items: center;

  column-gap: 45px;

  @media screen and (max-width: 900px) {
    column-gap: 25px;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;

    row-gap: 28px;

    text-align: center;
  }
`;


/* =========================================================
   COLUMNS
========================================================= */

export const FooterColumn = styled.div`
  min-width: 0;

  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;


/* =========================================================
   BRAND COLUMN
========================================================= */

export const BrandColumn = styled.div`
  padding-right: 25px;

  @media screen and (max-width: 700px) {
    padding-right: 0;
  }
`;


/* =========================================================
   QUICK LINKS COLUMN
========================================================= */

export const QuickLinksColumn = styled.div`
  padding-left: 35px;

  border-left: 1px solid rgba(0, 0, 0, 0.13);

  @media screen and (max-width: 700px) {
    padding-left: 0;

    border-left: none;
    border-top: 1px solid rgba(0, 0, 0, 0.13);

    padding-top: 25px;

    width: 100%;
  }
`;


/* =========================================================
   SOCIAL COLUMN
========================================================= */

export const SocialColumn = styled.div`
  padding-left: 35px;

  border-left: 1px solid rgba(0, 0, 0, 0.13);

  @media screen and (max-width: 700px) {
    padding-left: 0;

    border-left: none;
    border-top: 1px solid rgba(0, 0, 0, 0.13);

    padding-top: 25px;

    width: 100%;
  }
`;


/* =========================================================
   LOGO
========================================================= */

export const FooterLogoImage = styled.img`
  width: 155px;
  height: auto;
  margin-left : 35px;
  display: block;

  margin-bottom: 12px;

  @media screen and (max-width: 700px) {
    width: 150px;
  }

  @media screen and (max-width: 420px) {
    width: 140px;
  }
`;


/* =========================================================
   TAGLINE
========================================================= */

export const FooterTagline = styled.p`
  margin: 0;
  margin-left : 35px;
  
  font-family: "Inter", sans-serif;

  font-size: 14px;

  line-height: 1.6;

  font-weight: 500;

  color: rgba(0, 0, 0, 0.72);
`;


/* =========================================================
   SECTION TITLE
========================================================= */

export const FooterLinkTitle = styled.h2`
  position: relative;

  margin: 0 0 20px;

  font-family: "Inter", sans-serif;

  font-size: 20px;

  line-height: 1.3;

  font-weight: 700;

  color: rgba(0, 0, 0, 0.85);

  width: fit-content;

  &::after {
    content: "";

    display: block;

    width: 40px;
    height: 2px;

    background: #01a6a6;

    border-radius: 10px;

    margin-top: 7px;
  }
`;


/* =========================================================
   QUICK LINKS
========================================================= */

export const FooterLink = styled(Link)`
  display: flex;

  align-items: center;

  gap: 9px;

  color: rgba(0, 0, 0, 0.8);

  text-decoration: none;

  margin-bottom: 10px;

  font-family: "Inter", sans-serif;

  font-size: 14px;

  line-height: 1.5;

  font-weight: 400;

  transition: all 0.2s ease;

  span {
    color: #01a6a6;

    font-size: 22px;

    line-height: 14px;

    transition: transform 0.2s ease;
  }

  &:hover {
    color: #01a6a6;

    transform: translateX(3px);

    span {
      transform: translateX(2px);
    }
  }
`;


/* =========================================================
   PDF LINKS
========================================================= */

export const StyledAnchor = styled.a`
  display: flex;

  align-items: center;

  gap: 9px;

  color: rgba(0, 0, 0, 0.8);

  text-decoration: none;

  margin-bottom: 10px;

  font-family: "Inter", sans-serif;

  font-size: 14px;

  line-height: 1.5;

  font-weight: 400;

  transition: all 0.2s ease;

  span {
    color: #01a6a6;

    font-size: 22px;

    line-height: 14px;

    transition: transform 0.2s ease;
  }

  &:hover {
    color: #01a6a6;

    transform: translateX(3px);

    span {
      transform: translateX(2px);
    }
  }
`;


/* =========================================================
   SOCIAL ICONS
========================================================= */

export const SocialIcons = styled.div`
  display: flex;

  align-items: center;

  justify-content: flex-start;

  gap: 14px;

  margin-top: 2px;

  margin-bottom: 20px;

  flex-wrap: nowrap;

  width: max-content;

  @media screen and (max-width: 900px) {
    gap: 10px;
  }

  @media screen and (max-width: 700px) {
    justify-content: center;

    width: 100%;

    gap: 14px;
  }

  @media screen and (max-width: 400px) {
    gap: 9px;
  }
`;


/* =========================================================
   SOCIAL ICON LINK
========================================================= */

export const SocialIconLink = styled.a`
  display: flex;

  align-items: center;

  justify-content: center;

  flex-shrink: 0;

  width: 42px;
  height: 42px;

  border-radius: 50%;

  background: #ffffff;

  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.09);

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);

    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.14);
  }
`;


/* =========================================================
   SOCIAL IMAGES
========================================================= */

export const SocialLogoImage = styled.img`
  width: 30px;

  height: 30px;

  object-fit: contain;
`;


/* =========================================================
   SOCIAL DESCRIPTION
========================================================= */

export const SocialDescription = styled.p`
  margin: 0;

  font-family: "Inter", sans-serif;

  font-size: 14px;

  line-height: 1.6;

  font-weight: 400;

  color: rgba(0, 0, 0, 0.72);
`;


/* =========================================================
   DIVIDER
========================================================= */

export const HorizontalLine = styled.hr`
  width: 100%;

  margin: 30px 0 15px;

  border: 0;

  border-top: 1px solid rgba(0, 0, 0, 0.13);

  @media screen and (max-width: 700px) {
    margin-top: 28px;
  }
`;


/* =========================================================
   COPYRIGHT
========================================================= */

export const WebsiteRights = styled.small`
  display: flex;

  align-items: center;

  justify-content: center;

  gap: 8px;

  text-align: center;

  color: rgba(0, 0, 0, 0.68);

  font-family: "Inter", sans-serif;

  font-size: 13px;

  font-weight: 500;

  line-height: 1.5;
`;


/* =========================================================
   COPYRIGHT ICON
========================================================= */

export const CopyrightIcon = styled.span`
  display: inline-flex;

  align-items: center;

  justify-content: center;

  width: 27px;
  height: 27px;

  border-radius: 50%;

  background: #01a6a6;

  color: white;

  font-size: 13px;
`;


/* =========================================================
   DECORATIVE PAW PRINTS
========================================================= */

export const PawDecoration = styled.div`
  position: absolute;

  font-size: 35px;

  opacity: 0.1;

  pointer-events: none;

  user-select: none;

  &.left-paws {
    bottom: 12px;
    left: 20px;
  }

  &.right-paws {
    bottom: 12px;
    right: 20px;
  }

  @media screen and (max-width: 700px) {
    font-size: 28px;

    &.left-paws {
      left: 8px;
    }

    &.right-paws {
      right: 8px;
    }
  }
`;