import styled from "styled-components";

export const Section = styled.section`
  background-color: #464646;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 2rem 0 2rem 0;
`;

export const Card = styled.div`
  //border: solid red;
  width: 45%;
  display: flex;
  justify-content: space-evenly;
  height: 12vh;
  align-items: center;
  margin: 0.5rem;
  border: solid rgb(237, 216, 32);
  padding: 1rem;
`;

export const H3Card = styled.h3`
  color: white;
  font-weight: 400;
  text-align: center;
`;

export const ImgCard = styled.img`
  width: 5vw;
`;

export const SectionSecond = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: #edd820;
`;

export const H2Second = styled.h2`
  display: flex;
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

export const CardSecond = styled.div`
  border: solid #464646;
  display: flex;
  width: 50%;
  justify-content: space-evenly;
  align-items: center;
  height: 14vh;
  margin-bottom: 0.5rem;
`;
export const H3Second = styled.h3`
  /* display: flex;s */
  /* color: #464646; */
`;

export const ImgCardSecond = styled.img`
  width: 5vw;
`;
