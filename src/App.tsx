import React, {useEffect} from 'react';
import './App.css';
import Typewriter from "./components/Typewriter";

function App() {
    useEffect(()=>{
        fetch('/api/list')
    },[])
  return (
    <div className="App">
        腾讯云推送测试155
    </div>
  );
}

export default App;
