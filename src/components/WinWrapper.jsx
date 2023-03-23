import React from "react";
import "98.css";
import Wrapper from "./Wrapper";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeCates } from "../redux/modules/cateSlice";

function WinWrapper({ children, ...rest }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const linkGitHubHandler = (url) => {
    window.open(url);
  };

  return (
    <Wrapper>
      <GlobalStyle />
      <div
        style={{
          maxWidth: "1200px",
          minWidth: " 900px",
          minHeight: "90vh",
          marginTop: "20px",
        }}
        className="window"
        {...rest}
      >
        <div
          className="title-bar"
          style={{ height: "25px" }}
          onClick={() => {
            navigate("/");
            dispatch(changeCates("notdone"));
          }}
        >
          <div className="title-bar-text" style={{ fontSize: "15px" }}>
            My Archive
          </div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" />
          </div>
        </div>

        <BodyWrapper>
          <div
            className="window-body"
            style={{
              margin: "3px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            // style={{ display: "flex", justifyContent: "center" }}
          >
            {children}
          </div>
          <FooterWrapper class="status-bar">
            <div
              class="status-bar-field"
              onClick={() => {
                linkGitHubHandler(`https://github.com/ryu820`);
              }}
            >
              BE : HyunJu Rye
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
        </BodyWrapper>
      </div>
    </Wrapper>
  );
}
const BodyWrapper = styled.div`
  font-size: medium;
  font-family: "DungGeunMo", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export default WinWrapper;
