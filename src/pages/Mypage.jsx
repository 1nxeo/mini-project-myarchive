import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import GlobalStyle from "../GlobalStyle";

function Mypage() {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <Wrapper>
      <GlobalStyle />
      <Nav />
      <Header />
      Mypage
    </Wrapper>
  );
}

export default Mypage;
