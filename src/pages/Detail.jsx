import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";
import GlobalStyle from "../GlobalStyle";
import Nav from "../components/Nav";
import Button from "../components/Button";
import Input from "../components/Input";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import {
  __addComment,
  __deleteComment,
  __getComment,
  __getPostDetail,
} from "../redux/modules/detailSlice";
import { cookies } from "../shared/cookies";
import { __deletePost, __editPost } from "../redux/modules/postSlice";
import { __doneMemberPosts } from "../redux/modules/memberSlice";
import WinWrapper from "../components/WinWrapper";

function Detail() {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { posts, isLoading, error } = useSelector((state) => state.details);
  const { comments } = useSelector((state) => state.details);
  const [comment, setComment] = useState(``);
  const commentList = JSON.stringify(comments);
  const post = JSON.stringify(posts);
  // 의존성 배열에에 서버에서 가져온 값을 바로 넣으면 무한 get 요청 들어감
  // 따라서 서버에서 가져온 값을 JSON.stringify로 변환해준 뒤(고정된 값으로)
  // 의존성 배열에 넣어야 함.
  const nick = cookies.get("nick");
  const [edit, setEdit] = useState(false);
  const postItem = { ...posts };
  const [editItem, setEditItem] = useState({
    postId: postItem.postId,
    accountId: postItem.accountId,
    nick: postItem.nick,
    url: postItem.url,
    img: postItem.img,
    title: postItem.title,
    desc: postItem.desc,
  });

  console.log("postItem = ", postItem);
  console.log("editItem = ", editItem);

  useEffect(() => {
    dispatch(__getPostDetail(+params.postId));
    dispatch(__getComment(+params.postId));
  }, [commentList || post]);

  const deletePostHandler = (id) => {
    if (window.confirm("삭제하시겠습니까?")) {
      dispatch(__deletePost(id));
    }
  };

  const donePostHandler = (item) => {
    dispatch(__doneMemberPosts(item));
  };
  const commentSubmitButtonClickHandler = (e) => {
    e.preventDefault();

    const newComment = {
      params: +params.postId,
      comment,
    };

    setComment(``);
    dispatch(__addComment(newComment));
  };

  const commentDeleteButtonClickHandler = (commentId) => {
    const deleteComment = {
      params: +params.postId,
      commentId,
    };
    dispatch(__deleteComment(deleteComment));
  };
  const editPostHandler = (item) => {
    dispatch(__editPost(item));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Wrapper>
      <GlobalStyle />
      <WinWrapper>
        <Nav />
        <DetailWrapper>
          <div
            style={{
              height: "700px",
            }}
          >
            <StImg src={`${posts?.img}`} />
            <button
              onClick={() => {
                window.open(posts.url);
              }}
            >
              상품 바로가기
            </button>
            {edit ? (
              <>
                <input
                  type="text"
                  value={editItem.url}
                  onChange={(e) =>
                    setEditItem({ ...editItem, url: e.target.value })
                  }
                />
                <input
                  type="text"
                  value={editItem.title}
                  onChange={(e) =>
                    setEditItem({ ...editItem, title: e.target.value })
                  }
                />
                <input
                  type="text"
                  value={editItem.desc}
                  onChange={(e) =>
                    setEditItem({ ...editItem, title: e.target.value })
                  }
                />
                <button onClick={() => editPostHandler(editItem)}>
                  수정하기
                </button>
              </>
            ) : (
              <>
                <div>{posts?.nick}</div>
                <div>{posts?.title}</div>
                <div>{posts?.desc}</div>
              </>
            )}
          </div>
          <CommentBox>
            <StInputBox onSubmit={commentSubmitButtonClickHandler}>
              <Input
                type="text"
                placeholder="댓글을 입력하세요"
                style={{
                  width: "80%",
                  margin: "10px",
                }}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              />
              <button style={{ width: "70px" }}>댓글등록</button>
            </StInputBox>

            <StComment>
              {comments.map((item) => {
                return (
                  <div>
                    <span>
                      {item?.nick} : {item?.comment}
                      {nick === item.nick ? (
                        <button
                          onClick={() =>
                            commentDeleteButtonClickHandler(item.commentId)
                          }
                        >
                          삭제
                        </button>
                      ) : null}
                    </span>
                  </div>
                );
              })}
            </StComment>
          </CommentBox>
          <div>
            {nick == posts.nick ? (
              <>
                <button onClick={() => setEdit(true)}>수정</button>
                <button onClick={() => donePostHandler(posts)}>구매완료</button>
                <button onClick={() => deletePostHandler(posts.postId)}>
                  삭제
                </button>
              </>
            ) : null}
          </div>
        </DetailWrapper>
      </WinWrapper>
    </Wrapper>
  );
}

const DetailWrapper = styled.div`
  width: 95%;
  height: 70vh;
  border: 1px solid;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  justify-items: center;
`;
const DetailNav = styled.div`
  width: 95%;
  /* border: 1px solid; */
  display: flex;
  justify-content: flex-end;
`;

const CommentBox = styled.div`
  height: 100%;
  width: 95%;
`;

const StInputBox = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StComment = styled.div`
  width: 95%;
  display: grid;
  grid-template-columns: 15fr 1fr;
  overflow: auto;
  width: 95%;
  margin: 5px;
  align-items: center;
`;

const StImg = styled.img`
  width: 300px;
  height: 500px;
  background-size: cover;
`;

export default Detail;
