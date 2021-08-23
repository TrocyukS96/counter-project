import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import Counter from "./counter/Counter";
import SettingsForCounter from "./counter/seetingsForCounter/SettingsForCounter";

let minValue = 2
let maxValue = 5


function App() {

    let setMaxValue = (inputMaxValue: number) => {
        maxValue = inputMaxValue
    }
    let setMinValue = (inputMinValue: number) => {
        minValue = inputMinValue
    }

    let [value, setValue] = useState(minValue)
    let [error, setError] = useState(false)

    useEffect(() => {
        let maxValueAsString = localStorage.getItem('maxValue')
        if (maxValueAsString) {
            maxValue = JSON.parse(maxValueAsString)
        }
    }, []) //сработает только один раз при перезагрузке страницы
    useEffect(() => {
        let minValueAsString = localStorage.getItem('minValue')
        console.log(minValueAsString)
        if (minValueAsString) {
            minValue = JSON.parse(minValueAsString)
        }
    }, [])

    useEffect(() => {
        let valueAsString = localStorage.getItem('CounterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('CounterValue', JSON.stringify(value))
    }, [value])

    const increaseValue = () => {
        if (value >= minValue && maxValue > value) {
            setValue(value + 1)
        }
        if (value === maxValue) {
            setError(true)
        } else {
            setError(false)
        }
    }

    const resetValue = () => {
        if (value > minValue) {
            setValue(minValue)
            setError(false)
        }
    }

    const setValueToLocalStorage = () => {
        localStorage.setItem('minValue', JSON.stringify(minValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        setValue(minValue)
    }


    return (
        <div className={s.wrap}>
            <SettingsForCounter
                setValueToLocalStorage={setValueToLocalStorage}
                setMaxValue={setMaxValue}
                setMinValue={setMinValue}
            />
            <Counter
                increaseValue={increaseValue}
                resetValue={resetValue}
                value={value}
                error={error}

            />

        </div>
    );
}

export default App;
