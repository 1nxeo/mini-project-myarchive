import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import GlobalStyle from "../GlobalStyle";
import { cookies } from "../shared/cookies";
import { __loginUser } from "../redux/modules/userSlice";
import { apis } from "../shared/axios";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState({
    accountId: "",
    password: "",
  });

  const submitLoginHandler = async (e) => {
    e.preventDefault();
    try {
      const result = await apis.post("/login", userInfo);

      cookies.set("token", result.data.token, { path: "/" });
      cookies.set("test", "test", { path: "/" });
      navigate("/");
      alert("로그인완료!");
    } catch (err) {
      alert("로그인 실패..");
    }
  };

  console.log(cookies);

  return (
    <Wrapper>
      <GlobalStyle />
      <Nav />
      <Header />
      <form onSubmit={(e) => submitLoginHandler(e)}>
        <div>
          <label>ID:</label>
          <Input
            type="text"
            value={userInfo.accountId}
            onChange={(e) =>
              setUserInfo({ ...userInfo, accountId: e.target.value })
            }
          />
        </div>
        <div>
          <label>PW:</label>
          <Input
            type="password"
            value={userInfo.password}
            onChange={(e) =>
              setUserInfo({ ...userInfo, password: e.target.value })
            }
          />
        </div>
        <Button style={{ width: "100px" }}>로그인</Button>
      </form>

      <Button style={{ width: "100px" }} onClick={() => navigate("/register")}>
        회원가입
      </Button>
    </Wrapper>
  );
}

export default Login;
