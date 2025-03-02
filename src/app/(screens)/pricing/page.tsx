"use client";

import React from 'react';

// Components
import { Header, PageHeader } from '@/app/components';
import MyPricing from './components/MyPricing';

// Icons
import PageFooter from '@/app/components/layout/PageFooter';

const Pricing = () => {
  return (
    <main className='flex flex-col gap-[96px] md:gap-[120px]'>
      <Header />

      <div className='flex flex-col gap-[96px]'>
        <PageHeader
          headline='Pricing'
          title="Flexible Pricing for Quality Development"
          description="Whether you need a custom website, a scalable web app, or want to bring me on board for your team—I’ve got you covered. My pricing is simple, transparent, and tailored to your project’s needs."
        />
      </div>


      <MyPricing />

      <PageFooter />
    </main>
  )
}

export default Pricing;