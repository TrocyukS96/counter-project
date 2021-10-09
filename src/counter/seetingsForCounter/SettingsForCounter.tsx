import React, {useEffect, useState} from 'react';
import s from './SettingsForCounter.module.css';
import Button from "../../components/button/Button";
import ScreenBlock from "./screenBlock/ScreenBlock";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {changeMaxValueAC, changeMinValueAC, setNewCounterSettingsAC} from "../../redux/redux-reducer";

type PropsType ={
}
const changeValues = () => {}

function SettingsForCounter(props:PropsType) {
    const dispatch = useDispatch()
    const minValue = useSelector<AppStateType, number>(state => state.counter.minValue)
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
     const counterError = useSelector<AppStateType, boolean>(state => state.counter.error)


    const changeMinValue = (minNum:number) => {
       dispatch(changeMinValueAC(minNum))
    }
    const setNewSettings = () => {
        dispatch(setNewCounterSettingsAC())
    }
    const changeMaxValue = (maxNum:number) => {
        dispatch(changeMaxValueAC(maxNum))
    }
    return (
        <div className={s.setBlock}>
            <h1 className={s.title}>Settings for Counter</h1>
            <div className={s.screen}>
                    <ScreenBlock
                        title={'minValue'}
                        value ={minValue}
                        changeValue = {changeMinValue}
                    />
                    <ScreenBlock
                        title={'maxValue'}
                        value ={maxValue}
                        changeValue = {changeMaxValue}
                                            />
            </div>
            <div className={s.buttonsBlock}>
                <Button title={'Set'}  callBack={setNewSettings} disabled={counterError} />
            </div>
        </div>
    );
}

export default SettingsForCounter;
