import React, {ChangeEvent} from 'react';
import s from '../../../App.module.css';

type StartValuePropsType = {
    startValue: number,
    setStartValue: (value: number) => void
    maxValue: number
    dispatchError: (error: boolean) => void
}

export function StartValue(props: StartValuePropsType) {

    let onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(e.currentTarget.valueAsNumber)
        props.dispatchError(true)
    }

    let errorInput = props.startValue < 0 || props.startValue > props.maxValue || props.maxValue === props.startValue
    return (
        <div className={s.settings_wrapper}>
            <div>start value:</div>
            <input className={errorInput ? s.settings_input_error : s.settings_input} type={"number"}
                   value={props.startValue} onChange={onChangeValue}/>
        </div>
    );
}
