"use client";

import React from 'react';
import { useForm, type FieldErrors, type UseFormRegister } from 'react-hook-form';
import { useWorkForm } from '../context/context';
import Button from '@/app/components/ui/Button';

type FormData = {
    projectTitle: string;
    briefDescription: string;
};

const InputField = ({
    label,
    type = "text",
    register,
    name,
    validation,
    errors,
}: {
    label: string;
    type?: string;
    register: UseFormRegister<FormData>;
    name: keyof FormData;
    validation?: object;
    errors: FieldErrors<FormData>;
}) => {
    return (
        <div className="w-full">
            <input
                {...register(name, validation)}
                placeholder={label}
                type={type}
                className="w-full bg-[#EEEEEE] rounded-[8px] px-[16px] h-[48px] text-[16px] text-[#171717] focus:outline-none border"
                autoComplete="off"
            />
            {errors[name] && (
                <p className="text-red-500 text-sm mt-1">{errors[name]?.message}</p>
            )}
        </div>
    );
};

const ProjectOverview = () => {
    const { state, updateSelectedDetail, handleNextStep } = useWorkForm();
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        defaultValues: {
            projectTitle: state.detail.projectOverview.projectTitle || '',
            briefDescription: state.detail.projectOverview.briefDescription || '',
        },
    });

    const onSubmit = (data: FormData) => {
        updateSelectedDetail('projectOverview', 'projectTitle', data.projectTitle);
        updateSelectedDetail('projectOverview', 'briefDescription', data.briefDescription);
        handleNextStep();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <InputField
                label="Project Title"
                name="projectTitle"
                register={register}
                validation={{ required: 'Project title is required' }}
                errors={errors as FieldErrors<FormData>}
            />
            <div>
                <label htmlFor="briefDescription" className="block text-[16px] mb-2">
                    Brief Description
                </label>
                <textarea
                    id="briefDescription"
                    {...register('briefDescription', { required: 'Description is required' })}
                    className="w-full bg-[#EEEEEE] rounded-[8px] p-[16px] text-[16px] text-[#171717] focus:outline-none border"
                    rows={4}
                />
                {errors.briefDescription && (
                    <p className="text-red-500 text-sm mt-1">{errors.briefDescription.message}</p>
                )}
            </div>
            <Button type="submit">Next</Button>
        </form>
    );
};

export default ProjectOverview;