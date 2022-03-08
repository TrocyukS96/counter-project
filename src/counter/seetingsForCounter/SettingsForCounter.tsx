import React, {FC, useEffect} from 'react';
import s from './SettingsForCounter.module.css';
import Button from "../../components/button/Button";
import ScreenBlock from "./screenBlock/ScreenBlock";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {counterActions} from "./index";

type SettingForCounterPropsType = {
    closeModal:()=>void
}

export const SettingsForCounter:FC<SettingForCounterPropsType>=({closeModal}) =>{
    //hooks
    const dispatch = useDispatch()

    const minValue = useSelector<AppStateType, number>(state => state.counter.minValue)
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    const counterError = useSelector<AppStateType, boolean>(state => state.counter.error)

    //localStorage
    let maxValueFromStorage = localStorage.getItem('maxValue')
    let minValueFromStorage = localStorage.getItem('minValue')

    useEffect(() => {
        if (minValueFromStorage) {
            dispatch(setMinValue(Number(JSON.parse(minValueFromStorage))))

        }
    }, [])
    useEffect(() => {
        if (maxValueFromStorage) {
            dispatch(setMaxValue(Number(JSON.parse(maxValueFromStorage))))
        }
    }, [])

    //actions
    const {setNewCounterSettings, setMinValue, setMaxValue, setCurrentValue} = counterActions

    //handlers
    const changeMinValueFunc = (minNum: number) => {
        dispatch(setMinValue(minNum))
    }
    const setNewSettingsFunc = () => {
        dispatch(setNewCounterSettings())
        closeModal()
    }
    const changeMaxValueFunc = (maxNum: number) => {
        dispatch(setMaxValue(maxNum))
    }

    function closeModalHandler() {
        closeModal()
    }

    return (
        <div className={s.setBlock}>
            <h1 className={s.title}>Settings for Counter</h1>
            <div className={s.screen}>
                <ScreenBlock
                    title={'minValue'}
                    value={minValue}
                    changeValue={changeMinValueFunc}
                />
                <ScreenBlock
                    title={'maxValue'}
                    value={maxValue}
                    changeValue={changeMaxValueFunc}
                />
            </div>
            <div className={s.buttonsBlock}>
                <Button title={'SET'} callBack={setNewSettingsFunc} disabled={counterError}/>
            </div>
            <button
                className={s.cancel}
                onClick={closeModalHandler}
            >X</button>
        </div>
    );
}

export default SettingsForCounter;
