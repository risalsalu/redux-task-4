import {useSelector , useDispatch} from 'react-redux'
import { decrement, increment, reset } from './counterSlice';

function App() {
const count = useSelector((state)=> state.counter.count);
const dispatch = useDispatch();
  return (
    <>
      <h2>Count {count}</h2>
      <button onClick={()=> dispatch(increment())} >+</button>
            <button onClick={()=> dispatch(decrement())} >-</button>
                        <button onClick={()=> dispatch(reset())} >Reset</button>
    </>
  )
}

export default App
