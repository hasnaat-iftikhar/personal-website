"use client"

import React, { useState } from 'react';
import Link from 'next/link';

// Components
import { Button, Container, useWorkForm } from '@/app/components';

// Fonts
import { MediaSans } from '@/app/utils/fonts';

// Icons
import { ArrowRight, Briefcase, Menu, X } from 'lucide-react';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { handleModalActiveState } = useWorkForm();

  const links: {
    label: string;
    url: string;
  }[] = [
      {
        label: "Work",
        url: "/work",
      },
      {
        label: "Case Studies",
        url: "/case-studies",
      },
      {
        label: "Pricing",
        url: "/pricing",
      },
      {
        label: "Content Creation",
        url: "#",
      }
    ];

  return (
    <header className='relative z-50 h-[100px] flex justify-center items-center'>
      <Container>
        <div className=' flex justify-between items-center'>
          <div className='flex justify-start items-end'>
            <Link href="/" className={`${MediaSans.className} text-[40px] leading-[92%] text-[#1B1B1B] cursor-pointer`}>Hasnaat</Link>
            <div className='w-3 h-3 rounded-full bg-[#FC3E6B]' />
          </div>

          <button
            type='button'
            onClick={() => setToggle(!toggle)}
            className='block xl:hidden'
          >
            {toggle ? (
              <X width={36} height={36} />
            ) : (
              <Menu width={36} height={36} />
            )}
          </button>

          <div
            className={`block xl:hidden absolute top-[100px] left-0 w-full h-[100dvh] bg-[rgba(255,255,255,0.4)] backdrop-blur-sm transition-all duration-300 ease-in-out ${toggle ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}`}
          >
            <div className='bg-white py-10 border-b border-solid border-[#000]'>
              <Container className="flex flex-col justify-start items-start gap-6">
                {links.map((link) => (
                  <Link href={link.url} key={link.label} className='text-[20px] xl:text-[18px] 2xl:text-[20px] flex justify-between items-center w-full'>
                    {link.label}

                    <ArrowRight width={24} height={24} />
                  </Link>
                ))}

                <Button
                  onClick={() => handleModalActiveState(true)}
                  className='w-full'>
                  <Briefcase width={22} height={22} />
                  Hire me
                </Button>
              </Container>
            </div>
          </div>

          <div className='hidden xl:flex justify-end items-center gap-[42px]'>
            {links.map((link) => (
              <Link href={link.url} key={link.label} className='text-[18px] 2xl:text-[20px]'>{link.label}</Link>
            ))}

            <Button
              onClick={() => handleModalActiveState(true)}
            >
              <Briefcase width={22} height={22} />
              Hire me
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header;