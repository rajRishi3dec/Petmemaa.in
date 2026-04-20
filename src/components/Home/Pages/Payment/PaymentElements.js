import styled from "styled-components";

export const PaymentContainer = styled.div`
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  width: 100%;
  margin-top:-100px`;

export const TitleContainer = styled.div`
  text-align: center;
  max-width: 800px;
  margin-bottom: 10px;
`;

export const Title = styled.h1`
  font-size: 42px;
  color: #1a202c; 
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 6px; 

  @media screen and (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 8px; 
  }
`;



export const PaymentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  gap: 40px;
  max-width: 1200px; /* Increased to fit wider cards if you have multiple */
  width: 100%;
  margin-top: 40px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PaymentCard = styled.div`
  background: #fbf6fd; /* Soft purple/pink background matching Offers */
  border-radius: 24px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  flex: 1;
  max-width: 700px; /* Increased to fit side-by-side content comfortably */
  width: 100%;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardTitle = styled.h2`
  font-size: 24px;
  color: #ec4899; /* Vibrant Pink */
  margin-bottom: 25px;
  font-weight: 600;
  text-align: center;
`;

/* ----- NEW SIDE-BY-SIDE LAYOUT COMPONENTS ----- */

export const QRLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 100%;

  /* Stacks them vertically on mobile screens automatically */
  @media screen and (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const QRTextContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 320px; /* Increased width so the sentences flow better */
  
  p {
    color: #11151c; /* Darkened the text for much better contrast */
    line-height: 1.6;
    font-size: 20px; /* Increased to the standard, more readable web size */
    font-weight: 900; /* Adds a slight thickness to the letters */
    margin-bottom: 20px;
    letter-spacing: 0.3px; /* Gives the letters just a tiny bit of breathing room */
  }

  @media screen and (max-width: 600px) {
    text-align: center;
    align-items: center;
    max-width: 100%; /* Lets it take up the full width on mobile devices */
    
    p {
      font-size: 15px; /* Slightly scaled back for smaller screens */
    }
  }
`;

/* ----- UPDATED QR BOX (Removed bottom margin for row layout) ----- */
export const QRCodeBox = styled.div`
  background: #ffffff;
  border: 2px dashed #fca5a5;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0; 
  padding: 10px; /* Gives a nice little breathing room inside the dashed border */
  overflow: hidden;

  img {
    max-width: 100%; /* Ensures it doesn't break out of the card on small screens */
    height: auto;    /* Shows the image fully without clipping or stretching */
    display: block;
    border-radius: 8px; /* Optional: slightly rounds the image corners to match */
  }
`;

export const DetailRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 15px;
  text-align: center;
  background: #ffffff;
  padding: 12px;
  border-radius: 12px;
`;

export const DetailLabel = styled.span`
  font-size: 13px;
  color: #718096;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 4px;
`;

export const DetailValue = styled.span`
  font-size: 16px;
  color: #2d3748;
  font-weight: 600;
`;