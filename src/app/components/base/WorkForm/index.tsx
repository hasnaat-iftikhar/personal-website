import React, { useEffect, useMemo, useState } from 'react';

// Components
import Modal from '../../ui/Modal';
import PreviousStep from './components/PreviousStep';
import { MediaSans } from '@/app/utils/fonts';

// Hooks
import { useWorkForm } from './context/context';

// Utility files
import { getCurrentStepComponent } from './utils/getCurrentStepComponent';

const WorkForm = () => {
    const {
        state: {
            modal,
            currentStep
        },
        handleModalActiveState
    } = useWorkForm();

    const [isModalActive, setIsModalActive] = useState<boolean>(false);

    const getTitle = useMemo(() => {
        switch(currentStep) {
            case 1:
                return "What do you need?";
            case 2:
                return "When do you need it?";
            case 3:
                return "What is your budget to achieve these objectives?";
            case 4:
                return "How did you learn about my work?";
            case 5:
                return "Finally, please fill in your details so that I can get back to you as soon as possible."
        }
    }, [currentStep]);

    useEffect(() => {
        setIsModalActive(modal.isActive);
    }, [modal.isActive]);

    if(!isModalActive) {
        return null;
    };

    return (
        <Modal
            onClose={() => handleModalActiveState(false)}
        >
            <div className='max-w-[600px] w-full flex flex-col justify-center items-center gap-[42px]'>
                <div className='flex flex-col gap-3 text-center'>
                    <p className='text-[#DD7E00] text-[24px]'>0{currentStep}/05</p>
                    <h3 className={`${MediaSans.className} text-[48px] leading-[100%] text-[#171717]`}>
                        {getTitle}
                    </h3>
                </div>

                <div className='w-full'>
                    {getCurrentStepComponent(currentStep)}
                </div>
            </div>

            {currentStep > 1 && (
                <PreviousStep />
            )}
        </Modal>
    )
}

export default WorkForm;