import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { __doneMemberPosts } from "../redux/modules/memberSlice";
import { __deletePost } from "../redux/modules/postSlice";
import { cookies } from "../shared/cookies";
import Button from "./Button";
import QbookIcon from "./icons/QbookIcon";

function Card({ item }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const nick = cookies.get("nick");

  const DeletePostHandler = (id) => {
    if (window.confirm("삭제하시겠습니까?")) {
      dispatch(__deletePost(id));
    }
  };

  useEffect(() => {
    return () => {};
  }, [item.isDone]);

  const DonePostHandler = (id) => {
    dispatch(__doneMemberPosts(id));
  };

  return (
    <WinCard onClick={() => navigate(`/detail/${item.postId}`)}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <StCardImg src={`${item.img}`} />
      </div>

      <QbookIcon>{item?.nick}</QbookIcon>
      {item?.title}
      <div>
        {/* {nick == item.nick ? (
          <>
            <button onClick={() => DonePostHandler(item.postId)}>
              {item.isDone ? "구매안함" : "구매완료"}
            </button>
            <button onClick={() => DeletePostHandler(item.postId)}>삭제</button>
          </>
        ) : null} */}
      </div>
    </WinCard>
  );
}

const CardWrapper = styled.div`
  width: calc((100% - 60px) / 4);
  height: 300px;
  /* border: 1px solid; */
  box-sizing: border-box;
  overflow: hidden;
  padding: 5px;
  background-color: white;
  font-size: small;
`;

const WinCard = styled.div`
  background: white;
  width: calc((100% - 60px) / 4);
  border: 1px;
  height: 300px;
  overflow: scroll;
  max-height: 16rem;
  top: 1.6rem;
`;

const StCardImg = styled.img`
  max-height: 180px;
  height: 75%;
  width: 75%;
`;

export default Card;
