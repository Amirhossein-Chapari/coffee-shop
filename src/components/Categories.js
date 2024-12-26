import React from 'react'

export default function Categories() {
    return (
        <section className='container'>
            {/* Category Banner */}
            <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-5 mt-10 md:mt-20 mb-10 Child:rounded-xl font-DanaDemiBold text-white Child:p-10 md:Child:p-16'>
                <div className='types-of-coffee bg-cover flex items-center shadow-normal'>
                    <a href="#">
                        <h1 className='text-xl md:text-3xl pb-1 md:pb-3'>انواع قهوه</h1>
                        <span className='font-Dana text-sm md:text-xl'>ترکیبی و تک خاستگاه</span>
                    </a>
                </div>
                <div className='instant-powders bg-cover flex items-center shadow-normal'>
                    <a href="#">
                        <h1 className='text-xl md:text-3xl pb-1 md:pb-3'>پودر های فوری</h1>
                        <span className='font-Dana text-sm md:text-xl'>نسکافه ، هات چاکلت ، ماسالا</span>
                    </a>
                </div>
            </div>
            {/* Product Category */}
            <div className='flex flex-wrap items-center justify-center xl:justify-between gap-y-6 gap-x-[20px] sm:gap-x-[29px] text-center mt-10 md:mt-20 mb-10 md:mb-20'>
                <div className='w-25 md:w-50'>
                    <a href='#'>
                        <img src={process.env.PUBLIC_URL + '/images/Categories/category1.png'} loading='lazy' alt="" />
                    </a>
                    <span className='inline-block font-DanaDemiBold text-sm md:text-xl text-zinc-700 dark:text-white mt-1.5 md:mt-2.5'>قهوه دمی و اسپرسو</span>
                </div>
                <div className='w-25 md:w-50'>
                    <a href='#'>
                        <img src={process.env.PUBLIC_URL + '/images/Categories/category2.png'} loading='lazy' alt="" />
                    </a>
                    <span className='inline-block font-DanaDemiBold text-sm md:text-xl text-zinc-700 dark:text-white mt-1.5 md:mt-2.5'>لوازم جانبی و تجهیزات</span>
                </div>
                <div className='w-25 md:w-50'>
                    <a href='#'>
                        <img src={process.env.PUBLIC_URL + '/images/Categories/category3.png'} loading='lazy' alt="" />
                    </a>
                    <span className='inline-block font-DanaDemiBold text-sm md:text-xl text-zinc-700 dark:text-white mt-1.5 md:mt-2.5'>اسپرسو ساز</span>
                </div>
                <div className='w-25 md:w-50'>
                    <a href='#'>
                        <img src={process.env.PUBLIC_URL + '/images/Categories/category4.png'} loading='lazy' alt="" />
                    </a>
                    <span className='inline-block font-DanaDemiBold text-sm md:text-xl text-zinc-700 dark:text-white mt-1.5 md:mt-2.5'>پک تستر قهوه</span>
                </div>
                <div className='w-25 md:w-50'>
                    <a href='#'>
                        <img src={process.env.PUBLIC_URL + '/images/Categories/category5.png'} loading='lazy' alt="" />
                    </a>
                    <span className='inline-block font-DanaDemiBold text-sm md:text-xl text-zinc-700 dark:text-white mt-1.5 md:mt-2.5'>قهوه ترک</span>
                </div>
            </div>
        </section>
    )
}
