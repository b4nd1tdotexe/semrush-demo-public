import LogoIcon from './icons/Logo';

const Copyrights = () => {
  return (
    <div className='bg-[#111317] px-4 py-6 flex justify-center'>
      <div className='flex flex-col sm:flex-row w-full gap-4 max-w-[1070px] items-center'>
        <LogoIcon className='w-[165px] h-[22px]' />
        <p className='text-[#898D9A] text-xs'>&copy; 2008 - {new Date().getFullYear()} Semrush. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Copyrights;