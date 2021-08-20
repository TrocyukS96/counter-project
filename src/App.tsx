import React from 'react';
import s from './App.module.css';
import Counter from "./counter/Counter";

function App() {
  return (
      <div className={s.wrap}>
        <Counter/>
        {/*<Counter/>*/}
      </div>
  );
}

export default App;
