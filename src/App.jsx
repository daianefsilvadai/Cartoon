// import React from "react";

import Header from "./Components/Header/Header.jsx";
import Main from "./Components/Main/Main.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
}
`;

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
