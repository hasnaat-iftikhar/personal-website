export interface SpecialtyDetailProps {
	description: string;
}

export interface SpecialtyProps {
	[key: string]: SpecialtyDetailProps;
}
