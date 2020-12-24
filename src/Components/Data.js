import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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
        <Box p={3}>
          <Typography>{children}</Typography>
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
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 350,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
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
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Competiting Language" {...a11yProps(0)} style={{outline:'none',marginTop:'25px'}}/>
        <Tab label="Frontend" {...a11yProps(1)} style={{outline:'none'}} />
        <Tab label="Backend" {...a11yProps(2)} style={{outline:'none'}} />
        <Tab label="Database" {...a11yProps(3)} style={{outline:'none'}} />
        <Tab label="Others" {...a11yProps(4)} style={{outline:'none'}} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <p className='particularskills' >C</p>
        <p className='particularskills'>C++</p>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <p className='particularskills'>HTML</p>
        <p className='particularskills'>CSS</p>
        <p className='particularskills'>Bootstrap</p>
        <p className='particularskills'>Material CSS</p>
        <p className='particularskills'>JavaScript</p>
        <p className='particularskills'>React js</p>
        <p className='particularskills'>Material Ui</p>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <p className='particularskills'>Node Js</p>
      <p className='particularskills'>Express Js</p>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <p className='particularskills'>MongoDB</p>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <p className='particularskills'>Git</p>
      </TabPanel>
    
    </div>
  );
}
