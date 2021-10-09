import React, {ChangeEvent, FocusEvent} from 'react';
import s from './ScreenBlock.module.css';


type PropsType = {
    title: string
    value: number
    changeValue:(value:number)=>void
}


function ScreenBlock(props: PropsType) {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeValue(+e.currentTarget.value)
    }
    const onBlurHandler = (e: FocusEvent<HTMLInputElement>) => {

    }

    return (
        <div className={s.screenBlock}>
            <span className={s.screenTitle}>{props.title}</span>
            <input className={s.screenInput} type="number" onChange={onChangeHandler} onBlur={onBlurHandler} value={props.value}/>
        </div>
    );
}

export default ScreenBlock;
