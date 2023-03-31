import React from 'react';
import Link from 'next/link';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import TabsMenu from '~/components/TabsMenu';
import Logo from '~/components/Logo';
import Phone from '~/components/Phone';
import Message from '~/components/Message';
import Location from '~/components/Location';

// import Message from './../Message';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		rightMenu: {
			// '& > *': {
			// 	margin: theme.spacing(0, 0.5),
			// },
		},
		leftMenu: {},
		container: {
			padding: 0,
		},
		nav: {
			background: theme.palette.background.default,
			color: theme.palette.text.primary,
		},
	}),
);

const Header: React.FC = (): JSX.Element => {
	const classes = useStyles();

	return (
		<AppBar position="static">
			<Container maxWidth="lg" className={classes.container}>
				<Toolbar>
					<Box display="flex" className={classes.leftMenu}>
						<Logo />
						{/* <Location /> */}
					</Box>
					<Box className={classes.root} />

					<Box className={classes.rightMenu}>
						<Phone />
						<Message />

						<Link href="//stat.lds.net.ua" passHref>
							<Button target="_blank" component="a" rel="noreferrer" color="secondary" variant="contained" startIcon={<AccountBoxIcon />}>
								Личный кабинет
							</Button>
						</Link>
					</Box>
				</Toolbar>
			</Container>
			<Box className={classes.nav}>
				<Container maxWidth="lg" className={classes.container}>
					<Toolbar component="nav" variant="dense">
						<TabsMenu />
					</Toolbar>
				</Container>
			</Box>
		</AppBar>
	);
};

export default Header;
