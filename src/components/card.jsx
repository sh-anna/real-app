import { event } from 'jquery';
import React from 'react'; //imr
import { Link } from "react-router-dom";

const Card = ({ card, handleCardDelete }) => { //sfc
    return( 
        <div className="col-md-6 col-lg-4 mt-3">
            <div className="card">
                <img width="100" src="{ card.bizImage }" alt={ card.bizName }/>
                <div className="card-body">
                    <h5 className="card-title">{ card.bizName }</h5>
                    <p className="text">{ card.bizDescription }</p>
                    <p className="card-text border-top pt-2">
                        <b>Tel:</b> { card.bizPhone } <br/>
                        <b>Address:</b> { card.bizAddress } <br/>
                        <b>Card Number:</b> { card.bizNumber } <br/>
                    </p>
                    <a className="ml-1" href="/" onClick={ event => handleCardDelete(card._id, event) }>Delete</a>
                </div>
            </div>
        </div>
    );
}

export default Card;