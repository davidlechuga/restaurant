import React, { Component, Fragment } from 'react'
//imagenes
import Soap from './imagenes/soap.jpg'
import Person1 from './imagenes/person1.jpeg'
import star from '../../icons/estrella.svg'
import star1 from '../../icons/estrella_1.svg'


//Material-UI Components
import Button from '@material-ui/core/Button';

//Estilos Css
import './css/angeles.css'

class Angeles extends Component {
    render() {
        return (
            <Fragment>
                <div className="row">
                    <img className="soap_angeles" src={Soap} alt="angeles-soap" />
                </div>
                <div className="row row_information">
                    <h1 className="roboto_h1 mr-3">
                        Pop-up 
                    </h1> 
                    
                    <h1 className="roboto_h1" style={{width: "100%"}} >
                        Restaurant Tour
                    </h1>

                     <div className="row mt-3">
                        <div className="col-8">
                            <h3 className="roboto_h3">
                                3 hours Food and Drink experience
                            </h3>
                            <h4 className="roboto_h4">
                                Writed by David
                            </h4>
                        </div>
                        <div className="col-4" style={{textAlign: "center"}}>
                            <img className="soap_angeles_rounded" src={Person1} alt="angeles-soap" />
                        </div>
                    </div>

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
                            <Button href="/angeles" id="bookbtn" variant="contained" color="secondary"> Book Now </Button>
                        </div>
                    </div>

                </div>
                

            </Fragment>
        )
    }
}

export default Angeles
