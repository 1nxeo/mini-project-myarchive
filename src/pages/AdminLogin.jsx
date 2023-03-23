import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Wrapper from "../components/Wrapper";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __loginAdmin } from "../redux/modules/adminSlice";
import GlobalStyle from "../GlobalStyle";
import { cookies } from "../shared/cookies";
import "98.css";
import WinButton from "../components/WinButton";

function AdminLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // then 활용하여 페이지 이동

  useEffect(() => {
    if (
      cookies.get("token") &&
      cookies.get("accountId") &&
      cookies.get("nick")
    ) {
      cookies.remove("token");
      cookies.remove("accountId");
      cookies.remove("nick");
    }
  }, []);

  // input state를 한번에 관리함
  const [adminInfo, setAdminInfo] = useState({
    accountId: "",
    password: "",
    secretKey: "",
  });
  // input onChange를 한번에 관리함
  const inputOnChangeHandler = (e) => {
    const { value, name } = e.target;
    setAdminInfo((old) => {
      return { ...old, [name]: value };
    });
  };
  // 로그인 버튼 함수
  const loginButtonHandler = (e) => {
    e.preventDefault();

    dispatch(__loginAdmin({ adminInfo }))
      .then(() => {
        navigate("/admin");
      })
      .catch((error) => {
        alert("로그인에 실패하였습니다 아이디, 혹은 비밀번호를 확인해주세요.");
      });
    setAdminInfo({
      accountId: "",
      password: "",
      secretKey: "",
    });
  };

  return (
    <Wrapper>
      <GlobalStyle />
      <div
        className="window"
        style={{
          width: "500px",
          height: "500px",
          marginTop: "200px",
        }}
      >
        <div className="title-bar">
          <div className="title-bar-text">Admin Login</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div
          className="window-body"
          style={{
            textAlign: "center",
            marginTop: "70px",
          }}
        >
          <form onSubmit={loginButtonHandler}>
            <StFont>Admin ID</StFont>
            <br />
            <StInput
              style={{ height: "30px" }}
              type="text"
              name="accountId"
              value={adminInfo.accountId}
              onChange={inputOnChangeHandler}
              required
            />
            <br />
            <StFont>Admin PW</StFont>
            <br />
            <StInput
              style={{ height: "30px" }}
              type="text"
              name="password"
              value={adminInfo.password}
              onChange={inputOnChangeHandler}
              required
            />
            <br />
            <StFont>Secret Key</StFont>
            <br />
            <StInput
              style={{ height: "30px" }}
              type="text"
              name="secretKey"
              value={adminInfo.secretKey}
              onChange={inputOnChangeHandler}
              required
            />
            <br />
            <WinButton
              style={{
                width: "100px",
                height: "40px",
                marginTop: "15px",
              }}
            >
              <StFont>Login</StFont>
            </WinButton>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}

export default AdminLogin;

const StInput = styled.input`
  width: 200px;
  margin: 10px auto 10px auto;
`;

const StFont = styled.span`
  font-size: 25px;
  font-weight: 600;
`;
