import React, {ChangeEvent} from 'react';
import s from '../../../App.module.css';

type MaxValuePropsType = {
    maxValue: number,
    setMaxValue: (value: number) => void
    errorInput: boolean
    startValue: number
    dispatchError: (error: boolean) => void
}

export function MaxValue(props: MaxValuePropsType) {

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.valueAsNumber
        props.setMaxValue(value)
        props.dispatchError(true)
    }
    //при запуске приложения проверить а есть ли Number(localStorage.getItem("maxValue"), и если да засетать его в maxValue а если нет то оставить по умолчанию
    //надо дергать каждый раз когда нажимаем set?
    return (
        <div className={s.settings_wrapper}>
            <div>max value:</div>
            <input className={props.maxValue <= 0 ? s.settings_input_error : s.settings_input} type={"number"}
                   value={props.maxValue} onChange={onChangeValue}/>
        </div>
    );
}


