import {createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createMuiTheme' {
	interface Theme {
		gradient: {
			main: string;
		};
	}
	interface ThemeOptions {
		gradient?: {
			main?: string;
		};
	}
}

// Light Theme
const MuiThemeLight = createMuiTheme({
	typography: {
		h1: {fontSize: '4rem'},
		h2: {fontSize: '3rem'},
		h3: {fontSize: '2.5rem'},
		h4: {fontSize: '2rem'},
		h5: {fontSize: '1.5rem'},
		h6: {fontSize: '1.25rem'},
	},
	palette: {
		primary: {
			light: '#62b0ff',
			main: '#1781cf',
			dark: '#00559d',
			contrastText: '#fff',
		},
		secondary: {
			light: '#ff8c51',
			main: '#f15a23',
			dark: '#b72500',
			contrastText: '#fff',
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1280,
			xl: 1920,
		},
	},
	zIndex: {
		mobileStepper: 1000,
		speedDial: 1050,
		appBar: 1100,
		drawer: 1200,
		modal: 1300,
		snackbar: 1400,
		tooltip: 1500,
	},
	gradient: {
		main: 'linear-gradient(45deg, #667db6, #0082c8, #0082c8, #667db6)',
	},
});

// Dark Theme
const MuiThemeDark = createMuiTheme({
	typography: {
		h1: {fontSize: '4rem'},
		h2: {fontSize: '3rem'},
		h3: {fontSize: '2.5rem'},
		h4: {fontSize: '2rem'},
		h5: {fontSize: '1.5rem'},
		h6: {fontSize: '1.25rem'},
	},
	palette: {
		type: 'dark',
		secondary: {
			light: '#62b0ff',
			main: '#1781cf',
			dark: '#00559d',
			contrastText: '#fff',
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1280,
			xl: 1920,
		},
	},
	zIndex: {
		mobileStepper: 1000,
		speedDial: 1050,
		appBar: 1100,
		drawer: 1200,
		modal: 1300,
		snackbar: 1400,
		tooltip: 1500,
	},
	gradient: {
		main: 'linear-gradient(45deg, #0f2027, #203a43, #2c5364)',
	},
});

export const ThemeLight = responsiveFontSizes(MuiThemeLight);
export const ThemeDark = responsiveFontSizes(MuiThemeDark);
