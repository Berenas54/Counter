import React from 'react';
import s from '../../App.module.css';

type ButtonPropsType = {
    title: string
    onClick: () => void
    disabled: boolean
    error: boolean

}

function Button(props: ButtonPropsType) {
    return <div className={s.btn_wrapper}>
        <button className={props.disabled || props.error ? s.btn_disabled : s.btn}
                disabled={props.disabled || props.error}
                onClick={props.onClick}>{props.title}</button>
    </div>
}

export default Button;
