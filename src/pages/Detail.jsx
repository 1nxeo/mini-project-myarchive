import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'
import Wrapper from '../components/Wrapper'
import GlobalStyle from '../GlobalStyle'
import Nav from '../components/Nav'
import Button from '../components/Button'
import Input from '../components/Input'
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom'
import { __addComment, __deleteComment, __getComment, __getPostDetail } from '../redux/modules/detailSlice'
import { cookies } from '../shared/cookies'

function Detail() {
  const params = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { posts, isLoading, error } = useSelector((state) => state.details)
  const { comments } = useSelector((state) => state.details)
  const [comment, setComment] = useState(``)
  const commentList = JSON.stringify(comments)
  // 의존성 배열에에 서버에서 가져온 값을 바로 넣으면 무한 get 요청 들어감
  // 따라서 서버에서 가져온 값을 JSON.stringify로 변환해준 뒤(고정된 값으로)
  // 의존성 배열에 넣어야 함.
  const nick = cookies.get('nick')

  console.log(comments)

  useEffect(() => {
    dispatch(__getPostDetail(+params.postId))
    dispatch(__getComment(+params.postId))
  }, [commentList])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  const commentSubmitButtonClickHandler = (e) => {
    e.preventDefault()

    const newComment = {
      params: +params.postId,
      comment,
    }

    setComment(``)
    dispatch(__addComment(newComment))
  }

  const commentDeleteButtonClickHandler = (commentId) => {
    const deleteComment = {
      params: +params.postId,
      commentId,
    }
    dispatch(__deleteComment(deleteComment))
  }
  return (
    <Wrapper>
      <GlobalStyle />
      <Nav />
      <Header />{' '}
      <DetailWrapper>
        <div
          style={{
            height: '700px',
          }}
        >
          <StImg src={`${posts?.img}`} />
          <Button
            onClick={() => {
              window.open(posts.url)
            }}
          >
            상품 바로가기
          </Button>
          <div>{posts?.nick}</div>
          <div>{posts?.title}</div>
          <div>{posts?.desc}</div>
        </div>
        <CommentBox>
          <StInputBox onSubmit={commentSubmitButtonClickHandler}>
            <Input
              type="text"
              placeholder="댓글을 입력하세요"
              style={{
                width: '80%',
                margin: '10px',
              }}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />
            <Button style={{ width: '70px' }}>댓글등록</Button>
          </StInputBox>

          <StComment>
            {comments.map((item) => {
              return (
                <div>
                  <span>
                    {item?.nick} : {item?.comment}
                    {nick === item.nick ? (
                      <button onClick={() => commentDeleteButtonClickHandler(item.commentId)}>삭제</button>
                    ) : null}
                  </span>
                </div>
              )
            })}
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

const StInputBox = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const StComment = styled.div`
  width: 95%;
  display: grid;
  grid-template-columns: 15fr 1fr;
  overflow: auto;
  width: 95%;
  margin: 5px;
  align-items: center;
`

const StImg = styled.img`
  width: 300px;
  height: 500px;
  background-size: cover;
`

export default Detail
