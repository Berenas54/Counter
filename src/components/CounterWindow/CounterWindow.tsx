import React from 'react';
import s from '../../App.module.css';

type CounterWindowPropsType = {
    count: number
    maxNumber: number
    valueSet: string
    error: boolean
}

function CounterWindow(props: CounterWindowPropsType) {
    return (
        <div className={s.counterWindow}>
            {props.error ? <div className={s.simple_number}><p>{props.valueSet}</p></div> :
                <h1 className={props.count === props.maxNumber ? s.red_number : s.simple_number}>{props.count}</h1>}

        </div>
    );
}


export default CounterWindow;
