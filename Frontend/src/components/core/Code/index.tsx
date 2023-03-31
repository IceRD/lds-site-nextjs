import React from 'react';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			overflowWrap: 'break-word',
			margin: theme.spacing(4, 0),
			padding: theme.spacing(2, 3),
			borderStyle: 'dashed',
			borderColor: theme.palette.grey[400],
			backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900],
		},
	}),
);

const Code: React.FC = (props): JSX.Element => {
	const classes = useStyles();
	return <Box border={1} fontSize="body1.fontSize" display="block" component="code" className={classes.root} {...props}></Box>;
};

export default Code;
