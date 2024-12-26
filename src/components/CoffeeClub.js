import React from 'react'
import { ChevronLeftIcon } from '@heroicons/react/20/solid';


export default function CoofeeClub() {
    return (
        <section className='mb-8 md:mb-20'>
            <div className='container'>
                <div className="flex flex-wrap md:flex-nowrap md:justify-between items-center justify-center bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-4 px-3 sm:px-8 xl:px-11 rounded-2xl">
                    <div className='flex items-center gap-x-3 md:gap-x-6'>
                        <img src={process.env.PUBLIC_URL + '/images/CoffeeClub/diamond.png'} className='w-[87px] xl:w-[110px]' alt="Coffee Club" />
                        <div>
                            <h4 className='font-MorabbaBold text-2xl lg:text-4xl xl:text-5xl mb-2'>کافی کلاب</h4>
                            <p className='font-MorabbaLight text-base lg:text-lg xl:text-2xl'>میدونستی میتونی با امتیازات قهوه بگیری؟</p>
                        </div>
                    </div>

                    <div className='flex gap-2 lg:gap-10 xl:gap-16 mt-5 md:mt-0'>
                        <div className='flex items-center justify-center gap-x-2 md:gap-x-6 lg:gap-x-5'>
                            <a href='#' className='w-[60px] h-[60px] xs:w-[72px] xs:h-[72px] xl:w-[98px] xl:h-[98px] text-center text-emerald-600 bg-white py-1.5 xl:pt-5 md:pb-1 rounded-2xl '>
                                <div className='flex items-center justify-center w-7 h-7 xs:w-9 xs:h-9 xl:w-12 xl:h-12 mb-0.5 mx-auto'>
                                    <img src={process.env.PUBLIC_URL + '/images/CoffeeClub/Discovery.svg'} className='pt-1.5 md:pt-0' alt="Discovery" />
                                </div>
                                <span className='font-DanaMedium text-[10px] xs:text-xs md:text-sm'>چرخ و بخت</span>
                            </a>

                            <a href='#' className='w-[60px] h-[60px] xs:w-[72px] xs:h-[72px] xl:w-[98px] xl:h-[98px] text-center text-emerald-600 bg-white py-1.5 xl:pt-5 md:pb-1 rounded-2xl '>
                                <div className='flex items-center justify-center w-7 h-7 xs:w-9 xs:h-9 xl:w-12 xl:h-12 mb-0.5 mx-auto'>
                                    <img src={process.env.PUBLIC_URL + '/images/CoffeeClub/Activity.svg'} className='pt-1.5 md:pt-0' alt="Activity" />
                                </div>
                                <span className='font-DanaMedium text-[10px] xs:text-xs md:text-sm'>ماموریت ها</span>
                            </a>

                            <a href='#' className='w-[60px] h-[60px] xs:w-[72px] xs:h-[72px] xl:w-[98px] xl:h-[98px] text-center text-emerald-600 bg-white py-1.5 xl:pt-5 md:pb-1 rounded-2xl '>
                                <div className='flex items-center justify-center w-7 h-7 xs:w-9 xs:h-9 xl:w-12 xl:h-12 mb-0.5 mx-auto'>
                                    <img src={process.env.PUBLIC_URL + '/images/CoffeeClub/Ticket-Star.svg'} className='pt-1.5 md:pt-0' alt="Ticket-Star" />
                                </div>
                                <span className='font-DanaMedium text-[10px] xs:text-xs md:text-sm'>جایزه ها</span>
                            </a>
                        </div>
                        <div className='font-Dana'>
                            <div className='font-DanaMedium text-xl xl:text-3xl pr-1.5 -mb-1.5'>542</div>
                            <div className='pr-1.5 text-[10px] xxs:text-xs xl:text-base tracking-tightest xs:tracking-normal'>امتیـــــــــاز شما</div>
                            <a href='#' className='flex justify-evenly items-center w-16 h-6 xxs:w-25 xxs:h-6 xl:w-30 xl:h-9 xxs:mt-1 xs:mt-2 rounded-3xl bg-orange-300 text-white'>
                                <span className='text-[10px] xxs:text-xs xl:text-base'>دریافت جایزه</span>
                                <div className='text-white w-5 h-5 xl:w-7 xl:h-7 -m-1.5 pt-[1px]'><ChevronLeftIcon /></div>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
