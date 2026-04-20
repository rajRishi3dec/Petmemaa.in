import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-bottom: 5%;
`;

export const LeftPane = styled.div`
  flex: 3;
  padding-top: 5%;
`;

/* CHANGED to styled.form so the 'required' attributes work properly */
export const MiddlePane = styled.form`
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
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: #ec4899;
  margin-bottom: 12px;

  @media screen and (max-width: 480px) {
    font-size: 20px;
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
  padding-left: 15px; 
  font-family: Sans-serif;
  font-size: 16px; /* Ensures the typed text is a good size */
  color: #444; /* The color of the text the user actually types */
  transition: all 0.3s ease; /* Smooth transition for clicking into the box */

  /* PREMIUM PLACEHOLDER STYLING */
  &::placeholder {
    color: #a0a0a0; /* A beautiful, soft, modern gray */
    font-weight: 400;
    opacity: 1; /* Fixes an issue where Firefox makes placeholders too faded */
    transition: opacity 0.3s ease;
  }

  /* WHAT HAPPENS WHEN THE USER CLICKS IN THE BOX */
  &:focus {
    outline: none; /* Removes the ugly default browser outline */
    border: 1px solid #EDB5B2; /* Changes to a solid pink border! */
    box-shadow: 0 0 8px rgba(237, 181, 178, 0.3); /* Adds a soft pink glow */
  }

  /* Fades the placeholder text slightly when clicked so the user knows they are ready to type */
  &:focus::placeholder {
    opacity: 0.99; 
  }

  @media screen and (max-width: 820px) {
    width: 300px;
  }
`;

export const FeedbackBox = styled.textarea`
  box-sizing: border-box;
  width: 568px;
  height: 150px;
  background: #f9f9f9;
  border: 1px dashed rgba(255, 194, 2, 0.5);
  border-radius: 8px;
  padding-left: 15px;
  padding-top: 15px; 
  margin-top: 5%;
  font-family: Sans-serif;
  font-size: 16px;
  color: #444;
  resize: vertical; 
  transition: all 0.3s ease;

  /* PREMIUM PLACEHOLDER STYLING */
  &::placeholder {
    color: #a0a0a0; 
    font-weight: 400;
    opacity: 1; 
    transition: opacity 0.3s ease;
  }

  /* WHAT HAPPENS WHEN THE USER CLICKS IN THE BOX */
  &:focus {
    outline: none;
    border: 1px solid #EDB5B2; 
    box-shadow: 0 0 8px rgba(237, 181, 178, 0.3); 
  }

  &:focus::placeholder {
    opacity: 0.99; 
  }

  @media screen and (max-width: 820px) {
    width: 300px;
  }
`;

/* BEAUTIFIED BUTTON: Added hover states, font styling, and soft shadows */
export const FeedbackBtn = styled.button`
  background: linear-gradient(135deg, #f7b2b0 0%, #ec4899 100%); /* Vibrant gradient */
  color: #FFFFFF;
  border-radius: 30px; /* Fully rounded pill shape */
  border: none;
  width: 35%;
  height: 54px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.5px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(236, 72, 153, 0.3); 
  transition: all 0.3s ease; 

  @media screen and (max-width: 820px) {
    width: 80%; /* Wider on mobile for easier tapping */
  }

  &:hover {
    background: linear-gradient(135deg, #f8c3c2 0%, #f064a9 100%); 
    transform: translateY(-3px); 
    box-shadow: 0 8px 25px rgba(236, 72, 153, 0.5); 
  }

  &:active {
    transform: translateY(2px); /* Physically presses down */
    box-shadow: 0 2px 10px rgba(236, 72, 153, 0.2); 
  }
`;

/* APPLIED EXACT REQUESTED CSS FOR THE MESSAGE */
export const Message = styled.p`
  margin-top: 20px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.3px;
  color: #444;
  text-align: center;
`;