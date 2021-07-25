import './App.css';
import SotongRouter from "./router"
import run from "./init/start"
import { React,useEffect } from 'react';


function App() {
  useEffect(()=>{
    run()
  }, [])
  return (
    <>
      <SotongRouter />
    </>
  );
}

export default App;
