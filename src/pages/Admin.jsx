import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  __getPostAdmin,
  __getUserAdmin,
  __deletePostAdmin,
  __getPostsAdmin,
} from "../redux/modules/adminSlice";
import ErrorMessage from "../components/ErrorMessage";
import { cookies } from "../shared/cookies";
import GlobalStyle from "../GlobalStyle";
import Wrapper from "../components/Wrapper";
import Modal from "../components/Modal";
import WinButton from "../components/WinButton";
import WinWrapper from "../components/WinWrapper";

function Admin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { posts, users, isLoading, error } = useSelector(
    (state) => state.admins
  );

  const adminToken = cookies.get("adminToken");

  useEffect(() => {
    if (!adminToken) {
      alert("접근 권한이 없습니다");
      navigate("/admin/login");
    }
    dispatch(__getUserAdmin());
    dispatch(__getPostsAdmin());
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <ErrorMessage>{error.message}</ErrorMessage>;
  }

  // const DeletePostAdminHandler = (id) => {
  //   dispatch(__deletePostAdmin(id))
  // }

  return (
    <Wrapper>
      <GlobalStyle />
      <div
        className="window"
        style={{
          width: "300px",
          height: "800px",
          marginTop: "60px",
        }}
      >
        <div className="title-bar">
          <div className="title-bar-text">All Info</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div
          className="window-body"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {users.map((item) => {
            return (
              <div key={item.userId}>
                <WinButton
                  style={{
                    width: "200px",
                    height: "50px",
                    maxheight: "none",
                    fontSize: "20px",
                  }}
                  onClick={() => {
                    const dialog = document.getElementById("dialog");
                    if (dialog) {
                      dialog.showModal();
                    }
                  }}
                >
                  {item.nick}
                </WinButton>
                <dialog
                  id="dialog"
                  style={{
                    border: "none",
                    background: "none",
                  }}
                >
                  <WinWrapper>
                    <Wrapper>
                      <div
                        style={{
                          marginTop: "20px",
                        }}
                        className="window"
                      >
                        <div
                          className="window-body"
                          style={{
                            width: "500px",
                            textAlign: "center",
                            fontFamily: "DungGeunMo, sans-serif",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          <p>고유 아이디 : {item.userId}</p>
                          <p>가입 아이디 : {item.accountId}</p>
                          <p>가입 닉네임 : {item.nick}</p>
                          <p>가입 일시: {item.createdAt}</p>
                        </div>
                      </div>
                      <div>
                        {/* {posts.map((post) => {
                          return (
                            <>
                              <div></div>
                            </>
                          )
                        })} */}
                      </div>
                      <button
                        onClick={() => {
                          const dialog = document.getElementById("dialog");
                          if (dialog) {
                            dialog.close();
                          }
                        }}
                      >
                        닫기
                      </button>
                    </Wrapper>
                  </WinWrapper>
                </dialog>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}

export default Admin;
