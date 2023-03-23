import React from "react";
import styled from "styled-components";

function RecycleBinIcon({ children, ...rest }) {
  return (
    <Stdiv {...rest}>
      <div style={{ margin: "0px", display: "flex", justifyContent: "center" }}>
        <Stimg
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAElBMVEUAAACAgIAAAADAwMD///8AgABI7wriAAAAAXRSTlMAQObYZgAAAAFiS0dEBI9o2VEAAAAHdElNRQfiBhoAMQTmjJHZAAABTElEQVQ4y3XU4Y2DMAwF4PQmqEn432MDyzAAlyxQiey/yvkZQkNCUZGq98WxCVWds4uInuS660HTQCTPNqdhUpgTP7Xusnz6Jc0Tk96nPHQ5UdA8sd6RC4S/XwrrCvAJWsDPyc8nUIqljRdJUYI3WGOI/mijIFrEaD6viaMXpgIo0hKWoDshwHY7aJHMgCSEdR9AEe/z6ld6VYBOmE18IsBDPpeOp6B5C+hkeQcaW34C51zE8sHtMIss7zt4R5Hsl9jCkiNKDLi0wIPkHKBjC0vOm0Y5dxWMjCsYXIFx0wIDuoKt/QbNY2DeAr7AqwGO9VB4wgOW0ML4DXizfQoMrgBK8An1UPbWedMBMEMLEsZMOLEO9HDtSKre5QdkR8wXoH1WvMYr/OzSg5tMlh4OkWaoWjoo0sMhTYtTrPfU/j+o8F0O4dsccp+rVPk/RsOIrdrb4ToAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDYtMjZUMDA6NDk6MDQtMDQ6MDA484PuAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA2LTI2VDAwOjQ5OjA0LTA0OjAwSa47UgAAAABJRU5ErkJggg=="
          alt=""
        />
      </div>
      <div
        style={{
          margin: "0px",
          fontSize: "15px",
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
  margin: 2px;
`;

export default RecycleBinIcon;
