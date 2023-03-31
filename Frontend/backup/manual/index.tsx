import Head from 'next/head';
import React from 'react';
import {useRouter} from 'next/router';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {makeStyles, createStyles, useTheme, Theme} from '@material-ui/core/styles';
import {GetStaticProps, InferGetStaticPropsType} from 'next';
import {ApolloClient, InMemoryCache, gql} from '@apollo/client';
import Link from '~/components/Link';
import Paper from '@material-ui/core/Paper';
import Masonry from 'react-masonry-css';

interface ManualListProps {
	slug: string;
	title: string;
}

interface ManualProps {
	manuals: ManualListProps[];
	sort?: number;
	title?: string;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		header: {
			color: theme.palette.primary.contrastText,
			background: `linear-gradient(90deg, ${theme.palette.primary.main}, 60%, ${theme.palette.background.default} 90%)`,
		},
		paper: {
			overflow: 'hidden',
		},
	}),
);

const ManualList: React.FC<ManualProps> = (props): JSX.Element => {
	const {manuals} = props;
	const router = useRouter();
	const list = manuals.map((el, i) => {
		return (
			<Typography variant="body1" gutterBottom key={i.toString()}>
				<Link href={`${router.pathname}/${el.slug}`}>{el.title}</Link>
			</Typography>
		);
	});
	return <Box p={2}>{list}</Box>;
};

export default function Manual({manualCategoriesData}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
	const classes = useStyles();
	const theme = useTheme();

	const breakpointCols = {
		default: 2,
		[theme.breakpoints.values.xl]: 2,
		[theme.breakpoints.values.lg]: 2,
		[theme.breakpoints.values.md]: 2,
		[theme.breakpoints.values.sm]: 1,
		[theme.breakpoints.values.xs]: 1,
	};

	return (
		<>
			<Head>
				<title>lds.ua | Manual</title>
				<meta property="og:title" content="Manual" key="title" />
			</Head>
			<Container maxWidth="lg">
				<Grid container spacing={2} direction="row">
					{manualCategoriesData.map((one: ManualProps, i: number) => {
						return (
							<Grid item xs={12} sm={4} key={i.toString()}>
								<Paper elevation={3} className={classes.paper}>
									<Box p={2} mb={2} className={classes.header}>
										<Typography variant="h6"> {one.title} </Typography>
									</Box>
									<ManualList manuals={one.manuals} />
								</Paper>
							</Grid>
						);
					})}
				</Grid>
			</Container>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const client = new ApolloClient({
		uri: 'http://localhost:1337/graphql',
		cache: new InMemoryCache(),
	});
	const {data} = await client.query({
		query: gql`
			query {
				manualCategories {
					title
					sort
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
