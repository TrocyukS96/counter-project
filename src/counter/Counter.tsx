import React, {useEffect, useState} from 'react';
import s from './Counter.module.css';
import Button from "../components/button/Button";


type PropsType = {
    increaseValue: () => void
    resetValue: () => void
    minValue: number
    maxValue: number
    error: boolean
    showText: boolean
    value: number
}

function Counter(props: PropsType) {

    const getDisabledIncr = props.value===props.maxValue ? true : false

    return (
        <div className={s.counterBlock}>
            <h1 className={s.title}>Easy Counter</h1>
            <div className={s.screen}>
                <div
                    className={props.value===props.maxValue ?
                        s.activeNumber : ''}>{props.showText
                    ?
                    <span className={s.screenText}>
                       {props.error ? 'incorrect value' : 'add value and press Set'}
                    </span>
                    :props.value}
                </div>

            </div>
            <div className={s.buttonsBlock}>
                <Button title={'Incr'} callBack={props.increaseValue} disabled={getDisabledIncr}/>
                <Button title={'Reset'} callBack={props.resetValue} disabled={false}/>
            </div>
        </div>
    );
}

export default Counter;
