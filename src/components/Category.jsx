import React from "react";
import styled from "styled-components";
import Button from "./Button";

function Category() {
  return (
    <StCateBar>
      <StButtonBox>
        <Button>전체</Button>
        <Button>카테고리 1</Button>
        <Button>카테고리 2</Button>
        <Button>카테고리 3</Button>
        <Button>카테고리 4</Button>
      </StButtonBox>
      <StButtonBox>
        <Button>구매한 아이템</Button>
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
