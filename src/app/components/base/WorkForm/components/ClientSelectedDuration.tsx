import React from 'react';

// Components
import Button from '@/app/components/ui/Button';

// Hooks
import { useWorkForm } from '../context/context';

const ClientSelectedDuration = () => {
  const {
    state,
    handleNextStep,
    updateSelectedDetail
  } = useWorkForm();

  const data = [
    "As soon as possible",
    "In the next 2 months",
    "Within 6 months",
    "There’s no rush"
  ];

  const handleSelectedData = (d: string) => {
    updateSelectedDetail('expectedDuration', d);
    handleNextStep();
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4'>
      {data.map((d, index) => (
        <Button
          key={index}
          style={d === state.detail.expectedDuration ? "outline" : "solid"}
          onClick={() => handleSelectedData(d)}
        >{d}</Button>
      ))}
    </div>
  )
}

export default ClientSelectedDuration;