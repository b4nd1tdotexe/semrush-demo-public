import Heart from '@/../public/heart.svg';
import Star from '@/../public/star.svg';
import Diamond from '@/../public/diamond.svg';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

const Figure = ({
  title,
  users,
  desc,
  icon
}: {
  title: string,
  users: string,
  desc: string,
  icon: StaticImport
}) => (
  <div>
    <div className='relative inline-block lg:pb-[1rem]'>
      <p className='font-semibold leading-[1.05] text-[3.5rem] whitespace-nowrap md:text-[3.75rem] lg:text-[4.375rem]'>{title}</p>
      <Image draggable={false} src={icon} alt={title} className='absolute h-[50px] w-[52px] top-[-16px] right-[-20px] z-[-1] md:w-[68px] md:h-[68px] md:right-[-36px] object-contain select-none' />
    </div>
    <p className='text-[1.125rem] max-w-[242px] md:text-[1.313rem] md:max-w-[205px] lg:max-w-[280px]'><span className='font-bold'>{users}</span> {desc}</p>
  </div>
)

const Figures = () => (
  <div className='flex flex-col gap-10 lg:gap-20 justify-center items-center text-center px-2 pb-16'>
    <h2 className='max-w-[15.6em] md:max-w-[18em] leading-[1.2] text-[1.75rem] font-semibold md:text-[2.5rem] lg:text-[2.813rem]'>Award-winning tools trusted by&nbsp;the&nbsp;world&apos;s leading companies</h2>
    <div className='flex flex-col gap-10 xl:gap-[7rem] items-center md:flex-row'>
      <Figure title='10M' users='marketing professionals' desc='have already used Semrush' icon={Heart} />
      <Figure title='21' users='international awards' desc='as best SEO software suite' icon={Star} />
      <Figure title='30%' users='Fortune 500' desc='companies use Semrush as their go-to marketing tool' icon={Diamond} />
    </div>
  </div>
)

export default Figures;