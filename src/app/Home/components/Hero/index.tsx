import React, { CSSProperties, FC } from 'react';

// Components
import { Button, Container } from '@/app/components';

// Fonts
import { MediaSans } from '@/app/layout';

// Icons
import { Code, Figma } from 'lucide-react';

// Type definations
import { HeroSectionProps } from './index.d';

const HeroSection:FC<HeroSectionProps> = ({
    className = ""
}) => {
    const headingClassNames = `${MediaSans.className} text-[9.8vw] leading-[100%]`;

    return (
        <section className={className}>
            <Container>
                <div className='flex flex-col gap-6'>
                    <p className='text-[32px] text-[#1B1B1B]'>👋 Hey, I'm Hasnaat and I'm a</p>

                    <div className='flex flex-col'>
                        <h2 className={headingClassNames}>Front-End Developer</h2>
                        <h2
                            className={headingClassNames}
                            style={{
                                WebkitTextStroke: "2px black",
                                color:"#fff"
                            } as CSSProperties}    
                        >Content Creator</h2>
                    </div>

                    <p className='text-[32px]'>based in Lahore, Pakistan.</p>

                    <div className='flex justify-start items-center gap-3'>
                        <Button>
                            <Code width={22} height={22} />
                            You need a developer
                        </Button>
                        <Button
                            style='outline'
                        >
                            <Figma width={22} height={22} />
                            You need a designer
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default HeroSection;