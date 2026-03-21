import React from "react";
import customers1 from "../../../../Assets/Customers/customers1.webp";
import customers2 from "../../../../Assets/Customers/customers2.webp";
import customers3 from "../../../../Assets/Customers/customers3.webp";
import customers4 from "../../../../Assets/Customers/customers4.webp";
import customers5 from "../../../../Assets/Customers/customers5.webp";
import colon from "../../../../Assets/Customers/colon.webp";
import {
  SubText,
  CustomersContainer,
  CustomersWrapper,
  CustomersRow,
  Column1,
  Column2,
  Column3,
  Column4,
  Column5,
  Column6,
  ImgWrap,
  ImgContainer,
  ContentContainer,
  Colon,
} from "./CustomersElements";
import { Title } from "../Dining/DiningElements";
import { FaHeart } from "react-icons/fa";

const Customers = () => {
  // const [feedback, setFeedback] = useState([]);

  // useEffect(() => {
  //   fetch("http://216.48.185.242:8200/api/fetchServices")
  //     .then((res) => res.json())
  //     .then((resJson) => {
  //       console.log(resJson);
  //       setFeedback(resJson.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching services:", error);
  //     });
  // }, []);

  return (
    <>
      <CustomersContainer>
        <CustomersWrapper>
          <CustomersRow>
            <Column1>
              <Title>
                <b>What our</b> <FaHeart style={{ color: "red" }} /> <b>customers say!</b>
              </Title>
            </Column1>
            <Column2>
              <ImgContainer>
                <ImgWrap src={customers1}></ImgWrap>
              </ImgContainer>
              <ContentContainer>
                <Colon src={colon}></Colon>
                <SubText>
                  Pet Me Maa is the safest place for my baby 🏻 it is actually
                  the second home to Cooper. In today’s scenario, getting too
                  many news about animal abuse, hence it is very difficult to
                  trust any place. But luckily, we found the best and safest
                  place for Cooper. Even we also enjoy going there because of
                  great food and amazing people out there. Cooper loves you guys
                </SubText>
                <SubText>
                  <b>- Rashi Patel</b>
                </SubText>
              </ContentContainer>
            </Column2>

            <Column3>
              <ImgContainer>
                <ImgWrap src={customers2}></ImgWrap>
              </ImgContainer>
              <ContentContainer>
                <Colon src={colon}></Colon>
                <SubText>
                  {" "}
                  Pet Me Maa is a wonderful place for your fur baby. My fur baby
                  Charlie loves it and has a lot of fun regularly. The owners of
                  the place have true affection for furry kids. They have given
                  the best facilities including a Vet, grooming, store and cafe
                  on the premises as well. :)
                </SubText>
                <SubText>
                  <b>- Shweta Khandelwal</b>
                </SubText>
              </ContentContainer>
            </Column3>
            <Column4>
              <ImgContainer>
                <ImgWrap src={customers3}></ImgWrap>
              </ImgContainer>
              <ContentContainer>
                <Colon src={colon}></Colon>
                <SubText>
                  {" "}
                  Amazing place for my babby ❤️ I am a kind of a person who
                  doesn’t trust anyone when it comes to my baby Dodo 🐕‍ so we
                  took him there for a little funn. But! Let me tell you the
                  moment we entered Pet me Maa it was them welcoming dodo like
                  there own babby taking care of him and started with cleaning
                  his paws, rewarding him with treats and introducing him to
                  other furr babies 💕 It felt so special to see them taking
                  care of him like family I would love to visit them again n
                  again as dodo was so happy to be there ❤️
                </SubText>
                <SubText>
                  <b>- Tashu Sneha</b>
                </SubText>
              </ContentContainer>
            </Column4>

            <Column5>
              <ImgContainer>
                <ImgWrap src={customers4}></ImgWrap>
              </ImgContainer>
              <ContentContainer>
                <Colon src={colon}></Colon>
                <SubText>
                  {" "}
                  Great initiative for pet lovers. They took very good care of
                  my kid. Now I don't need to search any other creche for my
                  dog. I have you people and I can blindly trust you. My kid
                  loves you equally 😍
                </SubText>
                <SubText>
                  <b>- Sudipta dass</b>
                </SubText>
              </ContentContainer>
            </Column5>
            <Column6>
              <ImgContainer>
                <ImgWrap src={customers5}></ImgWrap>
              </ImgContainer>
              <ContentContainer>
                <Colon src={colon}></Colon>
                <SubText>
                  {" "}
                  Pet me Maa is Bella's second home now. It's luxurious for
                  pets. Food is amazing in the cafe. Good for family outing or
                  dates. Bella is a 7 months old Indian puppy. She learned how
                  to socialize with other dogs here. It's a safe and hygienic
                  place. A team of professionals including trainers, animal
                  behaviourists , animal lovers and groomers will make sure that
                  your pet remains healthy and happy all the time. The kind of
                  dedication and hardwork Priyanka and her team members are
                  putting are admirable. Would love to recommend to everyone.
                  Ample parking space is there. Big lawns, awesome food and care
                  takers. Much love to Pet me Maa and more power to the team.
                </SubText>
                <SubText>
                  <b>- Sanskriti Singh</b>
                </SubText>
              </ContentContainer>
            </Column6>
          </CustomersRow>
        </CustomersWrapper>
      </CustomersContainer>
    </>
  );
};

export default Customers;
