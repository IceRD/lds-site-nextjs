/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/display-name */
// @ts-nocheck

import React from 'react';
import Image from 'next/image';
import Link from '~/components/Link';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import Blockquote from '~/components/core/Blockquote';
import Code from '~/components/core/Code';
import {fromImageToUrl} from '~/utils/urls';

import unified from 'unified';
import parse from 'remark-parse';
import gfm from 'remark-gfm';
import remark2react from 'remark-react';
import unwrapImages from 'remark-unwrap-images';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			'& li.task-list-item': {
				listStyle: 'none',
			},
		},
		divider: {
			margin: theme.spacing(4, 0),
			padding: '1px',
		},
		header: {
			marginBottom: theme.spacing(2),
		},
		input: {
			padding: theme.spacing(0.25),
		},
	}),
);

const LinkEl = ({children, href}) => {
	return href.startsWith('/') || href === '' ? (
		<Link href={href}>
			<a>{children}</a>
		</Link>
	) : (
		<a href={href} target="_blank" rel="noopener noreferrer">
			{children}
		</a>
	);
};

const parserMarkDon = (text) => {
	const classes = useStyles();

	return unified()
		.use(parse)
		.use(gfm)
		.use(unwrapImages)
		.use(remark2react, {
			remarkReactComponents: {
				a: LinkEl,
				h1: (props) => <Typography variant="h1" className={classes.header} {...props} />,
				h2: (props) => <Typography variant="h2" className={classes.header} {...props} />,
				h3: (props) => <Typography variant="h3" className={classes.header} {...props} />,
				h4: (props) => <Typography variant="h3" className={classes.header} {...props} />,
				h5: (props) => <Typography variant="h3" className={classes.header} {...props} />,
				p: (props) => <Typography variant="body1" {...props} gutterBottom />,
				hr: (props) => <Divider className={classes.divider} {...props} />,
				blockquote: (props) => <Blockquote {...props} />,
				code: (props) => <Code {...props} />,
				input: (props) => <Checkbox disabled inputProps={{'aria-label': 'disabled checked checkbox'}} {...props} className={classes.input} />,
			},
		})
		.processSync(text).result;
};

const MarkDown = ({data}): JSX.Element => {
	if (!data) return null;

	const classes = useStyles();
	let content = '';

	if (Array.isArray(data)) {
		content = data.map((one, i) => {
			if (one.text) {
				return (
					<div className={classes.root} key={i.toString()}>
						{parserMarkDon(one.text)}
					</div>
				);
			}

			if (one.media) {
				return one.media.map((image, j) => {
					const {url, alternativeText, name, width, height} = image;
					return (
						<Box textAlign="center" mt={4} mb={4} className={classes.imageWrapper} key={j.toString()}>
							<Image src={fromImageToUrl(url)} alt={alternativeText || name} quality={100} width={width} height={height} />
						</Box>
					);
				});
			}

			return null;
		});
	} else {
		content = parserMarkDon(data);
	}

	return <>{content}</>;
};

export default MarkDown;
