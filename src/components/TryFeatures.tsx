import FeaturesCarousel from './FeaturesCarousel';

const TryFeatures = () => {
  return (
    <div className='bg-[transparent]'>
      <div className='relative z-[1] flex flex-col gap-12'>
        <h2 className='text-center text-[1.75rem] font-semibold md:text-white md:text-[2.5rem] lg:text-[2.813rem]'>See what&apos;s inside</h2>
        <FeaturesCarousel />
      </div>
    </div>
  )
}

export default TryFeatures;