import React, {ChangeEvent, FocusEvent} from 'react';
import s from './ScreenBlock.module.css';


type PropsType = {
    title:string
    showTextOnScreen:(value:boolean)=>void
    value:number
    changeValue:(inputMaxValue: number)=>void
    setError:(error:boolean)=>void
    error:boolean

}


function ScreenBlock(props:PropsType) {

    const onChangeHandler =(e:ChangeEvent<HTMLInputElement>)=>{
        props.changeValue(JSON.parse(e.currentTarget.value))
    }
    const onBlurHandler=(e:FocusEvent<HTMLInputElement>)=>{
        if(e.currentTarget.value){
            props.showTextOnScreen(true)

        } else{
            props.showTextOnScreen(false)

        }
    }

    return (
<div className={s.screenBlock}>
    <span className={s.screenTitle}>{props.title}</span>
    <input className={!props.error ? s.screenInput : s.errorInput} type="number" onChange={onChangeHandler} onBlur={onBlurHandler} value={props.value} />
</div>
    );
}

export default ScreenBlock;
