import React from "react";
import styled from "styled-components";

function SmileIcon({ children, ...rest }) {
  return (
    <Stdiv {...rest}>
      <div
        style={{
          margin: "0px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stimg src="" alt="" />
      </div>
      <div
        style={{
          margin: "0px",
          fontSize: "17px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {children}
      </div>
    </Stdiv>
  );
}

const Stimg = styled.img`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Stdiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  border: 1px transparent;
  margin: 2px;
`;

export default SmileIcon;
