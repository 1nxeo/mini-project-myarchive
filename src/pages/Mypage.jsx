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

function Mypage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { members, isLoading, error } = useSelector((state) => state.members);
  const { cates } = useSelector((state) => state.cate);
  const { accountId } = useParams();
  const memberPost = { ...members };

  console.log("notdone", memberPost.notdone);

  useEffect(() => {
    if (!cookies.get("token")) {
      alert("로그인이 필요한 페이지입니다.");
      navigate("/");
    } else {
      dispatch(__getMemberPosts());
    }
    return () => {
      // dispatch(changeCates("all"));
    };
  }, [cates]);

  return (
    <Wrapper>
      <GlobalStyle />
      <Nav />
      <Category />
      <CardsWrapper>
        {memberPost.notdone?.map((item) => (
          <Card key={item.id} item={item} />
        ))}
        {/* {memberPost.notdone?.filter((item) =>
          item.category === `${cates}` ? (
            <Card key={item.id} item={item} />
          ) : null
        )} */}
        {memberPost.done?.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </CardsWrapper>
    </Wrapper>
  );
}

export default Mypage;
