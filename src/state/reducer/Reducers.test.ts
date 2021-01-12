// import {Reducer} from "./Reducers";

import { Reducer } from "./Reducers";


test('start value should be reset', () => {
    const startState={
        count:0,
        error:true,
        valueSet:"Please Set button",
        errorInput:true,
        startValue: 0,
        maxValue: 1
    };

    const endState = Reducer(startState, { type: 'RESET-COUNT' })

    expect(endState.count).toBe(endState.startValue);

});
