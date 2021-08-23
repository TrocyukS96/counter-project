import React, {useEffect, useState} from 'react';
import s from './Counter.module.css';
import Button from "../components/button/Button";


type PropsType = {
    increaseValue: () => void
    resetValue: () => void
    value: number
    error : boolean

}

function Counter(props: PropsType) {

    const getDisabledIncr = props.error ? true : false

    return (
        <div className={s.counterBlock}>
            <h1 className={s.title}>Easy Counter</h1>
            <div className={s.screen}>
                <span className={props.error ? s.activeNumber : ''}>{props.value}</span>

            </div>
            <div className={s.buttonsBlock}>
                <Button title={'Incr'} callBack={props.increaseValue} disabled={getDisabledIncr}/>
                <Button title={'Reset'} callBack={props.resetValue} disabled={false}/>
            </div>
        </div>
    );
}

export default Counter;
