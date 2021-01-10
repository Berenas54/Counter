type StateType={
    count:number,
    error:boolean,
    valueSet:string,
    errorInput:boolean,
    startValue:number,
    maxValue:number
}
type ActionType = {
    type: string
    [key: string]: any
}
let state:StateType={
    count:0,
    error:true,
    valueSet:"Please Set button",
    errorInput:true,
    startValue:Number(localStorage.getItem("startValue")),
    maxValue:Number(localStorage.getItem("maxValue"))
}

// меня вызовут и дадут мне стейт (почти всегда объект)
// и инструкцию (action, тоже объект)
// согласно прописаному type в этом action (инструкции) я поменяю state
export const Reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case 'RESET-COUNT':
            return { ...state,count:state.startValue}
        default:
            throw new Error("I don't understand this type")
    }
}