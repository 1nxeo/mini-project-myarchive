import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { changeCates } from "../redux/modules/cateSlice";
import { useDispatch, useSelector } from "react-redux";
import { cookies } from "../shared/cookies";
import WinButton from "./WinButton";
import DocIcon from "./icons/DocIcon";
import ProgramIcon from "./icons/ProgramIcon";

function Category({ chil }) {
  const dispatch = useDispatch();
  const token = cookies.get("token");
  const { users } = useSelector((state) => state.users);
  // const loginStatus = users.isLogin;

  return (
    <StCateBar>
      <StButtonBox>
        <DocIcon
          value="notdone"
          onClick={(e) => {
            dispatch(changeCates("notdone"));
          }}
        >
          All
        </DocIcon>
        <DocIcon
          value="cloth"
          onClick={(e) => {
            dispatch(changeCates("cloth"));
          }}
        >
          Clothes
        </DocIcon>
        <DocIcon
          value="it"
          onClick={(e) => {
            dispatch(changeCates("it"));
          }}
        >
          IT
        </DocIcon>
        <DocIcon
          value="acc"
          onClick={(e) => {
            dispatch(changeCates("acc"));
          }}
        >
          Acc
        </DocIcon>
        <DocIcon
          value="food"
          onClick={(e) => {
            dispatch(changeCates("food"));
          }}
        >
          Food
        </DocIcon>
        <DocIcon
          value="pet"
          onClick={(e) => {
            dispatch(changeCates("pet"));
          }}
        >
          Pet
        </DocIcon>
        <DocIcon
          value="etc"
          onClick={(e) => {
            dispatch(changeCates("etc"));
          }}
        >
          etc
        </DocIcon>
      </StButtonBox>
      <StButtonBox>
        {token ? (
          <ProgramIcon
            value="done"
            onClick={(e) => {
              dispatch(changeCates("done"));
            }}
          >
            구매한 아이템
          </ProgramIcon>
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
