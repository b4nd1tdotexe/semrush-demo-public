import styles from '@/../styles/Spotlight.module.css';
import Image from 'next/image';
import SpotlightImg from '@/../public/spotlightBySemrush.svg';
import Link from 'next/link';

const Spotlight = () => (
  <div className='bg-[transparent] px-4 py-6 select-none' draggable={false}>
    <div className={`${styles.container} bg-[#6F00FF] text-white px-4 py-10 relative overflow-hidden rounded-2xl flex justify-center max-w-[710px] mx-auto lg:max-w-[990px] lg:py-3 xl:py-6 xl:px-10 xl:max-w-[1200px]`}>
      <div className={styles.gradient} />
      <div className={styles.img} />
      <div className='flex flex-col md:flex-row gap-4 md:gap-10 items-center md:items-start xl:items-center z-[1] relative text-center'>
        <div className='flex flex-col gap-4 md:gap-2 py-2 pl-4'>
          <Image src={SpotlightImg} alt='Spotlight by Semrush' draggable={false} className='w-[244px] md:w-[273px] xl:w-[320px]' />
          <div className='text-[0.875rem] font-semibold leading-[1.2] md:text-[1rem] lg:hidden'>
            <time>October 30, 2024</time>
            <span> | </span>
            <p className='inline'>Amsterdam, NL</p>
          </div>
        </div>
        <div className='flex flex-col gap-8 xl:gap-12 md:gap-4 items-center md:text-start md:items-start lg:flex-row lg:items-center'>
          <div className='py-2 px-1 bg-[#E6FF4B] rounded-lg text-[#2F1656] text-center text-[0.938rem] leading-[1.1] font-bold xl:px-0 hidden lg:block'>
            <p><span className='text-[2.188rem]'>60+</span> sessions</p>
          </div>
          <div className='text-[1.563rem] max-w-[340px] leading-[1.12] font-bold text-[1.875rem] lg:max-w-[none] xl:text-[2.25rem]'>
            <h2 className='lg:text-[#E6FF4B] xl:font-extrabold'>Join <span className='text-[#E6FF4B] lg:text-white'>the</span> marketing conference of the year</h2>
            <p className='text-[#E6FF4B] lg:hidden'>60+ sessions</p>
          </div>
          <div className='lg:min-w-[190px] xl:min-w-[200px] text-center flex flex-col gap-2'>
            <div className='text-[0.75rem] leading-[1.2] xl:text-[0.938rem] xl:font-medium'>
              <time>Oct 30, 2024</time>
              <span> | </span>
              <p className='inline'>Amsterdam</p>
            </div>
            <Link href='https://www.spotlightconf.com/'>
              <button className='text-[#E6FF4B] bg-[#2F1656] px-4 py-2 rounded-full w-full max-w-[220px] hover:text-black hover:bg-white transition-colors uppercase text-[0.7rem] xl:font-bold xl:text-[0.8rem]'>Register now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Spotlight;