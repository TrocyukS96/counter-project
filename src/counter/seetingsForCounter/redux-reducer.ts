import {createSlice} from "@reduxjs/toolkit";

const initialState= {
    value: 0,
    minValue: 1,
    maxValue: 5,
    error: false
} as InitialStateType
type InitialStateType = {
    value:number
    minValue:number
    maxValue:number
    error:boolean
}


export const slice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        addValue(state) {
            if (state.value < state.maxValue) {
                state.value = state.value + 1
                state.error = false
            }
            if(state.value===state.maxValue){
                state.error=true
            }
        },
        resetValue: (state, action) => {
            state.value = state.minValue
            state.error = false
        },
        setMinValue(state, action) {

            if (state.minValue < 0 || state.minValue === state.maxValue) {
                state.error = true
            } else {
                state.minValue = action.payload
                state.error = false
            }
            state.minValue = action.payload

        }, setMaxValue(state, action) {
            if (state.maxValue < 0 || state.maxValue === state.minValue) {
                state.error = true
            } else {
                state.maxValue = action.payload
                state.error = false
            }
            state.maxValue = action.payload


        }, setNewCounterSettings(state) {
            state.value = state.minValue
            localStorage.setItem('maxValue', JSON.stringify(state.maxValue))
            localStorage.setItem('minValue', JSON.stringify(state.minValue))
        },
        setCurrentValue(state, action) {
            state.value = action.payload
        }
    }
})

