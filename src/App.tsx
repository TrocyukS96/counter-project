import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import Counter from "./counter/Counter";
import SettingsForCounter from "./counter/seetingsForCounter/SettingsForCounter";



function App() {

    let [maxValue, setMaxValue] = useState<number>(0)
    let [minValue, setMinValue] = useState<number>(0)

    let [value, setValue] = useState<number>(minValue)

    let [error, setError] = useState(false)
    let [showText, setShowText] = useState<boolean>(false)

    const increaseValue = () => {
        if (value<maxValue ) {
            setValue(value+1)
        }

    }

    const resetValue = () => {
        if (value <= maxValue) {
            setValue(minValue)
        }
    }

    const toSetMaxValue = (inputMaxValue: number) => {

        maxValue=inputMaxValue
        setMaxValue(maxValue)

        if(inputMaxValue === minValue || inputMaxValue<minValue || inputMaxValue <0){
            setError(true)
        }else {
            setError(false)
        }
    }

    const toSetMinValue = (inputMinValue: number) =>{

        minValue = inputMinValue
        setMinValue(minValue)
        if(inputMinValue === maxValue || inputMinValue>maxValue || inputMinValue <0){
            setError(true)
        }else {
            setError(false)
        }

    }


    useEffect(() => {
        let maxValueAsString = localStorage.getItem('maxValue')
        if (maxValueAsString) {
            let newMaxValue = JSON.parse(maxValueAsString)
            setMaxValue(newMaxValue)
        }
    }, []) //сработает только один раз при перезагрузке страницы
    useEffect(() => {
        let minValueAsString = localStorage.getItem('minValue')
        if (minValueAsString) {
            let newMinValue = JSON.parse(minValueAsString)
            setMinValue(newMinValue)

        }
    }, [])

    const changeValues = () => {
        localStorage.setItem('minValue', JSON.stringify(minValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        setValue(minValue)
        setShowText(false)
    }

    const showTextOnScreen = (value: boolean) => {
        setShowText(true)
    }
    console.log(minValue)
    return (
        <div className={s.wrap}>
            <SettingsForCounter
                changeValues={changeValues}
                toSetMaxValue={toSetMaxValue}
                toSetMinValue={toSetMinValue}
                showTextOnScreen={showTextOnScreen}
                maxValue={maxValue}
                minValue={minValue}
                setError={setError}
                error={error}
            />
            <Counter
                increaseValue={increaseValue}
                resetValue={resetValue}
                minValue={minValue}
                maxValue={maxValue}
                error={error}
                showText={showText}
                value={value}
            />

        </div>
    );
}

export default App;
