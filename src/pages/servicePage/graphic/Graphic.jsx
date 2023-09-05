import './Graphic.scss';
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

const Graphic = () => {
  const { pathname } = useLocation();
  
  return (
    <div className="graphic">
      <div className="top">
        <span className='top-title'>Graphic Design</span>
      </div>
      <div className="middle">
        <div className="left">
          <Link to='/service/webdev' className="service-link link" >
            <span>Website Development</span>
            <ArrowRightAltOutlined />
          </Link>
          <div className="service-link">
            <span>App Development</span>
            <ArrowRightAltOutlined />
          </div>
          <div className="service-link">
            <span>Digital Marketing</span>
            <ArrowRightAltOutlined />
          </div>
          <div className="service-link" style={{ backgroundColor: pathname === '/service/graphic' ? 'red' : '' }}>
            <span>Graphic Designing</span>
            <ArrowRightAltOutlined />
          </div>
          <div className="service-link">
            <span>Content Writing</span>
            <ArrowRightAltOutlined />
          </div>
        </div>
        <div className="right">
          <img src="/graphic-design-image.jpg" alt="Graphic Design" />
        </div>
      </div>

      <Stack className='middle2' direction={{ xs: 'column-reverse', md: 'row' }} gap={12} alignItems='center'>
        <div className="card">
          <div className="left">
            <span>Are you looking for Graphic Design services?</span>
            <Link to='/contact' className="btn link">CONTACT</Link>
          </div>
          <div className="right">
            <img src="/banner-one-img.png" alt="Graphic Design" />
          </div>
        </div>
        <Stack gap={3}>
          <Typography variant='h4'>Graphic Designing</Typography>
          <Typography variant='body' sx={{ color: 'rgb(199, 199, 199)', fontWeight: '300' }}>
            Our graphic design services are tailored to bring your creative ideas to life. We specialize in creating visually stunning designs that captivate and engage your audience.
          </Typography>
          <Typography variant='h5' color='red'>Transforming your ideas into beautiful visuals</Typography>
          <Typography variant='body' sx={{ color: 'rgb(199, 199, 199)', fontWeight: '300' }}>
            We take pride in turning your concepts into eye-catching graphics that leave a lasting impression. Our designs are crafted with precision and creativity.
          </Typography>
          <Typography variant='h4' mt={6}>Why Choose Us?</Typography>
          <Stack direction={{ xm: 'column', md: 'row' }} gap={3} justifyContent='space-between'>
            <Stack direction='row' alignItems='center' gap={2}>
              <AutoAwesomeOutlined sx={{
                bgcolor: 'red',
                p: 1.5,
                borderRadius: '50%'
              }} fontSize='large' />
              <Typography variant='h6' sx={{ color: 'rgb(199, 199, 199)' }}>Creative Graphic <br /> Designs</Typography>
            </Stack>
            <Stack direction='row' alignItems='center' gap={2}>
              <DoneAllOutlined sx={{
                bgcolor: 'red',
                p: 1.5,
                borderRadius: '50%'
              }} fontSize='large' />
              <Typography variant='h6' sx={{ color: 'rgb(199, 199, 199)' }}>Quality <br /> Designs</Typography>
            </Stack>
            <Stack direction='row' alignItems='center' gap={2}>
              <CampaignOutlined sx={{
                bgcolor: 'red',
                p: 1.5,
                borderRadius: '50%'
              }} fontSize='large' />
              <Typography variant='h6' sx={{ color: 'rgb(199, 199, 199)' }}>Timely <br /> Delivery</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <div className="bottom">
        <div className="left">
          <span className='h1'>Our Benefits</span>
          <span className='span'>Experience the best in Graphic Design from Posh Coder Agency</span>
          <Stack direction='row' alignItems='center' gap={2}>
            <CheckCircle sx={{ color: 'red' }} />
            <Typography>Creative and Unique Designs</Typography>
          </Stack>
          <Stack direction='row' alignItems='center' gap={2}>
            <CheckCircle sx={{ color: 'red' }} />
            <Typography>Customized Solutions</Typography>
          </Stack>
          <Stack direction='row' alignItems='center' gap={2}>
            <CheckCircle sx={{ color: 'red' }} />
            <Typography>Effective Visual Communication</Typography>
          </Stack>
          <Stack direction='row' alignItems='center' gap={2}>
            <CheckCircle sx={{ color: 'red' }} />
            <Typography>Client-Centric Approach</Typography>
          </Stack>
          <div className="info">
            <div className="info-details">
              <EngineeringSharp />
              <span >Leaders in Creative Design</span>
            </div>
            <div className="info-details">
              <WebhookSharp />
              <span>Top-Quality Design Solutions</span>
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

export default Graphic;
