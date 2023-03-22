import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { __getPostAdmin, __getUserAdmin, __deletePostAdmin } from '../redux/modules/adminSlice'
import ErrorMessage from '../components/ErrorMessage'
import Button from '../components/Button'
import Modal from '../components/Modal'
import GlobalStyle from '../GlobalStyle'
import { cookies } from '../shared/cookies'

function Admin() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { posts, users, isLoading, error } = useSelector((state) => state.admins)

  const postList = JSON.stringify(posts)
  const userList = JSON.stringify(users)

  const adminToken = cookies.get('adminToken')

  useEffect(() => {
    if (!adminToken) {
      alert('접근 권한이 없습니다')
      navigate('/admin/login')
    } else {
      dispatch(__getPostAdmin())
      dispatch(__getUserAdmin())
    }
  }, [postList, userList, adminToken])

  const DeletePostAdminHandler = (id) => {
    dispatch(__deletePostAdmin(id))
    // window.location.reload()
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <ErrorMessage>{error.message}</ErrorMessage>
  }

  return (
    <Stbox>
      <StDiv>
        전체 유저 정보
        <div>
          {users.map((item) => {
            return <Modal key={item.userId} item={item} />
          })}
        </div>
      </StDiv>
      <StDiv>
        전체 게시물 정보
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          {posts.map((item) => {
            return (
              <CardWrapper key={item.postId}>
                <StCardImg src={`${item.img}`} onClick={() => navigate(`/detail/${item.postId}`)} />
                <br />
                {item?.nick}
                {item?.title}
                <div>
                  <>
                    <Button onClick={() => DeletePostAdminHandler(item.postId)}>삭제</Button>
                  </>
                </div>
              </CardWrapper>
            )
          })}
        </div>
      </StDiv>
    </Stbox>
  )
}

export default Admin

const StDiv = styled.div`
  width: 800px;
  height: 1000px;
  max-height: none;
  border: 1px solid black;
`
const Stbox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: none;
  min-width: 800px;
  margin: 30px auto 30px auto;
  gap: 10px;
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
const StCardImg = styled.img`
  height: 220px;
  width: 300px;
`
