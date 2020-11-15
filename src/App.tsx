import React, {useState} from 'react';
import './App.css';
import CounterWindow from "./components/CounterWindow/CounterWindow";
import Button from "./components/Button/Button";


function App() {
    let [count, setCount] = useState(0)
    const maxNumber = 5

    function increment() {
        if (count < maxNumber) {
            let newValue = count + 1
            setCount(newValue)
        }
    }

    function reset() {
        if (count > 0) {
            setCount(0)
        }

    }

    return (<div className="wrapper_app">
            <div className="wrapper_window">
                <CounterWindow count={1} maxNumber={5}/>
                <div className={"btn_block"}>
                    <Button title={"set"} onClick={console.log} disabled={false}/>
                </div>
            </div>

            <div className="wrapper_window">
                <CounterWindow count={count} maxNumber={maxNumber}/>
                <div className="btn_block">
                    <Button onClick={increment} title={"inc"} disabled={count === maxNumber}/>
                    <Button onClick={reset} title={"reset"} disabled={count === 0}/>
                </div>
            </div>
        </div>
    );
}

export default App;
