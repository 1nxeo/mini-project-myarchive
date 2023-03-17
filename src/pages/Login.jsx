import React, { useState } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import GlobalStyle from "../GlobalStyle";

function Login() {
  const [userInfo, setUserInfo] = useState({
    accountId: "",
    password: "",
  });
  return (
    <Wrapper>
      <GlobalStyle />
      <Nav />
      <Header />
      <div>
        <label>ID:</label>
        <Input type="text" value={userInfo.accountId} />
      </div>
      <div>
        <label>PW:</label>
        <Input type="password" value={userInfo.password} />
      </div>
      <Button style={{ width: "100px" }}>로그인</Button>
      <Button style={{ width: "100px" }}>회원가입</Button>
    </Wrapper>
  );
}

export default Login;
