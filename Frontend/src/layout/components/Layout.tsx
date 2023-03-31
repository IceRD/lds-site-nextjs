import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Header from './Header';
import HeaderMobile from './Header-mobile';
import Footer from './Footer';
import FloatActionButton from '~/components/FloatActionButton';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
			display: 'flex',
			flexDirection: 'column',
			minHeight: '100vh',
		},
		main: {
			padding: theme.spacing(3, 0),
		},
	}),
);

export const Layout: React.FC = ({children}): JSX.Element => {
	const classes = useStyles();
	const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

	return (
		<>
			<Box className={classes.root}>
				{matches ? <Header /> : <HeaderMobile />}
				<Box component="main" className={classes.main}>
					<Box>{children}</Box>
				</Box>
				<Footer />
				<FloatActionButton />
			</Box>
		</>
	);
};
