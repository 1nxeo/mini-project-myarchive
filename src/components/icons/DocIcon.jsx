import React from "react";
import styled from "styled-components";

function DocIcon({ children, ...rest }) {
  return (
    <Stdiv {...rest}>
      <div style={{ margin: "0px", display: "flex", justifyContent: "center" }}>
        <Stimg
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAIVBMVEUAAACAgIDAwMAAAAD///8AgID//wAA//8AAP8AAICAgABjy1kBAAAAAXRSTlMAQObYZgAAAAFiS0dEBI9o2VEAAAAHdElNRQfiBhgXAzSeRYh6AAABI0lEQVQ4y6XUwWrCQBAG4OQRmiy9uwmB3qJbvHcZ3fQBSs/mGYTVaxB6Flr6AHvzKZ3ZTQJJZgvS/6T5+XBmFJPkX0ljRVZHABR8IUDXPIA5SZ8oAosZoUfwBvAxI+m+wgjY2cuUiBZzAPg8niZkBEc7JSOw1hChQUIxAmMNklecpB5EANacaRd87waBA38ZY+03dKC3VeV6geDSoDhDU3oyCEEPfgNoiPQCQQfwHkBHpBdCvmRSyp+rvPpXeuuGA06TFa4/4CxrrfDrbJfJS7zYc7VMXuLFOFFIPHLKiCLTWDDisJE1K1Yb/HBOtGsclx1L0UnYRVxE5DFBt+IX8QW3iIqIlYqIlgp+kSQy1uPC/0q4sULxuLgt44tELRP5i/gzd7p32fYC8TrqAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA2LTI0VDIzOjAzOjUyLTA0OjAwbzzW+wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wNi0yNFQyMzowMzo1Mi0wNDowMB5hbkcAAAAASUVORK5CYII="
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

export default DocIcon;
