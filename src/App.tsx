import React, {useState} from 'react';
import './App.css';
import CounterWindow from "./components/CounterWindow/CounterWindow";
import Button from "./components/Button/Button";
import {SettingsWindow} from "./components/SettingsWindow/SettingsWindow";

//сделать проверку, намутить стили на дизейбл
function App() {

    let [startValue, setStartValue] = useState(Number(localStorage.getItem("startValue")))
    let [maxValue, setMaxValue] = useState(Number(localStorage.getItem("maxValue")))
    let [count, setCount] = useState(startValue)

    function setDisplay () {
        setCount(startValue)
        localStorage.setItem("startValue", startValue.toString())
        localStorage.setItem("maxValue", maxValue.toString())
    }

    function increment() {
        if (count < maxValue) {
            let newValue = count + 1
            setCount(newValue)
        }
    }

    function reset() {
        if (count > 0) {
            setCount(startValue)
        }

    }

    return (<div className="wrapper_app">
            <div className="wrapper_window">
                <SettingsWindow startValue={startValue} setStartValue={setStartValue} maxValue={maxValue} setMaxValue={setMaxValue} />
                <div className={"btn_block"}>
                    <Button title={"set"} onClick={setDisplay} disabled={false}/>
                </div>
            </div>

            <div className="wrapper_window">
                <CounterWindow count={count} maxNumber={maxValue}/>
                <div className="btn_block">
                    <Button onClick={increment} title={"inc"} disabled={count === maxValue}/>
                    <Button onClick={reset} title={"reset"} disabled={count === startValue}/>
                </div>
            </div>
        </div>
    );
}

export default App;
