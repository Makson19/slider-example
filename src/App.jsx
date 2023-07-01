import viteLogo from '/vite.svg'
import './App.css'
import { Swiper, SwiperSlide } from 'swiper/react'

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper"

import CaptainAmericaImage from './assets/01.jpg'
import IronManImage from './assets/02.jpg'
import ThorImage from './assets/03.jpg'
import TheWitcherImage from './assets/04.jpg'

function App() {
  return (
    <>
      <div className="container">
        <div className="col-1">
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fringilla mauris a efficitur fermentum. Aliquam erat volutpat. Pellentesque semper ante non molestie mollis. Donec efficitur elit ut tortor sagittis, in elementum neque pretium. Nam sollicitudin turpis a justo blandit semper. Nullam et vulputate ante. Quisque imperdiet nisi lacus, sit amet fringilla augue facilisis et. Fusce varius diam quis laoreet porta.
          </p>
        </div>

        <div className="col-2">
          <Swiper
          slidesPerView={"auto"}
          spaceBetween={15}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
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
        </div>
      </div>
    </>
  )
}

export default App
