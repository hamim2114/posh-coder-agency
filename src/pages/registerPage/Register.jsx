import React, { useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { axiosReq } from '../../utils/axiosReq'
import toast from 'react-hot-toast'
import CButton from '../../common/CButton'

const style = {
  main: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    margin: '0 auto',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/bg.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  inputContainer: {
    maxWidth: '270px',
    p: '2rem',
    border: '.5px solid gray',
    minHeight: '300px',
    backdropFilter: 'blur(10px)',
    borderRadius: '5px'
  },
  input: {
    padding: '10px',
    width: '250px',
    backgroundColor: 'transparent',
    border: '.5px solid gray',
    borderRadius: '5px',
    color: 'white'
  }
}

const Register = () => {
  const [verificationMailSendMsg, setVerificationMailSendMsg] = useState('')
  const [payload, setPayload] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    rePassword: ''
  });

  const navigate = useNavigate()

  const queryClient = useQueryClient();

  const regMutation = useMutation({
    mutationFn: (input) => axiosReq.post('/auth/register', input),
    onSuccess: (res) => {
      setPayload({})
      queryClient.invalidateQueries(['register']);
      setVerificationMailSendMsg(res.data)
      toast.success(res.data);
      setPayload({
        username: '',
        email: '',
        phone: '',
        password: '',
        rePassword: ''
      })
      // navigate('/login')

    },
    onError: (err) => {
      const errorMsg = err.response && err.response.data ? err.response.data : 'Registration failed';
      toast.error(errorMsg);
    }
  });

  const inputChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    if (!payload.username) {
      toast.error('User Name Required!');
      return;
    }
    if (!payload.email) {
      toast.error('Email Required!');
      return;
    }
    if (!payload.phone) {
      toast.error('Phone Required!');
      return;
    }
    if (!payload.password) {
      toast.error('Password Required!');
      return;
    }
    if (!payload.rePassword) {
      toast.error('Confirm Password Required!');
      return;
    }
    if (payload.password !== payload.rePassword) {
      toast.error('Password Not Match!');
      return;
    }
    regMutation.mutate({
      username: payload.username,
      email: payload.email,
      phone: payload.phone,
      password: payload.password
    });
  };
  return (
    <>
      <Box sx={style.main}>
        <Stack sx={style.inputContainer} justifyContent={'center'} alignContent={'center'} gap={2}>
          <Typography variant='h4'>Register</Typography>
          <input value={payload.username} onChange={inputChange} name='username' style={style.input} placeholder='User Name' />
          <input value={payload.email} onChange={inputChange} name='email' style={style.input} placeholder='Email' />
          <input value={payload.phone} onChange={inputChange} name='phone' type='number' style={style.input} placeholder='Phone' />
          <input value={payload.password} onChange={inputChange} name='password' style={style.input} placeholder='Password' />
          <input value={payload.rePassword} onChange={inputChange} name='rePassword' style={style.input} placeholder='Repeat Password' />
          <CButton isLoading={regMutation.isPending} onClick={handleRegister} variant='contained'>Register</CButton>
          {
            verificationMailSendMsg &&
            <Typography sx={{ color: 'lightgreen', fontSize: '14px' }}>{verificationMailSendMsg}</Typography>
          }
          <span>Already have an Account? <Link to='/login' style={{ color: '#1669C4' }}>Login</Link> here.</span>
        </Stack>
      </Box>
    </>
  )
}

export default Register