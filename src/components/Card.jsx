import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

function Card({ wish }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <CardWrapper
    // key={wish.id}
    >
      <CardImage onClick={(e) => navigate(`/detail/${wish.id}`)}></CardImage>
      <div>
        {/* <p>{wish.contents}</p> */}
        <Button onClick={() => {}}></Button>
        <Button
          onClick={() => {
            alert("삭제 완료!");
          }}
        >
          삭제
        </Button>
      </div>
    </CardWrapper>
  );
}

// const CardToDetail = styled.div``;

const CardWrapper = styled.div`
  width: 200px;
  height: 300px;
  border: 1px solid;
  overflow: hidden;
  margin: 10px;
  padding: 5px;
  background-color: white;
  font-size: small;
`;

const CardImage = styled.div`
  background-image: url(https://moncler-cdn.thron.com/delivery/public/image/moncler/H20921A00024M2017S94_X/dpx6uv/std/0x0/H20921A00024M2017S94_X.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  color: transparent;
  height: 220px;
`;

export default Card;
