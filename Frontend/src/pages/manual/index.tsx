/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/display-name */
// @ts-nocheck

import React from 'react';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {GetStaticProps, InferGetStaticPropsType} from 'next';
import {ApolloClient, InMemoryCache, gql} from '@apollo/client';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {makeStyles, createStyles, useTheme, Theme} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Masonry from 'react-masonry-css';
import {API_GRAPHQL_URL} from '~/utils/urls';
import Link from '~/components/Link';
import {ManualCategoryProps} from '~/types/manual/interface';
import {Router, Computer, Network, Email, Ask, Media} from '~/components/Icons';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		header: {
			position: 'relative',
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			minHeight: 80,
			color: theme.palette.primary.contrastText,
			background: theme.palette.primary.main,
			overflow: 'hidden',
		},
		headerContent: {
			zIndex: 1,
		},
		paper: {
			overflow: 'hidden',
		},
		masonryGrid: {
			display: 'flex',
			marginLeft: theme.spacing(-3),
			width: 'inherit',
		},
		masonryColumn: {
			paddingLeft: theme.spacing(3),
			backgroundClip: 'padding-box',
		},
		icon: {
			[theme.breakpoints.up('sm')]: {
				fontSize: 50,
			},
			[theme.breakpoints.down('sm')]: {
				fontSize: 40,
			},
		},
		styleBlock1: {
			position: 'absolute',
			backgroundColor: 'rgba(0,0,0,0.2)',
			width: 100,
			height: 25,
			right: -15,
			top: '20%',
			borderRadius: 20,
		},
		styleBlock2: {
			position: 'absolute',
			backgroundColor: 'rgba(0,0,0,0.2)',
			width: 70,
			height: 10,
			right: -15,
			bottom: '25%',
			borderRadius: 20,
		},
	}),
);

const ManualList: React.FC<ManualCategoryProps> = ({manuals}): JSX.Element => {
	if (!manuals || !manuals.length) {
		return (
			<Box p={1} display="flex" alignItems="center" justifyContent="center">
				<Typography variant="body1">Empty</Typography>
			</Box>
		);
	}

	const router = useRouter();

	const list = manuals.map((el, i) => {
		return (
			<ListItem key={i.toString()} button component={Link} href={`${router.pathname}/${el.slug}`}>
				<ListItemText primary={el.title} />
			</ListItem>
		);
	});

	return (
		<List component="nav" aria-label="manual navigation">
			{list}
		</List>
	);
};

export default function Manual({manualCategoriesData}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
	const classes = useStyles();
	const theme = useTheme();

	const breakpointCols = {
		default: 2,
		[theme.breakpoints.values.xl]: 3,
		[theme.breakpoints.values.lg]: 2,
		[theme.breakpoints.values.md]: 2,
		[theme.breakpoints.values.sm]: 1,
		[theme.breakpoints.values.xs]: 1,
	};

	const logosMap = {
		router: <Router className={classes.icon} />,
		computer: <Computer className={classes.icon} />,
		network: <Network className={classes.icon} />,
		email: <Email className={classes.icon} />,
		ask: <Ask className={classes.icon} />,
		media: <Media className={classes.icon} />,
	};

	return (
		<>
			<Head>
				<title>lds.ua | Manual</title>
				<meta property="og:title" content="Manual" key="title" />
			</Head>
			<Container maxWidth="lg">
				<Box mb={4}>
					<Typography variant="h1">Справочник пользователя</Typography>
				</Box>
				<Masonry breakpointCols={breakpointCols} className={classes.masonryGrid} columnClassName={classes.masonryColumn}>
					{manualCategoriesData.map((one: ManualCategoryProps, i: number) => {
						return (
							<Box mb={3} key={i.toString()}>
								<Paper elevation={1} className={classes.paper}>
									<Box pl={2} pr={2} pt={1} pb={1} className={classes.header}>
										<div className={classes.styleBlock1} />
										<div className={classes.styleBlock2} />
										<Typography variant="h6" className={classes.headerContent}>
											{one.title}
										</Typography>
										{logosMap[one.logo] && <div className={classes.headerContent}>{logosMap[one.logo]}</div>}
									</Box>
									<ManualList manuals={one.manuals} />
								</Paper>
							</Box>
						);
					})}
				</Masonry>
			</Container>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const client = new ApolloClient({
		uri: API_GRAPHQL_URL,
		cache: new InMemoryCache(),
	});
	const {data} = await client.query({
		query: gql`
			query {
				manualCategories {
					title
					sort
					logo
					manuals {
						title
						slug
					}
				}
			}
		`,
	});

	return {
		props: {
			manualCategoriesData: data.manualCategories,
		},
	};
};
