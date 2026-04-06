import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  TestimonialContainer,
  TitleContainer,
  Title,
  SubText,
  SliderWrapper,
  ReviewCard,
  Stars,
  ReviewText,
  GoogleLogo,
  ReviewerName
} from "./TestimonialElements";

// Using a standard Google "G" logo URL for now. 
// You can replace this with a local image import if you have one in your Assets folder!
// Highly reliable URL for the Google logo
const googleIcon = "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png";
const Testimonials = () => {
  // Slider settings for auto-playing, centered carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,           // Transition speed
    slidesToShow: 3,      // Show 3 cards at a time
    slidesToScroll: 1,
    centerMode: true,     // Highlights the middle card
    centerPadding: "0px",
    autoplay: true,       // Auto-scrolls
    autoplaySpeed: 3000,  // Pauses for 3 seconds before moving
    rtl: false,           // Set to true if you strictly want Right-to-Left movement
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "40px",
        }
      }
    ]
  };

  // Array of 5 reviews
  const reviews = [
    {
      id: 1,
      name: "Jigyasa Singh",
      text: "Left my dogs at pet me maa for 2 days and couldn’t be happier! The staff was super caring and attentive—kept me updated with pics and made sure my pups were comfortable and happy. Truly felt like a home away from home for them. Highly recommend!"
    },
    {
      id: 2,
      name: "Sonali Verma",
      text: "I had an amazing experience at Pet Me Maa when I took my dog for grooming! The staff was incredibly friendly, welcoming, and very caring towards my dog, making him feel right at home. After his grooming session, he looked fantastic—clean, fresh-smelling, and absolutely happy! It’s clear they truly love and care for the animals they take care of."
    },
    {
      id: 3,
      name: "Priyanka Singh",
      text: "Pet Me Maa is truly a home away from home for my 2 fur babies! I was skeptical at first, but the care and love they received exceeded my expectations. For 7 blissful days, my Shitzus were treated like royalty - fed well, pampered, and showered with attention."
    },
    {
      id: 4,
      name: "Manish Gogoi",
      text: "I recently visited the pet stay & grooming center, and it exceeded all my expectations! The staff are friendly, professional, and truly care about the pets. The facility is clean, spacious, and well-organized."
    },
    {
      id: 5,
      name: "Komal Sahay",
      text: "This pet boarding is truly a home away from home for every pet. I had an amazing experience with this dog boarding! They took such great care of my dog and kept me updated with photos and messages. It gave us complete peace of mind while we were away. Highly recommended to anyone looking for a safe and loving place for their pet."
    },
    {
      id: 6,
      name: "Rashi Patel",
      text: "Pet Me Maa is the safest place for my baby it is actually the second home to Cooper. In today’s scenario, getting too many news about animal abuse, hence it is very difficult to trust any place. But luckily, we found the best and safest place for Cooper. Even we also enjoy going there because of great food and amazing people out there. Cooper loves you guys"
    },
    {
      id: 7,
      name: "Shweta Khandelwal",
      text: "Pet Me Maa is a wonderful place for your fur baby. My fur baby Charlie loves it and has a lot of fun regularly. The owners of the place have true affection for furry kids. They have given the best facilities including a Vet, grooming, store and cafe on the premises as well."
    },
    {
      id: 8,
      name: "Tashu Sneha",
      text: "Amazing place for my babby ❤️ I am a kind of a person who doesn’t trust anyone when it comes to my baby Dodo 🐕‍ so we took him there for a little funn. But! Let me tell you the moment we entered Pet me Maa it was them welcoming dodo like there own babby taking care of him and started with cleaning his paws, rewarding him with treats and introducing him to other furr babies 💕"
    },
    {
      id: 9,
      name: "Sudipta Dass",
      text: "Great initiative for pet lovers. They took very good care of my kid. Now I don't need to search any other creche for my dog. I have you people and I can blindly trust you. My kid loves you equally 😍"
    },
    {
      id: 10,
      name: "Sanskriti Singh",
      text: "Pet me Maa is Bella's second home now. It's luxurious for pets. Food is amazing in the cafe. Good for family outing or dates. Bella is a 7 months old Indian puppy. She learned how to socialize with other dogs here. It's a safe and hygienic place. A team of professionals including trainers, animal behaviourists , animal lovers and groomers will make sure that your pet remains healthy and happy all the time."
    }
  ];

  return (
    /* id="testimonial" connects this to the Navbar HashLink */
    <TestimonialContainer id="testimonial">
      <TitleContainer>
        <Title>What our customers say!</Title>
        <SubText>Hear It From Those Who Trust Us Most</SubText>
      </TitleContainer>

      <SliderWrapper>
        <Slider {...settings}>
          {reviews.map((review) => (
            <div key={review.id}>
              <ReviewCard>
                <Stars>★★★★★</Stars>
                <ReviewText>"{review.text}"</ReviewText>
                <div>
                  <GoogleLogo src={googleIcon} alt="Google Review" />
                  <ReviewerName>{review.name}</ReviewerName>
                </div>
              </ReviewCard>
            </div>
          ))}
        </Slider>
      </SliderWrapper>
    </TestimonialContainer>
  );
};

export default Testimonials;