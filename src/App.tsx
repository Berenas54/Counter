import React, {useState} from 'react';
import s from './App.module.css';
import CounterWindow from "./components/CounterWindow/CounterWindow";
import Button from "./components/Button/Button";
import {SettingsWindow} from "./components/SettingsWindow/SettingsWindow";


function App() {
    let [startValue, setStartValue] = useState(Number(localStorage.getItem("startValue")))
    let [maxValue, setMaxValue] = useState(Number(localStorage.getItem("maxValue")))

    let [count, setCount] = useState<number>(0)

    const [error, setError] = useState(true)

    const [valueSet, setValueSet] = useState<string>("Please Set button")
    const [errorInput, setErrorInput] = useState(true)
    //
    // const [disabledSet, setDisableSet] = useState<boolean>(false)
    // const [disabledInc, setDisableInc] = useState<boolean>(false)
    // const [disabledReset, setDisableReset] = useState<boolean>(false)

    function setDisplay() {
        setCount(startValue)
        localStorage.setItem("startValue", startValue.toString())
        localStorage.setItem("maxValue", maxValue.toString())
    }


    const errorInputChecked = () => {
        errorValue()
    }

    const errorValue = () => {
        if (startValue === maxValue) {
            setError(true)
            setErrorInput(false)
            setValueSet("startValue = maxValue")
        } else if (startValue > maxValue) {
            setError(true)
            setErrorInput(false)
            setValueSet("startValue > maxValue")
        } else if (startValue < 0) {
            setError(true)
            setErrorInput(false)
            setValueSet("startValue < 0")
        } else if (maxValue < 0) {
            setError(true)
            setErrorInput(false)
            setValueSet("maxValue < 0")
        } else if (startValue < maxValue) {
            setError(false)
            setErrorInput(true)
            setValueSet("Please Set button")
            setDisplay()
        }

    }

    function increment() {
        if (count < maxValue) {
            setCount(count + 1)
        } else if (count === maxValue) {
            setCount(count)
        }
    }

    function reset() {
        if (count > 0) {
            setCount(startValue)
        }

    }


    return (<div className={s.wrapper_app}>
            <div className={s.wrapper_window}>
                <SettingsWindow startValue={startValue} setStartValue={setStartValue} maxValue={maxValue}
                                setMaxValue={setMaxValue} errorInput={errorInput} setError={setError}/>
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
