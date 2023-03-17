import React from "react";
import styled from "styled-components";

function Input({ children, ...rest }) {
  return <StInput {...rest}>{children}</StInput>;
}

const StInput = styled.input`
  width: 300px;
  height: 30px;
  border: 1px solid;
`;

export default Input;
