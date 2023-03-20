import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import GlobalStyle from "../GlobalStyle";
import Category from "../components/Category";
import styled from "styled-components";

function Mypage() {
  const navigate = useNavigate();
  const member = useSelector((state) => state.members);
  const { id } = useParams();
  return (
    <Wrapper>
      <GlobalStyle />
      <Nav />
      <Category />
      <CardWrapper>
        <StCard>카드</StCard>
        <StCard>카드</StCard>
        <StCard>카드</StCard>
        <StCard>카드</StCard>
        <StCard>카드</StCard>
      </CardWrapper>
    </Wrapper>
  );
}

const CardWrapper = styled.div`
  width: 100%;
  /* border: 1px solid; */
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  margin: 0 auto;
  box-sizing: border-box;
`;

const StCard = styled.div`
  width: 235px;
  height: 300px;
  border: 1px solid;
  overflow: hidden;
  margin: 10px;
`;

export default Mypage;
