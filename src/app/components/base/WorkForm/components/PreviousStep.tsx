import React from 'react';

// Components
import Button from '@/app/components/ui/Button';
import { ArrowLeft } from 'lucide-react';

// Hooks
import { useWorkForm } from '../context/context';

const PreviousStep = () => {
    const {
        handlePreviousStep
    } = useWorkForm();

    return (
        <Button
            style='outline'
            className='hidden md:flex h-12 absolute bottom-[34px] left-[34px]'
            onClick={handlePreviousStep}
        >
            <ArrowLeft width={16} height={16} />

            Go back
        </Button>
    )
}

export default PreviousStep