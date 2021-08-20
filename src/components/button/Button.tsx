import React from 'react';
import s from './Button.module.css';

type PropsType={
    title:string
}

function Button(props:PropsType) {
  return (
      <div className={s.button}>
          {props.title}
      </div>
  );
}

export default Button;
