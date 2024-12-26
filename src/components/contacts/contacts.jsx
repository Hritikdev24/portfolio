import { useState } from "react";
import "./contacs.css";
import dayjs from "dayjs";
import { Element } from "react-scroll";

import { TextField, Button, Box, Typography } from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2";
export function Contacts() {
  const [data, setData] = useState({
    userName: "",
    email: "",
    message: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (!data.userName || !data.email || !data.message) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All fields are compulsory!",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid email address!",
      });
      return;
    }

    Swal.fire({
      title: "Your message is sending...",
      html: "I will contact you. <b>Thank you!</b>",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    data.date=dayjs().format('YYYY-MM-DD HH:mm:ss A')
  
    axios
      .post("http://localhost:9090/message", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        if (res.status===200) {
         
        

          Swal.fire({
            title:`  I Got Your Mail ,${data.userName}`,
            icon: "success",
            draggable:false
          });

          setData({
            userName:"",
            email:"",
            message:""
          })
        }
      })
      .catch((err) => {
        const errorMessage = err.response
          ? err.response.data.message
          : "Network Error";
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
        });
      });
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
  return (
<Element name="contact">
<div className="contact-contact">
      <div className="contacs-main">
        <form className="form" method="post">
          <h1 className="form-title">Contact Me</h1>
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
              Email
            </label>
            <div>
              <input
                type="text"
                name="email"
                id=""
                placeholder="Enter Your Email"
                className="input"
                onChange={handleData}
                value={data.email}
              />
            </div>
          </div>
          <div className="input-field">
            <label htmlFor="message" className="label">
              Message
            </label>
            <textarea
              name="message"
              id=""
              placeholder="Type Your Message"
              className="input"
              onChange={handleData}
              value={data.message}
            ></textarea>
          </div>
          <div className="input-field form-input-btn">
            <button className="form-btn blue" onClick={handleSubmit}>
              submit
            </button>
            <button className="form-btn red" onClick={handleCancle}>
              cancel
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
      <h1 className="copy">
        <marquee behavior="scroll" direction="right" scrollamount="20">
          @hritikdev24@gmail.com
        </marquee>
      </h1>
    </div>

</Element>
  );
}
