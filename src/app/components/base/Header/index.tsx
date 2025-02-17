import React from 'react';
import Link from 'next/link';

// Components
import { Button, Container } from '@/app/components';

// Fonts
import { MediaSans } from '@/app/layout';

// Icons
import { Briefcase } from 'lucide-react';

const Header = () => {
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
    <header>
      <Container
        className="h-[100px] flex justify-between items-center"
      >
        <div className='flex justify-start items-end'>
          <h1 className={`${MediaSans.className} text-[40px] leading-[92%] text-[#1B1B1B]`}>Hasnaat</h1>
          <div className='w-3 h-3 rounded-full bg-[#FC3E6B]' />
        </div>

        <div className='flex justify-end items-center gap-[42px]'>
          {links.map((link, index) => (
            <Link href={link.url} key={index} className='text-[20px]'>{link.label}</Link>
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