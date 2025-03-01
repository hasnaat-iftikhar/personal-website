import React, { FC } from 'react';

// Type definations
import { ModalProps } from './index.d';
import { ArrowLeft, X } from 'lucide-react';
import { useWorkForm } from '../../base/WorkForm/context/context';

const Modal: FC<ModalProps> = ({
    children,
    onClose = () => {}
}) => {
    const {
        handlePreviousStep
    } = useWorkForm();

    return (
        <div
            onClick={onClose}
            className='z-50 fixed top-0 left-0 w-full h-full backdrop-blur-md flex justify-center items-center'
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className='relative max-w-[1280px] h-[94dvh] md:h-[90dvh] lg:h-[720px] bg-white border-2 border-solid border-[#E8E8E8] rounded-[28px] flex justify-center items-center w-[90%] 2xl:w-full'
            >
                <div className='absolute flex justify-between items-center top-[22px] md:top-[34px] left-[22px] md:left-[34px] right-[22px] md:right-[34px] w-[-webkit-fill-available] h-[42px]'>
                    <button
                        onClick={handlePreviousStep}
                        className='mr-auto w-[42px] h-[42px] rounded-[12px] bg-[#E8E8E8] flex justify-center items-center'
                    >
                        <ArrowLeft width={24} height={24} className='text-[#1B1B1B]' />
                    </button>
                    
                    <button
                        onClick={onClose}
                        className='ml-auto w-[42px] h-[42px] rounded-[12px] bg-[#E8E8E8] flex justify-center items-center'
                    >
                        <X width={24} height={24} className='text-[#1B1B1B]' />
                    </button>
                </div>

                {children}
            </div>
        </div>
    )
};

export default Modal;