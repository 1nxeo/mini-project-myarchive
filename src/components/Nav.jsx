import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import { cookies } from "../shared/cookies";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/modules/userSlice";
import { changeCates } from "../redux/modules/cateSlice";
import WinButton from "./WinButton";
import StartIcon from "./icons/StartIcon";
import RecycleBinIcon from "./icons/RecycleBinIcon";
import SmileIcon from "./icons/SmileIcon";
import LoginIcon from "./icons/LoginIcon";
import RegisterIcon from "./icons/RegisterIcon";

function Nav() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  const token = cookies.get("token");
  const nick = cookies.get("nick");
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
      <StartIcon onClick={() => navigate("/")} style={{ float: "left" }} />
      {token ? (
        <h4 style={{ margin: "10px" }} onClick={() => navigate("/")}>
          Archive # {nick}
        </h4>
      ) : (
        <h4 style={{ margin: "10px" }} onClick={() => navigate("/")}>
          Archive # undefined
        </h4>
      )}

      {token ? (
        <>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <SmileIcon
              onClick={() => {
                navigate(`/mypage/${accountId}`);
              }}
            >
              Mypage
            </SmileIcon>
            <RecycleBinIcon onClick={logoutUserHandler}>Logout</RecycleBinIcon>
          </div>
        </>
      ) : (
        <>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <LoginIcon onClick={() => navigate("/login")}>로그인</LoginIcon>
            <RegisterIcon
              style={{ width: "70px" }}
              onClick={() => navigate("/register")}
            >
              회원가입
            </RegisterIcon>
          </div>
        </>
      )}
    </StNav>
  );
}

const StNav = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid; */
  margin-top: 10px;
`;

export default Nav;
