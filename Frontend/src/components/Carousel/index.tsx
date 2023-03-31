import React from 'react';
import Image from 'next/image';
import {IconButton, Typography, Box, Grid, Container} from '@material-ui/core';
import {ChevronLeft, ChevronRight, Crop75} from '@material-ui/icons';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import Slider, {Settings} from 'react-slick';
import {fromImageToUrl} from '~/utils/urls';

interface ArrowProps {
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => JSX.Element;
}

interface CarouselProps {
	data: [
		{
			description: string;
			image: {
				url: string;
				caption: string;
				width: number;
				height: number;
			};
		},
	];
}

interface SlideProps {
	key: string | number;
	url: string;
	caption: string;
	description: string;
	width: number;
	height: number;
}

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root: {
			padding: 0,
			[theme.breakpoints.up('lg')]: {
				paddingTop: 40,
				paddingBottom: 40,
			},
			[theme.breakpoints.down('md')]: {
				padding: 25,
			},
			[theme.breakpoints.down('sm')]: {
				padding: 10,
			},
		},
		dots: {
			'& li.slick-active div': {
				color: theme.palette.grey[100],
			},
			'& li div': {
				color: theme.palette.grey[800],
			},
		},
		slider_wrap: {
			position: 'relative',
			background: theme.gradient.main,
			marginTop: -theme.spacing(3),
		},
		slider_container: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			color: theme.palette.common.white,
		},
	});
});

const Slide: React.FC<SlideProps> = ({key, url, caption, description, width, height, ...props}) => {
	const classes = useStyles();
	console.log(url);
	if (url && description) {
		const src = fromImageToUrl(url);
		return (
			<Box {...props} key={key} className={classes.slider_container}>
				<Grid container direction="row" spacing={3} justify="center" alignItems="center">
					<Grid item xs={6}>
						<Typography variant="h3" component="h3" align="center">
							{description}
						</Typography>
					</Grid>
					<Grid item xs={6}>
						<Image src={src} alt={caption} layout="intrinsic" width={width} height={height} quality={100} />
					</Grid>
				</Grid>
			</Box>
		);
	}

	if (url) {
		const src = fromImageToUrl(url);
		return (
			<Box {...props} key={key} className={classes.slider_container}>
				<Grid container direction="row" spacing={3} justify="center" alignItems="center">
					<Grid item xs={12}>
						<Image src={src} alt={caption} layout="intrinsic" width={width} height={height} quality={100} />
					</Grid>
				</Grid>
			</Box>
		);
	}

	return null;
};

const Carousel: React.FC<CarouselProps> = (props) => {
	const classes = useStyles();
	const {data} = props;

	const slides = data.map((one, i) => {
		return <Slide key={i} url={one.image.url} caption={one.image.caption} description={one.description} width={one.image.width} height={one.image.height} />;
	});

	const NextArrow = ({onClick}: ArrowProps) => {
		return (
			<Box className={'slick-arrow slick-next'}>
				<IconButton color="secondary" aria-label="arrow-next" component="span" onClick={onClick}>
					<ChevronRight fontSize="large" />
				</IconButton>
			</Box>
		);
	};

	const PrevArrow = ({onClick}: ArrowProps) => {
		return (
			<Box className={'slick-arrow slick-prev'}>
				<IconButton color="secondary" aria-label="arrow-prew" component="span" onClick={onClick}>
					<ChevronLeft fontSize="large" />
				</IconButton>
			</Box>
		);
	};

	const appendDots = (dots: React.ReactNode) => {
		return <ul> {dots} </ul>;
	};

	const customPaging = () => {
		return (
			<IconButton component="div" size="small">
				<Crop75 />
			</IconButton>
		);
	};

	const settings: Settings = {
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 10000,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		lazyLoad: 'progressive',
		dotsClass: `slick-dots ${classes.dots}`,
		customPaging,
		appendDots,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					dots: false,
				},
			},
		],
	};
	return (
		<Box className={classes.slider_wrap}>
			<Container className={classes.root}>
				<Slider {...settings}>{slides}</Slider>
			</Container>
		</Box>
	);
};

export default Carousel;
