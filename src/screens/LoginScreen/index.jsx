import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../redux/actions/auth.action'
import logo from '../../assets/youtube.png'

import './_loginScreen.scss'

const LoginScreen = () => {
   const dispatch = useDispatch()

   
   const handleLogin = () => {
      dispatch(login())
   }
   
   const navigate = useNavigate()
   
   const accessToken = useSelector(state => state.auth.accessToken)
   useEffect(() => {
      if (accessToken) {
         navigate('/')
      }
   }, [accessToken, navigate])

   return (
      <div className='login'>
         <div className='login__container'>
            <h2>Youtube Clone</h2>
            <img
               src={logo}
               alt='logo'
            />
            <button onClick={handleLogin}>Login With Google</button>
            <p>This Project is made using YOUTUBE DATA API</p>
         </div>
      </div>
   )
}

export default LoginScreen
