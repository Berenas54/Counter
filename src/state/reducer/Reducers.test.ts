import {Reducer} from "./Reducers";


test('start value should be reset', () => {
    const startState={
        count:0,
        error:true,
        valueSet:"Please Set button",
        errorInput:true,
        startValue:Number(localStorage.getItem("startValue")),
        maxValue:Number(localStorage.getItem("maxValue"))
    };

    const endState = Reducer(startState, { type: 'RESET-COUNT' })

    expect(endState.count).toBe(endState.startValue);

});
