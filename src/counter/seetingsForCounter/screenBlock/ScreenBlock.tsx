import React, {ChangeEventHandler, FC, useState} from 'react';
import s from './ScreenBlock.module.css';

type PropsType = {
    title: string
    changeValue: (value: number) => void
    value: number
}


export const ScreenBlock: FC<PropsType> = ({title, value, changeValue}) => {
    //hooks
    const [number, setNumber] = useState(0)

    //handlers
    const changeValueHandler = (e: any) => {
        setNumber(e.currentTarget.value)
        changeValue(e.currentTarget.value)
    }


    return (
        <div className={s.screenBlock}>
            <span className={s.screenTitle}>{title}</span>
            <input className={s.screenInput}
                   type="number"
                   value={value}
                   onChange={changeValueHandler}
            />
        </div>
    );
}

export default ScreenBlock;
