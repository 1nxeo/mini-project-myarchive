import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { __getPostAdmin, __getUserAdmin, __deletePostAdmin, __getPostsAdmin } from '../redux/modules/adminSlice'
import ErrorMessage from '../components/ErrorMessage'
import { cookies } from '../shared/cookies'
import GlobalStyle from '../GlobalStyle'
import Wrapper from '../components/Wrapper'
import WinButton from './WinButton'
import WinWrapper from '../components/WinWrapper'
import Modal from '../components/Modal'
import AdminCard from '../components/AdminCard'

function Admin() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { posts, users, isLoading, error } = useSelector((state) => state.admins)

  const adminToken = cookies.get('adminToken')

  useEffect(() => {
    if (!adminToken) {
      alert('접근 권한이 없습니다')
      navigate('/admin/login')
    }
    dispatch(__getUserAdmin())
    dispatch(__getPostsAdmin())
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <ErrorMessage>{error.message}</ErrorMessage>
  }

  return (
    <Wrapper>
      <GlobalStyle />
      <div
        className="window"
        style={{
          width: '300px',
          height: '800px',
          marginTop: '60px',
        }}
      >
        <div className="title-bar">
          <div className="title-bar-text">All Info</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div
          className="window-body"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          {users?.map((item) => {
            return <Modal key={item.userId} item={item} posts={posts} />
          })}
        </div>
      </div>
    </Wrapper>
  )
}

export default Admin
