import styled from "styled-components";

export const HeaderStyle = styled.header`
  background-color: #edd820;
  display: flex;
  justify-content: space-between;
  height: 27vh;
  align-items: center;
  padding: 1rem;

  img {
    width: 200px;
    height: 67px;
  }
`;

export const Section = styled.section`
  display: flex;
  width: 30vw;
  justify-content: space-evenly;

  img {
    width: 95px;
    height: 90px;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
  }
`;
