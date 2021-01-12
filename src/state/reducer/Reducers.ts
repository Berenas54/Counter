type ActionsType =
    | ReturnType<typeof setStartValue>
    | ReturnType<typeof setMaxValue>
    | ReturnType<typeof setResetCount>
    | ReturnType<typeof setIncrementCount>

let state = {
    count: 0,
    error: true,
    valueSet: "Please Set button",
    errorInput: true,
    startValue: 0,
    maxValue: 1
}
type StateType = typeof state

export const Reducer = (state: StateType = state, action: ActionsType): StateType => {
    switch (action.type) {
        case 'SET_START_VALUE':
            return {...state, startValue: action.value}
        case 'SET_MAX_VALUE':
            return {...state, maxValue: action.value}
        case 'RESET-COUNT':
            return {...state, count: state.startValue}
        case 'INCREMENT-COUNT': {
            if (state.count < state.maxValue) {
                return {...state, count: state.count + 1}
            } else if (state.count === state.maxValue) {
                return {...state, count: state.count}
            } else {
                return {...state}
            }
        }

        default:
            return state
    }
}
const setStartValue = (value: number) => ({type: 'SET_START_VALUE', value} as const)
const setMaxValue = (value: number) => ({type: 'SET_MAX_VALUE', value} as const)
const setResetCount = () => ({type: 'RESET-COUNT'} as const)
const setIncrementCount = () => ({type: 'INCREMENT-COUNT'} as const)
