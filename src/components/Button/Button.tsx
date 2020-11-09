import React from 'react';
import '../../App.css';

type ButtonPropsType = {
    title: string
    onClick: () => void
    disabled:boolean
}

function Button(props: ButtonPropsType) {
    return <div className={"btn"}>
        <button disabled={props.disabled} onClick={props.onClick}>{props.title}</button>
    </div>
}

export default Button;
