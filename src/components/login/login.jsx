import { useEffect, useState } from "react";
import "./login.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
export function Login() {
  const [cookies, setCookie, removeCookie] = useCookies();

  const navigation = useNavigate();
  const [data, setData] = useState({
    userName:"",
    password:"",
  });
  function handleSubmit(e) {
    e.preventDefault();
  
      const { userName, password } = data;
      
      if (userName=="hritik"  && password=="Hritik@11") {
        Swal.fire({
          title: "Your  Login Plase Wait...",
          html: "Hritik Only You Have Access To It",
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
          },
        });
        setData({
            userName:"",
            password:""
        })
        
        setCookie("name", "Hritik");
        navigation("/info");
      } else {
      
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please Enter Valid Creadential !",
        });
      }
 
  }

  function handleCancle(e) {
    e.preventDefault();
    Swal.fire({
      title: "What happened?",
      text: "I will solve your tech problem.",
      icon: "question",
    });
  }

  function handleData(e) {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  }


useEffect(()=>{

     if(cookies.login!=true){
             navigation("/");
     }
},[cookies])

  return (
    <div className="contact-contact">

      <div className="contacs-main">
        <form className="form">
          <h1 className="form-title">Login</h1>
          <div className="input-field">
            <label htmlFor="userName" className="label">
              userName
            </label>
            <div>
              <input
                type="text"
                name="userName"
                id=""
                placeholder="Enter Your Name"
                className="input"
                onChange={handleData}
                value={data.userName}
              />
            </div>
          </div>
          <div className="input-field">
            <label htmlFor="userName" className="label">
              Password
            </label>
            <div>
              <input
                type="password"
                name="password"
                id=""
                placeholder="Enter Your password"
                className="input"
                onChange={handleData}
                value={data.password}
              />
            </div>
          </div>

          <div className="input-field form-input-btn">
            <button className="form-btn blue" onClick={handleSubmit}>
              Login
            </button>
            <button className="form-btn red" onClick={handleCancle}>
              Cancle
            </button>
          </div>
          <div className="social-media">
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
        </form>
      </div>
      
    </div>
  );
}
