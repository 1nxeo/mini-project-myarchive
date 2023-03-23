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

  return (
    <Wrapper>
      <GlobalStyle />
      <div
        style={{
          maxWidth: "1200px",
          minWidth: " 900px",
          maxHeight: "90vh",
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
              maxHeight: "100vh",
            }}
          >
            {children}
          </div>
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

export default WinWrapper;
