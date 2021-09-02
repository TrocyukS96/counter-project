import React, {useEffect, useState} from 'react';
import s from './SettingsForCounter.module.css';
import Button from "../../components/button/Button";
import ScreenBlock from "./screenBlock/ScreenBlock";

type PropsType ={
    changeValues:()=>void

    showTextOnScreen:(value:boolean)=>void
    toSetMaxValue:(inputMaxValue: number)=>void
    toSetMinValue:(inputMinValue: number)=>void
    minValue:number
    maxValue:number
    setError:(error:boolean)=>void
    error:boolean

}

function SettingsForCounter(props:PropsType) {

    const toDisableButton = props.error ? true : false
    return (
        <div className={s.setBlock}>
            <h1 className={s.title}>Settings for Counter</h1>
            <div className={s.screen}>
                    <ScreenBlock title={'MinValue'}

                                 showTextOnScreen = {props.showTextOnScreen}
                                 value={props.minValue}
                                 changeValue={props.toSetMinValue}
                                 setError={props.setError}
                                 error={props.error}
                    />
                    <ScreenBlock title={'MaxValue'}

                                 showTextOnScreen = {props.showTextOnScreen}
                                 value={props.maxValue}
                                 changeValue={props.toSetMaxValue}
                                 setError={props.setError}
                                 error={props.error}
                    />
            </div>
            <div className={s.buttonsBlock}>
                <Button title={'Set'}  callBack={props.changeValues} disabled={toDisableButton} />
            </div>
        </div>
    );
}

export default SettingsForCounter;
