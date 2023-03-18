import React, { useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import GlobalStyle from "../GlobalStyle";
import styled from "styled-components";
import Input from "../components/Input";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  __addUsers,
  __checkUserId,
  __checkUserNick,
} from "../redux/modules/userSlice";
import { useNavigate } from "react-router-dom";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const users = useSelector((state) => state.users);

  // 필요한 state 설정
  const [newUser, setNewUser] = useState({
    accountId: "",
    password: "",
    nick: "",
  });

  // 중복확인용 state들
  const [validId, setValidId] = useState(false);
  const [validPw, setValidPw] = useState({ body: "", isValid: false });
  const [validNick, setValidNick] = useState(false);

  // 아이디 중복확인
  const checkIdHandler = (accId) => {
    dispatch(__checkUserId(accId));
    setValidId(true);
    alert("사용가능한 아이디입니다 !");
  };

  // 닉네임 중복확인
  const checkNickHandler = (nick) => {
    dispatch(__checkUserNick(nick));
    setValidNick(true);
    alert("사용가능한 닉네임입니다 !");
  };

  console.log(validPw);

  // 비밀번호 중복 확인
  const validatePwHandler = () => {
    validPw.body === newUser.password
      ? setValidPw({ ...validPw, isValid: true })
      : setValidPw({ ...validPw, isValid: false });
  };

  //회원가입 버튼
  const addUserHandler = async (e) => {
    await validatePwHandler();
    // console.log(validPw);
    if (validId && validPw.isValid && validNick) {
      if (validPw.isValid) {
        dispatch(__addUsers(newUser));
        navigate("/login");
      } else if (!validId) {
        alert("ID를 확인해주세요!");
      } else if (!validPw.isValid) {
        alert("패스워드를 확인해주세요!");
      } else if (!validNick) {
        alert("닉네임을 확인해주세요!");
      }
    }
  };

  return (
    <Wrapper>
      <GlobalStyle />
      <Nav />
      <Header />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addUserHandler(newUser);
          setNewUser({
            accountId: "",
            password: "",
            nick: "",
          });
          alert("회원가입 성공!");
          navigate("/login");
        }}
      >
        <FormWrapper>
          <label>ID:</label>
          <input
            required
            type="text"
            value={newUser.accountId}
            onChange={(e) =>
              setNewUser({ ...newUser, accountId: e.target.value })
            }
          />
          <button
            type="button"
            style={{ width: "80px" }}
            onClick={() => checkIdHandler(newUser.accountId)}
          >
            중복확인
          </button>
        </FormWrapper>
        <FormWrapper>
          <label>nickname:</label>
          <input
            type="text"
            value={newUser.nick}
            onChange={(e) => setNewUser({ ...newUser, nick: e.target.value })}
          />
          <button
            type="button"
            style={{ width: "80px" }}
            onClick={() => checkNickHandler(newUser.nick)}
          >
            중복확인
          </button>
        </FormWrapper>
        <FormWrapper>
          <label>pw:</label>
          <input
            required
            type="password"
            value={newUser.password}
            onChange={(e) =>
              setNewUser({ ...newUser, password: e.target.value })
            }
          />
        </FormWrapper>
        <FormWrapper>
          <label>pwVaildation:</label>
          <input
            type="password"
            value={validPw.body}
            onChange={(e) => {
              setValidPw({ ...validPw, body: e.target.value });
            }}
          />
        </FormWrapper>
        {validPw.body ? (
          validPw.body === newUser.password ? (
            <span>비밀번호가 일치합니다.</span>
          ) : (
            <span style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</span>
          )
        ) : null}
        <button type="submit" style={{ width: "100px" }}>
          회원가입
        </button>
      </form>
    </Wrapper>
  );
}

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

export default Register;
