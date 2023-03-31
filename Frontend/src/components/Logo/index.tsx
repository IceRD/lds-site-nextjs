import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Link from '~/components/Link';

import SvgIcon, {SvgIconProps} from '@material-ui/core/SvgIcon';

const useStyles = makeStyles((theme: Theme) => {
	// const matches = theme.breakpoints.up('md');
	// console.log(matches);
	return createStyles({
		title: {
			color: theme.palette.common.white,
			padding: theme.spacing(1),
		},
		logoWrap: {
			display: 'flex',
			alignItems: 'center',
		},
		paper: {
			borderRadius: '50%',
		},
		iconButton: {
			padding: theme.spacing(1),
		},
		iconLogo: {
			fontSize: 30,
			[theme.breakpoints.down('md')]: {
				fontSize: 20,
			},
		},
	});
});

const IconLogo = (props: SvgIconProps) => {
	return (
		<SvgIcon {...props}>
			<svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 171 171">
				<defs />
				<path d="M3 1c0 4 14.8 22.3 23.1 28.7 12.1 9.2 31.4 15.9 36.5 12.5C64 41.4 84 2.9 84 1.2 84 .3 73.7 0 43.5 0 15.9 0 3 .3 3 1zM75.3 22.4L64.1 44.9l2.7 4.8C73.3 61.4 83.9 68 96.3 68h6.3l33.3-34 33.3-34H86.5L75.3 22.4zM142.3 29.8c-15.5 15.2-30.7 30.6-33.9 34.1l-5.7 6.4.6 6.6c.2 3.6 1.4 8.6 2.4 11.1 3.2 7.1 15.4 18 20.3 18 1.1 0 11.7-4.8 23.5-10.7L171 84.5V43.3c0-22.7-.1-41.3-.2-41.3-.2.1-13 12.5-28.5 27.8z" />
				<path d="M0 44.4v38.5l6.5 5.8c9.5 8.4 12.5 9.8 21.4 9.8h7.4l3.8-7c7.1-13 21.1-43.6 20.6-45-.3-.7-2.1-1.6-3.9-2-6.5-1.3-16.4-4.8-22.3-7.9-6.7-3.5-19.9-15.9-26.4-24.9C-.2 1.7 0 1 0 44.4zM59.7 55.2c-11.8 20.9-23 45.3-22.3 48.4.4 1.3 2.7 3.9 5.3 5.9 3.7 2.8 5.5 3.5 9.1 3.5h4.6l19.4-19.4c13-13 19.3-20 19-21.1-.2-1.2-2.5-2.5-6.9-3.9-8.3-2.7-13.5-6.1-19-12.5-2.4-2.8-4.9-5.1-5.6-5.1-.7 0-2.3 1.9-3.6 4.2zM94.8 78.7c-5.5 4.4-28.7 27.4-32.9 32.6-5 6.2-5.2 10.6-.9 16.5 3 4.2 5.7 6.2 8.4 6.2.8 0 12.7-5.5 26.5-12.2 17-8.2 25.1-12.7 25.1-13.7 0-.9-2.1-3.2-4.7-5.1-6.3-4.6-12.8-14.4-14.3-21.5-1.3-6.3-2.3-6.7-7.2-2.8zM149 97.3l-20.5 10.2-.3 3.6c-1 11.9 9.6 32.3 23.1 44.5 5.9 5.4 16.3 12.4 18.4 12.4 1.1 0 1.3-7.2 1.3-40.5 0-22.3-.3-40.5-.7-40.5-.5 0-10 4.7-21.3 10.3z" />
				<path d="M0 126.5C0 158.6.2 164 1.5 164c1.4 0 28.9-53.9 30.1-59.1.5-2.4.2-2.6-5.3-3.8-7.8-1.7-13.8-4.4-18.9-8.6-7.8-6.4-7.4-8.2-7.4 34zM32.7 109.3C29.2 114.7 10 154.1 10 156c0 1.1.6 2 1.4 2 1.4 0 37.1-36.3 38.9-39.6 1-1.7-.8-4.4-2.8-4.4-.7 0-3.6-1.6-6.5-3.5s-5.6-3.5-6-3.5c-.4 0-1.5 1-2.3 2.3zM97.9 122.7l-25.4 12.8v7.5c.1 6.3.5 8.3 3 12.8 1.5 2.9 5.2 7.5 8.1 10.2l5.3 5h38c30.9 0 38.1-.3 38.1-1.3 0-.7-3.6-4.2-8.1-7.7-18.1-14.3-27.6-29.1-30.4-47.8-.4-2.4-1.2-4.2-2-4.2-.7 0-12.7 5.7-26.6 12.7zM47.7 125.7C34 138.4 14 158.6 14 159.7c0 .7.7 1.3 1.5 1.3 2.4 0 47.6-23 48.1-24.5.3-.7-.8-3.2-2.5-5.5-1.6-2.3-3.5-5.7-4.1-7.6-.6-1.9-1.6-3.4-2.2-3.4-.5 0-3.7 2.6-7.1 5.7z" />
				<path d="M38.5 152.3C9.6 167.1 8 167.9 8 169.7c0 1 7.9 1.3 37 1.3 29.8 0 37-.3 37-1.3 0-.7-1.2-2.9-2.6-4.8-3.4-4.5-9.4-16.8-9.4-19.4 0-4.2-1.2-6.5-3.4-6.5-1.1.1-13.8 6-28.1 13.3z" />
			</svg>
		</SvgIcon>
	);
};

const Logo: React.FC = (): JSX.Element => {
	const classes = useStyles();

	return (
		<Link href="/" className={classes.logoWrap}>
			<Paper elevation={3} square={false} className={classes.paper}>
				<IconButton color="primary" aria-label="logo" component="div" className={classes.iconButton}>
					<IconLogo className={classes.iconLogo} />
				</IconButton>
			</Paper>
			<Typography className={classes.title} variant="h5">
				ЛДС Справочник
			</Typography>
		</Link>
	);
};

export default Logo;
