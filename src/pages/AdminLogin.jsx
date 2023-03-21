import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import Wrapper from '../components/Wrapper'

function AdminLogin() {
  // input state를 한번에 관리함
  const [adminLogin, setAdminLogin] = useState({
    adminAcountId: '',
    adminPassword: '',
    secretKey: '',
  })

  return (
    <Wrapper>
      <StDiv>
        관리자 로그인
        <form>
          아이디
          <br />
          <input type="text" />
          <br />
          비밀번호
          <br />
          <input type="text" />
          <br />
          시크릿키
          <br />
          <input type="text" />
          <br />
          <Button>로그인</Button>
        </form>
      </StDiv>
    </Wrapper>
  )
}

export default AdminLogin

const StDiv = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid black;

  margin: auto;
`
