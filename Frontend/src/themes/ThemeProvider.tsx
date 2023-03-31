import React, {useState, useEffect, useMemo} from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {createMuiTheme, ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles';

import {ThemeLight, ThemeDark} from './MuiTheme';

interface ContextInterface {
	isDarkMode?: boolean;
	toggleDarkMode?: () => void;
}

export const ThemeContext = React.createContext<ContextInterface>({});

const ThemeProvider: React.FC = ({children}) => {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
	const [isDarkMode, setIsDarkMode] = useState(prefersDarkMode);
	const theme = useMemo(() => createMuiTheme(isDarkMode ? ThemeDark : ThemeLight), [isDarkMode]);

	useEffect(() => {
		if (localStorage.getItem('themeMode') === 'true') {
			setIsDarkMode(true);
		}
	}, []);

	const toggleDarkMode = (): void => {
		localStorage.setItem('themeMode', (!isDarkMode).toString());
		setIsDarkMode(!isDarkMode);
	};

	const sampleContext: ContextInterface = {
		isDarkMode,
		toggleDarkMode,
	};

	return (
		<MuiThemeProvider theme={theme}>
			<ThemeContext.Provider value={sampleContext}>{children}</ThemeContext.Provider>
		</MuiThemeProvider>
	);
};

export default ThemeProvider;
