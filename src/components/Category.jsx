import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { changeCates } from "../redux/modules/cateSlice";
import { useDispatch } from "react-redux";

function Category() {
  const dispatch = useDispatch();
  return (
    <StCateBar>
      <StButtonBox>
        <Button
          value="notdone"
          onClick={(e) => {
            dispatch(changeCates(e.target.value));
          }}
        >
          전체
        </Button>
        <Button
          value="cate1"
          onClick={(e) => {
            dispatch(changeCates(e.target.value));
          }}
        >
          카테고리 1
        </Button>
        <Button
          value="cate2"
          onClick={(e) => dispatch(changeCates(e.target.value))}
        >
          카테고리 2
        </Button>
        <Button
          value="cate3"
          onClick={(e) => dispatch(changeCates(e.target.value))}
        >
          카테고리 3
        </Button>
        <Button
          value="cate4"
          onClick={(e) => dispatch(changeCates(e.target.value))}
        >
          카테고리 4
        </Button>
      </StButtonBox>
      <StButtonBox>
        <Button
          value="done"
          onClick={(e) => dispatch(changeCates(e.target.value))}
        >
          구매한 아이템
        </Button>
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
