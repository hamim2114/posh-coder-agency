import './WebsiteDev.scss';
import {
  Stack,
  Typography
} from '@mui/material';
import {
  ArrowRightAltOutlined,
  AutoAwesomeOutlined,
  CampaignOutlined,
  CheckCircle,
  DoneAllOutlined,
  EngineeringSharp,
  WebhookSharp
} from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

const WebsiteDev = () => {

  const { pathname } = useLocation()
  return (
    <div className="website-dev">
      <div className="top">
        <span className='top-title'>Website Solutions</span>
      </div>
      <div className="middle">
        <div className="left">
          <div className="service-link" style={{ backgroundColor: pathname === '/service/webdev' ? 'red' : '' }}>
            <span>Website Development</span>
            <ArrowRightAltOutlined />
          </div>
          <Link to='/service/appdevelop' className='link'>
            <div className="service-link">
              <span>App Development</span>
              <ArrowRightAltOutlined />
            </div>
          </Link>
          <Link to='/service/marketing' className='link'>
            <div className="service-link">
              <span>Digital Marketing</span>
              <ArrowRightAltOutlined />
            </div>
          </Link>
          <Link to='/service/graphic' className="service-link link">
            <span>Graphic Designing</span>
            <ArrowRightAltOutlined />
          </Link>
          <Link to='/service/content' className='link'>
            <div className="service-link">
              <span>Content Writing</span>
              <ArrowRightAltOutlined />
            </div>
          </Link>
        </div>
        <div className="right">
          <img src="/services-details-img1.jpg" alt="Website Development" />
        </div>
      </div>

      <Stack className='middle2' direction={{ xs: 'column-reverse', md: 'row' }} gap={12} alignItems='center'>
        <div className="card">
          <div className="left">
            <span>Are you looking for digital marketing services?</span>
            <Link to='/contact' className="btn link">CONTACT</Link>
          </div>
          <div className="right">
            <img src="/banner-one-img.png" alt="Digital Marketing" />
          </div>
        </div>
        <Stack gap={3}>
          <Typography variant='h4'>Website Development</Typography>
          <Typography variant='body' sx={{ color: 'rgb(199, 199, 199)', fontWeight: '300' }}>
            Our website development services are designed to create outstanding online experiences. We specialize in crafting websites that not only look great but also perform exceptionally well, meeting the unique needs of our clients.
          </Typography>
          <Typography variant='h5' color='red'>Helping clients solve application development problems</Typography>
          <Typography variant='body' sx={{ color: 'rgb(199, 199, 199)', fontWeight: '300' }}>We take pride in solving complex application development challenges. Our team is dedicated to delivering solutions that drive growth and success for your business.</Typography>
          <Typography variant='h4' mt={6}>Why Choose Us?</Typography>
          <Stack direction={{ xm: 'column', md: 'row' }} gap={3} justifyContent='space-between'>
            <Stack direction='row' alignItems='center' gap={2}>
              <AutoAwesomeOutlined sx={{
                bgcolor: 'red',
                p: 1.5,
                borderRadius: '50%'
              }} fontSize='large' />
              <Typography variant='h6' sx={{ color: 'rgb(199, 199, 199)' }}>Best Creative <br /> Agency</Typography>
            </Stack>
            <Stack direction='row' alignItems='center' gap={2}>
              <DoneAllOutlined sx={{
                bgcolor: 'red',
                p: 1.5,
                borderRadius: '50%'
              }} fontSize='large' />
              <Typography variant='h6' sx={{ color: 'rgb(199, 199, 199)' }}>99% Success <br />Rate</Typography>
            </Stack>
            <Stack direction='row' alignItems='center' gap={2}>
              <CampaignOutlined sx={{
                bgcolor: 'red',
                p: 1.5,
                borderRadius: '50%'
              }} fontSize='large' />
              <Typography variant='h6' sx={{ color: 'rgb(199, 199, 199)' }}>Quality <br />Marketing</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <div className="bottom">
        <div className="left">
          <span className='h1'>Our Benefits</span>
          <span className='span'>Get the best web development from Posh Coder Agency</span>
          <Stack direction='row' alignItems='center' gap={2}>
            <CheckCircle sx={{ color: 'red' }} />
            <Typography>Cost-Effective Solutions</Typography>
          </Stack>
          <Stack direction='row' alignItems='center' gap={2}>
            <CheckCircle sx={{ color: 'red' }} />
            <Typography>Equal Opportunities for Growth</Typography>
          </Stack>
          <Stack direction='row' alignItems='center' gap={2}>
            <CheckCircle sx={{ color: 'red' }} />
            <Typography>High Brand Awareness</Typography>
          </Stack>
          <Stack direction='row' alignItems='center' gap={2}>
            <CheckCircle sx={{ color: 'red' }} />
            <Typography>Higher ROI (Return on Investment)</Typography>
          </Stack>
          <div className="info">
            <div className="info-details">
              <EngineeringSharp />
              <span >Leaders in Creative Agency</span>
            </div>
            <div className="info-details">
              <WebhookSharp />
              <span>Highest Quality Development</span>
            </div>
          </div>
        </div>
        <div className="right">
          <img src="/services-details-benefit-img.jpg" alt="Our Benefits" />
        </div>
      </div>
    </div>
  )
}

export default WebsiteDev;
