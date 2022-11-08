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

        <HeaderContainer>
          <h1>About Frontend Developer<span> Faruk</span> </h1> 
        </HeaderContainer>
        <InfoContainer>
        <h2>Hi, I'am Faruk Kursun</h2>
        <h3>I'm currently learning Frontend Development Languages.</h3>
        <h4>
          I've already known JS, ReactJS, ReactNative, SQL, Python.
            
        </h4>
        <h3>
          <a href="mailto:kursunomerfaruk2@gmail.com">Send email</a> :
          kursunomerfaruk2@gmail.com
        </h3>
        </InfoContainer>
      </AboutContainer>
      <Footer />
    </div>
  );
};

export default About;
