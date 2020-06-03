import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {increaser,decreaser} from './redux/counter/counter.action';
import './App.css';

function App() {

  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">

        <button
          style={{float:"left"}}
          onClick={() => {dispatch(increaser())}}
        >
          increase
        </button>

        <h1>
          {counter.count}
        </h1>

        <button
          style={{float:"right"}}
          onClick={() => {dispatch(decreaser())}}
        >
          decrease
        </button>

      </header>
    </div>
  );
}

export default App;
