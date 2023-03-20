import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import { cookies } from "../shared/cookies";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/modules/userSlice";

function Nav() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  const token = cookies.get("token");
  // const loginStatus = users.isLogin;
  // console.log(users);

  const accountId = cookies.get("accountId");
  const logoutUserHandler = () => {
    cookies.remove("token");
    cookies.remove("accountId");
    cookies.remove("nick");
    dispatch(logoutUser());
    alert("로그아웃 성공!");
  };

  return (
    <StNav>
      <Button onClick={() => navigate("/")}>홈</Button>
      {token ? (
        <>
          <Button
            onClick={() => {
              navigate(`/mypage/${accountId}`);
            }}
          >
            마이페이지
          </Button>
          <Button onClick={logoutUserHandler}>로그아웃</Button>
        </>
      ) : (
        <>
          <Button onClick={() => navigate("/login")}>로그인</Button>
          <Button
            style={{ width: "70px" }}
            onClick={() => navigate("/register")}
          >
            회원가입
          </Button>
        </>
      )}
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
