import styled from "styled-components";
import { Link } from "react-router-dom";

export const AboveFooter = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  @media screen and (max-width: 820px) {
    margin-top: 20%;
    margin-left: 0px;
  }
`;

export const ImgContainer = styled.div`
  @media screen and (max-width: 820px) {
    display: none;
  }
`;

export const ImgWrap = styled.img`
  height: 20%;
  max-width: 20%;
  position: absolute;
  right: 300px;
  top: 6870px;
`;

export const ImgWrapCat = styled.img`
  max-width: 20%;
  height: 20%;
  position: absolute;
  right: 70px;
  top: 6900px;
`;

// Footer CSS---------------------

export const FooterContainer = styled.footer`
  background-color: #d2f2fa;
  border-radius: 70px;
  margin-left: 4%;
  margin-right: 4%;
  margin-bottom: 4%;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 15%;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
    flex-direction: column;
    margin-bottom: 10%;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: black;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLogoImage = styled.img`
  width: 128px;
  height: 110px;
`;

export const FooterLinkTitle = styled.h1`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.8);
`;

export const FooterLink = styled(Link)`
  color: black;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
  line-height: 21px;
  font-weight: 400;
  opacity: 0.8;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;

// New styled component for <a> tags to match FooterLink styling
export const StyledAnchor = styled.a`
  color: black;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
  line-height: 21px;
  font-weight: 400;
  opacity: 0.8;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
  padding-top: 11px;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 20px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const WebsiteRights = styled.small`
  color: black;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;

export const SocialLogoImage = styled.img`
  width: 32px;
  height: 32px;
`;

export const HorizontalLine = styled.hr`
  width: 80%;
  margin: 0 auto;
  border: 0.5px solid #000000;
  opacity: 0.3;
  margin-bottom: 2%;
`;
