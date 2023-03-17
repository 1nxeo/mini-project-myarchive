import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import GlobalStyle from "../GlobalStyle";

function Home() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Nav />
      <Header />
      Home
    </Wrapper>
  );
}

export default Home;
