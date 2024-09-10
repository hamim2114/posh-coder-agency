import { Box, Button, IconButton, InputAdornment, OutlinedInput, Stack, TextField, Typography } from '@mui/material'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { axiosReq } from '../../utils/axiosReq';
import toast from 'react-hot-toast';
import CButton from '../../common/CButton';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useAuth } from '../../context/AuthProvider';

const style = {
  container: {
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
  box: {
    p: '2rem',
    border: '.5px solid gray',
    maxHeight: '300px',
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

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [payload, setPayload] = useState({
    email: '',
    password: '',
  });

  const { setUser } = useAuth()

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const navigate = useNavigate()

  const loginMutation = useMutation({
    mutationFn: (input) => axiosReq.post('/auth/login', input),
    onSuccess: (res) => {
      setUser(res.data)
      toast.success('Login Success');

    },
    onError: (err) => {
      toast.error(err.response.data);
    }
  });

  const inputChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    if (!payload.email) {
      toast.error('Email Required!');
      return;
    }
    if (!payload.password) {
      toast.error('Password Required!');
      return;
    }
    loginMutation.mutate({
      ...payload
    });
  };
  return (
    <Box sx={style.container}>
      <Stack sx={style.box} justifyContent={'center'} alignContent={'center'} gap={2}>
        <Typography variant='h4'>Login</Typography>
        <OutlinedInput
          size='small'
          name='email'
          placeholder='Email'
          onChange={inputChange}
          sx={{
            border: '1px solid darkgray',
            color: '#fff'
          }}
        />
        <OutlinedInput
          sx={{
            border: '1px solid darkgray',
            color: '#fff'
          }}
          size='small'
          name='password'
          placeholder='Password'
          onChange={inputChange}
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff color='primary' /> : <Visibility color='primary' />}
              </IconButton>
            </InputAdornment>
          }
        />
        <CButton onClick={handleLogin} isLoading={loginMutation.isPending} variant='contained'>Login</CButton>
        <span>Dont't have an Account? <Link to='/register' style={{ color: '#1669C4' }}>Register</Link> here.</span>
      </Stack>
    </Box>
  )
}

export default Login