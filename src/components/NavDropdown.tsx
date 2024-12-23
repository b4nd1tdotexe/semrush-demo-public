'use client';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import NewIcon from './icons/New';
import { NavLink, navLinks } from './assets/navLinks';
import Link from 'next/link';

const MobileNavLink = ({
  item,
  nested
}: {
  item: NavLink,
  nested: boolean
}) => {
  const [open, setOpen] = useState(false);

  if ('sub' in item) return (
    <li className='flex flex-col gap-2 p-3'>
      <button className='flex justify-between w-full items-center' onClick={() => setOpen(o => !o)}>
        <div className='flex items-center gap-2'>
          <p>{item.title}</p>
          {item.new && <NewIcon />}
        </div>
        <ChevronDown size={18} className={`${open && 'rotate-180'} transition-all`} />
      </button>
      {open && <ul className='px-4'>
        {item.sub.map((link, index) => (
          <MobileNavLink key={index} item={link} nested />
        ))}
      </ul>}
    </li>
  )

  return (
    <li className='p-3'>
      <Link href={item.link} target={item.external ? '_blank' : '_self'} className={`flex ${nested ? 'gap-2' : 'justify-between'} items-center`}>
        <div className='flex items-center gap-2'>
          <p>{item.title}</p>
          {item.new && <NewIcon />}
        </div>
        {item.external && <ExternalLink size={18} />}
      </Link>
    </li>
  )
}

const NavDropdown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement | null>(null);

  return (
    <div className='text-sm'>
      <button className='flex items-center gap-[1px] text-[#A1A6AF] focus:text-white' onClick={() => { setOpen(o => !o) }}>
        <p className='font-medium text-sm'>Menu</p>
        <ChevronDown size={22} className={`${open && 'rotate-180'} transition-all duration-300`} />
      </button>
      <CSSTransition nodeRef={dropdownRef} in={open} timeout={300} unmountOnExit classNames='dropdownFade'>
        <ul ref={dropdownRef} className='absolute top-[100%] left-0 w-full bg-[#111317] px-6 py-4 text-white font-medium'>
          {navLinks.map((link, ind) => (
            <MobileNavLink key={ind} item={link} nested={false} />
          ))}
        </ul>
      </CSSTransition>
    </div>
  )
}

export default NavDropdown;