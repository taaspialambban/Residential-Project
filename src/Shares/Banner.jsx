import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Apartment1 from '../assets/Apartment/clubhouse-tewksbury-usa.jpg'
import Apartment2 from '../assets/Apartment/design-beautiful-old-house-castle.jpg'
import Apartment3 from '../assets/Apartment/wide-low-angle-grayscale-shot-buildings-with-windows-each-other.jpg'
import Apartment4 from '../assets/Apartment/vertical-shot-some-beautiful-buildings-captured-through-some-fences.jpg'

const Banner = () => {
    return (
     <div className="text-black w-full h-[420px] px-2 sm:px-6 overflow-hidden">
           <Swiper
           className="!w-full"
      spaceBetween={10}
      // slidesPerView={1}
      grabCursor={true}
      breakpoints={{
        320:{slidesPerView:1},
        748:{slidesPerView:2},
        1024:{slidesPerView:3},
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide> 
        <div className="">
            <img className="h-[400px] w-full object-cover rounded-lg" src={Apartment1} alt="" />
        </div>
        </SwiperSlide>
      <SwiperSlide>
        <img className="h-[400px] w-full object-cover rounded-lg" src={Apartment2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="h-[400px] w-full object-cover rounded-lg" src={Apartment3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="h-[400px] w-full object-cover rounded-lg" src={Apartment4} alt="" />
      </SwiperSlide>
    </Swiper>
     </div>
    );
};

export default Banner;