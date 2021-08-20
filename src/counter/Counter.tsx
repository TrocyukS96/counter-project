import React from 'react';
import s from './Counter.module.css';
import Button from "../components/button/Button";

function Counter() {
  return (
    <div className={s.counterBlock}>
      <h1 className={s.title}>Easy Counter</h1>
        <div className={s.screen}>
            <span className={s.screenText}>1</span>
        </div>
        <div className={s.buttonsBlock}>
            <Button title={'Incr'}/>
            <Button title={'Reset'}/>
        </div>
    </div>
  );
}

export default Counter;
