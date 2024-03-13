import styled from "styled-components";

export const FooterStyle = styled.footer`
  display: flex;
  background-color: #211921;
  height: 20vh;
  align-items: center;
  padding: 2rem;
`;

export const SectionFirst = styled.section`
  color: #ffffff;
  width: 100%;
  display: flex;
  height: 8vh;
  display: flex;

  img {
    width: 300px;
  }
`;

export const DivFirst = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;

  p {
    font-size: 20px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
  }
`;

export const DivSecond = styled.div`
  display: flex;
  gap: 1rem;

  img {
    width: 60px;
  }
`;
