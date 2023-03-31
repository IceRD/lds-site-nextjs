import React, {useContext} from 'react';
//import Link from 'next/link';
//import Link from '@material-ui/core/Link';
import Link from '~/components/Link';
import {ThemeContext} from '~/themes/ThemeProvider';
import {Typography, Container, Grid, Divider, Box, Switch} from '@material-ui/core';
import {makeStyles, Theme} from '@material-ui/core/styles';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import IconButton from '@material-ui/core/IconButton';
import TelegramIcon from '@material-ui/icons/Telegram';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme: Theme) => ({
	footerWrap: {
		marginTop: 'auto',
	},
	footerLevelOne: {
		padding: theme.spacing(3, 0),
		backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
	},
	footerLevelTwo: {
		padding: theme.spacing(1, 0),
		backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
	},
	link: {
		padding: theme.spacing(0.5, 0),
	},
	toggleSwap: {
		display: 'flex',
		alignItems: 'center',
	},
}));

function Copyright() {
	return (
		<>
			<Typography variant="body2" color="initial">
				{`© 2002-${new Date().getFullYear()} Луганские Домашние Сети`}
			</Typography>
		</>
	);
}

// interface createLink {
// 	title: string;
// 	url: string;
// }

// interface createLinkProps {
// 	data: createLink[];
// }

// const linkLds = [
// 	{
// 		title: 'Контакты',
// 		url: '/',
// 	},
// 	{
// 		title: 'О компании',
// 		url: '/',
// 	},
// 	{
// 		title: 'Вакансии',
// 		url: '/',
// 	},
// 	{
// 		title: 'Документы',
// 		url: '/',
// 	},
// ];

// const LinksFooter = (props: createLinkProps): JSX.Element[] => {
// 	const classes = useStyles();

// 	return props.data.map((one: createLink) => {
// 		return (
// 			<Typography key={one.title} variant="body2" className={classes.link}>
// 				<Link href={`${one.url}`}>{one.title}</Link>
// 			</Typography>
// 		);
// 	});
// };

const Footer: React.FC = (): JSX.Element => {
	const classes = useStyles();
	const {isDarkMode, toggleDarkMode} = useContext(ThemeContext);

	return (
		<Box component="footer" className={classes.footerWrap}>
			<Box className={classes.footerLevelOne}>
				<Container maxWidth="lg">
					<Grid container spacing={3}>
						<Grid item xs={12} sm={6} lg={3}>
							<Typography variant="body1">ТАРИФЫ</Typography>
							<Divider />
							<Typography variant="body2" className={classes.link}>
								<Link href="/">Для многоквартирных домов</Link>
							</Typography>
							<Typography variant="body2" className={classes.link}>
								<Link href="/">Для частного сектора</Link>
							</Typography>
							<Typography variant="body2" className={classes.link}>
								<Link href="/">Для бизнеса</Link>
							</Typography>
							<Typography variant="body2" className={classes.link}>
								<Link href="/">Дополнительные услуги</Link>
							</Typography>
						</Grid>
						<Grid item xs={12} sm={6} lg={3}>
							<Typography variant="body1">АБОНЕНТАМ</Typography>
							<Divider />
						</Grid>
						<Grid item xs={12} sm={6} lg={3}>
							<Typography variant="body1">ЛДС</Typography>
							<Divider />
							<Typography variant="body2" className={classes.link}>
								<Link href="/">Контакты</Link>
							</Typography>
							<Typography variant="body2" className={classes.link}>
								<Link href="/">О компании</Link>
							</Typography>
							<Typography variant="body2" className={classes.link}>
								<Link href="/">Вакансии</Link>
							</Typography>
							<Typography variant="body2" className={classes.link}>
								<Link href="/">Документы</Link>
							</Typography>
						</Grid>
						<Grid item xs={12} sm={6} lg={3}>
							<Box>
								<Typography variant="body1">КОНТАКТЫ</Typography>
								<Divider />
								<Typography variant="body2">Квартал Жукова 4Б/1</Typography>
								<Typography variant="body2">(095) 410-0-410, (072) 410-0-410,</Typography>
								<Typography variant="body2">(0642) 503-503</Typography>
							</Box>

							<Box>
								<Typography variant="body1">Мы в соцсетях</Typography>
								<IconButton color="primary" aria-label="telegram" component="span">
									<TelegramIcon />
								</IconButton>
								<IconButton color="primary" aria-label="facbook" component="span">
									<FacebookIcon />
								</IconButton>
								<IconButton color="primary" aria-label="instagram" component="span">
									<InstagramIcon />
								</IconButton>
							</Box>
							<Box>
								<Typography variant="body1">Установить мобильное приложение</Typography>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>
			<Divider />
			<Box className={classes.footerLevelTwo}>
				<Container maxWidth="lg">
					<Grid container alignItems="center">
						<Grid item lg={9} xs={8} md={8}>
							<Copyright />
						</Grid>
						<Grid item lg={3} xs={4} md={4} className={classes.toggleSwap}>
							<Brightness7Icon color="action" fontSize="small" />
							<Switch checked={isDarkMode} onChange={() => (toggleDarkMode ? toggleDarkMode() : {})} color="primary" name="checkedB" />
							<Brightness4Icon color="action" fontSize="small" />
						</Grid>
					</Grid>
				</Container>
			</Box>
		</Box>
	);
};

export default Footer;
