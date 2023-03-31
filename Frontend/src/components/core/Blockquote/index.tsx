import React from 'react';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			margin: theme.spacing(4, 0),
			padding: theme.spacing(2, 3),
			borderLeftWidth: theme.spacing(0.5),
			borderLeftStyle: 'solid',
			borderLeftColor: theme.palette.secondary.main,
			fontStyle: 'italic',
			backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
		},
	}),
);

const Blockquote: React.FC = (props): JSX.Element => {
	const classes = useStyles();
	return <Box component="blockquote" className={classes.root} {...props}></Box>;
};

export default Blockquote;
