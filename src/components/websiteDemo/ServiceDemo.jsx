import './ServiceDemo.scss'

const ServiceDemo = ({data}) => {
  return (
    <div className='webdemo'>
      <img src={data.img} alt="" />
      <div className='info'>
        <span>{data.subtitle}</span>
        <span>{data.title}</span>
      </div>
    </div>
  )
}

export default ServiceDemo