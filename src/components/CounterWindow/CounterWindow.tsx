import React from 'react';
import '../../App.css';
type CounterWindowPropsType={
    count:number
    maxNumber:number
}

function CounterWindow(props:CounterWindowPropsType) {
    return (
        <div className="counterWindow">
            <div className={props.count === props.maxNumber ? "red_number" : 'simple_number'}><p>{props.count}</p></div>
        </div>
    );
}

export default CounterWindow;
