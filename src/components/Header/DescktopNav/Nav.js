import React from 'react'
import { SunIcon, MoonIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';
import Cart from './Cart'


const handleThemeSwitch = () => {
    document.documentElement.classList.toggle("dark")
}


export default function Nav() {
    return (
        <nav className='fixed top-8 right-0 left-0 z-50 font-Dana lg:text-lg hidden md:flex items-center w-[90%] h-20 mx-auto bg-black/50 rounded-3xl backdrop-blur-sm'>
            <div className='flex items-center w-full justify-between sm:px-5 medium:px-10 py-5'>
                {/* Logo & Menu */}
                <nav className='flex items-center gap-x-5 madium:gap-x-9 h-14'>
                    {/* ---Logo--- */}
                    <img src={process.env.PUBLIC_URL + '/images/Header/app-logo.svg'} alt="" />

                    {/* ---Menu--- */}
                    <ul className='flex items-center gap-5 medium:gap-x-7 h-full Child:leading-[56px] text-gray-300 tracking-tightest'>
                        <li>
                            <a href="#" className='text-orange-200'>صفحه ی اصلی</a>
                        </li>
                        {/* Has Sub */}
                        <li className='relative group'>
                            <a href="#" className='group-hover:text-orange-300 transition-colors'>فروشگاه</a>
                            {/* Submenu */}
                            <div className='absolute top-full p-6 w-44 space-y-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible text-zinc-700 dark:text-white text-sm bg-white dark:bg-zinc-700 border-t-[3px] border-t-orange-300 shadow-normal rounded-2xl transition-all delay-75 Child:inline-block tracking-normal Child:transition-colors Child-hover:text-orange-300'>
                                <a href="#">قهوه ویژه</a>
                                <a href="#">ویژه در سطح جهانی</a>
                                <a href="#">قهوه درجه یک</a>
                                <a href="#">ترکیبات تجاری</a>
                                <a href="#">کپسول قهوه</a>
                                <a href="#">قهوه زینو برزیلی</a>
                            </div>
                        </li>
                        <li>
                            <a href="#">دیکشنری</a>
                        </li>
                        <li>
                            <a href="#">بلاگ</a>
                        </li>
                        <li>
                            <a href="">درباره ما</a>
                        </li>
                        <li>
                            <a href="">تماس با ما</a>
                        </li>
                    </ul>
                </nav>

                {/* Cart & Theme Toggle, Login Link */}
                <div className='flex text-orange-200 gap-5 lg:gap-x-9'>
                    {/* Cart Icon & Theme Switch Btn */}
                    <div className='flex gap-x-5 items-center'>
                        {/* ---Cart--- سبدخرید*/}
                        <Cart />

                        {/* Theme Switch Btn */}
                        <button onClick={handleThemeSwitch}>
                            <div className='inline-block dark:hidden mt-2 w-6'><MoonIcon /></div>
                            <div className='hidden dark:inline-block mt-2 w-6'><SunIcon /></div>
                        </button>

                    </div>

                    {/* Divide Border */}
                    <span className='w-px h-12 my-auto inline-block bg-white/20'></span>

                    {/* Login Link */}
                    <button className='flex gap-2 items-center justify-center tracking-tightest'>
                        <span className='w-6'><ArrowLeftOnRectangleIcon /></span>
                        <a href="#" className='hidden lg:inline-block pb-1'>
                            ورود | ثبت نام
                        </a>
                    </button>
                </div>
            </div>
        </nav>
    )
}
