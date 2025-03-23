export interface ProjectsProps {
    data: {
        id: string;
        title: string;
        purpose: string;
        roles: string[];
        deliverables: string[];
        date: string;
        media: {
            thumbnail: string;
            coverImage: string;
            introductionPicture: string;
            challenges: string[];
            footerGallery: string[];
        }
        details: {
            introduction: string;
            challenges: string;
            solution: string;
        }
    }[]
};