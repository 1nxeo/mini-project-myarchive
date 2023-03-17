import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

function Nav() {
  const navigate = useNavigate();
  return (
    <StNav>
      <Button onClick={() => navigate("/login")}>로그인</Button>
      <Button style={{ width: "70px" }} onClick={() => navigate("/register")}>
        회원가입
      </Button>
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
