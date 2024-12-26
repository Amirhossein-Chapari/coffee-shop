import React, { useState } from 'react'
// Icons
import { ShoppingBagIcon, XMarkIcon, Bars3Icon, MoonIcon, SunIcon, HomeIcon, ChatBubbleBottomCenterTextIcon, PhoneIcon, DocumentIcon, BriefcaseIcon, ChevronDownIcon, ChevronLeftIcon,  ShoppingCartIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';

// Components
import SideMenu from './SideMenu'


export default function MobileHeader() {

    const sidebar = [
        { id: 1, icon: <HomeIcon />, title: "صفحه ی اصلی" },
        { id: 2, icon: <ShoppingBagIcon />, title: "فروشگاه" },
        { id: 3, icon: <ChatBubbleBottomCenterTextIcon />, title: "دیکشنری" },
        { id: 4, icon: <BriefcaseIcon />, title: "درباره ما" },
        { id: 5, icon: <DocumentIcon />, title: "بلاگ" },
        { id: 6, icon: <PhoneIcon />, title: "تماس با ما" },
    ]

    // Toggle Sidebar
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


    // Toggle Submenu
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const toggleSubmenu = () => {
        setIsSubMenuOpen(!isSubMenuOpen);
    };

      // Toggle Cart
      const [isToggleCartOpen, setIsToggleCartOpen] = useState(false);

      const toggleCart = () => {
          setIsToggleCartOpen(!isToggleCartOpen);
      };


    // Toggle Dark mode
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle("dark");
    };


    return (
        <div className='flex md:hidden items-center justify-between px-4 h-16 font-Dana bg-white dark:bg-zinc-700 relative z-10'>
            {/* Nav Icon */}
            <button onClick={toggleSidebar} className='w-6 text-zinc-700 dark:text-white'><Bars3Icon /></button>

            {/* Nav */}
            <div className={`fixed top-0 bottom-0 w-64 ${isSidebarOpen ? 'right-0 ' : '-right-64'} min-h-screen pt-3 px-4 bg-white dark:bg-zinc-700 transition-all`}>
                {/* Nav Header */}
                <div className='flex items-center justify-between pb-5 mb-6 border-b border-b-gray-100 dark:border-b-white/10'>
                    <img src={process.env.PUBLIC_URL + '/images/Header/app-logo.svg'} alt="" className='w-[41px] h-10' />
                    <div className='flex gap-x-3.5 '>
                        <img src={process.env.PUBLIC_URL + '/images/Header/app-logo-type.svg'} alt="" className='w-[100px] h-10' />
                    </div>
                    <button onClick={toggleSidebar} className='text-zinc-600 dark:text-white w-6'><XMarkIcon /></button>
                </div>

                {/* Nav Menu */}
                <div className='flex items-center h-10 pr-2.5 mb-4 bg-orange-200/20 text-orng300 rounded-md'>
                    <SideMenu {...sidebar[0]} />
                </div>
                <div className='text-zinc-600 dark:text-white Child:px-2.5 px-0 space-y-6'>
                    <div className={`text-${isSubMenuOpen && 'orange-300'}`}>
                        <div className='flex items-center justify-between relative'>
                            {/* Submenu */}
                            <SideMenu {...sidebar[1]}>
                                <li className={`submenu ${isSubMenuOpen && 'submenu--open'}`}>
                                    <a href="#">قهوه ویژه</a>
                                    <a href="#" className='submenu__item--active'>ویژه در سطح جهانی</a>
                                    <a href="#">قهوه درجه یک</a>
                                    <a href="#">ترکیبات تجاری</a>
                                    <a href="#">کپسول قهوه</a>
                                    <a href="#">قهوه زینو برزیلی</a>
                                </li>
                            </SideMenu>
                            <button onClick={toggleSubmenu} className='submenu-open-btn w-5'>
                                {isSubMenuOpen ? <ChevronDownIcon /> : <ChevronLeftIcon />}
                            </button>
                        </div>
                    </div>
                    <SideMenu {...sidebar[2]} />
                    <SideMenu {...sidebar[3]} />
                    <SideMenu {...sidebar[4]} />
                    <SideMenu {...sidebar[5]} />
                </div>

                {/* Nav Footer */}
                <div className='text-orange-300 space-y-6 pt-8 px-2.5 mt-8 border-t border-t-gray-100 dark:border-b-white/10'>
                    <a href="" className='inline-flex items-center gap-x-2'>
                        <div className='w-5 h-5'>
                            <ArrowLeftOnRectangleIcon />
                        </div>
                        ورود   |   ثبت نام
                    </a>

                    <button onClick={toggleDarkMode} className='flex items-center gap-x-2'>
                        {isDarkMode ? (
                            <div className='flex gap-x-2'>
                                <div className='w-5 h-5'><SunIcon /></div>
                                <span>تم روشن</span>
                            </div>
                        ) : (
                            <div className='flex gap-x-2'>
                                <div className='w-5 h-5'><MoonIcon /></div>
                                <span>تم تیره</span>
                            </div>
                        )}
                    </button>


                    <a href="" className='inline-flex items-center gap-x-2'>
                        <div className='w-5 h-5'>
                            <ShoppingCartIcon />
                        </div>
                        سبد خرید
                    </a>
                </div>
            </div>

            {/* Logo Type */}
            <img src={process.env.PUBLIC_URL + '/images/Header/app-logo-type.svg'} alt="" className='w-[100px] h-10' />

            {/* Cart Icon */}
            <button onClick={toggleCart} className='text-zinc-700 dark:text-white'><ShoppingCartIcon /></button>

            {/* Mobile Cart */}
            
            <div className={`fixed top-0 bottom-0 left-0 ${isToggleCartOpen ? 'left-0' : '-left-64'} flex flex-col w-64 max-h-screen pt-5 px-4 bg-white dark:bg-zinc-700 transition-all`}>
                {/* Cart Header */}
                <div className='flex items-center justify-between pb-5 mb-5 border-b border-b-gray-300 dark:border-b-white/10'>
                    <button onClick={toggleCart} className='text-zinc-600 dark:text-white'><XMarkIcon /></button>
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

        </div>
    )
}
