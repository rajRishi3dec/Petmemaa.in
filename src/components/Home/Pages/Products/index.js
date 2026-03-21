import React from "react";
import { useNavigate } from "react-router-dom";
import products1 from "../../../../Assets/Products/Product1.webp";
import products2 from "../../../../Assets/Products/Products2.webp";
import products3 from "../../../../Assets/Products/Products3.webp";
import {
  ProductsContainer,
  ProductsWrapper,
  ServicesRow,
  Column1,
  Column2,
  Column3,
  Column4,
  Column5,
  Column6,
  Column7,
  Column8,
  TitleProducts,
  GetNowBtn,
  StyledLink,
} from "./ProductsElements";

import { Title, SubText, TitleContainer } from "../Services/ServiceElements";

const Products = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/products`;
    navigate(path);
  };

  return (
    <>
      <TitleContainer>
        <Title>Our Products</Title>
        <SubText>
          Lorem Ipsum Text bla bla and some more text here and there
        </SubText>
      </TitleContainer>

      <ProductsContainer>
        <ProductsWrapper>
          <ServicesRow>
            <Column1>
              <img src={products1} style={{ width: "100%" }} alt="products1" />
              <SubText>Himalyan</SubText>
              <TitleProducts>Healthy PET food</TitleProducts>
              <GetNowBtn onClick={routeChange}>Get Now</GetNowBtn>
            </Column1>

            <Column2>
              <img src={products2} style={{ width: "100%" }} alt="products1" />
              <SubText>Himalyan</SubText>
              <TitleProducts>Healthy PET food</TitleProducts>
              <GetNowBtn onClick={routeChange}>Get Now</GetNowBtn>
            </Column2>

            <Column3>
              <img src={products3} style={{ width: "100%" }} alt="products1" />
              <SubText>Himalyan</SubText>
              <TitleProducts>Healthy PET food</TitleProducts>
              <GetNowBtn onClick={routeChange}>Get Now</GetNowBtn>
            </Column3>

            <Column4>
              <img src={products1} style={{ width: "100%" }} alt="products1" />
              <SubText>Himalyan</SubText>
              <TitleProducts>Healthy PET food</TitleProducts>
              <GetNowBtn onClick={routeChange}>Get Now</GetNowBtn>
            </Column4>

            <Column5>
              <img src={products2} style={{ width: "100%" }} alt="products1" />
              <SubText>Himalyan</SubText>
              <TitleProducts>Healthy PET food</TitleProducts>
              <GetNowBtn onClick={routeChange}>Get Now</GetNowBtn>
            </Column5>

            <Column6>
              <img src={products3} style={{ width: "100%" }} alt="products1" />
              <SubText>Himalyan</SubText>
              <TitleProducts>Healthy PET food</TitleProducts>
              <GetNowBtn onClick={routeChange}>Get Now</GetNowBtn>
            </Column6>

            <Column7>
              <img src={products1} style={{ width: "100%" }} alt="products1" />
              <SubText>Himalyan</SubText>
              <TitleProducts>Healthy PET food</TitleProducts>
              <GetNowBtn onClick={routeChange}>Get Now</GetNowBtn>
            </Column7>

            <Column8>
              <img src={products2} style={{ width: "100%" }} alt="products1" />
              <SubText>Himalyan</SubText>
              <TitleProducts>Healthy PET food</TitleProducts>
              <GetNowBtn onClick={routeChange}>Get Now</GetNowBtn>
            </Column8>
          </ServicesRow>
          <StyledLink to="/products">View all Products</StyledLink>
        </ProductsWrapper>
      </ProductsContainer>
    </>
  );
};

export default Products;
