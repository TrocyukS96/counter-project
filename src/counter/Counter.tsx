import React from 'react';
import s from './Counter.module.css';
import Button from "../components/button/Button";
import {useSelector} from "react-redux";
import {AppStateType} from "../redux/redux-store";


type PropsType = {
    currentValue: number
    incrValue: () => void
    resetValue: (resetNumber: number) => void
}

function Counter(props: PropsType) {
    const error = useSelector<AppStateType, boolean>(state => state.counter.error)

    const counterError = useSelector<AppStateType, boolean>(state => state.counter.error)
    const incrValueHandler = () => {
        props.incrValue()
    }
    const resetValueHandler = () => {
        props.resetValue(0)
    }
    return (
        <div className={s.counterBlock}>
            <h1 className={s.title}>Easy Counter</h1>
            <div className={s.screen}>
                <span className={error ? s.error : ''}>
                    {props.currentValue}
                </span>

            </div>
            <div className={s.buttonsBlock}>
                <Button title={'Incr'} callBack={incrValueHandler} disabled={counterError}/>
                <Button title={'Reset'} callBack={resetValueHandler} disabled={false}/>
            </div>
        </div>
    );
}

export default Counter;
