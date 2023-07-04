
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode, Navigation } from 'swiper'
import 'swiper/css'
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
    <div className='container-slider'>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={15}
        className='swiper-container'
        modules={[Autoplay, FreeMode, Navigation]}
        loop={true}
        freeMode={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        speed={4000}
      >
        {images.map(imageItem => (
          <SwiperSlide key={imageItem.id}>
            <img src={imageItem.path} alt={imageItem.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SliderTwo