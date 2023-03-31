import React from 'react';
import Head from 'next/head';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {GetStaticProps, GetStaticPaths, InferGetStaticPropsType} from 'next';
import {ApolloClient, InMemoryCache, gql} from '@apollo/client';
import {API_GRAPHQL_URL} from '~/utils/urls';
import {ManualListProps} from '~/types/manual/interface';
import Paper from '@material-ui/core/Paper';
import MarkDown from '~/components/MarkDown';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import Link from '~/components/Link';

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		header: {
			display: 'flex',
		},
	}),
);

export default function Manual({manualData}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
	const classes = useStyles();

	return (
		<>
			<Head>
				<title>lds.ua | Manual</title>
				<meta property="og:title" content="Manual" key="title" />
			</Head>
			<Container maxWidth="lg" className={classes.root}>
				<Box mb={4} className={classes.header}>
					<Box mr={1} alignSelf="center">
						<IconButton aria-label="back" component={Link} href="/manual">
							<ArrowBackIcon />
						</IconButton>
					</Box>
					<Typography variant="h1">{manualData.title}</Typography>
				</Box>
				<Paper elevation={2}>
					<Box p={4}>
						<MarkDown data={manualData.content} />
					</Box>
				</Paper>
			</Container>
		</>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const client = new ApolloClient({
		uri: API_GRAPHQL_URL,
		cache: new InMemoryCache(),
	});
	const {data} = await client.query({
		query: gql`
			query {
				manuals {
					slug
				}
			}
		`,
	});

	return {
		paths: data.manuals.map((one: ManualListProps) => ({
			params: {slug: String(one.slug)},
		})),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async (context) => {
	const client = new ApolloClient({
		uri: API_GRAPHQL_URL,
		cache: new InMemoryCache(),
	});

	const slug = context?.params?.slug;

	const {data} = await client.query({
		query: gql`
			query Manuals($slug: String!) {
				manuals(where: {slug: $slug}) {
					title
					content {
						... on ComponentManualContentManualContent {
							text
						}
						... on ComponentManualMediaManualMedia {
							media {
								alternativeText
								name
								url
								width
								height
							}
						}
					}
				}
			}
		`,
		variables: {
			slug,
		},
	});

	return {
		props: {
			manualData: data.manuals[0],
		},
	};
};
