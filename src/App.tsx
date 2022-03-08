import React, {useState} from 'react';
import s from './App.module.css';
import {useDispatch} from "react-redux";
import SettingsForCounter from "./counter/seetingsForCounter/SettingsForCounter";
import {Counter} from "./counter/Counter";
import {counterActions} from "./counter/seetingsForCounter";
import {SettingsModal} from "./settingsModal/SettingsModal";

function App() {
    //hooks
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)

    //actions
    const {addValue, resetValue} = counterActions

    //handlers
    const incrValueFunc = () => {
        dispatch(addValue())
    }
    const resetValueFunc = (resetNumber: number) => {
        dispatch(resetValue(resetNumber))
    }
    const closeModalHandler = () => {
        setOpen(false)
    }
    const openModalHandler = () => {
        setOpen(true)
    }
    return (
        <div className={s.wrap}>
            <Counter
                incrValue={incrValueFunc}
                resetValue={resetValueFunc}
                openModal={openModalHandler}
            />
            {open &&
                <SettingsModal>
                    <SettingsForCounter closeModal={closeModalHandler}/>
                </SettingsModal>
            }

        </div>
    );
}

export default App;
