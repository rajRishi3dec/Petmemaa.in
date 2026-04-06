import React from "react";
import {
  PaymentContainer,
  TitleContainer,
  Title,
  PaymentWrapper,
  PaymentCard,
  QRCodeBox,
  QRLayout,
  QRTextContent
} from "./PaymentElements";

import qrCodeImage from "../../../../Assets/Payment/paytm.png";

const Payments = () => {
  return (
    <PaymentContainer id="payment">
      <TitleContainer>
        <Title>Make a Payment</Title>
      </TitleContainer>

      <PaymentWrapper>
        <PaymentCard>
          <QRLayout>
            {/* LEFT SIDE: The active QR Code */}
            <QRCodeBox>
              <img src={qrCodeImage} alt="Paytm QR Code" />
            </QRCodeBox>

            {/* RIGHT SIDE: The Text and UPI ID */}
            <QRTextContent>
              <p>
                ACCOUNT NO : 10158168539
                IDFC Bank
                IFSC : IDFB0021413
                ACCOUNT BRANCH :
                CROSSING REPUBLIC - GHAZIABAD BRANCH
              </p>
              
              
            </QRTextContent>
          </QRLayout>
        </PaymentCard>
      </PaymentWrapper>
    </PaymentContainer>
  );
};

export default Payments;