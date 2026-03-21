import React from "react";
import "./Menu.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer";
import img1 from "../../Assets/MenuNew/Menu_page-0001.jpg";
import img2 from "../../Assets/MenuNew/Menu_page-0002.jpg";
import img3 from "../../Assets/MenuNew/Menu_page-0003.jpg";

const ImageGallery = () => {
  const images = [
    img1, img2, img3
  ];

  return (
    <>
    <Navbar />
    
    <div  className="imageContainer">
    <br></br>
      {images.map((imageUrl, index) => (
        
        <img
          key={index}
          src={imageUrl}
          alt="img"
          className="fullWidthImage"
        />
      ))}
    </div>
    <Footer />
    </>
  );
};

export default ImageGallery;
