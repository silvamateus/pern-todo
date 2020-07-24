import React, {Fragment} from 'react';
import './App.css';

import InputTodo from './components/inputTodos'

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
      </div>
    </Fragment>
  );
}

export default App;
