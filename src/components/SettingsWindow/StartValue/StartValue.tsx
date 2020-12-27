import React, {ChangeEvent} from 'react';
import '../../../App.css';

type StartValuePropsType = {
    startValue: number,
    setStartValue: (value: number) => void
    errorInput: boolean
    maxValue: number
    setError: (value:boolean)=>void
}

export function StartValue(props: StartValuePropsType) {

    let onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(e.currentTarget.valueAsNumber)
        props.setError(true)
    }
    return (
        <div className={"settings_wrapper"}>
            <div className={"settings_text"}>start value:</div>
            <input className={`${props.startValue < 0 ? "settings_input_error" : "settings_input"}
            ${props.startValue > props.maxValue ? "settings_input_error" : "settings_input"}`} type={"number"}
                   value={props.startValue} onChange={onChangeValue}/>
        </div>
    );
}
