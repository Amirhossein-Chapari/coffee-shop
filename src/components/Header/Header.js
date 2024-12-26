import Nav from './DescktopNav/Nav';
import MobileMenu from './MobileNav/MobileMenu';
import Curve from './DescktopNav/Curve';
import { ChevronDownIcon } from '@heroicons/react/20/solid';


export default function Header() {
  const scrollBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      <Nav />
      <MobileMenu />

      <main>
        <section className="home relative h-[200px] xs:aspect-[2/1] md:aspect-auto xs:h-auto mobile-bg md:descktop-bg bg-[center_top]">
          <div className="container relative h-full md:min-h-screen flex justify-end items-center overflow-y-hidden">
            <div className='text-white'>
              <h2 className='font-MorabbaBold text-2xl md:text-6xl/[62px] md:mb-2'>قهوه عربیکا تانزانیا</h2>
              <span className='font-MorabbaLight text-xl md:text-5xl/[64px]'>یک فنجان بالانس !</span>
              <span className='block w-[100px] h-px md:h-0.5 bg-orange-300 my-3 md:my-8'></span>
              <p className='max-w-[201px] md:max-w-[460px] text-xs md:text-2xl font-Dana'>قطعا نام آشنای عربیکا را شنیده اید، عربیکا یکی از گونه های قهوه است که در نواحی مختلف کمربند قهوه کشت میشود.</p>
            </div>
            {/* Circle */}
            <div className='circle circle--main circle--lg hidden md:flex'>
              <div className='circle circle--md'>
                <div className='circle circle--sm'></div>
              </div>
            </div>
          </div>

          {/* Curve */}
          <svg className='absolute bottom-0 right-0 left-0 mx-auto hidden sm:inline-block text-gray-100 dark:text-zinc-800 w-[100px] h-[22px]'><Curve /></svg>

          {/* Arrow Circle */}
          <div className='absolute bottom-0 right-0 left-0 mx-auto translate-y-2/4 hidden sm:flex items-center justify-center w-[30px] h-[30px] border-2 border-orange-300 rounded-full hover:scale-125 transition-all'>
            <button onClick={scrollBottom} className='flex items-center justify-center w-5 h-5 text-zinc-700 dark:text-white'><ChevronDownIcon /></button>
          </div>

        </section>

      </main>
    </div>
  );
}
