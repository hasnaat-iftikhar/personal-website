import React from 'react';
import Link from 'next/link';

// Components
import Container from '../../layout/Container';

// Fonts
import { MediaSans } from '@/app/layout';

const Footer = () => {
    return (
        <footer className='bg-black h-20'>
            <Container className='h-full'>
                <div className='h-full flex justify-between items-center'>
                    <div className='flex justify-start items-start gap-10'>
                        {[
                            { label: "Work", href: "/" },
                            { label: "Pricing", href: "/" },
                            { label: "Content Creation", href: "/" }
                        ].map((link, index) => (
                            <Link key={index} className='text-white text-[20px]' href={link.href}>{link.label}</Link>
                        ))}
                    </div>

                    <div className='flex justify-start items-end gap-2'>
                        <Link href="/" className={`${MediaSans.className} text-[40px] leading-[92%] text-white cursor-pointer`}>Hire me</Link>
                        <div className='w-3 h-3 rounded-full bg-[#FC3E6B]' />
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;