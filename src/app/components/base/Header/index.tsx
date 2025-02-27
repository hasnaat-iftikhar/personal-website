"use client"

import React, { useState } from 'react';
import Link from 'next/link';

// Components
import { Button, Container } from '@/app/components';

// Fonts
import { MediaSans } from '@/app/utils/fonts';

// Icons
import { ArrowRight, Briefcase, Menu } from 'lucide-react';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const links:{
    label: string;
    url: string;
  }[] = [
    {
      label: "Work",
      url: "#",
    },
    {
      label: "Case Studies",
      url: "#",
    },
    {
      label: "Pricing",
      url: "#",
    },
    {
      label: "Content Creation",
      url: "#",
    }
  ];

  return (
    <header className='h-[100px] flex justify-center items-center'>
      <Container
        className="flex justify-between items-center"
      >
        <div className='flex justify-start items-end'>
          <Link href="/" className={`${MediaSans.className} text-[40px] leading-[92%] text-[#1B1B1B] cursor-pointer`}>Hasnaat</Link>
          <div className='w-3 h-3 rounded-full bg-[#FC3E6B]' />
        </div>

        <button
          onClick={() => setToggle(!toggle)}
        >
          <Menu width={36} height={36} />
        </button>

        <div
          className={`block xl:hidden absolute top-[100px] left-0 w-full h-full bg-[rgba(255,255,255,0.4)] backdrop-blur-sm transition-all duration-300 ease-in-out ${toggle ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}`}
        >
          <div className='bg-white py-10 border-b border-solid border-[#000]'>
            <Container className={`flex flex-col justify-start items-start gap-6`}>
              {links.map((link, index) => (
                <Link href={link.url} key={index} className='text-[20px] xl:text-[18px] 2xl:text-[20px] flex justify-between items-center w-full'>
                  {link.label}

                  <ArrowRight width={24} height={24} />
                </Link>
              ))}

              <Button className='w-full'>
                <Briefcase width={22} height={22} />
                Hire me
              </Button>
            </Container>
          </div>
        </div>

        <div className='hidden xl:flex justify-end items-center gap-[42px]'>
          {links.map((link, index) => (
            <Link href={link.url} key={index} className='text-[18px] 2xl:text-[20px]'>{link.label}</Link>
          ))}

          <Button>
            <Briefcase width={22} height={22} />
            Hire me
          </Button>
        </div>
      </Container>
    </header>
  )
}

export default Header;