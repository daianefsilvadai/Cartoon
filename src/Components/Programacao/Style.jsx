import styled from "styled-components";

export const Section = styled.section`
  background-color: #464646;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 2rem 0 2rem 0;
`;

export const Card = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-evenly;
  height: 14vh;
  align-items: center;
  margin: 0.5rem;
  border: solid 1px #edd820;
  border-radius: 5px;
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
  padding: 1rem;
  background-color: #edd820;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const H2Second = styled.h2`
  display: flex;
  font-size: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  justify-content: center;
`;

export const CardSecond = styled.div`
  border: solid 1px #938b3e;
  background: rgb(232, 233, 34);
  background: linear-gradient(
    90deg,
    rgba(232, 233, 34, 0.5187889120491946) 17%,
    #e1cb0d 83%
  );

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 29vh;
  margin-bottom: 3.5rem;
  border-radius: 6px;
`;
export const H3Second = styled.h3`
  margin: 0.5rem;
`;

export const ImgCardSecond = styled.img`
  width: 5vw;
`;
