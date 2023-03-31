import React, {useState} from 'react';
import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import {Divider} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import StayCurrentPortraitIcon from '@material-ui/icons/StayCurrentPortrait';
import StayCurrentLandscapeIcon from '@material-ui/icons/StayCurrentLandscape';
import TabletMacIcon from '@material-ui/icons/TabletMac';
import TabletIcon from '@material-ui/icons/Tablet';
import ComputerIcon from '@material-ui/icons/Computer';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			margin: theme.spacing(0, 4),
			overflow: 'hidden',
		},
		wrapper: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		},
		header: {
			display: 'flex',
			margin: theme.spacing(0.5),
		},
		devices: {
			display: 'flex',
			justifyContent: 'center',
			marginTop: theme.spacing(1),
			'& > *': {
				margin: theme.spacing(0, 1),
			},
		},
		deviceInfo: {
			margin: theme.spacing(1),
			marginTop: 0,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			'& > *': {
				width: 'auto',
				padding: theme.spacing(0.5, 2),
			},
		},
	}),
);

const devices = [
	{
		w: 375,
		h: 628,
		screen: 'screen: xs',
		icon: <StayCurrentPortraitIcon />,
	},
	{
		w: 600,
		h: 375,
		screen: 'screen: sm',
		icon: <StayCurrentLandscapeIcon />,
	},
	{
		w: 768,
		h: 1024,
		screen: 'screen: sm',
		icon: <TabletMacIcon />,
	},
	{
		w: 1024,
		h: 768,
		screen: 'screen: md',
		icon: <TabletIcon />,
	},
	{
		w: 1360,
		h: 768,
		screen: 'screen: lg',
		icon: <ComputerIcon />,
	},
	{
		w: 1680,
		h: 768,
		screen: 'screen: xl',
		icon: <DesktopWindowsIcon />,
	},
].reverse();

const Debug: React.FC = ({children}) => {
	const [deviceInfo, setDeviceInfo] = useState(0);

	const hanndlerSwich = (i: number) => {
		setDeviceInfo(i);
	};

	const dev = devices.map((one, i) => {
		return (
			<Box key={i}>
				{deviceInfo == i ? (
					<IconButton onClick={() => hanndlerSwich(i)} color="primary">
						{one.icon}
					</IconButton>
				) : (
					<IconButton onClick={() => hanndlerSwich(i)}>{one.icon}</IconButton>
				)}
			</Box>
		);
	});

	const classes = useStyles();
	return (
		<Box className={classes.wrapper}>
			<Box style={{width: devices[deviceInfo].w, height: devices[deviceInfo].h}}>
				<Box className={classes.devices}>{dev}</Box>
				<Box className={classes.deviceInfo}>
					<Paper elevation={1}>{`${devices[deviceInfo].w} x ${devices[deviceInfo].h} -- ${devices[deviceInfo].screen}`}</Paper>
				</Box>
				<Paper elevation={3} className={classes.root}>
					<Box className={classes.header}>
						<FiberManualRecordIcon color="action" fontSize="small" />
						<FiberManualRecordIcon color="disabled" fontSize="small" />
						<FiberManualRecordIcon color="disabled" fontSize="small" />
					</Box>
					<Divider />
					{children}
				</Paper>
			</Box>
		</Box>
	);
};

export default Debug;
