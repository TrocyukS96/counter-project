const incrValue = 'INCR-VALUE'
const resetCurrentValue = 'RESET-VALUE'
const changeMinValue = 'SET-MIN-VALUE'
const changeMaxValue = 'CHANGE-MAX-VALUE'
const setNewCounterSettings = 'SET-NEW-CURRENT-SETTINGS'


const initialState = {
    value: 2,
    minValue: 3,
    maxValue: 10,
    error: false
}
type initialStateType = typeof initialState

type actionsType = incrValueAT | restValueAT | changeMinValueAT | changeMaxValueAT | setNewCounterSettingsAT

export const counterReducer = (state: initialStateType = initialState, action: actionsType): initialStateType => {
    switch (action.type) {
        case incrValue:
            if (state.value < state.maxValue) {
                return {
                    ...state, value: state.value + 1,
                    error: false
                }
            } else {
                return {
                    ...state, error: true
                }
            }
            return state

        case resetCurrentValue:
            return {
                ...state, value: action.resetValue,
                error: false
            }
        case changeMinValue:
            if(state.minValue < 0 || state.minValue === state.maxValue){
                return {...state,error: true}
            }else {
                return {...state, minValue: action.minValue, error: false}
            }
            // return state

        case changeMaxValue:
            if(state.maxValue < 0 || state.maxValue === state.minValue){
                return {...state,error: true}
            }else {
                return {...state, maxValue: action.maxValue, error: false}
            }
        case setNewCounterSettings:

            return {
                ...state,
                value: state.minValue,
            }
        default:
            return state
    }
}

export const incrValueAC = () => {
    return {type: incrValue} as const
}
export const restValueAC = (resetValue: number) => {
    return {type: resetCurrentValue, resetValue} as const
}
export const changeMinValueAC = (minValue: number) => {
    return {type: changeMinValue, minValue} as const
}
export const changeMaxValueAC = (maxValue: number) => {
    return {type: changeMaxValue, maxValue} as const
}

export const setNewCounterSettingsAC = () => {
    return {type: setNewCounterSettings,} as const

}

type incrValueAT = ReturnType<typeof incrValueAC>
type restValueAT = ReturnType<typeof restValueAC>
type changeMinValueAT = ReturnType<typeof changeMinValueAC>
type changeMaxValueAT = ReturnType<typeof changeMaxValueAC>
type setNewCounterSettingsAT = ReturnType<typeof setNewCounterSettingsAC>
