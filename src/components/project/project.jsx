import "./project.css";
import { Element } from "react-scroll";
export function Project() {
  return (
    <Element name="project">
      <div className="project">
        <h1 className="project-main">Projects</h1>
        <div className="project-one">
          <div className="project-data">
            <button className="button-1">
              <i class="bi bi-eye-fill eye"></i>
              <a href="https://haweli-gmlf.onrender.com/">To See</a>
            </button>
            <img src="" alt="" />
            <h1 className="project-title">FoodFleet 🚛</h1>
            <div>
              <div className="project-motive">Motive:</div>
              <p className="project-description">
                The motive of the food delivery app project is to provide a
                seamless and convenient platform for users to explore and order
                food while empowering local businesses to expand their reach. It
                aims to enhance customer experiences through real-time tracking,
                personalized recommendations, and secure payments
              </p>
              <div className="project-tech">
                <span className="tech">Frontend Tech:</span>
                <span>HTML,Css,Bootstrap,Sass,React</span>
              </div>
              <div className="project-tech">
                <span className="tech">Backend Tech:</span>
                <span>Node,Express,Multer,MongoDb,NodeMailer</span>
              </div>
            </div>
          </div>

          <div className="project-data">
            <button className="button-1">
              <i class="bi bi-eye-fill eye"></i>
              <a href="https://institute-management-app-1.onrender.com/">To See</a>
            </button>
            <img src="" alt="" />
            <h1 className="project-title">SmartInstitute 🤖</h1>
            <div>
              <div className="project-motive">Motive:</div>
              <p className="project-description">
                The motive of the Institute Management System project is to
                provide institutes with a centralized platform to efficiently
                manage and organize their data, such as total courses, student
                records, staff details, and administrative tasks. It aims to
                reduce manual effort, enhance data accuracy, and enable
                real-time insights for better decision-making, ultimately
                simplifying the management of institutional operations.
              </p>
              <div className="project-tech">
                <span className="tech">Frontend Tech:</span>
                <span>HTML,Css,Bootstrap,Sass,React</span>
              </div>
              <div className="project-tech">
                <span className="tech">Backend Tech:</span>
                <span>Node,Express,Multer,MongoDb,NodeMailer</span>
              </div>
            </div>
          </div>

          <div className="project-data">
            <button className="button-1">
              <i class="bi bi-eye-fill eye"></i>
              <a href="javascrip:void()">To See</a>
            </button>
            <img src="" alt="" />
            <h1 className="project-title">Cashless Parking System</h1>
            <div>
              <div className="project-motive">Motive:</div>
              <p className="project-description">
                The aim of the Cashless Parking System is to streamline the
                parking experience for users by eliminating the need for
                physical cash transactions. By integrating mobile payment
                solutions and realtime parking availability updates, the system
                seeks to enhance convenience, reduce wait times, and improve
                overall user satisfaction. Additionally, the system aims to
                provide parking operators with efficient management tools,
                enabling better resource allocation and revenue tracking.
              </p>
              <div className="project-tech">
                <span className="tech">Frontend Tech:</span>
                <span>HTML,Css,Bootstrap,Sass,React</span>
              </div>
              <div className="project-tech">
                <span className="tech">Backend Tech:</span>
                <span>Node,Express,Multer,MongoDb,NodeMailer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
