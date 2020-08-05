import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

//Estilos Css
import './css/angeles.css'
//imagenes
import Soap from './imagenes/soap.jpg'
import star from '../../icons/estrella.svg'
import star1 from '../../icons/estrella_1.svg'


function TabPanel(props) {
    const { children, value, index, ...other } = props;
    

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
          {...other}
          
    >
      {value === index && (
        <Box p={3}>
             <Typography component={'span'} variant={'body2'}> {children} </Typography>
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
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <div className={classes.root}>
          <div className="row row_information">
                    <h1 className="roboto_h1" >
                        Los Angeles
                    </h1> 
                    <div className="col-12">
                        <h3 className="roboto_h3">Monday 14 2020 </h3>
                    </div>
                    <div className="col-12 mt-4">
                        <Button style={{color:"green", border: "1px solid green", width: "50%"}} variant="outlined" color="secondary">Secondary </Button>
                    </div>
                </div>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <span className="page_Book" > Pages of the Book 1  </span>
        <div className="row mt-4">
            <div className="col-6">
                 <img className="soap_angeles_desc" src={Soap} alt="angeles-soap" />
                 <div className="row mt-3">
                        <div className="col-7">
                            <h3 className="roboto_h3">
                                <span className="moneysp">$85</span>  <span>Per Person</span>
                            </h3>
                            <img className="stars" src={star} alt="stars" />
                            <img className="stars" src={star} alt="stars" />
                            <img className="stars" src={star} alt="stars" />
                            <img className="stars" src={star} alt="stars" />
                            <img className="stars" src={star1} alt="stars" />
                        </div>
                        <div className="col-5" style={{ alignSelf: "center", textAlign: "center"}}>
                             <h5 className="roboto_h5"> | by David </h5>
                        </div>
                 </div>
            </div>
            <div className="col-6">
                 <img className="soap_angeles_desc" src={Soap} alt="angeles-soap" />
                 <div className="row mt-3">
                        <div className="col-7">
                            <h3 className="roboto_h3">
                                <span className="moneysp">$85</span>  <span>Per Person</span>
                            </h3>
                            <img className="stars" src={star} alt="stars" />
                            <img className="stars" src={star} alt="stars" />
                            <img className="stars" src={star} alt="stars" />
                            <img className="stars" src={star} alt="stars" />
                            <img className="stars" src={star1} alt="stars" />
                        </div>
                        <div className="col-5" style={{ alignSelf: "center", textAlign: "center"}}>
                             <h5 className="roboto_h5"> | by David </h5>
                        </div>
                 </div>               
            </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
         <span className="page_Book" > Pages of the Book 2   </span>
        <div className="row mt-4">
            <div className="col-6">
                 <img className="soap_angeles_desc" src={Soap} alt="angeles-soap" />
                 <div className="row mt-3">
                        <div className="col-7">
                            <h3 className="roboto_h3">
                                <span className="moneysp">$85</span>  <span>Per Person</span>
                            </h3>
                            <img className="stars" src={star} alt="stars" />
                            <img className="stars" src={star} alt="stars" />
                            <img className="stars" src={star} alt="stars" />
                            <img className="stars" src={star} alt="stars" />
                            <img className="stars" src={star1} alt="stars" />
                        </div>
                        <div className="col-5" style={{ alignSelf: "center", textAlign: "center"}}>
                             <h5 className="roboto_h5"> | by David </h5>
                        </div>
                 </div>
            </div>
            <div className="col-6">
                 <img className="soap_angeles_desc" src={Soap} alt="angeles-soap" />
                 <div className="row mt-3">
                        <div className="col-7">
                            <h3 className="roboto_h3">
                                <span className="moneysp">$85</span>  <span>Per Person</span>
                            </h3>
                            <img className="stars" src={star} alt="stars" />
                            <img className="stars" src={star} alt="stars" />
                            <img className="stars" src={star} alt="stars" />
                            <img className="stars" src={star} alt="stars" />
                            <img className="stars" src={star1} alt="stars" />
                        </div>
                          <div className="col-5" style={{ alignSelf: "center", textAlign: "center" }}>
                               <h5 className="roboto_h5"> | by David </h5>
                        </div>
                 </div>               
            </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
          <span className="page_Book" > Pages of the Book 3   </span>
        <div className="row mt-4">
            <div className="col-6">
                 <img className="soap_angeles_desc" src={Soap} alt="angeles-soap" />
                 <div className="row mt-3">
                        <div className="col-7">
                            <h3 className="roboto_h3">
                                <span className="moneysp">$85</span>  <span>Per Person</span>
                            </h3>
                            <img className="stars" src={star} alt="stars" />
                            <img className="stars" src={star} alt="stars" />
                            <img className="stars" src={star} alt="stars" />
                            <img className="stars" src={star} alt="stars" />
                            <img className="stars" src={star1} alt="stars" />
                        </div>
                        <div className="col-5" style={{ alignSelf: "center", textAlign: "center"}}>
                            <h5 className="roboto_h5"> | by David </h5>
                        </div>
                 </div>
            </div>
            <div className="col-6">
                 <img className="soap_angeles_desc" src={Soap} alt="angeles-soap" />
                 <div className="row mt-3">
                        <div className="col-7">
                            <h3 className="roboto_h3">
                                <span className="moneysp">$85</span>  <span>Per Person</span>
                            </h3>
                            <img className="stars" src={star} alt="stars" />
                            <img className="stars" src={star} alt="stars" />
                            <img className="stars" src={star} alt="stars" />
                            <img className="stars" src={star} alt="stars" />
                            <img className="stars" src={star1} alt="stars" />
                        </div>
                        <div className="col-5" style={{ alignSelf: "center", textAlign: "center"}}>
                            <h5 className="roboto_h5"> | by David </h5>
                        </div>
                 </div>               
            </div>
        </div>
      </TabPanel>
    </div>
  );
}


                