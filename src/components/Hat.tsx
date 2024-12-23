import styles from '@/../styles/Hat.module.css';
import Image from 'next/image';
import Link from 'next/link';
import HatImg from '@/../public/Oleg_Shchegolev_in_hat.webp';

const featureList = ['Access over 25 billion keywords for 130 countries', 'Run in-depth website audit based on 130+ checks', 'Get recommendations to improve your content to increase search rankings', 'Track and analyze competitor websites and marketing strategies', 'Create and track your PPC campaigns', 'Draft, schedule and post content on social', 'Create and schedule white-labeled or branded reports']

const Hat = () => {
  return (
    <div className='flex justify-center px-4'>
      <div className='flex flex-col w-full relative md:pt-[16.563rem] lg:pt-0 md:max-w-[680px] lg:max-w-[940px]'>
        <div className='flex flex-col items-center w-full lg:flex-row lg:gap-6 lg:ml-[-115px] xl:gap-20'>
          <div className={styles.hatImgContainer}>
            <Image src={HatImg} alt='Photo of CEO and founder Oleg Shchegolev wearing a white hoodie with the Semrush logo and a white painted hat on his head' />
            <div className='text-[0.563rem] absolute top-[25%] right-[10px] text-right'>
              <p className='text-[#FFE84D]'>Oleg Shchegolev</p>
              <p className='text-white'>CEO and Founder</p>
            </div>
          </div>
          <div className='flex flex-col w-full shrink-0 lg:w-[536px] lg:pt-[85px] xl:w-[600px] xl:pt-[120px]'>
            <div className='flex w-full flex-col gap-2 md:max-w-[350px] lg:max-w-none'>
              <p className='text-[1.75rem] font-semibold md:text-[2.5rem] lg:text-[2.813rem]'>Our CEO <br className='hidden md:block lg:hidden' /> will eat his hat</p>
              <p className='text-[1.125rem] md:text-[1.313rem]'>
                ... if you find another tool <br className='hidden md:block lg:hidden' /> that lets you do all these things
              </p>
            </div>
            <ul className='flex w-full flex-col gap-2 py-6 lg:py-12'>
              {featureList.map((feature, ind) => (
                <li className={`${styles.listItm} relative pl-[1.875rem] text-[0.875rem] md:text-[1.063rem]`} key={ind}>{feature}</li>
              ))}
            </ul>
            <Link className='w-full' href='https://www.semrush.com/features/'>
              <button className='text-white w-full bg-[#FF622D] font-medium py-3 px-3 rounded-md text-[1.125rem] transition-all hover:bg-[#AD3000] md:w-fit md:min-w-[326px] lg:min-w-[357px]'>Discover all Semrush features</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hat;