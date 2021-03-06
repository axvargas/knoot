import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Anuncios from '../../views/home/anuncios';
import Perfiles from '../../views/home/perfiles';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    padding: 10,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
  tabs: {
    flexGrow: 1,
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  panel: {
    width: "90%",
  }

}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        //aria-label="Vertical tabs"
        className={classes.tabs}
      >
        <Tab label="Anuncios" {...a11yProps(0)} />
        <Tab label="Perfiles" {...a11yProps(1)} />

      </Tabs>
      <TabPanel className={classes.panel} value={value} index={0}>
        <Anuncios/>
      </TabPanel>
      <TabPanel className={classes.panel} value={value} index={1}>
        <Perfiles />
      </TabPanel>

    </div>
  );
}