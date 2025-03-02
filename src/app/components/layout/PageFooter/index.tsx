import React from 'react'
import Banner from '../../base/Banner'
import Faqs from '../../base/Faqs'
import { Code } from 'lucide-react'
import { useWorkForm } from '../../base/WorkForm/context/context'
import Footer from '../../base/Footer'

const PageFooter = () => {
    const {
        handleModalActiveState
    } = useWorkForm();

    return (
        <>
            <Banner
                image=''
                headline='Hey, It&apos;s me!!'
                title='Turning Ideas into Reality, One Line of Code at a Time'
                description='Building smooth, fast, and modern web apps isn&apos;t just my work—it&apos;s what I love doing. Every project I take on is crafted with care, ensuring quality, performance, and attention to detail.'
            />

            <Faqs />

            <div>
                <Banner
                    title='Let&apos;s meet!'
                    description='Book a free 15-minute session where we will discuss your project, your issues and how to solve them.'
                    descriptionClassName='max-w-[370px]'
                    image="/"
                    buttons={[
                        {
                            children: "Book a free consultation",
                            onClick: () => { }
                        },
                        {
                            children: (
                                <>
                                    <Code width={22} height={22} />
                                    Start a project
                                </>
                            ),
                            style: "outline",
                            className: "bg-white",
                            onClick: () => handleModalActiveState(true)
                        }
                    ]}
                />

                <Footer />
            </div>
        </>
    )
}

export default PageFooter;