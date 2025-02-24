import React from 'react';

// Hooks
import { useWorkForm } from '../context/context';

// Components
import Button from '@/app/components/ui/Button';

const ClientHearAboutMe = () => {
  const {
    state,
    handleNextStep,
    updateSelectedDetail
  } = useWorkForm();

  const data = [
    "LinkedIn",
    "Instagram",
    "Google search",
    "Social network"
  ];

  const handleSelectedData = (d: string) => {
    updateSelectedDetail('fromWhereLearnAboutMe', d);
    handleNextStep();
  };

  return (
    <div className='grid grid-cols-2 gap-4'>
      {data.map((d, index) => (
        <Button
          key={index}
          style={d === state.detail.fromWhereLearnAboutMe ? "outline" : "solid"}
          onClick={() => handleSelectedData(d)}
        >{d}</Button>
      ))}
    </div>
  )
}

export default ClientHearAboutMe;