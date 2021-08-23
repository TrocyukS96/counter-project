import React, {useEffect, useState} from 'react';
import s from './SettingsForCounter.module.css';
import Button from "../../components/button/Button";
import ScreenBlock from "./screenBlock/ScreenBlock";


type PropsType ={
    setValueToLocalStorage:()=>void
    setMaxValue:(value:number)=>void
    setMinValue:(value:number)=>void
}


function SettingsForCounter(props:PropsType) {

    return (
        <div className={s.setBlock}>
            <h1 className={s.title}>Settings for Counter</h1>
            <div className={s.screen}>
                    <ScreenBlock title={'MinValue'} setValue = {props.setMinValue}/>
                    <ScreenBlock title={'MaxValue'} setValue = {props.setMaxValue}/>
            </div>
            <div className={s.buttonsBlock}>
                <Button title={'Set'} disabled={false} callBack={props.setValueToLocalStorage} />
            </div>
        </div>
    );
}

export default SettingsForCounter;
