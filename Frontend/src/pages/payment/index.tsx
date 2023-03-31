import Head from 'next/head';
import React from 'react';
import {Box, Container} from '@material-ui/core';

const Payment: React.FC = (): JSX.Element => {
	return (
		<>
			<Head>
				<title>lds.ua | Payment</title>
				<meta property="og:title" content="Payment" key="title" />
			</Head>
			<Container maxWidth="lg">
				<Box> Payment </Box>
			</Container>
		</>
	);
};

export default Payment;
