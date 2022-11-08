import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { increment } from './Action/index';

function App() {
  const counter = useSelector(state => state.counter )
  const isLogged = useSelector(state => state.isLogged )
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>counter {counter}</h1>
      <button onClick={()=>dispatch(increment())} ></button>
      {isLogged ? <h3> Valueable information</h3> :""}
     HEllooooo
    </div>
  );
}

export default App;
