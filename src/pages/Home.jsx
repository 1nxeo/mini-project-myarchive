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
  // const { users } = useSelector((state) => state.users);
  const { cates } = useSelector((state) => state.cate);
  const postList = JSON.stringify(posts);

  console.log(cates);

  // const cateList =
  // switch (postList.category) {
  //   case "cloth":
  //     return ;
  //     case "it":
  //       return ;
  //       case "acc":
  //         return ;
  //         case "":
  //           return ;
  //   default:
  //     return;
  // }

  // const loginStatus = users.isLogin;

  useEffect(() => {
    dispatch(__getPost());
  }, [postList]);

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
      <CardsWrapper>
        {posts?.map((item) =>
          item.category == cates ? <Card key={item.id} item={item} /> : null
        )}
      </CardsWrapper>
    </Wrapper>
  );
}

const ContentNav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  align-items: center;
`;
export const CardsWrapper = styled.div`
  width: 1000px;
  min-width: none;
  min-height: none;

  display: flex;
  flex-wrap: wrap;
  justify-content: left;

  gap: 20px;
`;

export default Home;
