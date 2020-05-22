import React from 'react';


const Display = (props) => {
    return (
        <div className='display-container'>
            <div>
                <p>Strikes: {props.strikes}</p>
            </div>
            <div>
                <p>Balls: {props.balls}</p>
            </div>
        </div>
    )
}

export default Display;
