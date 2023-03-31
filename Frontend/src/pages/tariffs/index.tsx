import Head from 'next/head';
import React from 'react';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid, {GridSpacing} from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		paper: {
			height: 140,
			width: '100%',
		},
		control: {
			padding: theme.spacing(2),
		},
	}),
);

export default function Tariffs(): JSX.Element {
	const classes = useStyles();

	const [alignment, setAlignment] = React.useState('left');
	const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
		if (newAlignment !== null) {
			setAlignment(newAlignment);
		}
	};

	return (
		<>
			<Head>
				<title>lds.ua | Tariffs</title>
				<meta property="og:title" content="Tariffs" key="title" />
			</Head>
			<Container maxWidth="lg">
				<Box> Тарифы </Box>
				<Box>
					<Button color="primary" size="small" variant="outlined">
						Интернет и Телевидение
					</Button>
					<Button color="primary" size="small" variant="outlined">
						Интернет
					</Button>
					<Button color="primary" size="small" variant="outlined">
						Телевидение
					</Button>
				</Box>

				<Grid container className={classes.root} spacing={2}>
					<Grid item xs={12}>
						<Grid container justify="center" spacing={2}>
							{[0, 1, 2].map((value) => (
								<Grid key={value} item xs={12}>
									<Paper className={classes.paper} />
								</Grid>
							))}
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}
