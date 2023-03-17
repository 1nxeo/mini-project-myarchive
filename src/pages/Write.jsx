import React, { useState } from 'react'
import Wrapper from '../components/Wrapper'
import GlobalStyle from '../GlobalStyle'
import styled from 'styled-components'
import Input from '../components/Input'
import Button from '../components/Button'
import { v4 as uuidv4 } from 'uuid'
import { __addWrite } from '../redux/modules/itemSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Write() {
  // input state를 한번에 관리함
  const [writes, setWrites] = useState({
    // accountId: '',
    url: '',
    title: '',
    category: '',
    desc: '',
    isDone: false,
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()

  // input onChange를 한번에 관리함
  const changeInputHandler = (event) => {
    const { value, name } = event.target
    setWrites((old) => {
      return { ...old, [name]: value }
    })
  }

  // Writes 추가 함수
  const writesButtonClickHandler = (e) => {
    e.preventDefault()

    const newWrites = {
      url: writes.url,
      postId: '1',
      accountId: 'abcd',
      nick: 'dami',
      category: writes.category,
      title: writes.title,
      desc: writes.desc,
      createAt: Date(),
      updateAt: '2023-03-01',
      isDone: false,
    }

    // input 칸을 리셋함
    setWrites({ url: '', title: '', category: '', desc: '' })

    dispatch(__addWrite(newWrites))
  }

  return (
    <Wrapper>
      <GlobalStyle />
      Write
      <StForm onSubmit={writesButtonClickHandler}>
        URL
        <Input type="text" name="url" value={writes.url} onChange={changeInputHandler} required></Input>
        <br />
        카테고리
        <select name="category" value={writes.category} onChange={changeInputHandler}>
          <option>카테고리1</option>
          <option>카테고리2</option>
          <option>카테고리3</option>
          <option>카테고리4</option>
        </select>
        <br />
        제목
        <Input type="text" name="title" value={writes.title} onChange={changeInputHandler} required></Input>
        <br />
        내용
        <Input type="text" name="desc" value={writes.desc} onChange={changeInputHandler} required></Input>
        <br />
        <Button>작성하기</Button>
        <Button onClick={() => navigate('/')}>뒤로가기</Button>
      </StForm>
    </Wrapper>
  )
}

export default Write

const StForm = styled.form`
  width: 1000px;
  height: 1000px;

  margin: 30px auto 30px auto;
  border: 1px solid black;
`
