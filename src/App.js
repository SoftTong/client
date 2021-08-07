import './App.css';
import SotongRouter from "./router"
import run from "./init/start"
import { React,useEffect, useState} from 'react';


function App() {
  const [isRenew, setIsRenew] = useState(false) 
  useEffect(()=>{
    run().then((status)=>{
      if(status){
        setIsRenew(true)
      }
    })
  }, [])
  return (isRenew) ? (
    <>
      <SotongRouter />
    </>
  ) : null;
}

export default App;
