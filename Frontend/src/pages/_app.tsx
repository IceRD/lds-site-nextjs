import React, {useEffect} from 'react';
import Head from 'next/head';
import type {AppProps /*, AppContext */} from 'next/app';
import ThemeProvider from '../themes/ThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import NextNProgress from '~/components/NextNProgress';
import {Layout} from '../layout';
import '../styles/globals.sass';

export default function MyApp({Component, pageProps}: AppProps): JSX.Element {
	useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentElement?.removeChild(jssStyles);
		}
	}, []);

	return (
		<React.Fragment>
			<Head>
				<title>lds.ua</title>
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
			</Head>
			<ThemeProvider>
				<CssBaseline />
				<NextNProgress />
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</React.Fragment>
	);
}
