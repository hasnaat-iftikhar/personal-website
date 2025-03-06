export interface SpecialtyDetailProps {
	description: string;
	technologies: string[];
}

export interface SpecialtyProps {
	[key: string]: SpecialtyDetailProps;
}
