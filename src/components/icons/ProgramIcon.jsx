import React from "react";
import styled from "styled-components";

function ProgramIcon({ children, ...rest }) {
  return (
    <Stdiv {...rest}>
      <div style={{ margin: "0px", display: "flex", justifyContent: "center" }}>
        <Stimg
          src="data:image/png;base64,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"
          //   style="width: 1.5rem;"
          alt=""
        />
      </div>
      <div
        style={{
          margin: "0px",
          fontSize: "13px",
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
  width: 51.5%;
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

export default ProgramIcon;
