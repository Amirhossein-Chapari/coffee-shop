import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function Footer() {
    return (
        <section className='flex-col mt-20 bg-zinc-700 px-5 py-12 pb-5 font-DanaMedium text-white'>
            <div className='sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start w-full text-xs xs:text-sm md:text-base'>
                {/* Right Part : Icon & Text */}
                <div className='col-span-1'>
                    <div className='flex gap-5 h-10 mb-5'>
                        <img src={process.env.PUBLIC_URL + '/images/Footer/logo.svg'} alt="" />
                        <img src={process.env.PUBLIC_URL + '/images/Footer/logo-type.svg'} alt="" />
                    </div>
                    <p className='leading-10'>ما برانیم با پیشرو بودن در فرایند تولید، نوع و کیفیت محصول، خدمات و توزیع، الگویی برای تولیدکنندگان ایرانی باشیم و به مرجع فرهنگ قهوه در ایران تبدیل شویم. میپنداریم که نظر مردم ایران و منطقه باید نسبت به کالای ایرانی بهبود یابد و در این راستا با اشتیاق میکوشیم.</p>
                </div>
                {/* Quick Access */}
                <div className='col-span-1 mx-auto'>
                    <h1 className='font-DanaDemiBold my-5'>دسترسی سریع</h1>
                    <div className='flex gap-10'>
                        <ul className='flex flex-col gap-2 list-disc hover:Child:text-orange-300 transition-all Child:leading-8'>
                            <li>حریم خصوصی</li>
                            <li>عودت کالا</li>
                            <li>شرایط استفاده</li>
                            <li>ثبت سفارش</li>
                        </ul>
                        <ul className='flex flex-col gap-2 list-disc hover:Child:text-orange-300 transition-all Child:leading-8'>
                            <li>پرسش های متداول</li>
                            <li>فرصت های شغلی</li>
                            <li>ضمانت نامه ها</li>
                            <li>ارتباط با ما</li>
                        </ul>
                    </div>
                </div>
                {/* Contact */}
                <div className='col-span-2 lg:col-span-1 font-DanaMedium mt-5'>
                    <h1 className='font-DanaDemiBold'>در تماس باشیم</h1>
                    <div className='flex flex-col gap-5 my-5'>
                        <div className='flex gap-2'>
                            <div className='w-5'><MapPinIcon /></div>
                            <p>بلوار میرداماد،خیابان البرز،کوچه قبادیان شرقی، پلاک 33</p>
                        </div>
                        <div className='flex flex-wrap gap-5'>
                            <div className='flex gap-2 text-orange-300'>
                                <div className="w-5"><EnvelopeIcon /></div>
                                <p>info@coffee.com</p>
                            </div>
                            <div className='flex gap-2'>
                                <div className='w-5'><PhoneIcon /></div>
                                <p>0902 123 6628</p>
                                <p className='px-5'>2415683 - 021</p>
                            </div>
                        </div>

                        <div className='flex gap-5 font-MorabbaMedium'>
                            <a href='#' className='flex justify-center items-center w-44 h-10 text-orange-300 border border-orange-300 rounded-xl'>
                                <img src={process.env.PUBLIC_URL + '/images/Footer/instagram.svg'} className='w-6 xxs:w-8 ml-1 hover:text-zinc-700' alt="" />
                                <span>golden-coffee@</span>
                            </a>
                            <a href='#' className='flex justify-center items-center w-44 h-10 text-zinc-700 bg-gradient-to-tl from-orange-300 to-amber-200 border border-orange-300 rounded-xl'>
                                <img src={process.env.PUBLIC_URL + '/images/Footer/telegram.svg'} className='w-6 xxs:w-8 ml-1' alt="" />
                                <span>golden-coffee@</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Border */}
            <div className='w-full border border-gray-600 my-5'></div>
            {/* End of footer */}
            <div className='text-center font-sans text-xs xs:text-sm md:text-base'>Created by Amirhossein Chapari - React js + Tailwind CSS </div>
        </section>
    )
}
