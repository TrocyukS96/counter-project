import {slice as counterSlice} from './redux-reducer'

const counterActions = {
    ...counterSlice.actions
}

const counterReducer  = counterSlice.reducer

export {
    counterActions,
    counterReducer
}