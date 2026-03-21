import React, { useState } from "react";
import emailjs from "emailjs-com";
import vector from "../../../../Assets/Feedback/Vector.webp";
import vector2 from "../../../../Assets/Feedback/Vector2.webp";

import {
  Container,
  Vector,
  LeftPane,
  MiddlePane,
  RightPane,
  Heading,
  SubText,
  TextBox,
  FeedbackBox,
  FeedbackBtn,
  Message,
} from "./FeedbackElements";

const Feedback = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const messageHandler = (event) => {
    setMessage(event.target.value);
  };

  const submit = (e) => {
    e.preventDefault();

    let templateParams = {
      name: name,
      message: message,
    };

    emailjs.send('service_b9j5yqt', 'template_ccttw9b', templateParams, 'CLFW3seFq9MBl4_Rc')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatusMessage("Thank you! Your feedback has been sent successfully.");
        setName("");
        setMessage("");
      }, (error) => {
        console.error('FAILED...', error);
        setStatusMessage("Oops! There was an error sending your feedback. Please try again later.");
      });
  };

  return (
    <>
      <Container>
        <LeftPane>
          <Vector src={vector2} />
        </LeftPane>
        <MiddlePane>
          <Heading>We're All Ears!</Heading>
          <SubText>Tell Us About Your Pet Experience</SubText>
          <TextBox
            type="text"
            id="name"
            placeholder="Pet parent’s name"
            value={name}
            onChange={nameHandler}
          />
          <FeedbackBox
            type="text"
            id="message"
            placeholder="Write your experience here..."
            value={message}
            onChange={messageHandler}
          />
          <br />
          <FeedbackBtn type="button" onClick={submit}>
            <h3>Share your feedback!</h3>
          </FeedbackBtn>
          {statusMessage && <Message>{statusMessage}</Message>}
        </MiddlePane>
        <RightPane>
          <Vector src={vector} />
        </RightPane>
      </Container>
    </>
  );
};

export default Feedback;
