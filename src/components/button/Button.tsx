import React from 'react';
import s from './Button.module.css';

type PropsType = {
    title: string
    callBack: () => void
    disabled : boolean

}

function Button(props: PropsType) {
    const onClickHandler =()=>{
        props.callBack()
    }
    return (
        <button className={s.button} onClick={onClickHandler} disabled={props.disabled}>
            {props.title}
        </button>
    );
}

export default Button;
