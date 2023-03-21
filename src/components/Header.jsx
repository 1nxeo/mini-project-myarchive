import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { changeCates } from "../redux/modules/cateSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <StHeader
      onClick={(e) => {
        navigate("/");
        dispatch(changeCates("notdone"));
      }}
    >
      <h2>여기에 페이지 제목이 들어갑니다.</h2>
    </StHeader>
  );
}

const StHeader = styled.div`
  height: 100px;
  width: 95%;
  display: flex;
  /* grid-template-columns: repeat(3, 1fr); */
  justify-content: center;
  align-items: center;
  /* align-content: center; */
  border: 1px solid black;
  margin: 10px;
`;

export default Header;
