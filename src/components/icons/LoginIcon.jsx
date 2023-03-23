import React from "react";
import styled from "styled-components";

function LoginIcon({ children, ...rest }) {
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
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAKlBMVEUAAACAgIAAAAD////AwMAAgAAA/wCAAAAAgID/AACAgAD//wAAAP8AAIBZpFh1AAAAAXRSTlMAQObYZgAAAAFiS0dEAxEMTPIAAAAHdElNRQfiBhgXEB4kEQA+AAABHklEQVQ4y92QMU7DMBSGU4/ZEldC6uS8tkKELuAshE6tGUjEUokbIA7QQ3AAhFR1QyZTvLWe8ETVsSyciIRWqtF7J+j/b/792e/9QXCCigR93pETOuAyEzQgaYRncZ9COjJ+nFEIvxo+3xFIM9L85QkwwuXZYjirMMLlxXJ+6QqEcHm+fE0s9HGwWYx+4i5BbGH3nUzxH+P7yW7DiammN9noCwNBV72NHwYYYJDIbYa3CHUUKardj8TkA6UUAq57bq0BAAGrnnE5bjy8XcWpW9d7vfuBTmLj5F75v4CBcQdZ4QcBM648+DhzmH1Caq1VyrbWHlHWpiyLOi1ae09VtpUGplt786Zlo/am+LNXYdXU4d88Is1iggoY0dNp6BfBfGAv3Vb5dgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNi0yNFQyMzoxNjozMC0wNDowMBlr2tEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDYtMjRUMjM6MTY6MzAtMDQ6MDBoNmJtAAAAAElFTkSuQmCC"
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
  width: 70%;
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

export default LoginIcon;
