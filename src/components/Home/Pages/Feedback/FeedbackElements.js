import styled from "styled-components";
// import { Link} from "react-router-dom"

export const Container = styled.div`
  display: flex;
  margin-bottom: 5%;
`;

export const LeftPane = styled.div`
  flex: 3;
  padding-top: 5%;
`;

export const MiddlePane = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5%;
`;

export const RightPane = styled.div`
  flex: 3;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding-top: 5%;
`;

export const Vector = styled.img`
  width: 60%;
  height: auto;
`;

// For form
export const Heading = styled.span`
  font-weight: 600;
  font-size: 37px;
  line-height: 55px;
  opacity: 0.8;
  color: #000000;
  @media screen and (max-width: 820px) {
    font-size: 28px;
  }
`;

export const SubText = styled.p`
  font-weight: 400;
  font-size: 25px;
  line-height: 19.5%;
 
  color: rgba(0, 0, 0, 0.5);
  @media screen and (max-width: 820px) {
    font-size: 13px;
  }
`;

export const TextBox = styled.input`
  box-sizing: border-box;
  width: 568px;
  height: 48px;
  background: #f9f9f9;
  border: 1px dashed rgba(255, 194, 2, 0.5);
  border-radius: 8px;
  margin-top: 5%;
  padding-left: 10px;
  @media screen and (max-width: 820px) {
    width: 300px;
  }
`;

export const FeedbackBox = styled.input`
  box-sizing: border-box;
  width: 568px;
  height: 150px;
  background: #f9f9f9;
  border: 1px dashed rgba(255, 194, 2, 0.5);
  border-radius: 8px;
  padding-left: 10px;
  margin-top: 5%;
  @media screen and (max-width: 820px) {
    width: 300px;
  }
`;

export const FeedbackBtn = styled.button`
  background: #f7b2b0;
  border-radius: 110px;
  border: none;
  width: 35%;
  height: 50px;
  color: #FFF;

  @media screen and (max-width: 820px) {
    width: 60%;
  }

  transition: all 0.3s ease; /* Adding transition effect for smooth color change */

  &:hover {
    background: #d2f2fa; /* Set your desired hover color here */
  }
`;
export const Message = styled.p`
  margin-top: 20px;
  color: green;
  font-size: 16px;
  text-align: center;
`;
