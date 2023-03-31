import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Typography from '@material-ui/core/Typography';
import {makeStyles, Theme} from '@material-ui/core/styles';
import LinkButton from '~/components/LinkButton';
import Link from '~/components/Link';
import Fade from '@material-ui/core/Fade';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme: Theme) => ({
	buttonLeft: {
		border: 'none',
		paddingLeft: theme.spacing(1),
		paddingRight: theme.spacing(1),
	},
	buttonRight: {
		border: 'none',
		paddingLeft: 0,
		paddingRight: 0,
	},
	popper: {
		zIndex: 1,
	},
	list: {
		padding: 0,
	},
}));

const ListItems = () => {
	return [
		{title: '+38(072)410-0-410', href: 'tel:+380724100410', icon: <MailIcon />},
		{title: '503-503', href: 'tel:+380642503503', icon: <MailIcon />},
	].map((one, index) => (
		<ListItem button key={one.title}>
			<ListItemIcon>{one.icon}</ListItemIcon>
			<ListItemText primary={one.title} />
		</ListItem>
	));
};

const options = ['+38(072)410-0-410', '503-503'];

function Phone(): JSX.Element {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef<HTMLDivElement>(null);
	const [selectedIndex, setSelectedIndex] = React.useState(1);

	const handleClick = () => {
		console.info(`You clicked ${options[selectedIndex]}`);
	};

	const handleMenuItemClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, index: number) => {
		setSelectedIndex(index);
		setOpen(false);
	};

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event: React.MouseEvent<Document, MouseEvent>) => {
		if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
			return;
		}

		setOpen(false);
	};

	return (
		<>
			<ButtonGroup color="inherit" ref={anchorRef} aria-label="phone">
				<LinkButton href="tel:+380954100410" onClick={handleClick} className={classes.buttonLeft}>
					+38(095)410-0-410
				</LinkButton>
				<Button
					color="inherit"
					size="small"
					aria-controls={open ? 'split-button-menu' : undefined}
					aria-expanded={open ? 'true' : undefined}
					aria-label="select merge strategy"
					aria-haspopup="menu"
					onClick={handleToggle}
					className={classes.buttonRight}>
					<ArrowDropDownIcon />
				</Button>
			</ButtonGroup>
			<Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal className={classes.popper}>
				{({TransitionProps, placement}) => (
					<Grow
						{...TransitionProps}
						style={{
							transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
						}}>
						<Paper>
							<ClickAwayListener onClickAway={handleClose}>
								<MenuList id="split-button-menu">
									{options.map((option, index) => (
										<MenuItem
											key={option}
											disabled={index === 2}
											selected={index === selectedIndex}
											onClick={(event) => handleMenuItemClick(event, index)}>
											{option}
										</MenuItem>
									))}
								</MenuList>
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
		</>
	);
}

export default Phone;
