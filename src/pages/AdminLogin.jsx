import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import Wrapper from '../components/Wrapper'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { __loginAdmin } from '../redux/modules/adminSlice'
import GlobalStyle from '../GlobalStyle'
import { cookies } from '../shared/cookies'

function AdminLogin() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const adminToken = cookies.get('adminToken')

  const adminToken = cookies.get('adminToken')

  useEffect(() => {
    if (cookies.get('token') && cookies.get('accountId') && cookies.get('nick')) {
      cookies.remove('token')
      cookies.remove('accountId')
      cookies.remove('nick')
    }
    if (adminToken) {
      console.log('useEffect 실행됐어요 !!')
      navigate('/admin')
    }
  }, [adminToken])

  // input state를 한번에 관리함
  const [adminInfo, setAdminInfo] = useState({
    accountId: '',
    password: '',
    secretKey: '',
  })
  // input onChange를 한번에 관리함
  const inputOnChangeHandler = (e) => {
    const { value, name } = e.target
    setAdminInfo((old) => {
      return { ...old, [name]: value }
    })
  }
  // 로그인 버튼 함수
  const loginButtonHandler = async (e) => {
    e.preventDefault()
    await dispatch(__loginAdmin({ adminInfo }))
    setAdminInfo({
      accountId: '',
      password: '',
      secretKey: '',
    })
    // const adminToken = cookies.get('adminToken')
    // if (adminToken) {
    //   return
    //   setAdminToken(cookies.get(`adminToken`))
    //   navigate('/admin')
    // }
  }

  return (
    <Wrapper>
      <StDiv>
        관리자 로그인
        <form onSubmit={loginButtonHandler}>
          아이디
          <br />
          <input type="text" name="accountId" value={adminInfo.accountId} onChange={inputOnChangeHandler} required />
          <br />
          비밀번호
          <br />
          <input type="text" name="password" value={adminInfo.password} onChange={inputOnChangeHandler} required />
          <br />
          시크릿키
          <br />
          <input type="text" name="secretKey" value={adminInfo.secretKey} onChange={inputOnChangeHandler} required />
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
