import React from 'react'
import { ChevronLeftIcon } from '@heroicons/react/20/solid';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';


export default function Cart() {
    return (
        <div>
            <div className='relative group cursor-pointer'>
                {/* Cart Icon --- Hover */}
                <div className='w-6'>
                    <ShoppingCartIcon />
                </div>
                {/* Cart Box opacity-->0 invisible */}
                <div className='absolute top-full left-0 p-5 w-96 font-DanaMedium opacity-0 invisible group-hover:opacity-100 group-hover:visible text-zinc-700 dark:text-white text-sm bg-white dark:bg-zinc-700 border-t-[3px] border-t-orange-300 shadow-normal rounded-2xl transition-all delay-75 tracking-normal '>
                    {/* Cart Header */}
                    <div className='flex items-center justify-between text-xs tracking-tighter'>
                        <span className='text-gray-300'>1 مورد </span>
                        <a href="#" className='flex items-center text-orange-300'>
                            مشاهده ی سبد خرید
                            <div className='w-4'>
                                <ChevronLeftIcon />
                            </div>
                        </a>
                    </div>

                    {/* Cart Body */}
                    <div className='max-h-80 overflow-y-scroll pb-1 pl-2 mt-5 border-b border-b-gray-300 dark:border-b-white/25 divide-y divide-gray-100 dark:divide-white/10 Child:py-5'>
                        <div className='text-base flex gap-x-2.5'>
                            <img src={process.env.PUBLIC_URL + '/images/Products/p2.png'} alt="" className='w-30 h-30' />
                            <div className='flex flex-col justify-between'>
                                <h4 className='text-zinc-700 dark:text-white line-clamp-2'>قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی</h4>
                                <div>
                                    <span className='text-teal-600 dark:text-emerald-500 text-[11px] tracking-tighter'>14.500 تومان تخفیف </span>
                                    <div className='text-zinc-700 dark:text-white text-lg font-normal'>
                                        175,000
                                        <span className='text-sm'> تومان</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='text-base flex gap-x-2.5'>
                            <img src={process.env.PUBLIC_URL + '/images/Products/p1.png'} alt="" className='w-30 h-30' />
                            <div className='flex flex-col justify-between'>
                                <h4 className='text-zinc-700 dark:text-white line-clamp-2'>اسپرسو بن مانو مدل پریسکا اسپرسو بن مانو مدل پریسکا قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی</h4>
                                <div>
                                    <span className='text-teal-600 dark:text-emerald-500 text-[11px] tracking-tighter'>14.500 تومان تخفیف </span>
                                    <div className='text-zinc-700 dark:text-white text-lg font-normal'>
                                        175,000
                                        <span className='text-sm'> تومان</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='text-base flex gap-x-2.5'>
                            <img src={process.env.PUBLIC_URL + '/images/Products/p3.png'} alt="" className='w-30 h-30' />
                            <div className='flex flex-col justify-between'>
                                <h4 className='font-DanaMedium text-zinc-700 dark:text-white line-clamp-2'>قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی</h4>
                                <div>
                                    <span className='text-teal-600 dark:text-emerald-500 text-[11px] tracking-tighter'>14.500 تومان تخفیف </span>
                                    <div className='text-zinc-700 dark:text-white text-lg'>
                                        175,000
                                        <span className='text-sm'> تومان</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Cart Footer */}
                    <div className='flex justify-between mt-5'>
                        <div className='flex flex-col justify-center'>
                            <span className='text-gray-300 text-xs tracking-tighter'>مبلغ قابل پرداخت</span>
                            <div className='text-zinc-700 dark:text-white text-[16.5px] text-lg'>
                                350,000
                                <span className='text-xs'> تومان</span>
                            </div>
                        </div>
                        <a href="" className='flex items-center justify-center text-white w-[144px] h-14 bg-teal-600 dark:bg-emerald-500 hover:bg-teal-700 dark:hover:bg-emerald-600 transition-colors rounded-xl text-lg tracking-tightest'>ثبت سفارش</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
