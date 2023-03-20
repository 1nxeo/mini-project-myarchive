import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function ErrorMessage({ children }) {
  return <ErrWrapper>{children}</ErrWrapper>;
}

const ErrWrapper = styled.div`
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`;
export default ErrorMessage;
