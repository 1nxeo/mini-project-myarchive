import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Wrapper from '../components/Wrapper'
import GlobalStyle from '../GlobalStyle'
import Stbutton from '../components/Button'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

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
        <div style={{ width: '300px', height: '300px', border: '1px solid black' }}></div>
        <div style={{ width: '300px', height: '300px', border: '1px solid black' }}></div>
        <div style={{ width: '300px', height: '300px', border: '1px solid black' }}></div>
      </div>
    </Wrapper>
  )
}

export default Home
