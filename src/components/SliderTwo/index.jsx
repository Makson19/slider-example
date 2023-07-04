
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import 'swiper/css'
import 'swiper/css/navigation'
import './styles.css'
import Image01 from '../../assets/image01.jpg'
import Image02 from '../../assets/image02.jpg'
import Image03 from '../../assets/image03.jpg'
import Image04 from '../../assets/image04.jpg'
import Image05 from '../../assets/image05.jpg'

const images = [
  {
    id: 1,
    name: 'foto01',
    path: Image01
  },
  {
    id: 2,
    name: 'foto02',
    path: Image02
  },
  {
    id: 3,
    name: 'foto03',
    path: Image03
  },
  {
    id: 4,
    name: 'foto04',
    path: Image04
  },
  {
    id: 5,
    name: 'foto05',
    path: Image05
  }
]

const SliderTwo = () => {
  return (
    <div className='slider-container'>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={15}
        className='mySwiper'
        modules={[Navigation]}
        navigation={{
          prevEl: '.main-slider-prev',
          nextEl: '.main-slider-next'
        }}
      >
        {images.map(imageItem => (
          <SwiperSlide key={imageItem.id}>
            <img src={imageItem.path} alt={imageItem.name} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="main-slider-prev">
        <FaAngleLeft />
      </button>

      <button className="main-slider-next">
        <FaAngleRight />
      </button>
    </div>
  )
}

export default SliderTwo