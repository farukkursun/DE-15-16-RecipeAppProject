import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import dietSvg from "../../assets/diet.svg";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import {
  Anadiv,
  DetailContainer,
  DetailPart,
  DetailsButton,
  HeaderContainer,
  ImgContainer,
  IngredContainer,
  OtherPart,
} from "./DetailsStyles";

const Details = () => {
  const location = useLocation();
  const detay = location.state.recipe1;
  const navigate = useNavigate();
  console.log(detay);
  return (
    <Anadiv>
      <Navbar />
      <DetailContainer>
        <HeaderContainer>
          <h1>{detay.label}</h1>
          <img src={dietSvg} alt="" />
        </HeaderContainer>
        <DetailPart>
          <OtherPart>
            <p>Healtlabels</p>
            {detay.healthLabels.slice(0,5).map((i, index) => (
              <div key={index}>
                <p>{i}</p>
              </div>
            ))}
          </OtherPart>
          <ImgContainer>
            <img src={detay.image} alt="" />
          </ImgContainer>
          <IngredContainer>
            {detay.ingredientLines.map((i, index) => (
              <div key={index}>
                <p>{i}</p>
              </div>
            ))}
          </IngredContainer>
        </DetailPart>
        
      </DetailContainer>
      <DetailsButton onClick={() => navigate(-1)}>HOME</DetailsButton>
      <Footer />
    </Anadiv>
  );
};

export default Details;
