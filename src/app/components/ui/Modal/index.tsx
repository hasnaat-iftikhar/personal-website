import React, { FC } from 'react';

// Type definations
import { ModalProps } from './index.d';
import { X } from 'lucide-react';

const Modal: FC<ModalProps> = ({
    children,
    onClose = () => {}
}) => {
    return (
        <div
            onClick={onClose}
            className='z-40 fixed top-0 left-0 w-full h-full backdrop-blur-md flex justify-center items-center'
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className='relative w-full max-w-[1280px] aspect-video bg-white border-2 border-solid border-[#E8E8E8] rounded-[28px] flex justify-center items-center'
            >
                <button
                    onClick={onClose}
                    className='w-[42px] h-[42px] rounded-[12px] bg-[#E8E8E8] flex justify-center items-center absolute top-[34px] right-[34px]'
                >
                    <X width={24} height={24} className='text-[#1B1B1B]' />
                </button>

                {children}
            </div>
        </div>
    )
};

export default Modal;