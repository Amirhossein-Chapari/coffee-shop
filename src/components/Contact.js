import React from 'react'
import { PhoneIcon } from '@heroicons/react/24/outline';


export default function Contact() {
    return (
        <section className='my-20'>
            <div className='container flex flex-wrap sm:flex-nowrap gap-x-5'>
                <img src={process.env.PUBLIC_URL + '/images/Contact/Contact.png'} className='mx-auto sm:mx-0' />
                <div className='flex flex-col justify-evenly gap-2 py-5 text-zinc-700 dark:text-white '>
                    <div>
                        <h3 className='font-MorabbaMedium text-base xs:text-xl sm:text-2xl md:text-4xl lg:text-5xl sm:pb-2'>یکی از بهترین قهوه ها!</h3>
                        <span className='font-MorabbaLight text-xs xs:text-sm sm:text-base md:text-xl lg:text-2xl'>کیفیت قهوه را از ما بخواهید ...</span>
                    </div>
                    <span className='text-xs xs:text-sm sm:text-base md:text-xl lg:text-2xl'>. . .</span>
                    <p className='font-DanaMedium text-xs xs:text-sm sm:text-base md:text-xl'>فضای گرم و دنج ما را احساس کنید. جایی که همه می توانند قهوه معطری پیدا کنند و دسرهای خوشمزه ما را که کاملا با قهوه داغ همراه شده است، امتحان کنند. فضای داخلی شیک و کارکنان خوش برخورد ما روز شما را میسازند!</p>
                    <button className='flex justify-center items-center gap-1 mt-1 w-40 h-10 font-Dana text-sm text-orange-300 border-2 border-orange-300 rounded-3xl hover:text-orange-400 hover:border-orange-400 transition-all'>
                        <div className='w-5'><PhoneIcon /></div>
                        <span>ثبت سفارش تلفنی</span>
                    </button>
                </div>
            </div>
        </section>
    )
}
