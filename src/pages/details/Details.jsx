import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import dietSvg from "../../assets/diet.svg";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { DetailContainer, DetailPart, DetailsButton, HeaderContainer, ImgContainer, IngredContainer, OtherPart } from "./DetailsStyles";



const Details = () => {
  const location = useLocation()
  const detay = location.state.recipe1
  const navigate = useNavigate()
  return <div>
<Navbar />
   <DetailContainer>
    <HeaderContainer>
      <h1>{detay.label}</h1>
      <img src={dietSvg} alt="" />
    </HeaderContainer>
    <DetailPart>
      <OtherPart>

      </OtherPart>
      <ImgContainer>
        <img src={detay.image} alt="" />
      </ImgContainer>
      <IngredContainer>

      </IngredContainer>
    <DetailsButton onClick={()=> navigate(-1)} >geri</DetailsButton>
    </DetailPart>
  </DetailContainer>;
  <Footer />
  </div>
};

export default Details;
