import React from 'react';

// Hooks
import { useWorkForm } from '../context/context';

// Components
import Button from '@/app/components/ui/Button';

const ClientBudget = () => {
  const {
    state,
    handleNextStep,
    updateSelectedDetail
  } = useWorkForm();

  const data = [
    "$300 - $700",
    "$800 - $1500",
    "$1600 - $3000",
    "$3500+"
  ];

  const handleSelectedData = (d: string) => {
    updateSelectedDetail('expectedBudget', d);
    handleNextStep();
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4'>
      {data.map((d, index) => (
        <Button
          key={index}
          style={d === state.detail.expectedBudget ? "outline" : "solid"}
          onClick={() => handleSelectedData(d)}
        >{d}</Button>
      ))}
    </div>
  )
}

export default ClientBudget;