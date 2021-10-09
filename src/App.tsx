import React, { useState } from 'react';
import s from './App.module.css';
import Counter from "./counter/Counter";
import SettingsForCounter from "./counter/seetingsForCounter/SettingsForCounter";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/redux-store";
import {incrValueAC, restValueAC} from "./redux/redux-reducer";


function App() {
    const currentValue  = useSelector<AppStateType, number>(state => state.counter.value)
    const dispatch = useDispatch()


    const incrValue = () => {
        dispatch(incrValueAC())
    }
    const resetValue = (resetNumber:number) => {
        dispatch(restValueAC(resetNumber))
    }

    // useEffect(() => {
    //     let maxValueAsString = localStorage.getItem('maxValue')
    //     if (maxValueAsString) {
    //         let newMaxValue = JSON.parse(maxValueAsString)
    //         setMaxValue(newMaxValue)
    //     }
    // }, []) //сработает только один раз при перезагрузке страницы
    // useEffect(() => {
    //     let minValueAsString = localStorage.getItem('minValue')
    //     if (minValueAsString) {
    //         let newMinValue = JSON.parse(minValueAsString)
    //         setMinValue(newMinValue)
    //
    //     }
    // }, [])
    return (
        <div className={s.wrap}>
            <SettingsForCounter
            />
            <Counter
                currentValue={currentValue}
                incrValue={incrValue}
                resetValue={resetValue}
            />

        </div>
    );
}

export default App;
