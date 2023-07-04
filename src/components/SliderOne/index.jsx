import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import './styles.css'

import { Navigation } from 'swiper'

import CaptainAmericaImage from '../../assets/01.jpg'
import IronManImage from '../../assets/02.jpg'
import ThorImage from '../../assets/03.jpg'
import TheWitcherImage from '../../assets/04.jpg'

const SliderOne = () => {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={15}
        navigation={true}
        modules={[Navigation]}
        className="swiper"
      >
        <SwiperSlide>
          <img src={CaptainAmericaImage} alt="Pôster do Capitão América" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={IronManImage} alt="Pôster do Homem de Ferro" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ThorImage} alt="Pôster do Thor" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={TheWitcherImage} alt="Pôster de The Witcher" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default SliderOne