"use client";

import React, { type FC } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

// Components
import { Container } from '@/app/components';

// Type definitions
import type { ProjectDetailGridProps } from './index.d';
import { MediaSans } from '@/app/utils/fonts';

const ProjectDetailGrid: FC<ProjectDetailGridProps> = ({
  className = "",
  label,
  description
}) => {
  return (
    <section className={className}>
      <Container>
        <div className='max-w-[1024px] mx-auto flex flex-col gap-2 md:gap-4 2xl:gap-6 justify-start items-start'>
          <label htmlFor={label} className={`${MediaSans.className} leading-[100%] text-[42px] md:text-[56px] 2xl:text-[64px]`}>
            {label}
          </label>
          <div className='flex-1'>
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              components={{
                p: ({ node, ...props }) => (
                  <p
                    className='text-[16px] md:text-[20px] 2xl:text-[24px] text-[#1C1C1C] leading-[140%] mb-4'
                    {...props}
                  />
                ),
                ul: ({ node, ...props }) => (
                  <ul className='list-disc pl-5 mb-4' {...props} />
                ),
                li: ({ node, ...props }) => (
                  <li className='mb-2' {...props} />
                ),
              }}
            >
              {description}
            </ReactMarkdown>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProjectDetailGrid;