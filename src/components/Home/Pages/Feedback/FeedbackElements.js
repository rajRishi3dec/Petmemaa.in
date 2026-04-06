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
  font-weight: 600;
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
  background: #EDB5B2; /* Soft pink */
  color: #FFFFFF;
  border-radius: 25px;
  border: none;
  width: 35%;
  height: 50px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
  
  /* Smooth animations */
  box-shadow: 0 4px 10px rgba(237, 181, 178, 0.4); 
  transition: all 0.3s ease; 

  @media screen and (max-width: 820px) {
    width: 60%;
  }

  /* What happens when the mouse touches it */
  &:hover {
    background: #e59a97; 
    transform: translateY(-3px); /* Lifts up slightly */
    box-shadow: 0 8px 15px rgba(237, 181, 178, 0.6); 
  }

  /* What happens when clicked */
  &:active {
    transform: translateY(1px); /* Pushes down */
    box-shadow: 0 2px 5px rgba(237, 181, 178, 0.3); 
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