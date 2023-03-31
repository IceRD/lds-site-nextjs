export const API_URL = process.env.API_URL || 'http://localhost:1337';
export const API_GRAPHQL_URL = `${API_URL}/graphql`;

export const fromImageToUrl = (uri: string): string => {
	if (!uri) return '/images/no_image.png';

	return uri.startsWith('http') ? uri : `${API_URL}${uri}`;
};
