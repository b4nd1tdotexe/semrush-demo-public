'use client';
import { ChevronDown, ExternalLink } from 'lucide-react';
import NewIcon from './icons/New';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { useState } from 'react';
import Link from 'next/link';

const SubElement = ({
  title,
  isNew,
  content
}: {
  title: string,
  isNew: boolean,
  content: React.ReactNode
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={(o) => setOpen(o)}>
      <PopoverTrigger>
        <li className='flex gap-1 items-center group'>
          <div className='flex gap-2 items-center'>
            <p className='group-hover:text-white transition-colors'>{title}</p>
            {isNew && <NewIcon />}
          </div>
          <ChevronDown size={18} className={`${open && 'rotate-180'} group-hover:text-white transition-all`} />
        </li>
      </PopoverTrigger>
      <PopoverContent className='p-0 border-0'>
        {content}
      </PopoverContent>
    </Popover>
  )
}

const ResourcesText = ({
  title,
  content,
  link
}: {
  title: string,
  content: string,
  link: string
}) => (
  <Link href={link} className='group'>
    <div className='flex flex-col gap-2'>
      <p className='text-xl font-semibold group-hover:text-[#FF622D] transition-colors'>{title}</p>
      <p className='text-[0.81rem] text-[#898d9A]'>{content}</p>
    </div>
  </Link>
)

const Resources = () => (
  <div className='bg-[#111317] text-white grid grid-cols-2 p-12 w-[792px] gap-x-[5rem] gap-y-[1.6rem]'>
    <ResourcesText title="Blog" content="Read the industry's latest thoughts on digital marketing, content strategy, SEO, PPC, social media and more." link='https://www.semrush.com/blog/' />
    <ResourcesText title="Help Center" content="Learn how to use Semrush with user manuals, how-to's, videos and more!" link='https://www.semrush.com/kb/' />
    <ResourcesText title="What's New" content="Keep track of the newest Semrush features and improvements." link='https://www.semrush.com/news/releases/product-news/' />
    <ResourcesText title="Webinars" content="Register and take part in educational webinars conducted by the best digital marketing experts." link='https://www.semrush.com/academy/webinars/' />
    <ResourcesText title="Insights" content="See the latest in original research and thought leadership from the Semrush team." link='https://www.semrush.com/news/releases/data-insights/' />
    <ResourcesText title="Hire a Trusted Agency" content="Pressed for time? Need rare skills? Get help from a trusted agency. Our experts work with marketing projects of all kinds and budgets." link='https://www.semrush.com/agencies/' />
    <ResourcesText title="Academy" content="Get vital SEO skills, learn how to use our toolkits and get official certificates of your proficiency in SEO and Semrush." link='https://www.semrush.com/academy/' />
    <ResourcesText title="Top Websites" content="Discover the most visited websites. Analyze their traffic and search rankings. Choose country or industry to find out who currently leads the market." link='https://www.semrush.com/website/?from_page=header' />
    <ResourcesText title="GoodContent Hub" content="Learn everything you need to know about effective content marketing in one place. Explore free tools, industry research, practical materials for your business, and more." link='https://www.semrush.com/goodcontent/' />
    <ResourcesText title="Local Marketing Hub" content="Start outperforming your nearby competition today! Discover the expert insights, strategies, and tools you need to increase the digital footprint of your business and get more local customers." link='https://www.semrush.com/local/' />
  </div>
)

const CompanyText = ({
  text,
  link,
  external
}: {
  text: string,
  link: string,
  external?: boolean
}) => (
  <Link href={link} target={external ? '_blank' : '_self'} className='flex gap-2 items-center group'>
    <p className='text-xl font-semibold group-hover:text-[#FF622D] transition-colors'>{text}</p>
    {external && <ExternalLink size={18} />}
  </Link>
)

const Company = () => (
  <div className='flex flex-col bg-[#111317] text-white p-12 gap-3'>
    <CompanyText text='About Us' link='https://www.semrush.com/company/' />
    <CompanyText text='Newsroom' link='https://www.semrush.com/news/' />
    <CompanyText text='Careers' link='https://careers.semrush.com/' external />
    <CompanyText text='Success Stories' link='https://www.semrush.com/company/stories/' />
    <CompanyText text='Affiliate Program' link='https://www.semrush.com/lp/affiliate-program/en/' />
    <CompanyText text='For Investors' link='https://investors.semrush.com/' external />
    <CompanyText text='Partner Integrations' link='https://www.semrush.com/company/partner-integrations/' />
    <CompanyText text='Contacts' link='https://www.semrush.com/company/contacts/' />
    <CompanyText text='Stats and Facts' link='https://www.semrush.com/stats/' />
  </div>
)

const AppCenterText = ({
  text,
  link
}: {
  text: string,
  link: string
}) => (
  <Link href={link} className='flex gap-2 items-center group'>
    <p className='text-xl font-semibold group-hover:text-[#FF622D] transition-colors'>{text}</p>
  </Link>
)

const AppCenter = () => (
  <div className='flex flex-col'>
    <div className='bg-[#111317] text-white grid grid-cols-2 p-12 w-[350px] gap-x-[5rem] gap-y-[1.6rem]'>
      <div className='flex flex-col gap-4'>
        <AppCenterText text='Store' link='https://www.semrush.com/apps/' />
        <AppCenterText text='My Apps' link='https://www.semrush.com/apps/my-apps/' />
      </div>
    </div>
    <div>
    </div>
  </div>
)

const NavLink = ({
  text,
  link,
  external
}: {
  text: string,
  link: string,
  external?: boolean
}) => (
  <Link href={link} className='group'>
    <li className='flex gap-2 items-center group-hover:text-white transition-colors'>
      <p>{text}</p>
      {external && <ExternalLink size={18} />}
    </li>
  </Link>
)

const DesktopNav = () => {
  return (
    <ul className='hidden lg:flex gap-6 text-sm font-medium text-[#A1A6AF]'>
      <NavLink text='Features' link='https://www.semrush.com/features/' />
      <NavLink text='Pricing' link='https://www.semrush.com/pricing/' />
      <SubElement title='Resources' isNew={false} content={<Resources />} />
      <SubElement title='Company' isNew={false} content={<Company />} />
      <SubElement title='App Center' isNew content={<AppCenter />} />
      <NavLink text='Enterprise' link='https://www.semrush.com/enterprise/' external />
    </ul>
  )
}

export default DesktopNav;