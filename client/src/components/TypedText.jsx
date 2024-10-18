import React,{ useEffect,useRef } from 'react'
import Typed from 'typed.js';

  const TypedText = ({strings,speed,backSpeed,loop})=>{
    const elementRef = useRef(null);
    useEffect(()=>{
        const options = {
            strings: strings,
            typeSpeed: speed || 50,
            backSpeed: backSpeed || 25,
            loop: loop || false,
            showCursor: true,
        };
        const typed = new Typed(elementRef.current,options);

        return ()=>{
            typed.destroy();
        };
    },[strings,speed,backSpeed,loop]);
    return (
        <span ref={elementRef}/>
      )
  };

export default TypedText;