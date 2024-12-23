import styles from '@/../styles/Stats.module.css';
import Link from 'next/link';

const StatCard = ({
  title,
  content
}: {
  title: string,
  content: string
}) => (
  <div className='flex flex-col gap-1 bg-white inline-block rounded-lg p-[1.5rem] shadow-md'>
    <p className='text-[2.125rem] font-semibold leading-[1.2] lg:text-[2.625rem] xl:text-[3.125rem]'>{title}</p>
    <p className='text-[0.875rem] lg:text-[1rem]'>{content}</p>
  </div>
)

const Stats = () => {
  return (
    <div className='flex justify-center px-3 pb-10'>
      <div className='grid grid-rows-1 gap-8 md:max-w-[680px] lg:grid-cols-[4fr_3fr] lg:max-w-[940px] lg:gap-12 xl:max-w-[1110px] xl:gap-[5rem]'>
        <div className='relative grid grid-cols-2 gap-3 pt-[4.75rem] row-start-1 lg:col-start-2'>
          <div className={styles.bg} />
          <StatCard title='25B' content='keywords' />
          <StatCard title='43T' content='backlinks' />
          <StatCard title='808M' content='domain profiles' />
          <StatCard title='140' content='geo databases' />
        </div>
        <div className='flex flex-col gap-3 lg:justify-center'>
          <p className='text-[1.75rem] font-semibold leading-[1.2] text-[1.75rem] md:text-[2.5rem] lg:text-[2.813rem]'>More data. More insights.</p>
          <div className='flex flex-col gap-6'>
            <p className='text-[1.125rem] md:text-[1.313rem]'>
              With the size of our SEO databases and speed of our backlink crawler, imagine what you can achieve if you have the insights your competitors don&apos;t.
            </p>
            <Link href='https://www.semrush.com/stats/'>
              <button className='text-white w-full bg-[#FF622D] font-medium py-3 px-12 rounded-md text-[1.125rem] transition-all hover:bg-[#AD3000] md:w-fit'>Learn more</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats;