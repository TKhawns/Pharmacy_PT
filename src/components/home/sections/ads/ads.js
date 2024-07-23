import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "./ads.scss"

function Advertise() {
  // const progressCircle = useRef(null);
  // const progressContent = useRef(null);
  // const onAutoplayTimeLeft = (s, time, progress) => {
  //   //progressCircle.current.style.setProperty('--progress', 1 - progress);
  //   progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  // };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        //onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide><img className='slide-image' src='https://prod-cdn.pharmacity.io/e-com/images/banners/20240625095642-0-SlidebannerDesktop_O2O1590x604px.png'/></SwiperSlide>
        <SwiperSlide><img className='slide-image' src='https://prod-cdn.pharmacity.io/e-com/images/banners/20240627035950-0-1590X604Solgar.png'/></SwiperSlide>
        <SwiperSlide><img className='slide-image' src='https://prod-cdn.pharmacity.io/e-com/images/banners/20240625095642-0-SlidebannerDesktop_O2O1590x604px.png'/></SwiperSlide>
        <SwiperSlide><img className='slide-image' src='https://prod-cdn.pharmacity.io/e-com/images/banners/20240627035950-0-1590X604Solgar.png'/></SwiperSlide>

        {/* <div className="autoplay-progress" slot="container-end">
          
          <span ref={progressContent}></span>
        </div> */}
      </Swiper>
    </>
  );
}
export default Advertise;