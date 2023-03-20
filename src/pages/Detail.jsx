import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'
import Wrapper from '../components/Wrapper'
import GlobalStyle from '../GlobalStyle'
import Nav from '../components/Nav'
import Button from '../components/Button'
import Input from '../components/Input'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { __getPostDetail } from '../redux/modules/detailSlice'

function Detail() {
  const params = useParams()
  const dispatch = useDispatch()

  const { posts, isLoading, error } = useSelector((state) => state.details)

  const detailPost = posts.find((item) => {
    return item.postId === +params.postId
  })

  useEffect(() => {
    dispatch(__getPostDetail())
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
      <Header />{' '}
      <DetailWrapper>
        <div>
          <div>여기에 이미지가 들어갑니다</div>
          <div>{detailPost?.title}</div>
          <div>{detailPost?.desc}</div>
        </div>
        <CommentBox>
          <StInputBox>
            <Input
              type="text"
              placeholder="댓글을 입력하세요"
              style={{
                width: '80%',
                margin: '10px',
              }}
            />
            <Button style={{ width: '70px' }}>댓글등록</Button>
          </StInputBox>

          <StComment>
            <span>여기에 댓글이 들어갑니다</span>
          </StComment>
        </CommentBox>
      </DetailWrapper>
    </Wrapper>
  )
}

const DetailWrapper = styled.div`
  width: 95%;
  height: 70vh;
  border: 1px solid;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  justify-items: center;
`
const DetailNav = styled.div`
  width: 95%;
  /* border: 1px solid; */
  display: flex;
  justify-content: flex-end;
`

const CommentBox = styled.div`
  height: 100%;
  width: 95%;
`

const StInputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const StComment = styled.div`
  width: 95%;
  display: grid;
  grid-template-columns: 15fr 1fr;
  overflow: scroll;
  width: 95%;
  margin: 5px;
  align-items: center;
`

export default Detail
