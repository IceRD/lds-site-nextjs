/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/display-name */
// @ts-nocheck

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import {GetStaticProps, InferGetStaticPropsType} from 'next';
import {ApolloClient, InMemoryCache, gql} from '@apollo/client';
import {API_GRAPHQL_URL} from '~/utils/urls';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import {fromImageToUrl} from '~/utils/urls';
import MarkDown from '~/components/MarkDown';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
			maxWidth: 500,
		},
		card: {
			height: '100%',
			display: 'flex',
			flexDirection: 'column',
			transition: 'transform 0.15s ease-in-out',
			'&:hover': {
				boxShadow: theme.shadows[2],
			},
		},
		cardActions: {
			marginTop: 'auto',
		},
		image: {
			width: 60,
			height: 60,
		},
		control: {
			padding: theme.spacing(2),
		},
	}),
);

interface TabPanelProps {
	children?: React.ReactNode;
	index: any;
	value: any;
}

function TabPanel(props: TabPanelProps) {
	const {children, value, index, ...other} = props;

	return (
		<div role="tabpanel" hidden={value !== index} id={`scrollable-prevent-tabpanel-${index}`} aria-labelledby={`scrollable-prevent-tab-${index}`} {...other}>
			{value === index && <Box p={3}>{children}</Box>}
		</div>
	);
}

function a11yProps(index: any) {
	return {
		id: `nav-tab-${index}`,
		'aria-controls': `nav-tabpanel-${index}`,
	};
}

export default function Services({serviceData}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
	const classes = useStyles();

	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement | unknown>, newValue: number): void => {
		setValue(newValue);
	};

	return (
		<>
			<Head>
				<title>lds.ua | Услуги</title>
				<meta property="og:title" content="Tariffs" key="title" />
			</Head>
			<Container maxWidth="lg">
				<Box>
					<Box display="flex" justifyContent="center">
						{/* <Paper square className={classes.root}> */}
						<Tabs centered value={value} indicatorColor="primary" textColor="primary" onChange={handleChange} aria-label="service tabs">
							{serviceData.map((service, index) => (
								<Tab label={service.title} key={index.toString()} {...a11yProps(index)} />
							))}
						</Tabs>
						{/* </Paper> */}
					</Box>
					{serviceData.map((service, index) => {
						return (
							<TabPanel value={value} index={index} key={index.toString()}>
								<Grid container spacing={2} alignItems="stretch">
									{service.service_content.map((one, index) => {
										return (
											<Grid key={index.toString()} item xs={12} sm={6} md={4} lg={4}>
												<Card className={classes.card}>
													<CardHeader
														avatar={
															<div className={classes.image}>
																<Image
																	src={fromImageToUrl(one.image.url)}
																	alt={one.image.alternativeText || one.image.name}
																	quality={100}
																	width={one.image.width}
																	height={one.image.height}
																	layout="intrinsic"
																/>
															</div>
														}
														title={
															<Typography color="primary" component="div">
																<Box fontWeight="fontWeightMedium">{one.title}</Box>
															</Typography>
														}
													/>
													<CardContent>
														<Typography variant="body2" component="p">
															{one.description}
														</Typography>
													</CardContent>
													<CardActions className={classes.cardActions}>
														<Button color="primary">{one.price}</Button>
													</CardActions>
												</Card>
											</Grid>
										);
									})}
								</Grid>
								<Box mt={4}>
									<MarkDown data={service.footer} />
								</Box>
							</TabPanel>
						);
					})}
				</Box>
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
				services {
					id
					title
					footer
					service_content {
						... on ComponentServiceContentServiceContent {
							id
							title
							description
							price
							image {
								url
								width
								height
								alternativeText
								name
							}
						}
					}
				}
			}
		`,
	});
	return {
		props: {
			serviceData: data.services,
		},
	};
};
