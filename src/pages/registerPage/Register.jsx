import React from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <Box sx={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      margin: '0 auto',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/bg.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <Stack sx={{
        p: '2rem',
        border: '.5px solid gray',
        maxHeight: '300px',
        backdropFilter: 'blur(10px)',
        borderRadius: '5px'
      }} justifyContent={'center'} alignContent={'center'} gap={2}>
        <Typography variant='h4'>Register</Typography>
        <input style={{
          padding: '10px',
          width: '250px',
          backgroundColor: 'transparent',
          border: '.5px solid gray',
          borderRadius: '5px',
          color: 'white'
        }} placeholder='Email' />
        <input style={{
          padding: '10px',
          width: '250px',
          backgroundColor: 'transparent',
          border: '.5px solid gray',
          borderRadius: '5px',
          color: 'white'
        }} placeholder='Password' />
        <input style={{
          padding: '10px',
          width: '250px',
          backgroundColor: 'transparent',
          border: '.5px solid gray',
          borderRadius: '5px',
          color: 'white'
        }} placeholder='Repeat Password' />
        <Button variant='contained'>Register</Button>
        <span>Already have an Account? <Link to='/login' style={{color: '#1669C4'}}>Login</Link> here.</span>
      </Stack>
    </Box>
  )
}

export default Register