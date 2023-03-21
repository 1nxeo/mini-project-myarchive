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
  const { memberPosts, isLoading, error } = useSelector(
    (state) => state.members
  );
  const { cates } = useSelector((state) => state.cate);
  const { accountId } = useParams();
  const memberPost = JSON.stringify(memberPosts);

  console.log("category", cates);
  console.log(memberPosts);

  useEffect(() => {
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
  }, []);

  return (
    <Wrapper>
      <GlobalStyle />
      <Nav />
      <Category />
      <CardsWrapper>
        {cates == "notdone"
          ? memberPosts.notdone?.map((item) => (
              <Card key={item.id} item={item} />
            ))
          : null}
        {cates
          ? memberPosts.notdone?.map((item) =>
              item.category == cates ? <Card key={item.id} item={item} /> : null
            )
          : null}
        {cates == "done"
          ? memberPosts.done?.map((item) => <Card key={item.id} item={item} />)
          : null}
      </CardsWrapper>
    </Wrapper>
  );
}

export default Mypage;
