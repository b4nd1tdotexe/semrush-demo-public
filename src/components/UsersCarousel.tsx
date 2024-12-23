'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import Image, { StaticImageData } from 'next/image'
import { useEffect, useRef, useState } from 'react';
import Autoheight from 'embla-carousel-auto-height';
import styles from '@/../styles/UsersCarousel.module.css';
import { userCarouselData } from './assets/usersCarouselData';

const Slide = ({
  name,
  title,
  content,
  img
}: {
  name: string,
  title: string,
  content: string,
  img: StaticImageData | string
}) => (
  <div className='flex flex-col gap-10 items-center text-center px-[0.875rem]'>
    <p className='font-semibold text-[1.313rem] leading-[1.2] md:text-[1.875rem] lg:text-[2rem]'>{content}</p>
    <div className='flex flex-col items-center gap-2'>
      <Image src={img} alt={title} width={75} height={75} className='rounded-full w-[70px] h-[70px] md:w-[75px] md:h-[75px]' />
      <div className='flex flex-col gap-1 text-[0.875rem] md:text-[1.063rem]'>
        <p className='font-bold'>{name}</p>
        <p>{title}</p>
      </div>
    </div>
  </div>
)

const HeaderElement = ({
  title,
  select,
  selected
}: {
  title: string,
  select: () => void,
  selected: boolean
}) => {
  const ref = useRef<HTMLButtonElement | null>(null);
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
    <button ref={ref} className={`flex text-center justify-center px-6 py-2 items-center border-[1px] border-solid ${selected && 'bg-[#421983] text-white'} ${selected ? 'border-[#421983]' : 'border-[#D1D4DB]'} transition-colors rounded-full whitespace-nowrap`} onClick={HandleClick}>
      <li>
        <p>{title}</p>
      </li>
    </button>
  )
}

const GetData = (ind: number) => {
  let cnt = 0;
  const list = userCarouselData;

  let res = {
    groupId: 0,
    group: list[0],
    cur: 0,
    max: list[0].content.length
  };

  for (let i = 0; i < list.length; ++i) {
    cnt += list[i].content.length;
    if (ind >= cnt) continue;

    const groupId = i, group = list[i], max = group.content.length, cur = max - (cnt - ind) + 1;
    res = {
      groupId,
      group,
      cur,
      max
    }

    break;
  }

  return res;
}

const GetFirstElPos = (groupInd: number) => {
  let cnt = 0;
  const list = userCarouselData;

  for (let i = 0; i < list.length; ++i) {
    if (i === groupInd) return cnt;
    cnt += list[i].content.length;
  }

  return 0;
}

const UsersCarousel = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0);
  const curData = GetData(current);

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
    <div className='flex px-2 justify-center'>
      <div className='flex flex-col gap-8 bg-white max-w-[680px] lg:max-w-[940px] xl:max-w-[1200px] w-full rounded-3xl'>
        <ul className='flex overflow-x-scroll gap-4 px-6 no-scrollbar md:flex-wrap md:justify-center'>
          {userCarouselData.map((item, index) => {
            const selected = index === curData.groupId;

            return (
              <HeaderElement key={index} title={item.title} select={() => api?.scrollTo(GetFirstElPos(index), document.body.clientWidth < 768)} selected={selected} />
            )
          })}
        </ul>
        <Carousel setApi={setApi} className='w-full rounded-2xl pt-6 md:pt-14 transition-colors' style={{ backgroundColor: curData.group.bg }} opts={{
          loop: true
        }}
          plugins={[Autoheight()]}
        >
          <ul className='flex items-center justify-between px-6 md:max-w-[360px] md:mx-auto'>
            <button className={`${styles.arrowBtn} rotate-180`} onClick={() => api?.scrollPrev()} />
            <p className='font-bold'>{curData.cur} / {curData.max}</p>
            <button className={`${styles.arrowBtn}`} onClick={() => api?.scrollNext()} />
          </ul>
          <CarouselContent variableHeight draggable={false} className='select-none cursor-pointer transition-[height] duration-300'>
            {userCarouselData.map(slide => (
              slide.content.map((item, index) => (
                <CarouselItem key={index} className='px-4 py-6 md:p-[3rem] lg:p-[4.375rem] xl:px-[9.375rem]'>
                  <Slide key={index} name={item.name} title={item.title} content={item.content} img={item.img} />
                </CarouselItem>
              ))
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}

export default UsersCarousel;