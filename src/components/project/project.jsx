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
            <a href="javascrip:void()">To See</a>
          </button>
          <img src="" alt="" />
          <h1 className="project-title">Video Library Management System</h1>
          <div>
            <div className="project-motive">Motive:</div>
            <p className="project-description">
              The project aims to provide a user-friendly interface for users to
              access, manage, and organize videos efficiently while offering
              admins a powerful backend to control the system. It can serve as a
              foundational platform for a more complex video streaming service
              or a video rental system.
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
          <h1 className="project-title">eCommerce Website</h1>
          <div>
            <div className="project-motive">Motive:</div>
            <p className="project-description">
              The primary motive behind developing the eCommerce website is to
              create a seamless and userfriendly online shopping experience that
              connects consumers with a diverse range of products. By leveraging
              modern design principles and advanced technology, the project aims
              to enhance accessibility, improve customer engagement, and
              facilitate secure transactions. Ultimately, this platform seeks to
              empower both buyers and sellers by providing a robust marketplace
              that fosters growth, innovation, and customer satisfaction.
            </p>
            <div className="project-tech">
              <span className="tech">Frontend Tech:</span>
              <span>HTML,Css,Bootstrap,Sass,React</span>
            </div>
            <div className="project-tech">
              <span className="tech">Backend Tech:</span>
              <span>Node,Express,Multer,Mysql,NodeMailer</span>
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
              parking experience for users by eliminating the need for physical
              cash transactions. By integrating mobile payment solutions and
              realtime parking availability updates, the system seeks to enhance
              convenience, reduce wait times, and improve overall user
              satisfaction. Additionally, the system aims to provide parking
              operators with efficient management tools, enabling better
              resource allocation and revenue tracking.
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
