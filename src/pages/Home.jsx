import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import GlobalStyle from "../GlobalStyle";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getPost } from "../redux/modules/postSlice";
import { useEffect } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import Category from "../components/Category";
import styled from "styled-components";
import ErrorMessage from "../components/ErrorMessage";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { posts, isLoading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(__getPost());
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <ErrorMessage>{error.message}</ErrorMessage>;
  }

  return (
    <Wrapper>
      <GlobalStyle />
      <Nav />
      <Header />
      <ContentNav>
        <Category />
        <Button onClick={() => navigate("/post")}>글쓰기</Button>
      </ContentNav>
      <Card post={posts} />
    </Wrapper>
  );
}

const ContentNav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  align-items: center;
`;

export default Home;
