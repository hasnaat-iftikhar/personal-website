import React from 'react';

// Components
import Button from '@/app/components/ui/Button';

// Hooks
import { useWorkForm } from '../context/context';

const ClientNeed = () => {
  const {
    state,
    handleNextStep,
    updateSelectedDetail
  } = useWorkForm();

  const data = [
    "Website",
    "Web application",
    "Web design",
    "Product design"
  ];

  const handleSelectedData = (d: string) => {
    updateSelectedDetail('clientNeed', d);
    handleNextStep();
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4'>
      {data.map((d, index) => (
        <Button
          key={index}
          style={d === state.detail.clientNeed ? "outline" : "solid"}
          onClick={() => handleSelectedData(d)}
        >{d}</Button>
      ))}
    </div>
  )
};

export default ClientNeed;