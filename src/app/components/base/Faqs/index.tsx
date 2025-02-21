import React from 'react';

// Components
import Accordion from '../../ui/Accordion';
import Container from '../../layout/Container';

const Faqs = () => {
  return (
    <Container>
      <div className='w-full mx-auto flex flex-col gap-6'>
        <Accordion
          title="Question 1"
          content="Here is the answer"
        />

        <Accordion
          title="Question 1"
          content="Here is the answer"
        />

        <Accordion
          title="Question 1"
          content="Here is the answer"
        />

        <Accordion
          title="Question 1"
          content="Here is the answer"
        />
      </div>
    </Container>
  )
};

export default Faqs;