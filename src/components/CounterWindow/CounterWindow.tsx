import React from 'react';
import '../../App.css';

type CounterWindowPropsType = {
    count: number
    maxNumber: number
    valueSet: string
    error: boolean
}

function CounterWindow(props: CounterWindowPropsType) {
    return (
        <div className="counterWindow">
            {props.error ? <div className={'simple_number'}><p>{props.valueSet}</p></div> :
                <h1 className={props.count === props.maxNumber ? "red_number" : 'simple_number'}>{props.count}</h1>}

        </div>
    );
}


export default CounterWindow;
