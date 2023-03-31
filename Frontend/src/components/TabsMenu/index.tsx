import React, { useEffect } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Link from "next/link";

import { useRouter } from "next/router";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
  },
  tab: {
    //	minWidth: 'auto',
  },
}));

interface LinkTabProps {
  label?: string;
  href?: string;
  value?: number;
}

function a11yProps(index: number) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props: LinkTabProps) {
  const classes = useStyles();
  return (
    <Link href={{ pathname: props.href }} passHref>
      <Tab
        className={classes.tab}
        component="a"
        // onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // 	event.preventDefault();
        // }}
        {...props}
      />
    </Link>
  );
}

const tabIndexMap: { [key: string]: number } = {
  shares: 1,
  tariffs: 2,
  services: 3,
  manual: 4,
  payment: 5,
  news: 6,
};

const TabsMenu: React.FC = (): JSX.Element => {
  const classes = useStyles();
  const router = useRouter();
  const { pathname } = router;
  const path = pathname.split("/");

  const index = tabIndexMap[path[1]] || false;

  useEffect(() => {
    setSelectedTab(index);
  }, [index]);

  const [selectedTab, setSelectedTab] = React.useState<number | boolean>(index);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | unknown>,
    newValue: number
  ): void => {
    setSelectedTab(newValue);
  };

  return (
    <Box className={classes.root}>
      <Tabs
        variant="scrollable"
        scrollButtons="auto"
        value={selectedTab}
        onChange={handleChange}
        aria-label="scrollable auto nav tabs"
        textColor="primary"
        indicatorColor="secondary"
      >
        <LinkTab label="Меню 1" value={1} href="/shares" {...a11yProps(0)} />
        <LinkTab label="Меню 2" value={2} href="/tariffs" {...a11yProps(1)} />
        <LinkTab label="Меню 3" value={3} href="/services" {...a11yProps(3)} />
        <LinkTab
          label="Cправочник"
          value={4}
          href="/manual"
          {...a11yProps(4)}
        />
        <LinkTab label="Меню 5" value={5} href="/payment" {...a11yProps(5)} />
        <LinkTab label="Меню 6" value={6} href="/news" {...a11yProps(6)} />
      </Tabs>
    </Box>
  );
};

export default TabsMenu;
