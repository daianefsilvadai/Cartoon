import styled from "styled-components";

export const HeaderStyle = styled.header`
  /* border: solid blue; */
  background-color: #edd820;
  display: flex;
  height: 20vh;
  justify-content: space-between;
  padding-left: 2rem;
  align-items: center;

  /* @media(min-width:360px) */
`;
export const ImgLogo = styled.img`
  width: 15vw;
`;

export const Section = styled.section`
  /* border: solid green; */
  display: flex;
  width: 30%;
  justify-content: space-evenly;
`;

export const Div = styled.div`
  /* border: solid pink; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImgControl = styled.img`
  width: 5vw;
`;

export const ImgClock = styled.img`
  width: 5vw;
`;

export const Subtitle = styled.h2`
  font-family: Roboto, sans-serif;
  font-weight: 500;
`;
