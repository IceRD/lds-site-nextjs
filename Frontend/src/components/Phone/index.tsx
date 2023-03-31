import React, {useEffect} from 'react';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import PhoneIcon from '@material-ui/icons/Phone';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Link from '~/components/Link';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		paper: {
			maxWidth: 320,
		},
		popper: {
			zIndex: theme.zIndex.tooltip,
		},
		link: {
			padding: theme.spacing(1, 2),
			color: theme.palette.text.primary,
			'&:focus, &:hover, &:visited, &:link, &:active': {
				textDecoration: 'none',
			},
		},
		menu: {
			padding: 0,
		},
		button: {
			borderRadius: 0,
			'&:hover': {
				textDecoration: 'none',
			},
		},
	}),
);

const Phone: React.FC = (): JSX.Element => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef<HTMLButtonElement>(null);

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event: React.MouseEvent<EventTarget>) => {
		if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
			return;
		}

		setOpen(false);
	};

	// return focus to the button when we transitioned from !open -> open
	const prevOpen = React.useRef(open);
	useEffect(() => {
		if (prevOpen.current === true && open === false && anchorRef) {
			anchorRef.current?.focus();
		}

		prevOpen.current = open;
	}, [open]);

	return (
		<>
			<Button
				ref={anchorRef}
				aria-controls={open ? 'menu-phone-grow' : undefined}
				aria-haspopup="true"
				onClick={handleToggle}
				color="inherit"
				startIcon={<PhoneIcon />}>
				Контакты
			</Button>
			<Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal className={classes.popper}>
				{({TransitionProps}) => (
					<Grow {...TransitionProps} style={{transformOrigin: 'center top'}}>
						<Paper className={classes.paper}>
							<ClickAwayListener onClickAway={handleClose}>
								<Box display="flex" flexDirection="column">
									<MenuList className={classes.menu}>
										<MenuItem className={classes.menu}>
											<Link href="tel:+380504100410" className={classes.link}>
												+38(050)410-0-410
											</Link>
										</MenuItem>

										<MenuItem className={classes.menu}>
											<Link href="tel:+380724100410" className={classes.link}>
												+38(072)410-0-410
											</Link>
										</MenuItem>
										<MenuItem className={classes.menu}>
											<Link href="tel:+380642503503" className={classes.link}>
												+38(0642)503-503
											</Link>
										</MenuItem>
									</MenuList>
									<Button className={classes.button} component={Link} href="/" color="primary" onClick={handleToggle}>
										Подробнее
									</Button>
								</Box>
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
		</>
	);
};

export default Phone;
