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
  __editPost,
  __doneMemberPosts,
} from "../redux/modules/detailSlice";
import { cookies } from "../shared/cookies";
import { __deletePost } from "../redux/modules/postSlice";
// import { __doneMemberPosts } from "../redux/modules/memberSlice";
import WinWrapper from "../components/WinWrapper";
import WinButton from "../components/WinButton";

function Detail() {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { posts, isLoading, error } = useSelector((state) => state.details);
  const { comments } = useSelector((state) => state.details);
  const [comment, setComment] = useState(``);
  const commentList = JSON.stringify(comments);
  const postDetail = JSON.stringify(posts);
  // 의존성 배열에에 서버에서 가져온 값을 바로 넣으면 무한 get 요청 들어감
  // 따라서 서버에서 가져온 값을 JSON.stringify로 변환해준 뒤(고정된 값으로)
  // 의존성 배열에 넣어야 함.
  const param = params.postId;
  const nick = cookies.get("nick");
  const [edit, setEdit] = useState(false);
  const postItem = { ...posts };
  const [editItem, setEditItem] = useState({
    postId: 0,
    url: "",
    title: "",
    desc: "",
  });
  const token = cookies.get("token");
  useEffect(() => {
    cookies.get("token");
    dispatch(__getPostDetail(+params.postId));
    dispatch(__getComment(+params.postId));

    // return () => {
    //   setEditItem({});
    // };
  }, [commentList, postDetail]);

  const deletePostHandler = async (id) => {
    if (window.confirm("삭제하시겠습니까?")) {
      await dispatch(__deletePost(+id));
      navigate("/");
    }
  };

  const donePostHandler = (id) => {
    dispatch(__doneMemberPosts(+id));
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
  const editPostHandler = async (item) => {
    const editPayload = {
      params: +params.postId,
      editPost: item,
    };
    await dispatch(__editPost(editPayload));
    setEditItem({
      postId: 0,
      url: "",
      title: "",
      desc: "",
    });
    setEdit(false);
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
              height: "600px",
            }}
          >
            <div style={{ justifyContent: "center" }}>
              {" "}
              <StImg src={`${postItem?.img}`} />
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              {" "}
              <WinButton
                onClick={() => {
                  window.open(postItem?.url);
                }}
              >
                상품 바로가기
              </WinButton>
            </div>

            {edit ? (
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
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
                    style={{
                      height: "50px",
                      display: "flex",
                      justifyContent: "flex-start",
                      overflow: "scroll",
                    }}
                    type="text"
                    value={editItem.desc}
                    onChange={(e) =>
                      setEditItem({ ...editItem, desc: e.target.value })
                    }
                  />
                </div>

                <WinButton onClick={() => editPostHandler(editItem)}>
                  수정하기
                </WinButton>
              </>
            ) : (
              <>
                <div style={{ fontSize: "14px" }}>{postItem?.nick}</div>
                <div style={{ fontSize: "20px" }}>{postItem?.title}</div>
                <div style={{ minHeight: "80px" }}>{postItem?.desc}</div>
              </>
            )}
            <div>
              {nick == postItem.nick ? (
                <>
                  <WinButton
                    onClick={() => {
                      setEdit((pre) => !pre);
                      setEditItem({
                        postId: +postItem.postId,
                        url: `${postItem.url}`,
                        title: `${postItem.title}`,
                        desc: `${postItem.desc}`,
                      });
                    }}
                  >
                    수정
                  </WinButton>
                  <WinButton onClick={() => donePostHandler(postItem.postId)}>
                    {postItem.isDone ? "구매취소" : "구매완료"}
                  </WinButton>
                  <WinButton onClick={() => deletePostHandler(postItem.postId)}>
                    삭제
                  </WinButton>
                </>
              ) : null}
            </div>
          </div>
          <CommentBox>
            {token ? (
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
                <WinButton style={{ width: "70px" }}>댓글등록</WinButton>
              </StInputBox>
            ) : null}

            <StComment>
              {comments.map((item) => {
                return (
                  <>
                    <span
                      style={{
                        boxShadow:
                          "inset -1px -1px #dfdfdf, inset 1px 1px grey",
                        margin: "2px",
                        padding: "3px",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        // width: "auto",
                        minWidth: "60px",
                        maxWidth: "150px",
                        overflow: "hidden",
                        fontSize: "14px",
                      }}
                    >
                      {item?.nick}{" "}
                    </span>
                    <span>{item?.comment}</span>

                    {nick === item.nick ? (
                      <div
                        style={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        <button
                          style={{
                            fontFamily: "DungGeunMo, sans-serif",
                            width: "20px",
                            margin: "2px",
                          }}
                          onClick={() =>
                            commentDeleteButtonClickHandler(item.commentId)
                          }
                        >
                          삭제
                        </button>
                      </div>
                    ) : null}
                  </>
                );
              })}
            </StComment>
          </CommentBox>
        </DetailWrapper>
      </WinWrapper>
    </Wrapper>
  );
}

const DetailWrapper = styled.div`
  width: 100%;
  height: auto;
  /* display: flex; */
  /* border: 1px solid; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* justify-content: space-between; */
  /* align-items: center; */
  justify-items: center;
  margin-top: 40px;
`;
// const DetailNav = styled.div`
//   width: 95%;
//   /* border: 1px solid; */
//   display: flex;
//   justify-content: flex-end;
// `;

const CommentBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

const StInputBox = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StComment = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* border: 1px solid; */
  /* overflow: auto; */
  width: 95%;
  margin: 5px;
  background-color: lightgrey;
  box-sizing: border-box;
  box-shadow: inset 2px 2px grey, inset -2px -2px white;
`;

const StImg = styled.img`
  width: 400px;
  height: 400px;
  /* background-size: cover; */
  /* box-sizing: border-box;
  border-right: 2px grey;
  border-bottom: 1px grey; */
`;

// boxShadow:"inset -1px -1px #dfdfdf, inset 1px 1px grey",

export default Detail;
