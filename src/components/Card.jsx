import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Card({ item }) {
  const navigate = useNavigate();
  return (
    <CardWrapper>
      {/* <CardImage
        onClick={(e) => navigate(`/detail/${item.postId}`)}
      ></CardImage> */}
      <StCardImg
        src={`${item.img}`}
        onClick={() => navigate(`/detail/${item.postId}`)}
      />
      {item?.nick}
      <br />
      제목 : {item?.title}
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  width: calc((100% - 60px) / 4);
  height: 300px;
  border: 1px solid;
  box-sizing: border-box;
  overflow: hidden;
  padding: 5px;
  background-color: white;
  font-size: small;
`;

// const CardImage = styled.div`
//   background-image: url(https://moncler-cdn.thron.com/delivery/public/image/moncler/H20921A00024M2017S94_X/dpx6uv/std/0x0/H20921A00024M2017S94_X.jpg);
//   background-size: cover;
//   background-repeat: no-repeat;
//   color: transparent;
//   height: 220px;
// `;

const StCardImg = styled.img`
  height: 220px;
  width: 300px;
`;

export default Card;
