import { CheckCircleOutline, DoneAll, DownloadDone } from '@mui/icons-material'
import { Box, Button, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material'
import React from 'react'

const PackageCard = ({ data }) => {

  return (
    <Stack sx={{
      width: '300px',
      gap: 2,
      textAlign: 'center',
      // border: '1px solid rgb(56, 56, 56)',
      borderRadius: '5px',
      p: 4,
      bgcolor: '#17181a'
    }}>
      <Typography variant='h4' sx={{ fontSize: '30px' }}>{data.name}</Typography>
      <Typography variant='h5' sx={{ fontWeight: 300, color: 'red' }}>{data.price}</Typography>
      <Box>
        {
          data?.info.map((d, i) => (
            <Stack key={i} direction='row' gap={2} mb={1}>
              <DoneAll sx={{ color: 'red' }}/>
              <Typography>{d}</Typography>
            </Stack>
          ))
        }
      </Box>

      <Stack direction='row' gap={2} justifyContent='center'>
        <Button variant='contained' sx={{ textTransform: 'none'}}><a className='link' href="mailto: poshcoderbd@gmail.com">Order Now</a></Button>
        <Button variant='outlined' sx={{ textTransform: 'none'}}><a className='link' href="tel: 01790862914"> Call Now</a></Button>
      </Stack>
    </Stack>
  )
}

export default PackageCard