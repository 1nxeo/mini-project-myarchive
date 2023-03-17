import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Wrapper from '../components/Wrapper'
import GlobalStyle from '../GlobalStyle'
import Stbutton from '../components/Button'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { __getWrite } from '../redux/modules/writeSlice'
import { useEffect } from 'react'

function Home() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { writes, isLoading, error } = useSelector((state) => state.writes)

  useEffect(() => {
    dispatch(__getWrite())
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
      Home
      <div style={{ display: 'flex', alignItems: 'center', width: '1000px', justifyContent: 'space-between' }}>
        <select>
          <option>카테고리1</option>
          <option>카테고리2</option>
          <option>카테고리3</option>
          <option>카테고리4</option>
        </select>
        <Stbutton onClick={() => navigate('/Write')}>글쓰기</Stbutton>
      </div>
      <div style={{ display: 'flex', flexWrap: 'warp', justifyContent: 'left', gap: '10px', margintop: '30px' }}>
        {writes.map((item) => {
          return (
            <div key={item.id}>
              {item.nick} {item.title}
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}

export default Home
