import type { ReactNode } from "react";

export interface CardProps {
    title: string;
    description: string;
    image: string;
    footer?: ReactNode
}