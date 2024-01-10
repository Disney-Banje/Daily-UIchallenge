import React from "react";
import './Rates.css';

function Card({ children }) {
    return(
        <div className="card">
            {children}
        </div>
    )
}

function Rates({ price, cta, active }) {
    return (
        <Card>
            <div className="Charges">
                <p className="amount">
                    ${price}
                </p>
                <p className="amount_duration">
                once-off
                <br /> 
                plus local taxes
                </p>
            </div>
            <div className="button_container">
                {active ? <button className="highlight">{cta}</button> : <button className="normal">{cta}</button>}
            </div>
        </Card>
    );
}

export default Rates;