import React from 'react';
import s from '../../App.module.css';

type ButtonPropsType = {
    title: string
    onClick: () => void
    disabled: boolean
}

function Button(props: ButtonPropsType) {
    return <div className={s.btn_wrapper}>
        <button className={props.disabled ? s.btn_disabled : s.btn} disabled={props.disabled}
                onClick={props.onClick}>{props.title}</button>
    </div>
}

export default Button;
