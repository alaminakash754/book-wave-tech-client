import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectFlip,  Navigation } from 'swiper/modules';

const Slider = () => {
    return (
        <>
        <Swiper
          effect={'flip'}
          grabCursor={true}
          
          navigation={true}
          modules={[EffectFlip,  Navigation]}
          className="mySwiper h-full"
        >
          <SwiperSlide>
            <img className='mx-auto h-[800px] w-[1100px] rounded-lg' src=" https://i.ibb.co/Btps1qZ/currency-ideas-worried-hourglass-shadow.jpg" />
          </SwiperSlide>
          
          <SwiperSlide>
            <img className='mx-auto h-[800px] w-[1100px] rounded-lg' src="https://i.ibb.co/q5KSgLT/jaredd-craig-HH4-WBGNyltc-unsplash.jpg" />
          </SwiperSlide>
          
          <SwiperSlide>
            <img className='mx-auto h-[800px] w-[1100px] rounded-lg' src="https://i.ibb.co/f9LnPLw/front-view-hardback-books-library.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='mx-auto h-[800px] w-[1100px] rounded-lg' src="https://i.ibb.co/cc7SDsH/low-angle-stacked-books-graduation-cap-ladders-education-day.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='mx-auto h-[800px] w-[1100px] rounded-lg' src="https://i.ibb.co/gTL6TJL/chris-lawton-9-T346-Ij4k-Gk-unsplash.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='mx-auto h-[800px] w-[1100px] rounded-lg' src="https://i.ibb.co/dkcRWnx/book-library-with-open-textbook.jpg" />
          </SwiperSlide>
        </Swiper>
      </>
    );
};

export default Slider;
