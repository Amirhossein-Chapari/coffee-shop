import React from 'react'
import { ShoppingCartIcon, StarIcon, ArrowsRightLeftIcon } from '@heroicons/react/24/outline';



export default function NewestProducts({ img, title, price, previousPrice }) {
    return (
        <a href="#" className='flex flex-col bg-white dark:bg-zinc-700 rounded-xl p-2 xs:p-5 shadow-normal'>
            <img src={process.env.PUBLIC_URL + `/images/Products/${img}`} className='w-full' />
            <div className='font-DanaMedium xl:font-semibold text-zinc-700 dark:text-white pt-2 xs:pt-5 text-[10px] xs:text-sm sm:text-base lg:text-lg tracking-tight line-clamp-2'>{title}</div>
            <div className='flex items-center leading-5 sm:leading-normal mt-1.5 xs:mt-3 h-5 sm:text-base lg:text-lg'>
                {price ? (
                    <div className='font-DanaMedium text-teal-600 dark:text-emerald-700 text-[10px] xs:text-sm sm md:text-lg xl:font-semibold'>
                        {price}
                        <span className='text-[8px] xs:text-xs sm:text-sm lg:text-base sm:pr-1 font-light'>تومان</span>
                    </div>
                ) : (
                    <div className='font-DanaMedium text-red-500 text-[10px] xs:text-sm sm md:text-lg tracking-tight'>فعلا موجود نیست</div>
                )}

                <div className='line-through text-red-500'>
                    <div className='font-DanaMedium text-zinc-400 dark:text-white pr-[1.5px] sm:pr-[5px] md:pr-2 text-[8px] xs:text-xs md:text-sm xl:text-lg tracking-tightest'>
                        {previousPrice}
                    </div>

                </div>
            </div>
            <div className='flex justify-between mt-1.5 xs:mt-3 md:mt-5'>
                <div className='flex md:gap-2'>
                    <div className='w-3 h-3 xs:w-5 xs:h-5 md:w-7 md:h-7 lg:w-7 lg:h-7 rounded-full text-zinc-600 dark:text-zinc-300 xxs:w-[15px] xxs:h-[15px] md:bg-zinc-200 dark:md:bg-zinc-800 md:p-1'><ShoppingCartIcon /></div>
                    <div className='w-3 h-3 xs:w-5 xs:h-5 md:w-7 md:h-7 lg:w-7 lg:h-7 rounded-full text-zinc-600 dark:text-zinc-300 xxs:w-[15px] xxs:h-[15px] md:hover:bg-zinc-200 md:hover:dark:bg-zinc-800 md:p-1 transition-all'><ArrowsRightLeftIcon /></div>
                </div>
                <div className='flex items-center Child:w-3 Child:h-3 Child:xxs:w-[15px] Child:xxs:h-[15px] Child:xs:w-5 Child:xs:h-5 Child:lg:w-6 Child:lg:h-6'>
                    <div className='text-zinc-400'><StarIcon /></div>
                    <div className='text-zinc-400'><StarIcon /></div>
                    <div className='text-yellow-500'><StarIcon /></div>
                    <div className='text-yellow-500'><StarIcon /></div>
                    <div className='text-yellow-500'><StarIcon /></div>
                </div>
            </div>
        </a>

    )
}
