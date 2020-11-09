import React from 'react';
import '../../App.css';
type CounterWindowPropsType={
    count:number
    maxNumber:number
}

function CounterWindow(props:CounterWindowPropsType) {
    return (
        <div className="counterWindow">
            <div className={props.count === props.maxNumber ? "red_number" : ''}><h1>{props.count}</h1></div>
        </div>
    );
}

export default CounterWindow;
