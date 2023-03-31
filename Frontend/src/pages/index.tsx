import React from 'react';
import Image from 'next/image';
import {GetStaticProps, InferGetStaticPropsType} from 'next';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {Container} from '@material-ui/core';
import Carousel from '~/components/Carousel';
import {ApolloClient, InMemoryCache, gql} from '@apollo/client';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
	}),
);

export default function Home({carouselData}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
	const classes = useStyles();

	return (
		<>
			<Carousel data={carouselData} />
			<Container maxWidth="lg">
				<Image src="/images/saitama.png" alt="Picture of the author" layout="responsive" width={1549} height={1290} />
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
				carousels {
					description
					image {
						url
						caption
						width
						height
					}
				}
			}
		`,
	});
	return {
		props: {
			carouselData: data.carousels,
		},
	};
};
