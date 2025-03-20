"use client";

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
        switch (currentStep) {
            case 1:
                return "What do you need?";
            case 2:
                return "Project overview";
            case 3:
                return "Finally, please fill in your details so that I can get back to you as soon as possible.";
            default:
                return "";
        }
    }, [currentStep]);

    useEffect(() => {
        setIsModalActive(modal.isActive);
    }, [modal.isActive]);

    if (!isModalActive) {
        return null;
    };

    return (
        <Modal
            onClose={() => handleModalActiveState(false)}
        >
            <div className='max-w-[92%] md:max-w-[600px] w-full flex flex-col items-center gap-[24px] md:gap-[42px] md:h-auto h-[400px] md:overflow-visible overflow-y-scroll md:justify-center justify-start mt-auto md:mt-0 mb-[36px] md:mb-0 hidden-vertical-scrollBar'>
                <div className='flex flex-col gap-2 md:gap-3 text-center'>
                    <p className='text-[#DD7E00] text-[20px] md:text-[24px]'>
                        {currentStep < 3 ? `0${currentStep}` : currentStep}/3
                    </p>
                    <h3 className={`${MediaSans.className} text-[40px] md:text-[48px] leading-[100%] text-[#171717]`}>
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
    );
};

export default WorkForm;