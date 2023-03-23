import React, { useState, useEffect } from "react";
import Wrapper from "../components/Wrapper";
import GlobalStyle from "../GlobalStyle";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  __addUsers,
  __checkUserId,
  __checkUserNick,
} from "../redux/modules/userSlice";
import { useNavigate } from "react-router-dom";
import WinWrapper from "../components/WinWrapper";
import { cookies } from "../shared/cookies";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (cookies.get("adminToken")) {
      cookies.remove("adminToken");
    }
  }, []);

  // 필요한 state 설정
  const [newUser, setNewUser] = useState({
    accountId: "",
    password: "",
    nick: "",
  });

  // 중복확인용 state들
  const [validId, setValidId] = useState(false);
  const [validNick, setValidNick] = useState(false);
  const [rePw, setRePw] = useState("");

  // 정규표현식 - id, pw 유효성
  const checkValidId = (item) => {
    // id 영문소문자, 숫자, 4자리 이상
    const regEx = /^[a-z0-9]{4,}$/;
    return regEx.test(item);
  };

  // 아이디 중복확인
  const checkIdHandler = (accId) => {
    dispatch(__checkUserId(accId));
    setValidId(true);
  };

  // 닉네임 중복확인
  const checkNickHandler = (nick) => {
    dispatch(__checkUserNick(nick));
    setValidNick(true);
  };

  // 비밀번호 중복 확인
  const checkSamePwHandler = (item) => {
    return newUser.password !== item ? false : true;
  };

  //회원가입 버튼
  const addUserHandler = async (e) => {
    e.preventDefault();
    if (
      validId &&
      validNick &&
      checkSamePwHandler(rePw) &&
      checkValidId(newUser.accountId) &&
      checkValidId(newUser.password)
    ) {
      await dispatch(
        __addUsers({
          newUser,
          next: () => {
            navigate("/login");
          },
        })
      );
    } else {
      alert("입력한 정보를 확인해주세요");
    }
  };

  return (
    <Wrapper>
      <GlobalStyle />
      <WinWrapper
        style={{ width: "500px", height: "500px", marginTop: "180px" }}
      >
        {/* <Nav /> */}
        <StForm
          onSubmit={(e) => {
            addUserHandler(e);
          }}
        >
          <FormWrapper>
            <div>ID:</div>
            <input
              required
              type="text"
              value={newUser.accountId}
              onChange={(e) =>
                setNewUser({ ...newUser, accountId: e.target.value })
              }
              style={{
                fontFamily: "DungGeunMo, sans-serif",
                width: "250px",
                height: "22px",
                marginBottom: "10px",
                fontSize: "17px",
              }}
            />
            {checkValidId(newUser.accountId) ? null : (
              <span style={{ color: "red", fontSize: "14px" }}>
                아이디는 영문 소문자, 숫자로 4자리 이상이어야합니다.
              </span>
            )}
            <button
              type="button"
              style={{
                width: "80px",
                fontFamily: "DungGeunMo, sans-serif",
                fontSize: "12px",
              }}
              onClick={() => checkIdHandler({ accountId: newUser.accountId })}
            >
              중복확인
            </button>
          </FormWrapper>
          <FormWrapper>
            <div>nickname:</div>
            <input
              type="text"
              value={newUser.nick}
              onChange={(e) => setNewUser({ ...newUser, nick: e.target.value })}
              style={{
                fontFamily: "DungGeunMo, sans-serif",
                width: "250px",
                height: "22px",
                marginBottom: "10px",
                fontSize: "17px",
              }}
            />
            <button
              type="button"
              style={{
                width: "80px",
                fontFamily: "DungGeunMo, sans-serif",
                fontSize: "12px",
              }}
              onClick={() => checkNickHandler({ nick: newUser.nick })}
            >
              중복확인
            </button>
          </FormWrapper>
          <FormWrapper>
            <div>password:</div>
            <input
              required
              type="password"
              value={newUser.password}
              onChange={(e) =>
                setNewUser({ ...newUser, password: e.target.value })
              }
              style={{
                fontFamily: "DungGeunMo, sans-serif",
                width: "280px",
                height: "22px",
                marginBottom: "10px",
              }}
            />
            {checkValidId(newUser.password) ? null : (
              <span style={{ color: "red", fontSize: "14px" }}>
                비밀번호는 영문소문자, 숫자로 4자리 이상이어야합니다.
              </span>
            )}
          </FormWrapper>
          <FormWrapper>
            <div>password again:</div>
            <input
              type="password"
              value={rePw}
              onChange={(e) => {
                setRePw(e.target.value);
              }}
              style={{
                fontFamily: "DungGeunMo, sans-serif",
                width: "280px",
                height: "22px",
                marginBottom: "10px",
                fontSize: "15px",
              }}
            />
            {rePw ? (
              checkSamePwHandler(rePw) ? (
                <span>비밀번호가 일치합니다.</span>
              ) : (
                <span style={{ color: "red" }}>
                  비밀번호가 일치하지 않습니다.
                </span>
              )
            ) : null}
          </FormWrapper>

          <button
            type="submit"
            style={{
              width: "100px",
              fontFamily: "DungGeunMo, sans-serif",
              fontSize: "15px",
              marginTop: "25px",
            }}
          >
            회원가입
          </button>
        </StForm>
      </WinWrapper>
    </Wrapper>
  );
}

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

const StForm = styled.form`
  /* border: 1px solid; */
  height: 450px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Register;
