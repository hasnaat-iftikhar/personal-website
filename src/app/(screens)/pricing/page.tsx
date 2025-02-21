import React from 'react';

// Components
import { Footer, Header, PageHeader } from '@/app/components'
import Banner from '@/app/components/base/Banner';
import Faqs from '@/app/components/base/Faqs';
import MyPricing from './components/MyPricing';

// Icons
import { Code } from 'lucide-react';

const Pricing = () => {
  return (
    <main className='flex flex-col gap-[120px]'>
      <Header />

      <div className='flex flex-col gap-[96px]'>
        <PageHeader
          headline='Pricing'
          title="Flexible Pricing for Quality Development"
          description="Whether you need a custom website, a scalable web app, or want to bring me on board for your team—I’ve got you covered. My pricing is simple, transparent, and tailored to your project’s needs."
        />
      </div>


      <MyPricing />

      <Banner
        image=''
        headline='Hey, It’s me!!'
        title='Turning Ideas into Reality, One Line of Code at a Time'
        description='Building smooth, fast, and modern web apps isn’t just my work—it’s what I love doing. Every project I take on is crafted with care, ensuring quality, performance, and attention to detail.'
      />

      <Faqs />

      <div>
        <Banner
          title='Let’s meet!'
          description='Book a free 15-minute session where we will discuss your project, your issues and how to solve them.'
          descriptionClassName='max-w-[370px]'
          image="/"
          buttons={[
            {
              children: "Book a free consultation",
              onClick: () => { }
            },
            {
              children: (
                <>
                  <Code width={22} height={22} />
                  Start a project
                </>
              ),
              style: "outline",
              className: "bg-white"
            }
          ]}
        />

        <Footer />
      </div>
    </main>
  )
}

export default Pricing;