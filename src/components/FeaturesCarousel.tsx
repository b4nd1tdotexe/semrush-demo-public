'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import SEOIcon from './icons/SEO'
import Image, { StaticImageData } from 'next/image'
import ContentIcon from './icons/Content'
import MarketIcon from './icons/Market'
import AdvertisingIcon from './icons/AdvertisingIcon'
import SocialIcon from './icons/Social'
import AgencyIcon from './icons/Agency'
import SEOImg from '@/../public/seo.svg';
import ContentImg from '@/../public/content_marketing.svg';
import MarketImg from '@/../public/competitive_research.svg';
import AdvertisingImg from '@/../public/ppc.svg';
import SocialImg from '@/../public/social_media.svg';
import AgencyImg from '@/../public/agency.svg';
import { useEffect, useRef, useState } from 'react'

const Slide = ({
  title,
  points,
  img
}: {
  title: string,
  points: string[],
  img: StaticImageData | string
}) => (
  <div className='flex flex-col lg:flex-row-reverse items-center md:items-start md:gap-10'>
    <Image src={img} alt={title} className='xl:max-w-[560px] lg:max-w-[500px] md:max-w-[490px]' />
    <div className='flex flex-col gap-6 max-w-[445px] md:max-w-[none] grow-[3]'>
      <h3 className='font-semibold text-[1.313rem] leading-[1.25] md:text-[1.875rem] md:leading-[2.25rem]'>{title}</h3>
      <ul className='list-disc px-4'>
        {points.map((item, index) => (
          <li key={index} className='text-[0.875rem] md:text-[1.063rem]'>{item}</li>
        ))}
      </ul>
    </div>
  </div>
)

const Agency = () => (
  <Slide title="Streamline your agency processes for growth" points={['Get quality leads regularly', 'Automate client reporting and pitching', 'Create white-label client portals and share project progress details', 'Manage the entire client workflow with CRM']} img={AgencyImg} />
)

const Social = () => (
  <Slide title="Discover how to reach more prospects while spending less" points={['Find the best keywords for every PPC campaign', 'Monitor your competitor\'s ad copies and landing pages', 'Optimize your Advertising spend (at a local level)', 'Analyze Google Shopping ad campaigns']} img={SocialImg} />
)

const Advertising = () => (
  <Slide title="Build your most effective social media strategy" points={['Schedule and post content on social media', 'Analyze the performance of your posts', 'Track & analyze competitor accounts', 'Manage your public brand reputation']} img={AdvertisingImg} />
)

const Market = () => (
  <Slide title="Unveil your competitor's marketing strategy and tactics" points={['Analyze traffic of any website', 'Unveil competitor promotion strategies', 'Get ideas for growing your market share', 'Discover keyword & backlink gap']} img={MarketImg} />
)

const Content = () => (
  <Slide title='Create content that ranks (no expert knowledge required)' points={['Find topics that resonate with your audience', 'Get actionable tips to create SEO-friendly content', 'Optimize your content for engagement and organic traffic', 'Use AI features to easily rewrite and improve your copy']} img={ContentImg} />
)

const SEO = () => (
  <Slide title='Grow organic traffic with our complete and easy SEO tools & workﬂow' points={['Uncover millions of national & local keywords', 'Analyze any domain\'s backlink profile', 'Run technical SEO audits', 'Track your SERP positions daily']} img={SEOImg} />
)

const list = [
  {
    title: 'SEO',
    icon: SEOIcon,
    content: SEO
  },
  {
    title: 'Content Marketing',
    icon: ContentIcon,
    content: Content
  },
  {
    title: 'Market Research',
    icon: MarketIcon,
    content: Market
  },
  {
    title: 'Advertising',
    icon: AdvertisingIcon,
    content: Advertising
  },
  {
    title: 'Social Media',
    icon: SocialIcon,
    content: Social
  },
  {
    title: 'Agency Solutions',
    icon: AgencyIcon,
    content: Agency
  }
]

const HeaderElement = ({
  title,
  icon,
  select,
  selected
}: {
  title: string,
  icon: React.ReactNode,
  select: () => void,
  selected: boolean
}) => {
  const ref = useRef<HTMLLIElement | null>(null);
  const prevVal = useRef<boolean | null>(null);

  useEffect(() => {
    if (prevVal.current !== false || selected !== true) { prevVal.current = selected; return; }

    prevVal.current = selected;
    if (!selected || document.body.clientWidth > 767) return;

    const el = ref.current;
    if (el == null || el.parentElement == null) return;

    el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, [selected]);

  const HandleClick = () => {
    const el = ref.current;
    if (el == null || el.parentElement == null) return;

    el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    select();
  }

  return (
    <li ref={ref} className={`flex justify-center flex-1 border-b-[5px] border-solid px-4 py-6 items-center ${selected ? 'border-[#421983]' : 'border-[##F6F7F8]'} transition-colors`}>
      <button className='flex flex-col items-center text-center' onClick={HandleClick}>
        {icon}
        <p>{title}</p>
      </button>
    </li>
  )
}

const FeaturesCarousel = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div className='flex px-4 justify-center'>
      <div className='bg-white max-w-[710px] lg:max-w-[990px] xl:max-w-[1200px] w-full rounded-3xl md:shadow-lg'>
        <ul className='flex overflow-x-scroll gap-8 px-6 no-scrollbar'>
          {list.map((item, index) => {
            const selected = index === current;

            return (
              <HeaderElement key={index} title={item.title} icon={<item.icon className={`w-[64px] h-[64px] ${selected && '[--primary-color:#421983] [--accent-color:#ff622d]'}`} />} select={() => api?.scrollTo(index, document.body.clientWidth < 768)} selected={selected} />
            )
          })}
        </ul>
        <Carousel setApi={setApi} className='w-full' opts={{
          loop: true
        }}>
          <CarouselContent draggable={false} className='select-none cursor-pointer xl:pb-[8rem]'>
            {list.map((slide, index) => (
              <CarouselItem key={index} className='p-4 md:p-12'>
                <slide.content />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}

export default FeaturesCarousel;