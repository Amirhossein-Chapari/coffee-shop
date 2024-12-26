import React, { useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import NewestProducts from './Products';
// import { Autoplay } from 'swiper/modules';
// import SwiperCore, { Autoplay } from 'swiper';



export default function BestSelling() {
    const swiperRef = useRef(null);
    // SwiperCore.use([Autoplay]);

    const products = [
        { id: 1, img: "p5.png", title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی", price: "175,000" },
        { id: 2, img: "p6.png", title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی" },
        { id: 3, img: "p7.png", title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی", price: "175,000", previousPrice: "190,000 تومان" },
        { id: 4, img: "p8.png", title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی", price: "175,000" },
        { id: 5, img: "p7.png", title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی", price: "175,000", previousPrice: "190,000 تومان" },
    ];

    const slideNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const slidePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    return (
        <section className='mb-9 md:mb-20'>
            <div className='container'>
                <div className='flex items-end justify-between mb-5 md:mb-12'>
                    <div className='text-zinc-700 dark:text-white'>
                        <h3 className='font-MorabbaMedium text-base xs:text-xl sm:text-2xl md:text-4xl lg:text-5xl pb-2'>محصولات پرفروش</h3>
                        <span className='font-MorabbaLight text-xs xs:text-sm sm:text-base md:text-xl lg:text-2xl'>پیشنهاد قهوه خورها ...</span>
                    </div>
                    <div className='flex gap-x-3 md:gap-x-[18px]'>  
                        <div className='flex items-center justify-center w-9 h-9 md:w-10 md:h-10 bg-white text-zinc-700 dark:bg-zinc-700 dark:text-white shadow-normal rounded-full hover:bg-gray-300 dark:hover:bg-white  dark:hover:text-zinc-700 transition-all'>
                            <button className='w-[26px] h-[26px]' onClick={slideNext}>
                                <ChevronRightIcon />
                            </button>
                        </div>
                        <div className='flex items-center justify-center w-9 h-9 md:w-10 md:h-10 bg-white text-zinc-700 dark:bg-zinc-700 dark:text-white shadow-normal rounded-full hover:bg-gray-300 dark:hover:bg-white  dark:hover:text-zinc-700 transition-all'>
                            <button className='w-[26px] h-[26px]' onClick={slidePrev}>
                                <ChevronLeftIcon />
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <Swiper
                        ref={swiperRef}
                        spaceBetween={14}
                        slidesPerView={2}
                        navigation={false}
                        loop={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 3,
                            },
                            768: {
                                spaceBetween: 20
                            },
                            1024: {
                                slidesPerView: 4,
                            }
                        }}
                        // autoplay={{
                        //     delay: 2500,
                        //     disableOnInteraction: false,
                        // }} 
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {products.map((product) => (
                            <SwiperSlide key={product.id}>
                                <div>
                                    <NewestProducts {...product} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
