import React, { useState } from 'react'
import Button from './Button'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { __deleteUserAdmin } from '../redux/modules/adminSlice'
import WinButton from '../pages/WinButton'
import WinWrapper from './WinWrapper'
import AdminCard from './AdminCard'

const Modal = ({ buttonName, bc, fontColor, buttonSize, margin, item, posts }) => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

  const handleClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      setOpen(false)
    }
  }
  const userDeleteButtonHandler = (user) => {
    if (window.confirm('회원정보를 삭제하시겠습니까?')) {
      dispatch(__deleteUserAdmin(user))
    } else {
      alert('삭제가 취소되었습니다.')
    }
  }

  return (
    <>
      <WinButton
        style={{
          width: '150px',
          height: '50px',
          fontSize: '18px',
          fontWeight: '500',
        }}
        onClick={() => setOpen((pre) => !pre)}
      >
        {item.nick}
      </WinButton>
      {open ? (
        <StModal onClick={handleClickOutside}>
          <WinWrapper>
            <div
              className="window"
              style={{
                width: '500px',
                textAlign: 'center',
                fontSize: '15px',
                fontFamily: 'DungGeunMo, sans-serif',
                marginTop: '20px',
              }}
            >
              <p>회원 고유번호 : {item.userId}</p>
              <p>회원 아이디 : {item.accountId}</p>
              <p>회원 닉네임 : {item.nick}</p>
              <p>회원 가입 일 시 : {item.createdAt}</p>
              <WinButton
                style={{
                  width: '100px',
                  height: '35px',
                  fontSize: '15px',
                }}
                onClick={() => userDeleteButtonHandler(item)}
              >
                회원 삭제
              </WinButton>
            </div>
            <PostDiv>
              {posts?.map((post) => {
                if (item.accountId == post.accountId) return <AdminCard key={post.postId} item={post} />
              })}
            </PostDiv>
          </WinWrapper>
        </StModal>
      ) : null}
    </>
  )
}

const StModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 90;
  background-color: rgba(0, 0, 0, 0.6);
`

const PostDiv = styled.div`
  width: 1000px;
  gap: 10px;
  margin-top: 20px;

  display: flex;
  flex-wrap: wrap;
`

export default Modal
