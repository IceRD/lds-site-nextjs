import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Box from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

//import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme: Theme) => createStyles({}));

const sections = [
	{title: 'Акции', url: '/shares'},
	{title: 'Тарифы', url: '/tariffs'},
	{title: 'Услуги', url: '/services'},
	{title: 'Абонентам', url: '/subscribers'},
	{title: 'Новости', url: '/news'},
];

function a11yProps(index: number) {
	return {
		id: `nav-tab-${index}`,
		'aria-controls': `nav-tabpanel-${index}`,
	};
}

function LinkTab(props) {
	return (
		<Tab
			style={{minWidth: 'auto'}}
			component="a"
			onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
				//event.preventDefault();
			}}
			{...props}
		/>
	);
}

const TabsMenu: React.FC = () => {
	const classes = useStyles();

	const [value, setValue] = React.useState(0);
	const handleChange = (event: React.ChangeEvent<T>, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Tabs value={value} onChange={handleChange} aria-label="nav tabs" indicatorColor="secondary" textColor="primary" variant="scrollable" scrollButtons="auto">
			{sections.map((section, i) => (
				<LinkTab key={i} label={section.title} href={section.url} {...a11yProps(i)} />
			))}
		</Tabs>
	);
};

export default TabsMenu;
