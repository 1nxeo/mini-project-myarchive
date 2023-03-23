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
import WinInput from "../components/WinInput";
import WinButton from "../components/WinButton";

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

  // input onChange를 한번에 관리함
  const changeInputHandler = (event) => {
    const { value, name } = event.target;
    setPosts((old) => {
      return { ...old, [name]: value };
    });
  };

  // Posts 추가 함수
  const postsButtonClickHandler = async (e) => {
    e.preventDefault();
    if (posts.category !== "category") {
      await dispatch(
        __addPost({
          posts: posts,
          next: () => {
            navigate("/");
          },
        })
      );
      setPosts({
        url: "",
        title: "",
        category: "category",
        desc: "",
        isDone: false,
      });
    } else {
      alert("입력한 내용을 확인해주세요!");
    }
  };

  return (
    <Wrapper>
      <GlobalStyle />
      <WinWrapper
        style={{ width: "700px", height: "540px", marginTop: "120px" }}
      >
        <StForm onSubmit={postsButtonClickHandler}>
          <div style={{ marginBottom: "20px" }}>
            {" "}
            <div>URL</div>
            <input
              type="text"
              name="url"
              value={posts.url}
              onChange={changeInputHandler}
              required
              style={{
                fontFamily: "DungGeunMo, sans-serif",
                width: "300px",
                fontSize: "16.5px",
              }}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <div>카테고리</div>
            <select
              name="category"
              value={posts.category}
              onChange={changeInputHandler}
              style={{ fontSize: "16px" }}
            >
              <option>Category</option>
              <option value="cloth">Clothes</option>
              <option value="it">IT</option>
              <option value="acc">Acc</option>
              <option value="food">Food</option>
              <option value="pet">Pet</option>
              <option value="etc">Etc</option>
            </select>
          </div>
          <div style={{ marginBottom: "20px" }}>
            {" "}
            <div>title</div>
            <input
              type="text"
              name="title"
              value={posts.title}
              onChange={changeInputHandler}
              required
              style={{
                fontFamily: "DungGeunMo, sans-serif",
                width: "300px",
                fontSize: "16.5px",
              }}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <div>contents</div>
            <input
              type="text"
              name="desc"
              value={posts.desc}
              onChange={changeInputHandler}
              required
              style={{
                fontFamily: "DungGeunMo, sans-serif",
                width: "500px",
                fontSize: "16.5px",
                height: "200px",
              }}
            />
          </div>
          <div>
            <WinButton>post</WinButton>
            <WinButton onClick={() => navigate("/")}>cancel</WinButton>
          </div>
        </StForm>
      </WinWrapper>
    </Wrapper>
  );
}

export default Post;

const StForm = styled.form`
  width: 600px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* margin: 30px auto 30px auto; */
  /* border: 1px solid black; */
`;

const StInput = styled.input`
  font-family: "DungGeunMo", sans-serif;
  font-size: 17px;
`;
