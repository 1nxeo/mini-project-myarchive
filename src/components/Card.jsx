import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { __doneMemberPosts } from "../redux/modules/memberSlice";
import { __deletePost } from "../redux/modules/postSlice";
import { cookies } from "../shared/cookies";
import Button from "./Button";

function Card({ item }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const nick = cookies.get("nick");

  const DeletePostHandler = (id) => {
    dispatch(__deletePost(id));
  };

  const DonePostHandler = (item) => {
    dispatch(__doneMemberPosts(item));
  };

  return (
    <CardWrapper>
      <StCardImg
        src={`${item.img}`}
        onClick={() => navigate(`/detail/${item.postId}`)}
      />
      {item?.nick}
      <br />
      제목 : {item?.title}
      <div>
        {nick == item.nick ? (
          <>
            <Button onClick={() => DonePostHandler(item)}>구매완료</Button>
            <Button onClick={() => DeletePostHandler(item.postId)}>삭제</Button>
          </>
        ) : null}
      </div>
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
