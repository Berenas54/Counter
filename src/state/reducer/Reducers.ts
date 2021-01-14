type ActionsType =
    | ReturnType<typeof setStartValue>
    | ReturnType<typeof setMaxValue>
    | ReturnType<typeof setResetCount>
    | ReturnType<typeof setIncrementCount>
    | ReturnType<typeof setCountValue>
    | ReturnType<typeof setText>
    | ReturnType<typeof setError>

let initialState = {
    count: 0,
    error: true,
    valueSet: "Please Set button",
    errorInput: true,
    startValue: 0,
    maxValue: 1
}
type StateType = typeof initialState

export const Reducer = (state: StateType = initialState, action: ActionsType): StateType => {
    switch (action.type) {
        case 'SET_START_VALUE':
            return {...state, startValue: action.value}
        case 'SET_MAX_VALUE':
            return {...state, maxValue: action.value}
        case 'SET_COUNT_VALUE':
            return {...state, count: action.value}
        case "SET_TEXT":
            return {...state, valueSet:action.text}
        case "SET_ERROR":
            return {...state, error: action.error}
        case 'RESET-COUNT': {
            if (state.count > 0) {
                return {...state, count: state.startValue}
            } else {
                return {...state}
            }
        }
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
export const setStartValue = (value: number) => ({type: 'SET_START_VALUE', value} as const)
export const setError = (error: boolean) => ({type: 'SET_ERROR', error} as const)
export const setText = (text: string) => ({type: 'SET_TEXT', text} as const)
export const setMaxValue = (value: number) => ({type: 'SET_MAX_VALUE', value} as const)
export const setCountValue = (value: number) => ({type: 'SET_COUNT_VALUE', value} as const)
export const setResetCount = () => ({type: 'RESET-COUNT'} as const)
export const setIncrementCount = () => ({type: 'INCREMENT-COUNT'} as const)
