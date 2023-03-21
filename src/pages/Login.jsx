import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { FormWrapper } from "./Register";
import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import GlobalStyle from "../GlobalStyle";
// import { cookies } from "../shared/cookies";
import { __loginUser } from "../redux/modules/userSlice";
import { cookies } from "../shared/cookies";
import WinWrapper from "../components/WinWrapper";
// import apis from "../shared/axios";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState({
    accountId: "",
    password: "",
  });
  const token = cookies.get("token");

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  const submitLoginHandler = async (e) => {
    e.preventDefault();
    await dispatch(__loginUser({ userInfo, next: () => navigate("/") }));
    // navigate("/");
    setUserInfo({ accountId: "", password: "" });
  };

  return (
    <Wrapper>
      <GlobalStyle />
      <WinWrapper>
        <Nav />
        {/* <Header /> */}
        <form onSubmit={(e) => submitLoginHandler(e)}>
          <FormWrapper>
            <label>ID:</label>
            <Input
              required
              type="text"
              value={userInfo.accountId}
              onChange={(e) =>
                setUserInfo({ ...userInfo, accountId: e.target.value })
              }
            />
          </FormWrapper>
          <FormWrapper>
            <label>PW:</label>
            <Input
              required
              type="password"
              value={userInfo.password}
              onChange={(e) =>
                setUserInfo({ ...userInfo, password: e.target.value })
              }
            />
          </FormWrapper>
          <FormWrapper>
            <button style={{ width: "100px" }}>로그인</button>
            <button
              style={{ width: "100px" }}
              onClick={() => navigate("/register")}
            >
              회원가입
            </button>
          </FormWrapper>
        </form>
      </WinWrapper>
    </Wrapper>
  );
}

export default Login;
