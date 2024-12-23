import { UserIcon } from 'lucide-react';
import LogoIcon from './icons/Logo';
import Link from 'next/link';
import NavDropdown from './NavDropdown';
import DesktopNav from './DesktopNav';

const Header = () => {

  return (
    <header className='flex justify-center bg-[#111317] text-white px-4 py-3 relative z-[50]'>
      <div className='flex w-full justify-between max-w-[1170px]'>
        <div className='flex gap-6 items-center'>
          <Link href='/'>
            <LogoIcon className='w-[165px] h-[18px]' />
          </Link>
          <DesktopNav />
        </div>
        <div className='lg:flex gap-2 items-center hidden text-sm'>
          <button className='py-1 px-3 border-[1px] border-solid border-[#A1A6AF] rounded-md hover:bg-[#FFF3] transition-colors'>Log In</button>
          <button className='bg-[#009F81] py-1 px-3 border-[1px] border-solid border-[#009F81] rounded-md hover:bg-[#007C65] hover:border-[#007C65] transition-colors'>Sign Up</button>
        </div>
        <div className='flex gap-4 items-center lg:hidden'>
          <NavDropdown />
          <Link href='https://www.semrush.com/login'>
            <div className='border-solid border-[1px] border-[#A1A6AF] px-3 py-1 rounded-md'>
              <UserIcon size={18} fill='white' />
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header;