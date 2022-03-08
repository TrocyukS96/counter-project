import {FC} from "react";

import s from './SettingsModal.module.css';

export const SettingsModal:FC<any>= ({children})=>{
    return(
        <div className={s.modalBlock}>{children}</div>
    )
}