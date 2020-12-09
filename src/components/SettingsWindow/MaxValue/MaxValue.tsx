import React, {ChangeEvent} from 'react';
import '../../../App.css';

type MaxValuePropsType={
    maxValue:number,
    setMaxValue:(value:number)=>void
}

export function MaxValue(props:MaxValuePropsType) {

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.valueAsNumber
        props.setMaxValue(value)
    }


    return (
        <div className={"settings_wrapper"}>
            <div className={"settings_text"}>max value:</div>
            <input className={"settings_input"} type={"number"} value={props.maxValue} onChange={onChangeValue}/>
        </div>
    );
}

