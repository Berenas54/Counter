import React, {ChangeEvent} from 'react';
import '../../../App.css';

type StartValuePropsType={
    startValue:number,
    setStartValue:(value:number)=>void
}

export function StartValue(props:StartValuePropsType) {

    let onChangeValue = (e:ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(e.currentTarget.valueAsNumber)
    }
    return (
        <div className={"settings_wrapper"}>
            <div className={"settings_text"}>start value:</div>
            <input className={"settings_input"} type={"number"} value={props.startValue} onChange={onChangeValue}/>
        </div>
    );
}


