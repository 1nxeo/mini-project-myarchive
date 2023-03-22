import React from "react";
import styled from "styled-components";

function WinInput({ children }) {
  return (
    <>
      <StInput {...children} />
    </>
  );
}

const StInput = styled.input`
  font-family: "DungGeunMo", sans-serif;
  font-size: 17px;
`;

export default WinInput;
