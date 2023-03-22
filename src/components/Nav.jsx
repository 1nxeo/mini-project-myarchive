import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import { cookies } from "../shared/cookies";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/modules/userSlice";
import { changeCates } from "../redux/modules/cateSlice";
import WinButton from "../pages/WinButton";

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
    dispatch(changeCates("notdone"));
    alert("로그아웃 성공!");
  };

  return (
    <StNav>
      <WinButton onClick={() => navigate("/")}>홈</WinButton>
      {token ? (
        <>
          <WinButton
            onClick={() => {
              navigate(`/mypage/${accountId}`);
            }}
          >
            마이페이지
          </WinButton>
          <WinButton onClick={logoutUserHandler}>로그아웃</WinButton>
        </>
      ) : (
        <>
          <WinButton onClick={() => navigate("/login")}>로그인</WinButton>
          <WinButton
            style={{ width: "70px" }}
            onClick={() => navigate("/register")}
          >
            회원가입
          </WinButton>
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
