import React from 'react';

// Components
import { Header } from '@/app/components';

// Sections
import { HeroSection } from './components';

const HomeScreen = () => {
  return (
    <main>
      <Header />

      <HeroSection
        className='mt-[96px]'
      />
    </main>
  )
}

export default HomeScreen;