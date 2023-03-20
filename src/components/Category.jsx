import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { changeCates } from "../redux/modules/cateSlice";
import { useDispatch, useSelector } from "react-redux";
import { cookies } from "../shared/cookies";

function Category() {
  const dispatch = useDispatch();
  const token = cookies.get("token");
  const { users } = useSelector((state) => state.users);
  // const loginStatus = users.isLogin;

  return (
    <StCateBar>
      <StButtonBox>
        <Button
          value="notdone"
          onClick={(e) => {
            dispatch(changeCates(e.target.value));
          }}
        >
          All
        </Button>
        <Button
          value="cloth"
          onClick={(e) => {
            dispatch(changeCates(e.target.value));
          }}
        >
          Clothes
        </Button>
        <Button
          value="it"
          onClick={(e) => dispatch(changeCates(e.target.value))}
        >
          IT
        </Button>
        <Button
          value="acc"
          onClick={(e) => dispatch(changeCates(e.target.value))}
        >
          Acc
        </Button>
        <Button
          value="food"
          onClick={(e) => dispatch(changeCates(e.target.value))}
        >
          Food
        </Button>
        <Button
          value="pet"
          onClick={(e) => dispatch(changeCates(e.target.value))}
        >
          Pet
        </Button>
        <Button
          value="etc"
          onClick={(e) => dispatch(changeCates(e.target.value))}
        >
          etc
        </Button>
      </StButtonBox>
      <StButtonBox>
        {token ? (
          <Button
            value="done"
            onClick={(e) => dispatch(changeCates(e.target.value))}
          >
            구매한 아이템
          </Button>
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
