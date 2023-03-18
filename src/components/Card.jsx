import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Button from './Button'

function Card({ post }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  console.log(post)
  return (
    <CardsWrapper>
      {post.map((item) => {
        return (
          <CardWrapper key={item.postId}>
            <CardImage onClick={(e) => navigate(`/detail/${item.postId}`)}></CardImage>
            제목 : {item.title}
            <br />
            내용 : {item.desc}
          </CardWrapper>
        )
      })}
    </CardsWrapper>
  )
}

// const CardToDetail = styled.div``;
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
  /* margin: 10px; */
  // 카드별 마진을 상위 div의 gap으로 대체함
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
