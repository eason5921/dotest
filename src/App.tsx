import React, {useEffect} from 'react';
import './App.css';
import Typewriter from "./components/Typewriter";

function App() {
    useEffect(()=>{
        fetch('http://www.dengpu-dev.site:3002/')
    },[])
  return (
    <div className="App">
        腾讯云推送测试9999
    </div>
  );
}

export default App;
