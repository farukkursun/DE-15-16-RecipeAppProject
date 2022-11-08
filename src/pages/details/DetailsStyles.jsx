import styled from "styled-components";

export const DetailContainer = styled.div`
  /* en dış container */
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  background: #00adb5;
  min-height: calc(100vh - 75px);
  /* height: fit-content; */
  padding: 5px;
`;

export const DetailPart = styled.div`
  /* verilerin , içindekiler,resim ve Nutrients in yazdığı yer */
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* flex-wrap: wrap; */
  align-items: center;
  margin: 1rem;
  border: 1px solid white;
  border-radius: 5px;
  background-color: #e1f1dd;
  /* background-color: #e1f1dd; */
  /* height: calc(100vh - 300px); */
  @media (max-width: 750px) {
    justify-content: center;
    flex-direction: column;
    border: 1px solid red;
    padding: 0.5rem;
  }
`;

export const ImgContainer = styled.div`
  /* resmin div i */
  background-color:#e1f1dd;

  
  padding: 10px;
  border-radius: 3px;
  margin: 2rem;
  img {
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const HeaderContainer = styled.div`
  /* üstteki başlık ve kadın resmi */
  background-color: #e1f1dd;

  display: flex;
  justify-content: space-evenly;
  margin: 25px;
  font-size: 3rem;
  h1 {
    font-size: 3rem;
  }
  img {
    width: 200px;
  }
`;

export const IngredContainer = styled.div`
  /* alttaki bilgiler, içindekiler */
  width: 400px;
  font-size: 1rem;
  margin-left: 2rem;
  background-color: lightgray;
`;

export const OtherPart = styled.div`
  /* üstteki bilgiler */
  background-color: lightgray;
margin-right: 2rem;
  width: 200px;
  text-align: center;
  font-size: 1rem;
  
`;
export const DetailsButton = styled.button`
  /* view more  buton */
  background-color:  #02475e;
  color: white;
  padding: 1rem;
  /* outline: none; */
  
  border: none;
 
  border-radius: 3px;
  cursor: pointer;
`;
export const Anadiv= styled.div`
text-align: center;


`