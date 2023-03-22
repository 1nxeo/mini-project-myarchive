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
import { cookies } from "../shared/cookies";
import WinWrapper from "../components/WinWrapper";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { posts, isLoading, error } = useSelector((state) => state.posts);
  // const { users } = useSelector((state) => state.users);
  const { cates } = useSelector((state) => state.cate);
  const postList = JSON.stringify(posts);
  // const token = cookies.get("token");
  const postItems = [...posts];

  const nick = cookies.get("nick");

  console.log("posts = ", posts);
  console.log("postItems =", postItems);

  useEffect(() => {
    if (cookies.get("adminToken")) {
      cookies.remove("adminToken");
    }
    dispatch(__getPost());
  }, [postList, nick]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <ErrorMessage>{error.message}</ErrorMessage>;
  }

  return (
    <Wrapper>
      <WinWrapper>
        <GlobalStyle />
        <Nav />
        {/* <Header /> */}
        <ContentNav>
          <Category />
          <button onClick={() => navigate("/post")}>글쓰기</button>
        </ContentNav>
        <CardsWrapper>
          {cates == "notdone"
            ? posts?.map((item) => <Card key={item.postId} item={item} />)
            : null}
          {posts?.map((item) =>
            item.category == cates ? (
              <Card key={item.postId} item={item} />
            ) : null
          )}
          {cates == "done"
            ? posts?.map((item) =>
                nick === item.nick && item.isDone ? (
                  <Card key={item.postId} item={item} />
                ) : null
              )
            : null}
        </CardsWrapper>
      </WinWrapper>
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
