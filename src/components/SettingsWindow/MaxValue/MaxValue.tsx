import React, {ChangeEvent} from 'react';
import s from '../../../App.module.css';

type MaxValuePropsType = {
    maxValue: number,
    setMaxValue: (value: number) => void
    startValue: number
    dispatchError: (error: boolean) => void
}

export function MaxValue(props: MaxValuePropsType) {

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.valueAsNumber
        props.setMaxValue(value)
        props.dispatchError(true)
    }

    let errorInput = props.maxValue <= 0 || props.maxValue === props.startValue

    return (
        <div className={s.settings_wrapper}>
            <div>max value:</div>
            <input className={errorInput ? s.settings_input_error : s.settings_input} type={"number"}
                   value={props.maxValue} onChange={onChangeValue}/>
        </div>
    );
}


