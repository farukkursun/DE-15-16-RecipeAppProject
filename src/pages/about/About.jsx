import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./AboutStyles";
import codingsvg from "../../assets/coding.svg";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const About = () => {
  return (
    <div>
    <Navbar />
    <AboutContainer>
    
      <StyledImage src={codingsvg} />
      <span>About Frontend Developer Faruk</span>
      <HeaderContainer></HeaderContainer>
      <InfoContainer>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
        cupiditate quis dolor, rem nemo nesciunt iure aliquam magnam ullam
        doloremque?
      </InfoContainer>
    </AboutContainer>
    <Footer />
    </div>
  );
};

export default About;
