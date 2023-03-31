import React from 'react';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		speedDial: {
			position: 'fixed',
			bottom: theme.spacing(3),
			right: theme.spacing(5),
		},
	}),
);

const actions = [
	{icon: <ShareIcon />, name: 'Share'},
	{icon: <FavoriteIcon />, name: 'Like'},
];

const FloatActionButton: React.FC = (): JSX.Element => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	const handleToggle = () => {
		setOpen(!open);
	};

	return (
		<SpeedDial ariaLabel="SpeedDial" className={classes.speedDial} icon={<SpeedDialIcon />} onClose={handleClose} onClick={handleToggle} open={open} direction="up">
			{actions.map((action) => (
				<SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} onClick={handleClose} />
			))}
		</SpeedDial>
	);
};

export default FloatActionButton;
