import './ServiceDemoCard.scss'

const ServiceDemoCard = ({data}) => {
  return (
    <div className='servicedemo'>
      <img src={data.img} alt="" />
      <div className='info'>
        <span>{data.subtitle}</span>
        <span>{data.title}</span>
      </div>
    </div>
  )
}

export default ServiceDemoCard