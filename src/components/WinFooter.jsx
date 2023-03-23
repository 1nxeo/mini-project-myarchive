import React from "react";
import styled from "styled-components";

function WinFooter() {
  const linkGitHubHandler = (url) => {
    window.open(url);
  };
  return (
    <>
      <FooterWrapper class="status-bar">
        <div
          class="status-bar-field"
          onClick={() => {
            linkGitHubHandler(`https://github.com/ryu820`);
          }}
          style={{ overflow: "hidden" }}
        >
          BE : HyunJu Ryu
        </div>
        <div
          class="status-bar-field"
          onClick={() => {
            linkGitHubHandler(`https://github.com/dabeenkim`);
          }}
        >
          BE : Dabin Kim
        </div>
        <div
          class="status-bar-field"
          onClick={() => {
            linkGitHubHandler(`https://github.com/song33ztpgg`);
          }}
        >
          BE : JongHo Song
        </div>
        <div
          class="status-bar-field"
          onClick={() => {
            linkGitHubHandler(`https://github.com/choidami5126`);
          }}
        >
          FE : DaHyun Choi
        </div>
        <div
          class="status-bar-field"
          onClick={() => {
            linkGitHubHandler(`https://github.com/1nxeo`);
          }}
        >
          FE : InSeo Yang
        </div>
      </FooterWrapper>
    </>
  );
}

const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export default WinFooter;
