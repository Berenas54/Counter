import React, {useEffect} from 'react';
import s from './App.module.css';
import CounterWindow from "./components/CounterWindow/CounterWindow";
import Button from "./components/Button/Button";
import {SettingsWindow} from "./components/SettingsWindow/SettingsWindow";
import {useDispatch, useSelector} from "react-redux";
import {
    setCountValue, setError,
    setIncrementCount,
    setMaxValue,
    setResetCount,
    setStartValue,
    setText
} from "./state/reducer/Reducers";
import {selectCounter} from "./state/selectors";

let getMaxValue = localStorage.getItem("maxValue")
let getStartValue = localStorage.getItem("startValue")

function App() {

    useEffect(() => {
        if (getMaxValue && getStartValue) {
            dispatch(setStartValue(Number(getStartValue)))
            dispatch(setMaxValue(Number(getMaxValue)))
        }
    }, [])

    const {count, startValue, maxValue, valueSet, error} = useSelector(selectCounter)
    const dispatch = useDispatch()

    function setDisplay() {
        dispatch(setCountValue(startValue))
        localStorage.setItem("startValue", startValue.toString())
        localStorage.setItem("maxValue", maxValue.toString())
    }

    const dispatchText = (text: string) => {
        dispatch(setText(text))
    }

    const dispatchError = (error: boolean) => {
        dispatch(setError(error))
    }
    const dispatchStart = (value: number) => {
        dispatch(setStartValue(value))
    }
    const dispatchMax = (value: number) => {
        dispatch(setMaxValue(value))
    }

    const increment = () => {
        dispatch(setIncrementCount())
    }
    const reset = () => {
        dispatch(setResetCount())
    }

    const errorInputChecked = () => {
        errorValue()
    }

    const errorValue = () => {
        if (startValue === maxValue) {
            dispatchError(true)
            dispatchText("startValue = maxValue")
        } else if (startValue > maxValue) {
            dispatchError(true)
            dispatchText("startValue > maxValue")
        } else if (startValue < 0) {
            dispatchError(true)
            dispatchText("startValue < 0")
        } else if (maxValue < 0) {
            dispatchError(true)
            dispatchText("maxValue < 0")
        } else if (startValue < maxValue) {
            dispatchError(false)
            dispatchText("Please Set button")
            setDisplay()
        }

    }
    return (<div className={s.wrapper_app}>
            <div className={s.wrapper_window}>
                <SettingsWindow startValue={startValue} setStartValue={dispatchStart} maxValue={maxValue}
                                setMaxValue={dispatchMax} dispatchError={dispatchError}/>
                <div className={s.btn_block}>
                    <Button title={"set"} onClick={errorInputChecked} disabled={false} error={false}/>
                </div>
            </div>

            <div className={s.wrapper_window}>
                <CounterWindow count={count} maxNumber={maxValue} valueSet={valueSet} error={error}/>
                <div className={s.btn_block}>
                    <Button onClick={increment} title={"inc"} disabled={count === maxValue} error={error}/>
                    <Button onClick={reset} title={"reset"} disabled={count === startValue} error={error}/>
                </div>
            </div>
        </div>
    );
}

export default App;
