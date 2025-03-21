"use client";

import React from 'react';

// Components
import { Header, PageHeader } from '@/app/components';
import MyPricing from './components/MyPricing';

// Icons
import PageFooter from '@/app/components/layout/PageFooter';

const Pricing = () => {
  return (
    <main className='flex flex-col gap-[96px] lg:gap-[120px] 2xl:gap-[160px]'>
      <Header />

      <div className='flex flex-col gap-[96px]'>
        <PageHeader
          headline='Pricing'
          title="Fair pricing for next-level development."
          description="Whether you need a custom website, a scalable web app, or want to bring me on board for your team—I've got you covered. My pricing is simple, transparent, and tailored to your project's needs."
        />
      </div>

      <MyPricing />

      <PageFooter />
    </main>
  )
}

export default Pricing;