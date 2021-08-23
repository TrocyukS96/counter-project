import React, {ChangeEvent, FocusEvent} from 'react';
import s from './ScreenBlock.module.css';


type PropsType = {
    title:string
    setValue:(value:number)=>void
}


function ScreenBlock(props:PropsType) {
const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    let valueAsNumber = JSON.parse(e.currentTarget.value)
    props.setValue(valueAsNumber)
}
const onBlurHandler = (e:FocusEvent<HTMLInputElement>) =>{
    let currentValue = e.currentTarget.value
}

    return (
<div className={s.screenBlock}>
    <span className={s.screenTitle}>{props.title}</span>
    <input className={s.screenInput} type="number" onChange={onChangeHandler} onBlur={onBlurHandler} />
</div>
    );
}

export default ScreenBlock;
