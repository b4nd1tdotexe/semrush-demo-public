import Image from 'next/image';
import styles from '@/../styles/Quote.module.css';
import Cover from '@/../public/Mario_Leon_Rojas.webp';

const Quote = () => {
  return (
    <div className={`${styles.container} px-4 pt-10 flex justify-center`}>
      <div className='hidden md:block bg-[url(/bubble.svg)] bg-no-repeat absolute bottom-[190px] w-[690px] h-[837px] left-[calc(50%-100px)] lg:left-[calc(50%-45px)] lg:bottom-[127px] z-[-1]' />
      <div className='flex flex-col items-center text-center gap-4 max-w-[330px] md:max-w-[610px] lg:max-w-[884px]'>
        <p className='text-[1.313rem] font-semibold md:text-[2.5rem] leading-[1.2] lg:text-[2.813rem]'>“Semrush is like a keyword research tool, Google Trends, Moz, Hootsuite and SimilarWeb in one.”</p>
        <Image src={Cover} alt='Mario Leon Rojas' className='rounded-full w-[70px] h-[70px] md:w-[100px] md:h-[100px]' />
        <div className='flex flex-col text-[0.875rem] leading-[1.5] md:text-[1.063rem]'>
          <p className='font-bold'>Mario León Rojas</p>
          <p>Performance Marketing Specialist, <span className='whitespace-nowrap'>Banco del Sol</span></p>
          <p className='text-[#6C6E79]'>Source: Semrush G2 reviews</p>
        </div>
      </div>
    </div>
  )
}

export default Quote;