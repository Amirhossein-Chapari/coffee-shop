import React from 'react'
import { ChevronLeftIcon, ArrowLeftIcon } from '@heroicons/react/20/solid';


export default function Blogs() {
    return (
        <section>
            <div className='container'>
                <div className="flex justify-between items-center">
                    <div className='text-zinc-700 dark:text-white'>
                        <div className='font-MorabbaMedium text-base xs:text-xl sm:text-2xl md:text-4xl lg:text-5xl '>مطالب خواندنی</div>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <a href="#" className='flex justify-center items-center sm:gap-1 font-Dana text-[10px] xs:text-sm sm:text-base md:text-lg tracking-tightest sm:tracking-normal text-orange-300'>
                            <span>مشاهده همه مطالب</span>
                            <svg className='w-3 h-3 sm:w-6 sm:h-6'><ChevronLeftIcon /></svg>
                        </a>
                    </div>
                </div>

                {/* Boxes */}
                <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-[14px] md:gap-5 mt-5 md:mt-10 Child:shadow-normal'>
                    <div className='flex lg:flex-col bg-white dark:bg-zinc-700 rounded-xl'>
                        <div className='m-2 w-25 h-25 xs:w-28 xs:h-28 sm:w-36 sm:h-36 lg:w-auto' style={{ flexShrink: 0 }}>
                            <img src={process.env.PUBLIC_URL + '/images/Blogs/blog-1.png'} className='w-full h-full object-cover rounded-lg rounded-ee-3xl' />
                        </div>
                        <div className='flex flex-col lg:flex-row lg:gap-x-2 justify-between font-DanaMedium text-zinc-700 dark:text-white py-5 xxs:pt-7 lg:py-2 px-2'>
                            <p className='text-xs sm:text-lg md:text-sm'>طرز تهیه قهوه دمی با دستگاه اروپرس خط دوم اسم طولانی</p>
                            <div className=' border-b border-b-black/10 lg:hidden '></div>
                            <div className='flex justify-between text-[10px] sm:text-sm md:text-xs '>
                                <div className='flex items-center text-emerald-700 dark:text-emerald-600'>8 فروردین 1403</div>
                                <div className='flex items-center gap-2 bg-orange-200/30 text-orange-300 py-1 sm:py-2 px-2 sm:px-3 md:py-1.5 md:px-2 lg:hidden rounded-md'>
                                    <div className='h-3 sm:h-5 md:h-3'>مطالعه</div>
                                    <div className='w-3 h-3 sm:w-5 sm:h-5 md:w-3 md:h-3'><ArrowLeftIcon /></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex lg:flex-col bg-white dark:bg-zinc-700 rounded-xl'>
                        <div className='m-2 w-25 h-25 xs:w-28 xs:h-28 sm:w-36 sm:h-36 lg:w-auto' style={{ flexShrink: 0 }}>
                            <img src={process.env.PUBLIC_URL + '/images/Blogs/blog-2.png'} className='w-full h-full object-cover rounded-lg rounded-ee-3xl' />
                        </div>
                        <div className='flex flex-col lg:flex-row lg:gap-x-2 justify-between font-DanaMedium text-zinc-700 dark:text-white py-5 xxs:pt-7 lg:py-2 px-2'>
                            <p className='text-xs sm:text-lg md:text-sm'>طرز تهیه قهوه دمی با دستگاه اروپرس خط دوم اسم طولانی</p>
                            <div className=' border-b border-b-black/10 lg:hidden '></div>
                            <div className='flex justify-between text-[10px] sm:text-sm md:text-xs '>
                                <div className='flex items-center text-emerald-700 dark:text-emerald-600'>8 فروردین 1403</div>
                                <div className='flex items-center gap-2 bg-orange-200/30 text-orange-300 py-1 sm:py-2 px-2 sm:px-3 md:py-1.5 md:px-2 lg:hidden rounded-md'>
                                    <div className='h-3 sm:h-5 md:h-3'>مطالعه</div>
                                    <div className='w-3 h-3 sm:w-5 sm:h-5 md:w-3 md:h-3'><ArrowLeftIcon /></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex lg:flex-col bg-white dark:bg-zinc-700 rounded-xl'>
                        <div className='m-2 w-25 h-25 xs:w-28 xs:h-28 sm:w-36 sm:h-36 lg:w-auto' style={{ flexShrink: 0 }}>
                            <img src={process.env.PUBLIC_URL + '/images/Blogs/blog-3.png'} className='w-full h-full object-cover rounded-lg rounded-ee-3xl' />
                        </div>
                        <div className='flex flex-col lg:flex-row lg:gap-x-2 justify-between font-DanaMedium text-zinc-700 dark:text-white py-5 xxs:pt-7 lg:py-2 px-2'>
                            <p className='text-xs sm:text-lg md:text-sm'>طرز تهیه قهوه دمی با دستگاه اروپرس خط دوم اسم طولانی</p>
                            <div className=' border-b border-b-black/10 lg:hidden '></div>
                            <div className='flex justify-between text-[10px] sm:text-sm md:text-xs '>
                                <div className='flex items-center text-emerald-700 dark:text-emerald-600'>8 فروردین 1403</div>
                                <div className='flex items-center gap-2 bg-orange-200/30 text-orange-300 py-1 sm:py-2 px-2 sm:px-3 md:py-1.5 md:px-2 lg:hidden rounded-md'>
                                    <div className='h-3 sm:h-5 md:h-3'>مطالعه</div>
                                    <div className='w-3 h-3 sm:w-5 sm:h-5 md:w-3 md:h-3'><ArrowLeftIcon /></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex lg:flex-col bg-white dark:bg-zinc-700 rounded-xl'>
                        <div className='m-2 w-25 h-25 xs:w-28 xs:h-28 sm:w-36 sm:h-36 lg:w-auto' style={{ flexShrink: 0 }}>
                            <img src={process.env.PUBLIC_URL + '/images/Blogs/blog-4.png'} className='w-full h-full object-cover rounded-lg rounded-ee-3xl' />
                        </div>
                        <div className='flex flex-col lg:flex-row lg:gap-x-2 justify-between font-DanaMedium text-zinc-700 dark:text-white py-5 xxs:pt-7 lg:py-2 px-2'>
                            <p className='text-xs sm:text-lg md:text-sm'>طرز تهیه قهوه دمی با دستگاه اروپرس خط دوم اسم طولانی</p>
                            <div className=' border-b border-b-black/10 lg:hidden '></div>
                            <div className='flex justify-between text-[10px] sm:text-sm md:text-xs '>
                                <div className='flex items-center text-emerald-700 dark:text-emerald-600'>8 فروردین 1403</div>
                                <div className='flex items-center gap-2 bg-orange-200/30 text-orange-300 py-1 sm:py-2 px-2 sm:px-3 md:py-1.5 md:px-2 lg:hidden rounded-md'>
                                    <div className='h-3 sm:h-5 md:h-3'>مطالعه</div>
                                    <div className='w-3 h-3 sm:w-5 sm:h-5 md:w-3 md:h-3'><ArrowLeftIcon /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
