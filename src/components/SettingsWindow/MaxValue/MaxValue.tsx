import React, {ChangeEvent} from 'react';
import '../../../App.css';

type MaxValuePropsType = {
    maxValue: number,
    setMaxValue: (value: number) => void
    errorInput: boolean
    startValue: number
    setError: (value: boolean) => void
}

export function MaxValue(props: MaxValuePropsType) {

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.valueAsNumber
        props.setMaxValue(value)
        props.setError(true)
    }


    return (
        <div className={"settings_wrapper"}>
            <div>max value:</div>
            <input className={props.maxValue <= 0 ? "settings_input_error" : "settings_input"} type={"number"}
                   value={props.maxValue} onChange={onChangeValue}/>
        </div>
    );
}


