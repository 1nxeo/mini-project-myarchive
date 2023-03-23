import React from "react";
import styled from "styled-components";

function NotepadIcon({ children, ...rest }) {
  return (
    <Stdiv div {...rest}>
      <div style={{ margin: "0px", display: "flex", justifyContent: "center" }}>
        <Stimg
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUVBMVEUAAACGhoYAgID4+Phm//+ZzMyZ///AwMAAAADM///x8fHM7P/q6upmzMymyvDM/8zd3d2Z/8zj4+MzmZnMzMxmzP9m/8wzzMwzzP/X19f///8yWdUJAAAAAXRSTlMAQObYZgAAAAFiS0dEGnVn5DIAAAAHdElNRQfiBhoALTAhTzgxAAABUklEQVQ4y5WT27aCMAxEJZByqYkFqR7//0fPpKUW0BeH4svsziQuvVx+UNOcz1HU0ukcEerYuf2hnobhEJA1TuPkPc5Vhr6pBLlst5MRo/de6RMwG5evsG8jAnZA9s22yze8jICwB8ZpKEL8rBawvAFyk7fZsmbdAvaArwHqsaUM97tIAVBQbjtdHApshb5dKpAGm+Hgg9WxTRDeAPybpma7i69RHaUGqYAf0axshzkHrG1JICtNT0ai2gpoqIBXh2iGLSodP2wFa8gVhKVSgOPIHYgYLaBvSwK5tJcKdyAk4qL5oQA2AaslR4ZpPpUG2QCNjzibm/yYAqwhJWCCjlmzkxih0rABSH5s2SLP+Ewr5AarIOYt2N4/eVrAmhu2Ic9KE4QKXIaT7rVBmv3PulnCC1rXF552l7ADlhDCy7D2GwDirP4I4N941tH/nPfsf9M/lngcOlIX3Z0AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDYtMjZUMDA6NDU6NDgtMDQ6MDBhJQfuAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA2LTI2VDAwOjQ1OjQ4LTA0OjAwEHi/UgAAAABJRU5ErkJggg=="
          alt=""
        />{" "}
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

export default NotepadIcon;
