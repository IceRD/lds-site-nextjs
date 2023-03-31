const path = require('path');
const withPlugins = require('next-compose-plugins');
//const withPWA = require('next-pwa');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

const isProduction = process.env.NODE_ENV === 'production';

module.exports = withPlugins([withBundleAnalyzer], {
	compress: isProduction ? true : false,

	env: {
		API_URL: process.env.API_URL,
		IMAGES_DOMAIN: process.env.IMAGES_DOMAIN,
	},

	publicRuntimeConfig: {
		API_URL: process.env.API_URL,
		IMAGES_DOMAIN: process.env.IMAGES_DOMAIN,
	},

	sassOptions: {
		includePaths: [path.join(__dirname, 'src/styles')],
	},

	images: {
		deviceSizes: [600, 960, 1280, 1920, 2048],
		imageSizes: [16, 32, 48, 64, 96],
		domains: ['localhost'],
		loader: 'default',
		path: '/_next/image/',
	},

	//target: 'serverless',

	compilerOptions: {
		baseUrl: '.',
		paths: {
			'~/themes/*': ['src/themes/*'],
			'~/components/*': ['src/components/*'],
			'~/pages/*': ['src/pages/*'],
			'~/utils/*': ['utils/*'],
			'~/types/*': ['types/*'],
		},
	},
});
