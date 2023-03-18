import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

function Nav() {
  const navigate = useNavigate();
  return (
    <StNav>
      <button onClick={() => navigate("/login")}>로그인</button>
      <button style={{ width: "70px" }} onClick={() => navigate("/register")}>
        회원가입
      </button>
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
