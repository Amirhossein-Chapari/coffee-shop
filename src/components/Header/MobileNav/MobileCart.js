import React, { useState } from 'react'
import { XMarkIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';



export default function MobileCart() {

    // Toggle Sidebar
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            {/* Cart Icon */}
            <button onClick={isSidebarOpen} className='text-zinc-700 dark:text-white'><ShoppingCartIcon /></button>

            <div className={`fixed top-0 bottom-0 left-0 ${isSidebarOpen ? 'left-0' : '-left-full'} flex flex-col w-64 max-h-screen pt-5 px-4 bg-white dark:bg-zinc-700 transition-all`}>
                {/* Cart Header */}
                <div className='flex items-center justify-between pb-5 mb-5 border-b border-b-gray-300 dark:border-b-white/10'>
                    <button onClick={toggleSidebar} className='text-red-600 dark:text-white w-8 h-8'><XMarkIcon width={18}/></button>
                    <span className='text-zinc-700 dark:text-white'>سبد خرید</span>
                </div>

                {/* Cart Body */}
                <div className='overflow-y-auto -mt-5 -ml-4'>
                    <div className='Child:pb-5 Child:mb-5 mt-5 ml-4'>
                        <div className='flex gap-x-1 border-b border-gray-100 dark:border-white/10'>
                            <img src={process.env.PUBLIC_URL + '/images/Products/p2.png'} alt="" className='w-[90px] h-[90px]' />
                            <div className='flex flex-col justify-between gap-y-1.5'>
                                <h4 className='font-DanaMedium text-sm text-zinc-700 dark:text-white line-clamp-2'>قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی</h4>
                                <div>
                                    <span className='text-teal-600 dark:text-emerald-500 text-xs font-DanaMedium tracking-tighter'>14.500 تومان تخفیف </span>
                                    <div className='text-zinc-700 dark:text-white font-DanaMedium text-lg'>
                                        175,000
                                        <span className='text-xs'> تومان</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-x-1 border-b border-gray-100 dark:border-white/10'>
                            <img src={process.env.PUBLIC_URL + '/images/Products/p1.png'} alt="" className='w-[90px] h-[90px]' />
                            <div className='flex flex-col justify-between gap-y-1.5'>
                                <h4 className='font-DanaMedium text-sm text-zinc-700 dark:text-white line-clamp-2'>قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی</h4>
                                <div>
                                    <span className='text-teal-600 dark:text-emerald-500 text-xs font-DanaMedium tracking-tighter'>14.500 تومان تخفیف </span>
                                    <div className='text-zinc-700 dark:text-white font-DanaMedium text-lg'>
                                        175,000
                                        <span className='text-xs'> تومان</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cart Footer */}

                <div className='flex items-end justify-center gap-x-4 mt-auto mb-8'>
                    <a href="" className='flex items-center justify-center text-white w-28 h-11 bg-teal-600 dark:bg-emerald-500 hover:bg-teal-700 dark:hover:bg-emerald-600 transition-colors rounded-xl tracking-tightest'>ثبت سفارش</a>
                    <div>
                        <span className='text-gray-300 text-xs tracking-tighter'>مبلغ قابل پرداخت</span>
                        <div className=' text-zinc-700 dark:text-white font-normal font-DanaMedium'>
                            350,000
                            <span className='text-xs'> تومان</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
