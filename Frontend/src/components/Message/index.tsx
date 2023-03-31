import React, {useEffect} from 'react';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		paper: {
			maxWidth: 320,
		},
		popper: {
			zIndex: theme.zIndex.tooltip,
		},
		typography: {
			padding: theme.spacing(1),
		},
	}),
);

const Message: React.FC = (): JSX.Element => {
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
			<IconButton
				ref={anchorRef}
				aria-controls={open ? 'menu-list-grow' : undefined}
				aria-haspopup="true"
				onClick={handleToggle}
				aria-label="show new mails"
				color="inherit">
				<Badge variant="dot" color="secondary">
					<MailIcon />
				</Badge>
			</IconButton>
			<Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal className={classes.popper}>
				{({TransitionProps}) => (
					<Grow {...TransitionProps} style={{transformOrigin: 'center top'}}>
						<Paper className={classes.paper}>
							<ClickAwayListener onClickAway={handleClose}>
								<Box>
									<Typography className={classes.typography} variant="body1">
										Уважаемые абоненты!
									</Typography>
									<Typography className={classes.typography} variant="body2">
										На магистральной линии у вышестоящего провайдера произошла авария, возможны кратковременные перебои и снижение скорости доступа в
										Интернет на некоторые направления. <br />
										Приносим извинения за временные неудобства. <br />С уважением, Администрация ЛДС.
									</Typography>
								</Box>
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
		</>
	);
};

export default Message;
