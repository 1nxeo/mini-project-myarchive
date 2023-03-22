import React from "react";

function WinButton({ children, style, ...rest }) {
  return (
    <button
      style={{ fontFamily: "DungGeunMo, sans-serif", ...style }}
      {...rest}
    >
      {children}
    </button>
  );
}

export default WinButton;
