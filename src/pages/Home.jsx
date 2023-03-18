import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Wrapper from '../components/Wrapper'
import GlobalStyle from '../GlobalStyle'
import Stbutton from '../components/Button'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { __getPost } from '../redux/modules/postSlice'
import { useEffect } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'

function Home() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { posts, isLoading, error } = useSelector((state) => state.posts)

  useEffect(() => {
    dispatch(__getPost())
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <Wrapper>
      <GlobalStyle />
      <Nav />
      <Header />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <select>
          <option>카테고리1</option>
          <option>카테고리2</option>
          <option>카테고리3</option>
          <option>카테고리4</option>
        </select>
        <Button onClick={() => navigate('/post')}>글쓰기</Button>
      </div>
      <Card post={posts} />
    </Wrapper>
  )
}

export default Home
