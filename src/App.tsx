import React, {useEffect, useState} from 'react';
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

    // let [startValue, setStartValue] = useState<number>(0)
    // let [maxValue, setMaxValue] = useState(1)
    //
    // let [count, setCount] = useState<number>(0)

    //  const [error, setError] = useState(true)

    // const [valueSet, setValueSet] = useState<string>("Please Set button")
    const [errorInput, setErrorInput] = useState(true)


    function setDisplay() {
        dispatch(setCountValue(startValue))
        // setCount(startValue)

        localStorage.setItem("startValue", startValue.toString())
        localStorage.setItem("maxValue", maxValue.toString())
    }


    // function increment() {
    //     if (count < maxValue) {
    //         setCount(count + 1)
    //     } else if (count === maxValue) {
    //         setCount(count)
    //     }
    // }
    //
    // function reset() {
    //     if (count > 0) {
    //         setCount(startValue)
    //     }
    //
    // }
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
            setErrorInput(false)
            dispatchText("startValue = maxValue")
        } else if (startValue > maxValue) {
            dispatchError(true)
            setErrorInput(false)
            dispatchText("startValue > maxValue")
        } else if (startValue < 0) {
            dispatchError(true)
            setErrorInput(false)
            dispatchText("startValue < 0")
        } else if (maxValue < 0) {
            dispatchError(true)
            setErrorInput(false)
            dispatchText("maxValue < 0")
        } else if (startValue < maxValue) {
            dispatchError(false)
            setErrorInput(true)
            dispatchText("Please Set button")
            setDisplay()
        }

    }
    return (<div className={s.wrapper_app}>
            <div className={s.wrapper_window}>
                <SettingsWindow startValue={startValue} setStartValue={dispatchStart} maxValue={maxValue}
                                setMaxValue={dispatchMax} errorInput={errorInput} dispatchError={dispatchError}/>
                <div className={s.btn_block}>
                    <Button title={"set"} onClick={errorInputChecked} disabled={false}/>
                </div>
            </div>

            <div className={s.wrapper_window}>
                <CounterWindow count={count} maxNumber={maxValue} valueSet={valueSet} error={error}/>
                <div className={s.btn_block}>
                    <Button onClick={increment} title={"inc"} disabled={count === maxValue}/>
                    <Button onClick={reset} title={"reset"} disabled={count === startValue}/>
                </div>
            </div>
        </div>
    );
}

export default App;
