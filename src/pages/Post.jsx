import React, { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import GlobalStyle from "../GlobalStyle";
import styled from "styled-components";
import Input from "../components/Input";
import Button from "../components/Button";
import Nav from "../components/Nav";
import { __addPost } from "../redux/modules/postSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cookies } from "../shared/cookies";
import WinWrapper from "../components/WinWrapper";
import { changeCates } from "../redux/modules/cateSlice";

function Post() {
  const token = cookies.get("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // input state를 한번에 관리함
  const [posts, setPosts] = useState({
    // accountId: '',
    url: "",
    title: "",
    category: "category",
    desc: "",
    isDone: false,
  });

  useEffect(() => {
    if (cookies.get("adminToken")) {
      cookies.remove("adminToken");
    }
    if (!token) {
      alert("로그인이 필요합니다!");
      navigate("/login");
    }
    return () => {
      dispatch(changeCates("notdone"));
    };
  }, []);

  console.log(posts.category);

  // input onChange를 한번에 관리함
  const changeInputHandler = (event) => {
    const { value, name } = event.target;
    setPosts((old) => {
      return { ...old, [name]: value };
    });
  };

  // Posts 추가 함수
  const postsButtonClickHandler = (e) => {
    e.preventDefault();
    if (posts.category !== "category") {
      dispatch(__addPost({ posts: posts }));
      // input 칸을 리셋함
      setPosts({
        url: "",
        title: "",
        category: "category",
        desc: "",
        isDone: false,
      });
      navigate("/");
    } else {
      alert("입력한 내용을 확인해주세요!");
    }
  };

  return (
    <Wrapper>
      <GlobalStyle />
      <WinWrapper>
        <StForm onSubmit={postsButtonClickHandler}>
          URL
          <Input
            type="text"
            name="url"
            value={posts.url}
            onChange={changeInputHandler}
            required
          ></Input>
          <br />
          카테고리
          <select
            name="category"
            value={posts.category}
            onChange={changeInputHandler}
          >
            <option>Category</option>
            <option value="cloth">Clothes</option>
            <option value="it">IT</option>
            <option value="acc">Acc</option>
            <option value="food">Food</option>
            <option value="pet">Pet</option>
            <option value="etc">Etc</option>
          </select>
          <br />
          제목
          <Input
            type="text"
            name="title"
            value={posts.title}
            onChange={changeInputHandler}
            required
          ></Input>
          <br />
          내용
          <Input
            type="text"
            name="desc"
            value={posts.desc}
            onChange={changeInputHandler}
            required
          ></Input>
          <br />
          <button>작성하기</button>
          <button onClick={() => navigate("/")}>뒤로가기</button>
        </StForm>
      </WinWrapper>
    </Wrapper>
  );
}

export default Post;

const StForm = styled.form`
  width: 1000px;
  height: 1000px;

  margin: 30px auto 30px auto;
  border: 1px solid black;
`;
