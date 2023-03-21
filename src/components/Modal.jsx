import React, { useState } from 'react'
import Button from './Button'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { __deleteUserAdmin } from '../redux/modules/adminSlice'

const Modal = ({ buttonName, bc, fontColor, buttonSize, margin, item }) => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const handleClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      setOpen(false)
    }
  }
  const userDeleteButtonHandler = (id) => {
    dispatch(__deleteUserAdmin(id))
    window.location.reload()
  }

  return (
    <>
      <Button
        style={{
          backgroundColor: bc,
          color: fontColor,
          width: buttonSize === 'large' ? '120px' : '50px',
          margin: margin ? margin : 'none',
        }}
        onClick={() => setOpen((pre) => !pre)}
      >
        {item.nick}
      </Button>
      {open ? (
        <StModal onClick={handleClickOutside}>
          <ModalSection>
            <CloseBtn onClick={() => setOpen((pre) => !pre)}>X</CloseBtn>
            <ModalForm
              onSubmit={(e) => {
                e.preventDefault()
                // submitHandle 함수가 들어갑니다.
                alert('회원정보가 삭제되었습니다.')
                setOpen((pre) => !pre)
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* <labe> URL : </labe> */}
                <label>회원 고유번호 : {item.userId}</label>
                <label>회원 아이디 : {item.accountId}</label>
                <label>회원 비밀번호 : {item.password}</label>
                <label>회원 닉네임 : {item.nick}</label>
                <label>회원 가입 일 시 : {item.createdAt}</label>
                {/* <StInput type="text" onChange={() => {}} placeholder="수정할 url" /> */}
              </div>
              {/* <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <labe> COMMENTS : </labe>
                <StInput
                  style={{
                    height: '50px',
                  }}
                  type="text"
                  onChange={() => {}}
                  placeholder="수정할 내용"
                />
              </div> */}
              <Button style={{ width: '100px', marginTop: '15px' }} onClick={() => userDeleteButtonHandler(item.userId)}>
                회원삭제
              </Button>
            </ModalForm>
          </ModalSection>
          <label></label>
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

const ModalSection = styled.div`
  position: relative;
  top: 25%;
  width: 90%;
  max-width: 400px;
  height: 250px;
  margin: 0 auto;
  border-radius: 10px;
  background-color: #fff;
  z-index: 100;
  /* animation: modal-show 0.3s;
  overflow: hidden; */
`

const CloseBtn = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: lightgray;
  border: 1px solid transparent;
  margin: 5px;
`

const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70%;
`

const StInput = styled.input`
  width: 300px;
  height: 20px;
  border: 1px solid;
  margin: 5px;
`

export default Modal
