import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import { cookies } from "../shared/cookies";

function Nav() {
  const navigate = useNavigate();

  const accountId = cookies.get("accountId");
  const logoutUserHandler = () => {
    cookies.remove("token");
    cookies.remove("accountId");
    alert("로그아웃 성공!");
  };

  return (
    <StNav>
      <Button onClick={() => navigate("/login")}>로그인</Button>
      <Button style={{ width: "70px" }} onClick={() => navigate("/register")}>
        회원가입
      </Button>
      <Button
        onClick={() => {
          navigate(`/mypage/${accountId}`);
        }}
      >
        마이페이지
      </Button>
      <Button onClick={logoutUserHandler}>로그아웃</Button>
    </StNav>
  );
}

const StNav = styled.div`
  width: 95%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* border: 1px solid; */
  margin-top: 10px;
`;

export default Nav;
