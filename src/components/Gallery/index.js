import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer"; // Adjust this path if your Footer is somewhere else
import {
  GalleryContainer,
  TextWrapper,
  Heading,
  SubHeading,
  Description,
  GridWrapper,
  ImageCard,
  Img
} from "./GalleryElements";

// IMPORT YOUR IMAGES HERE (These are placeholders, update paths to your actual Assets)
import img1 from "../../Assets/Gallery/g1.png";
import img2 from "../../Assets/Gallery/g2.jpg";
import img3 from "../../Assets/Gallery/g3.jpg";
import img4 from "../../Assets/Gallery/g4.jpg";
import img5 from "../../Assets/Gallery/g5.jpg";
import img6 from "../../Assets/Gallery/g6.jpg";
import img7 from "../../Assets/Gallery/g7.jpg";
import img8 from "../../Assets/Gallery/g8.jpg";
import img9 from "../../Assets/Gallery/g9.jpg";
import img10 from "../../Assets/Gallery/g10.jpg";
import img11 from "../../Assets/Gallery/g11.jpg";
import img12 from "../../Assets/Gallery/g12.jpg";
import img13 from "../../Assets/Gallery/g13.jpg";
import img14 from "../../Assets/Gallery/g14.jpg";
import img15 from "../../Assets/Gallery/g15.jpg";
import img16 from "../../Assets/Gallery/g16.jpg";
import img17 from "../../Assets/Gallery/g17.jpg";
import img18 from "../../Assets/Gallery/g18.jpg";
import img19 from "../../Assets/Gallery/g19.jpg";
import img20 from "../../Assets/Gallery/g20.jpg";
import img21 from "../../Assets/Gallery/g21.jpg";
import img22 from "../../Assets/Gallery/g22.jpg";
import img23 from "../../Assets/Gallery/g23.jpg";
import img24 from "../../Assets/Gallery/g24.jpg";
import img25 from "../../Assets/Gallery/g25.jpg";
import img26 from "../../Assets/Gallery/g26.jpg";
import img27 from "../../Assets/Gallery/g27.jpg";
import img28 from "../../Assets/Gallery/g28.jpg";

const Gallery = () => {
  // This ensures the page scrolls to the top when it opens
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Array of images to map through
  // Array of images to map through
  const galleryImages = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, 
    img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, 
    img21, img22, img23, img24, img25, img26, img27, img28
  ];

  return (
    <>
      <Navbar />
      <GalleryContainer>
        <TextWrapper>
          <Heading>Gallery</Heading>
          <SubHeading>A Glimpse into Our Fur-tastic World!</SubHeading>
          <Description>
            Welcome to our gallery—where wagging tails, happy purrs, and adorable moments come to life!
          </Description>
        </TextWrapper>

        <GridWrapper>
          {galleryImages.map((image, index) => (
            <ImageCard key={index}>
              <Img src={image} alt={`Gallery pet ${index + 1}`} />
            </ImageCard>
          ))}
        </GridWrapper>
      </GalleryContainer>
      <Footer />
    </>
  );
};

export default Gallery;