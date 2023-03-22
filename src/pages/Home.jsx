import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Wrapper from '../components/Wrapper'
import GlobalStyle from '../GlobalStyle'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { __getPost } from '../redux/modules/postSlice'
import { useEffect } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import Category from '../components/Category'
import styled from 'styled-components'
import ErrorMessage from '../components/ErrorMessage'
import { cookies } from '../shared/cookies'
import WinWrapper from '../components/WinWrapper'

function Home() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { posts, isLoading, error } = useSelector((state) => state.posts)
  // const { users } = useSelector((state) => state.users);
  const { cates } = useSelector((state) => state.cate)
  const postList = JSON.stringify(posts)
  // const token = cookies.get("token");
  const postItems = [...posts]

  const token = cookies.get('token')
  const nick = cookies.get('nick')

  console.log(posts)

  useEffect(() => {
    if (cookies.get('adminToken')) {
      cookies.remove('adminToken')
    }
    dispatch(__getPost())
  }, [postList])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <ErrorMessage>{error.message}</ErrorMessage>
  }

  return (
    <Wrapper>
      <WinWrapper>
        <GlobalStyle />
        <Nav />
        {/* <Header /> */}
        <ContentNav>
          <Category />
          <button onClick={() => navigate('/post')}>글쓰기</button>
        </ContentNav>
        <CardsWrapper>
          {cates == 'notdone' ? postItems?.map((item) => <Card key={item.id} item={item} />) : null}
          {postItems?.map((item) => (item.category == cates ? <Card key={item.id} item={item} /> : null))}
          {cates == 'done'
            ? postItems?.map((item) => (nick == item.nick && item.isDone ? <Card key={item.id} item={item} /> : null))
            : null}
        </CardsWrapper>
      </WinWrapper>
    </Wrapper>
  )
}

const ContentNav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  align-items: center;
`
export const CardsWrapper = styled.div`
  width: 1000px;
  min-width: none;
  min-height: none;

  display: flex;
  flex-wrap: wrap;
  justify-content: left;

  gap: 20px;
`

export default Home
