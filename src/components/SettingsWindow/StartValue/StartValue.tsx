import React, {ChangeEvent} from 'react';
import s from'../../../App.module.css';

type StartValuePropsType = {
    startValue: number,
    setStartValue: (value: number) => void
    errorInput: boolean
    maxValue: number
    setError: (value: boolean) => void
}

export function StartValue(props: StartValuePropsType) {

    let onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(e.currentTarget.valueAsNumber)
        props.setError(true)
    }
    return (
        <div className={s.settings_wrapper}>
            <div>start value:</div>
            <input className={`${props.startValue < 0 ? s.settings_input_error : s.settings_input}
            ${props.startValue > props.maxValue ? s.settings_input_error : s.settings_input}`} type={"number"}
                   value={props.startValue} onChange={onChangeValue}/>
        </div>
    );
}
