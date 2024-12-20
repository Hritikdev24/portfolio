import { useEffect, useState, useRef } from "react";
import "./Hero.css";
import dayjs from "dayjs";
import { Link } from "react-scroll";
export function Hero() {
  const [time, setTime] = useState("");
  const ref = useRef(null);
  const showRef=useRef(null);
  const[isIcons,setIcons]=useState(false);
 function toggleIcon(){
  setIcons(prev => !prev)
 }
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
      <i class="bi bi-x-octagon-fill social-icons" onClick={toggleIcon}></i>
      <div className={`${isIcons?"show":"hide"} connection-app`}>
            <a
              href="https://www.linkedin.com/in/hritikgangadhar9146/"
              target="_blank"
            >
              <img src="./images/linkdin.png" alt="linkdin" />
            </a>
            <a
              href="https://github.com/Hritikdev24?tab=repositories"
              target="_blank"
            >
              <img src="./images/github.png" alt="github" />
            </a>
            <a
              href="https://www.instagram.com/hritik_gangadhar"
              target="_blank"
            >
              <img src="./images/instagram.png" alt="instagram" />
            </a>
            <a
              href="https://www.facebook.com/login/rutik-gangadhar"
              target="_blank"
            >
              <img src="./images/facebook.png" alt="facebook" />
            </a>
          </div>

        <span className={`date`}>{time}</span>
        <img src="./images/hritik.jpg" alt="" className="img" />
        <h1 className="headLine">
          <span>MERN Stack Developer </span>
        </h1>
        <p className="sub-headLine">
          Hi, I'm Hritik, crafting seamless web applications with MongoDB,
          Express.js, React, and Node.js.
        </p>
        <div className="hero-btn">
          <button className="contact-btn"><Link to="contact" smooth={true} duration={1000}>Contact Me</Link></button>
          <button className="resume-btn">
           
            <a href="./resume/hritik.pdf" download={"hritik"}>Resume</a>
          </button>
        </div>
      </div>
    </div>
  );
}
