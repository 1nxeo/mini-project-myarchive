import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import GlobalStyle from "../GlobalStyle";
import Category from "../components/Category";
import styled from "styled-components";
import { cookies } from "../shared/cookies";
import { __getMemberPosts } from "../redux/modules/memberSlice";
import { CardsWrapper } from "./Home";
import Card from "../components/Card";
import { changeCates } from "../redux/modules/cateSlice";
import WinWrapper from "../components/WinWrapper";

function Mypage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { memberPosts, isLoading, error } = useSelector(
    (state) => state.members
  );
  const { posts } = useSelector((state) => state.posts);
  const { cates } = useSelector((state) => state.cate);
  const { accountId } = useParams();
  const memberPost = JSON.stringify(memberPosts);

  useEffect(() => {
    if (cookies.get("adminToken")) {
      cookies.remove("adminToken");
    }
    if (!cookies.get("token")) {
      alert("로그인이 필요한 페이지입니다.");
      navigate("/");
    } else {
      dispatch(__getMemberPosts());
      dispatch(changeCates("notdone"));
    }
    return () => {
      dispatch(changeCates("notdone"));
    };
  }, [memberPost]);

  return (
    <Wrapper>
      <GlobalStyle />
      <WinWrapper>
        <Nav />
        <Category />
        <CardsWrapper>
          {cates == "notdone"
            ? posts?.map((item) =>
                item.accountId === accountId ? (
                  <Card key={item.id} item={item} />
                ) : null
              )
            : null}
          {cates
            ? memberPosts.notdone?.map((item) =>
                item.category == cates ? (
                  <Card key={item.id} item={item} />
                ) : null
              )
            : null}
          {cates == "done"
            ? memberPosts.done?.map((item) => (
                <Card key={item.id} item={item} />
              ))
            : null}
          {/* {cates == "done"
            ? posts?.map((item) =>
                item.isDone && item.accountId == accountId ? (
                  <Card key={item.id} item={item} />
                ) : null
              )
            : null} */}
        </CardsWrapper>
      </WinWrapper>
    </Wrapper>
  );
}

export default Mypage;
