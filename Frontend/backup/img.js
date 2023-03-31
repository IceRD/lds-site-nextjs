// const getImageDimensions = (url, callback) => {
// 	const img = new Image();
// 	img.src = url;
// 	img.onload = function () {
// 		callback(this.width, this.height);
// 	};
// };

const ImageEl = ({src, alt}) => {
	// const classes = useStyles();
	// const [width, setWidth] = useState(false);
	// const [height, setHeight] = useState(false);
	// const [loaded, setLoaded] = useState(false);

	// const url = fromImageToUrl(src);

	// if (typeof window === 'undefined') {
	// 	console.log('server render');
	// }

	// useEffect(() => {
	// 	getImageDimensions(url, function (w, h) {
	// 		setLoaded(true);
	// 		setWidth(w);
	// 		setHeight(h);
	// 	});
	// }, [url]);

	// if (!loaded || !width || !height) {
	// 	return '';
	// }

	return (
		<Box textAlign="center" mt={4} mb={4} className={classes.imageWrapper}>
			<Image src={url} alt={alt} quality={100} width={width} height={height} />
		</Box>
	);
};
