interface ManualSEOProps {
	meta_title: string;
	meta_description: string;
}

interface ManualListProps {
	title: string;
	slug: string;
	content?: string;
	SEO?: ManualSEOProps;
}

interface ManualCategoryProps {
	manuals?: ManualListProps[];
	params?: ManualListProps[];
	sort?: number;
	title?: string;
}

export {ManualSEOProps, ManualListProps, ManualCategoryProps};
