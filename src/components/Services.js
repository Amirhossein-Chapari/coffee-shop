import React from 'react'

export default function Service() {
    return (
        <section>
            <div className="container">
                <div className="flex flex-wrap justify-center xl:justify-between items-center gap-y-6 gap-x-[20px] sm:gap-x-[29px] text-zinc-700 dark:text-white">
                    <div className='flex-col sm:flex sm:flex-row mx-auto gap-5'>
                        <img src={process.env.PUBLIC_URL + '/images/Services/support.svg'} className='mx-auto' alt="" />
                        <div className='flex flex-col gap-1 items-center sm:items-start sm:justify-evenly text-[10px] sm:text-lg md:text-sm pt-2 sm:pt-0'>
                            <p className='font-DanaMedium'>پشتیبانی شبانه روزی</p>
                            <span className='font-Dana'> 7 روز هفته ، 24 ساعته</span>
                        </div>
                    </div>
                    <div className='flex-col sm:flex sm:flex-row mx-auto gap-5'>
                        <img src={process.env.PUBLIC_URL + '/images/Services/express-delivery.svg'} className='mx-auto' alt="" />
                        <div className='flex flex-col gap-1 items-center sm:items-start sm:justify-evenly text-[10px] sm:text-lg md:text-sm pt-2 sm:pt-0'>
                            <p className='font-DanaMedium'>امکان تحویل اکسپرس</p>
                            <span className='font-Dana'>ارسال بسته با سرعت زیاد</span>
                        </div>
                    </div>
                    <div className='flex-col sm:flex sm:flex-row mx-auto gap-5'>
                        <img src={process.env.PUBLIC_URL + '/images/Services/coffee.svg'} className='mx-auto' alt="" />
                        <div className='flex flex-col gap-1 items-center sm:items-start sm:justify-evenly text-[10px] sm:text-lg md:text-sm pt-2 sm:pt-0'>
                            <p className='font-DanaMedium'>رست تخصصی</p>
                            <span className='font-Dana'>تازه پوسته و باکیفیت</span>
                        </div>
                    </div>
                    <div className='flex-col sm:flex sm:flex-row mx-auto gap-5'>
                        <img src={process.env.PUBLIC_URL + '/images/Services/pitcher.svg'} className='mx-auto' alt="" />
                        <div className='flex flex-col gap-1 items-center sm:items-start sm:justify-evenly text-[10px] sm:text-lg md:text-sm pt-2 sm:pt-0'>
                            <p className='font-DanaMedium'> اکسسوری قهوه</p>
                            <span className='font-Dana'>وسایل و ادوات دم اوری</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
