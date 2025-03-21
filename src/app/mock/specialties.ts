import type { SpecialtyDetailProps } from "../components";

// Array of specialties for the sidebar
export const specialties: string[] = [
    'Front-End Development',
    'Back-End Development',
    'Web-Application Designing',
];

// Object containing details for each specialty
export const specialtyDetails: {
    [key: string]: SpecialtyDetailProps;
} = {
    'Front-End Development': {
        description: "Highly talented front-end engineer with expertise in crafting performance optimized web applications.",
        image: '/graphics/webpage.svg'
    },
    'Back-End Development': {
        description: 'Skilled in building scalable backend applications by leveraging the power of 3-tier architecture to build robust applications.',
        image: '/graphics/page.svg'
    },
    'Web-Application Designing': {
        description: 'Creative designer with a keen eye for detail and a passion for creating beautiful, user-friendly designs with Figma.',
        image: '/graphics/figma-frame.svg'
    },
};