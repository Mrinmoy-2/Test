import { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { decrement,increment,addtoFav } from './Redux/counterslice'
import './App.css'

function App() {
  const[num,setNum] = useState()
  const count = useSelector(state=>state.counter.value);
  const arr = useSelector(state=>state.counter.favourites)
  const dispatch = useDispatch()
  const handlePush = ()=>{
    if(num.trim()){

      dispatch(addtoFav(num))
    }
    setNum('')
  }

  return (
    <>
    <input type='number' value={num} onChange={(e)=>{setNum(e.target.value)}}></input>
   {count}
   <button onClick={()=>{dispatch(increment())}}> Add</button>
   <button> subtract</button>
   <button onClick={handlePush}> Add to favourites</button>
   {
    arr.map((item)=><li>{item}</li>)
   }
    </>
  )
}

export default App
