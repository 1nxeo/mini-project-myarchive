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
// import apis from "../shared/axios";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState({
    accountId: "",
    password: "",
  });

  useEffect(() => {
    if (cookies.get("token")) {
      navigate("/");
    }
  }, []);

  // const submitLoginHandler = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const result = await apis.post("/login", userInfo);

  //     cookies.set("token", result.data.token, { path: "/" });
  //     cookies.set("test", "test", { path: "/" });
  //     navigate("/");
  //     alert("로그인완료!");
  //   } catch (err) {
  //     alert("로그인 실패..");
  //   }
  // };

  const submitLoginHandler = (e) => {
    e.preventDefault();
    dispatch(__loginUser(userInfo));
    setUserInfo({ accountId: "", password: "" });
  };

  return (
    <Wrapper>
      <GlobalStyle />
      <Nav />
      <Header />
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
          <Button style={{ width: "100px" }}>로그인</Button>
          <Button
            style={{ width: "100px" }}
            onClick={() => navigate("/register")}
          >
            회원가입
          </Button>
        </FormWrapper>
      </form>
    </Wrapper>
  );
}

export default Login;
