/* eslint-disable */
import {useEffect, useRef, useState} from "react";

export  default  ()=>{
    const [text,setText]=useState('asdasdasasd')

    return <div>
        <Pret text={text}/>
        <button onClick={()=>{
            setText("DasadDFfFFSDFD")
        }}>click</button>
    </div>
}
interface  PretProps{
    text:string
}
function usePrevious(value:string) {
    const ref = useRef('');
    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
}

function  Pret(props:PretProps){
    const {text} =props
    const prevTextRef = usePrevious(text)
    const [index,setIndex]=useState(0)
    const [output,setOutput]=useState('')
    useEffect(()=>{
        if(prevTextRef!==text)setIndex(0)
        const timer =   setTimeout(()=>{
            if(index<text.length){
                setOutput(preText=>preText+text.charAt(index))
                setIndex(index+1)
            }
        },50)
        return ()=>clearTimeout(timer)
    },[index,text,output])
    return <div>{output}</div>
}