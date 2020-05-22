import React from 'react';

const Dashboard = (props) => {

    return (
        <div>
            <button onClick = {props.addStrike} data-testid='strike-header'>Strike</button>
            <button onClick = {props.addBall} data-testid='ball-header'>Ball</button>
            <button onClick = {props.addFoul}>Foul</button>
            <button onClick = {props.addHit}>Hit</button>
        </div>
    )
}

export default Dashboard;