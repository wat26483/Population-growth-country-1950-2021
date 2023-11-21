import { useEffect, useState } from 'react'
import './App.css'
import Header from './component/header'
import Chart from './component/Chart'

function App() {
  const [count, setCount] = useState([])
  const [load, setLoad] = useState(true)
  
  useEffect(()=>{
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://apidemo-arik.onrender.com/data", requestOptions)
      .then(response => response.json())
      .then(result => {
        setCount(result)
        console.log(result)
        setLoad(!load)
      })
      .catch(error => console.log('error', error));
  },[])

  return (
    <>
      <Header/>
      {
        load ? <h1>loading....</h1> : <Chart count={count}/>
      }
      
    </>
  )
}

export default App
