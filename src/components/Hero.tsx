'use client';
import { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from './ui/command';
import { ChevronDown, LucideIcon } from 'lucide-react';
import { US, GB } from 'country-flag-icons/react/3x2'
import { cn } from '@/lib/utils';
import Spotlight from './Spotlight';
import TryFeatures from './TryFeatures';
import Quote from './Quote';

type Country = {
  value: string
  label: string
  icon: LucideIcon
}

const countries = [
  {
    value: 'United States',
    label: 'US',
    icon: US
  },
  {
    value: 'Great Britain',
    label: 'GB',
    icon: GB
  }
] as Country[];

const InputBox = () => {
  const [open, setOpen] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState<Country>(countries[0]);

  const HandleSelect = (value: string) => {
    setSelectedStatus(countries.find((priority) => priority.value === value) || countries[0]);

    setOpen(false);
  }

  return (
    <div className='flex items-center flex-1'>
      <input type='text' placeholder='Enter domain, keyword or URL' className='truncate p-3 rounded-l-lg grow min-w-[0] h-full min-h-[56px] text-black' />
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button className='flex h-full w-full max-w-[100px] items-center justify-between bg-white border-l-[1px] border-solid border-black p-3 text-[#898D9A] rounded-r-lg min-h-[56px]'>
            <div className='flex items-center'>
              <selectedStatus.icon className="mr-2 h-4 w-4 shrink-0" />
              {selectedStatus.label}
            </div>
            <ChevronDown size={18} />
          </button>
        </PopoverTrigger>
        <PopoverContent className='p-0 max-w-[200px]'>
          <Command>
            <CommandInput placeholder='Enter country' />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {countries.map((country) => (
                  <CommandItem
                    key={country.label}
                    value={country.value}
                    onSelect={HandleSelect}
                  >
                    <country.icon
                      className={cn(
                        "mr-2 h-4 w-4",
                        country.value === selectedStatus?.value
                          ? "opacity-100"
                          : "opacity-40"
                      )}
                    />
                    <span>{country.value}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}

const Hero = () => (
  <div className='flex flex-col gap-10 pb-[4rem] md:pb-[5rem] relative overflow-hidden'>
    <div className='absolute bg-[#421983] md:h-[1525px] lg:h-[1325px] top-0 left-0 w-full z-[-1]' />
    <div className='hidden md:block bg-[url(/shape_top.svg)] absolute top-[-305px] w-[805px] h-[805px] rotate-[-30deg] left-[calc(50%+140px)] lg:left-[calc(50%+230px)] z-[-1]' />
    <div className='hidden md:block bg-[url(/shape_left.svg)] absolute top-[380px] w-[742px] h-[748px] rotate-[30deg] left-[calc(50%-885px)] lg:left-[calc(50%-965px)] z-[-1]' />
    <div className='bg-[#421983] md:bg-transparent px-4 py-10 md:pt-20'>
      <div className='flex flex-col items-center gap-8 text-white text-center relative z-[10]'>
        <div className='flex flex-col items-center just gap-4'>
          <h1 className='font-bold text-[2rem] leading-[2.375rem] max-w-[726px] md:text-[3rem] md:leading-[3.625rem] lg:text-[3.375rem] lg:leading-[4.063rem]'>
            Get measurable results from online marketing
          </h1>
          <p className='text-[1.125rem] max-w-[684px] md:text-[1.313rem]'>
            Do SEO, content marketing, competitor research,
            <br className='hidden lg:block' />
            PPC and social media marketing from just one platform.
          </p>
        </div>
        <div className='flex flex-col gap-3 w-full max-w-[365px] md:flex-row md:max-w-[740px]'>
          <InputBox />
          <button className='bg-[#FF622D] py-3 rounded-md font-semibold text-[1.375rem] w-full hover:bg-[#AD3000] transition-colors md:max-w-[196px] md:text-[1.063rem] md:font-medium'>Start now</button>
        </div>
      </div>
    </div>
    <Spotlight />
    <TryFeatures />
    <Quote />
  </div>
)

export default Hero;