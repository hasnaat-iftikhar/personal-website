import React, { type FC } from 'react';

// Type definations
import type { FaqsProps } from './index.d';

// Components
import Accordion from '../../ui/Accordion';
import Container from '../../layout/Container';

const Faqs:FC<FaqsProps> = ({
  data
}) => {
  return (
    <Container>
      <div className=''>
        <div className='w-full mx-auto flex flex-col'>
          {data.map((faq, index) => (
            <Accordion
              key={faq.title}
              title={faq.title}
              content={faq.content}
            />
          ))}
        </div>
      </div>
    </Container>
  )
};

export default Faqs;