import React from "react";
import Header from "../components/Header";
import Input from "../components/Input";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import GlobalStyle from "../GlobalStyle";

function Login() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Nav />
      <Header />
      Login
    </Wrapper>
  );
}

export default Login;
