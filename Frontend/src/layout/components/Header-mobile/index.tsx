import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Link from 'next/link';
import Logo from '~/components/Logo';
import Message from '~/components/Message';
import Location from '~/components/Location';

import AssessmentIcon from '@material-ui/icons/Assessment';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		menuButton: {
			//marginRight: theme.spacing(2),
		},
		toolbar: theme.mixins.toolbar,
		drawerPaper: {
			width: drawerWidth,
		},
		content: {
			flexGrow: 1,
			padding: theme.spacing(3),
		},
		account: {
			justifyContent: 'center',
			alignItems: 'center',
			display: 'flex',
			padding: theme.spacing(2),
		},
	}),
);

interface Props {
	window?: () => Window;
}

type dataListType = {
	url: string;
	icon: JSX.Element;
	title: string;
};

const dataList: Array<dataListType> = [
	{title: 'Акции', icon: <AssessmentIcon />, url: '/shares'},
	{title: 'Тарифы', icon: <MailIcon />, url: '/tariffs'},
	{title: 'Услуги', icon: <MailIcon />, url: '/services'},
	{title: 'Cправочник', icon: <MailIcon />, url: '/manual'},
	{title: 'Оплата', icon: <MailIcon />, url: '/payment'},
	{title: 'Новости', icon: <MailIcon />, url: '/news'},
];

const HeaderMobile = (props: Props): JSX.Element => {
	const {window} = props;
	const classes = useStyles();
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
		if (event && event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
			return;
		}

		setMobileOpen(open);
	};

	const drawer = (
		<Box>
			<Box className={classes.toolbar}></Box>
			<Divider />
			<List>
				{dataList.map((one) => (
					<Link href={one.url} key={one.title}>
						<ListItem button>
							<ListItemIcon>{one.icon}</ListItemIcon>
							<ListItemText primary={one.title} />
						</ListItem>
					</Link>
				))}
			</List>
			<Divider />
			<Box display="flex" justifyContent="center" p={2}>
				<Link href="//stat.lds.net.ua">
					<Button target="_blank" component="a" rel="noreferrer" color="secondary" variant="contained" startIcon={<AccountBoxIcon />}>
						Личный кабинет
					</Button>
				</Link>
			</Box>
		</Box>
	);

	const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<Box className={classes.toolbar}>
			<AppBar position="fixed">
				<Toolbar>
					<IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle(true)} className={classes.menuButton}>
						<MenuIcon />
					</IconButton>
					<Logo />
					<Location />
					<Box className={classes.root} />
					<Message />
				</Toolbar>
				<Box component="nav" aria-label="nav">
					<SwipeableDrawer
						container={container}
						variant="temporary"
						anchor="left"
						open={mobileOpen}
						onClose={handleDrawerToggle(false)}
						onOpen={handleDrawerToggle(true)}
						classes={{
							paper: classes.drawerPaper,
						}}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}>
						{drawer}
					</SwipeableDrawer>
				</Box>
			</AppBar>
		</Box>
	);
};

export default HeaderMobile;
