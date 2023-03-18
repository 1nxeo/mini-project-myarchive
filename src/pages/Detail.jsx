import React from "react";
import WinWrapper from "../components/WinWrapper";
import GlobalStyle from "../GlobalStyle";

function Detail() {
  return (
    <div>
      <GlobalStyle />
      <WinWrapper>
        <div>여기에 이미지가 들어갑니다</div>
        <div>여기에 제목이 들어갑니다.</div>
        <div>여기에 설명이 들어갑니다</div>
        <input type="text" />
        <button>댓글등록</button>
        <div>여기에 댓글이 들어갑니다</div>
      </WinWrapper>
    </div>
  );
}

export default Detail;
