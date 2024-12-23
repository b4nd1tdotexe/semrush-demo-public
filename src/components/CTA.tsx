import Link from 'next/link';

const CTA = () => (
  <div className='bg-[#421983] text-white text-center py-12 px-12'>
    <div className='flex flex-col gap-6 items-center'>
      <p className='text-[1.5rem] sm:text-[2.625rem] font-bold'>Get started with Semrush today</p>
      <p className='text-sm sm:text-[1.3rem]'>Get 7 days of full access to all toolkits. Cancel anytime.</p>
      <Link href='https://www.semrush.com/signup/'>
        <button className='bg-[#FF622D] px-8 py-4 rounded-md font-medium min-w-[210px] text-sm sm:text-[1.125rem] sm:min-w-[346px] hover:bg-[#AD3000] transition-colors'>Start your free trial</button>
      </Link>
    </div>
  </div>
)

export default CTA;