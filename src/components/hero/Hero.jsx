import { useEffect, useState, useRef } from "react";
import "./Hero.css";
import dayjs from "dayjs";
export function Hero() {
  const [time, setTime] = useState("");
  const ref = useRef(null);
  const showRef=useRef(null);
 
  useEffect(() => {
    ref.current = setInterval(() => {
      setTime(dayjs().format("h:mm:ss"));
    }, 1000);
   
    showRef.current=setTime(()=>{
        
    },1000)
    

    return () => {
      clearInterval(ref.current);

    };
  }, []);

  return (
    <div className="hero">
      <div>
        <span className={`date`}>{time}</span>
        <img src="./images/hritik.jpg" alt="" />
        <h1 className="headLine">
          <span>MERN Stack Developer </span>
        </h1>
        <p className="sub-headLine">
          Hi, I'm Hritik, crafting seamless web applications with MongoDB,
          Express.js, React, and Node.js."
        </p>
        <div className="hero-btn">
          <button className="contact-btn">Contact Me</button>
          <button className="resume-btn">
            {" "}
            <a href="#">Resume</a>
          </button>
        </div>
      </div>
    </div>
  );
}
