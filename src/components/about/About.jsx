import "./about.css";

export function About() {
  return (
    <div className="about">
      <video
        src="videos/code.mp4"
        autoPlay
        loop
        muted
        className="video"
      ></video>

      <h1 className="objective">Objective</h1>
        <div className="center">
        <p className="objective-line">
        To leverage my expertise in full-stack development to transform innovative ideas into scalable, high-performance, and user-centric web applications      </p>
        </div>
        <div className="img-parent">
            <img src="./images/javascript.png" alt="javascript" />
            <img src="./images/typescript.png" alt="javascript" />
            <img src="./images/react.png" alt="javascript" />
            <img src="./images/jquery.png" alt="javascript" />
            <img src="./images/mysql.png" alt="javascript" />



          
        </div>
    </div>
  );
}
