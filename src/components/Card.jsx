import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

function Card({ post }) {
  const navigate = useNavigate()
  return (
    <CardsWrapper>
      {post.map((item) => {
        return (
          <CardWrapper key={item.postId}>
            <CardImage onClick={(e) => navigate(`/detail/${item.postId}`)}></CardImage>
            {item.nick}
            <br />
            제목 : {item.title}
          </CardWrapper>
        )
      })}
    </CardsWrapper>
  )
}

const CardsWrapper = styled.div`
  width: 1000px;
  min-width: none;
  min-height: none;

  display: flex;
  flex-wrap: wrap;
  justify-content: left;

  gap: 20px;
`

const CardWrapper = styled.div`
  width: calc((100% - 60px) / 4);
  height: 300px;
  border: 1px solid;
  box-sizing: border-box;
  overflow: hidden;
  padding: 5px;
  background-color: white;
  font-size: small;
`

const CardImage = styled.div`
  background-image: url(https://moncler-cdn.thron.com/delivery/public/image/moncler/H20921A00024M2017S94_X/dpx6uv/std/0x0/H20921A00024M2017S94_X.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  color: transparent;
  height: 220px;
`

export default Card
