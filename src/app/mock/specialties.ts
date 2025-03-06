import { SpecialtyDetailProps } from "../components";

// Array of specialties for the sidebar
export const specialties: string[] = [
    'Front-End Development',
    'Back-End Development',
    'Web Designing',
];

// Object containing details for each specialty
export const specialtyDetails: {
    [key: string]: SpecialtyDetailProps;
} = {
    'Front-End Development': {
        description: `In search of a highly talented developer who is keen on learning?

            A person who has great hands-on experience in frontend development and updated technologies like
            
            - JavaScript
            - TypeScript
            - React JS
            - Next JS
            - Tailwind CSS
            - more...
            
            A developer who is expert in doing design-to-code conversion with meaningful and optimized code, aware of the React ecosystem, and knows how to optimize a React application? I’m the one for you!
            A developer who is expert in doing design-to-code conversion with meaningful and optimized code, aware of the React ecosystem, and knows how to optimize a React application? I’m the one for you!
            A developer who is expert in doing design-to-code conversion with meaningful and optimized code, aware of the React ecosystem, and knows how to optimize a React application? I’m the one for you!`,
        technologies: [
            'Nx Monorepo',
            'JavaScript',
            'TypeScript',
            'React JS',
            'Next JS',
            'Tailwind CSS',
            'ShadCN',
            'Redux Toolkit',
            'Custom React Hooks',
            'Context API',
            'Styled Components',
            'Git & GitHub',
        ],
    },
    'Back-End Development': {
        description: 'Expertise in building robust and scalable server-side applications.',
        technologies: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
    },
    'Web Designing': {
        description: 'Skilled in creating visually appealing and user-friendly designs.',
        technologies: ['Figma', 'Adobe XD', 'Sketch'],
    },
};