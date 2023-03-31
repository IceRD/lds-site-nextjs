const path = require('path');
const {PHASE_DEVELOPMENT_SERVER} = require('next/constants');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

const settingsDevelop = {
	compress: false,
};

const settingsProduction = {
	compress: true,
};

module.exports = (phase, {defaultConfig}) => {
	const settings = phase === PHASE_DEVELOPMENT_SERVER ? settingsDevelop : settingsProduction;

	return {
		sassOptions: {
			includePaths: [path.join(__dirname, 'src/styles')],
		},
		...settings,
		...defaultConfig,
		compilerOptions: {
			baseUrl: '.',
			paths: {
				'~/themes/*': ['src/themes/*'],
			},
		},
	};
};

module.exports = withBundleAnalyzer({});
