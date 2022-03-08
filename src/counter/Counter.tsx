import React, {FC, useEffect} from 'react';
import s from './Counter.module.css';
import Button from "../components/button/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {counterActions} from "./seetingsForCounter";

type PropsType = {

    incrValue: () => void
    resetValue: (resetNumber: number) => void
    openModal: () => void
}

export const Counter: FC<PropsType> = ({incrValue, resetValue, openModal}) => {
    const {setCurrentValue} = counterActions

    //hooks
    const error = useSelector<AppStateType, boolean>(state => state.counter.error)
    const currentValue = useSelector<AppStateType, number>(state => state.counter.value)
    const dispatch = useDispatch()

    const minValue = localStorage.getItem('minValue')
    if (minValue) {
        JSON.parse(minValue)
    }


    useEffect(() => {
        dispatch(setCurrentValue(Number(minValue)))
    }, [dispatch])


    const incrValueHandler = () => {
        incrValue()
        localStorage.setItem('1', '1')
    }
    const resetValueHandler = () => {
        resetValue(0)
    }

    function openModalHandler() {
        openModal()
    }

    return (
        <div className={s.counterBlock}>
            <h1 className={s.title}>Counter</h1>
            <div className={s.screen}>
                <span className={error ? s.error : ''}>
                    {currentValue}
                </span>
            </div>
            <div className={s.buttonsBlock}>
                <Button title={'Incr'} callBack={incrValueHandler} disabled={error}/>
                <Button title={'Reset'} callBack={resetValueHandler} disabled={false}/>
            </div>
            <div className={s.settingsBlock}>
                <button onClick={openModalHandler}>settings</button>
            </div>

        </div>
    );
}

export default Counter;
