import React from 'react'
import NewestProducts from './Products'
import { ChevronLeftIcon } from '@heroicons/react/24/solid';



export default function Products() {

  const products = [
    { id: 1, img: "p1.png", title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی", price: "175,000" },
    { id: 2, img: "p2.png", title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی" },
    { id: 3, img: "p3.png", title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی", price: "175,000", previousPrice: "190,000 تومان" },
    { id: 4, img: "p4.png", title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی", price: "175,000" },
    { id: 5, img: "p3.png", title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی", price: "175,000", previousPrice: "190,000 تومان" },
    { id: 6, img: "p4.png", title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی", price: "175,000" },
    { id: 7, img: "p1.png", title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی", price: "175,000" },
    { id: 8, img: "p2.png", title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی" },
  ];


  return (
    <section className='products'>
      <div className='container'>
        <div className="flex justify-between pt-10 sm:pt-28 md:pt-32 lg:pt-44">
          <div className='text-zinc-700 dark:text-white'>
            <div className='font-MorabbaMedium text-base xs:text-xl sm:text-2xl md:text-4xl lg:text-5xl pb-2'>جدید ترین محصولات</div>
            <div className='font-MorabbaLight text-xs xs:text-sm sm:text-base md:text-xl lg:text-2xl'>فراوری شده از دانه قهوه</div>
          </div>
          <div className='flex flex-col justify-end'>
            <a href="#" className='flex justify-end items-center sm:gap-1 font-Dana text-[10px] xs:text-sm sm:text-base md:text-lg tracking-tightest sm:tracking-normal text-orange-300'>
              <span>مشاهده همه محصولات</span>
              <svg className='w-3 h-3 sm:w-4 sm:h-4'><ChevronLeftIcon /></svg>
            </a>
          </div>
        </div>

        <div className='grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-[14px] md:gap-5 mt-5 md:mt-10 hover:Child:scale-105 Child:transition-all'>
          <NewestProducts {...products[0]} />
          <NewestProducts {...products[1]} />
          <NewestProducts {...products[2]} />
          <NewestProducts {...products[3]} />
          <NewestProducts {...products[4]} />
          <NewestProducts {...products[5]} />
          <NewestProducts {...products[6]} />
          <NewestProducts {...products[7]} />
        </div>
      </div>
    </section>
  )
}
