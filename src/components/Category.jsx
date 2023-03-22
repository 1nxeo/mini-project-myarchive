import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { changeCates } from "../redux/modules/cateSlice";
import { useDispatch, useSelector } from "react-redux";
import { cookies } from "../shared/cookies";
import WinButton from "../pages/WinButton";

function Category({ chil }) {
  const dispatch = useDispatch();
  const token = cookies.get("token");
  const { users } = useSelector((state) => state.users);
  // const loginStatus = users.isLogin;

  return (
    <StCateBar>
      <StButtonBox>
        <WinButton
          value="notdone"
          onClick={(e) => {
            dispatch(changeCates(e.target.value));
          }}
        >
          All
        </WinButton>
        <WinButton
          value="cloth"
          onClick={(e) => {
            dispatch(changeCates(e.target.value));
          }}
        >
          Clothes
        </WinButton>
        <WinButton
          value="it"
          onClick={(e) => dispatch(changeCates(e.target.value))}
        >
          IT
        </WinButton>
        <WinButton
          value="acc"
          onClick={(e) => dispatch(changeCates(e.target.value))}
        >
          Acc
        </WinButton>
        <WinButton
          value="food"
          onClick={(e) => dispatch(changeCates(e.target.value))}
        >
          Food
        </WinButton>
        <WinButton
          value="pet"
          onClick={(e) => dispatch(changeCates(e.target.value))}
        >
          Pet
        </WinButton>
        <WinButton
          value="etc"
          onClick={(e) => dispatch(changeCates(e.target.value))}
        >
          etc
        </WinButton>
      </StButtonBox>
      <StButtonBox>
        {token ? (
          <WinButton
            value="done"
            onClick={(e) => dispatch(changeCates(e.target.value))}
          >
            구매한 아이템
          </WinButton>
        ) : null}
      </StButtonBox>
    </StCateBar>
  );
}

const StCateBar = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  margin: 15px;
`;

const StButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Category;
