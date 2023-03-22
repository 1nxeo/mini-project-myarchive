import React from "react";
import styled from "styled-components";

function RegisterIcon({ children, ...rest }) {
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
        <Stimg
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAGFBMVEUAAACAgAAAAADAwMD//wD///+AgIAA//95HUQQAAAAAXRSTlMAQObYZgAAAAFiS0dEBfhv6ccAAAAHdElNRQfiBhoANRSfV0S5AAAA50lEQVQ4y7XSsQ7CIBAGYFy618HZYKp7MezGR2hsV0MDb6B9fQsc1/YOHEz8lyb9ctxxQQghapa98NldWQDuNDeAB01dqqhNocfBFCpchIr1+B+4FEvAwrdvKKgYzaCVPucMTD7vFWhsO2xhaUsB21JIbS8TBWjL4TX8CGc/c67HiawEIQwnM9CEe5rCUWoFsCwPUq4hrYRWGAkJ4zqEHl+BgZ0l6OAoZeL2Cfi2ATSApRUjAr6oDcxvIQ0lw827BbbplfsKlS3AqGjGOK5jARAVKylCGjdzVrw576+PBWjjfz7Yc/75AfUZE8mcao/xAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA2LTI2VDAwOjUzOjIwLTA0OjAwWDXviQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wNi0yNlQwMDo1MzoyMC0wNDowMCloVzUAAAAASUVORK5CYII="
          alt=""
        />
      </div>
      <div
        style={{
          margin: "0px",
          fontSize: "14px",
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
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Stdiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  border: 1px transparent;
  margin: 7.5px;
`;

export default RegisterIcon;
