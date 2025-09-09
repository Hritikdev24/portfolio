import "./Education.css";

export function Education() {
  return (
    <div className="education">
      <h1 className="education-main">Education</h1>
      <div className="timeLine">
        <div className="container clock">
          <div className="text-box left-container">
            <img src="/images/db.png" alt="" className="right-container-img" />
            <h2 className="card-title">Schooling</h2>
            <h3 className="card-subtitle">
              <a
                href="https://www.facebook.com/groups/1508297279476266/"
                target="_blanck"
              >
                D.B. Ghumare Public School,Beed
              </a>
            </h3>
            <h4 className="card-year">(2008-2018)</h4>
            <p className="card-marks">
              SSC MARKS: <span className="marks">94.40</span> %{" "}
            </p>
          </div>
        </div>

        <div className="container antiClock">
          <div className="text-box right-container">
            <img src="/images/md.png" alt="" className="left-container-img" />
            <h2 className="card-title">Junior College</h2>
            <h3 className="card-subtitle">
              <a href="https://moderncollegepune.edu.in/" target="_blanck">
                MCASC, Shivajinagar Pune-05
              </a>
            </h3>
            <h4 className="card-year">(2018-2020)</h4>
            <p className="card-marks">
              HSC MARKS: <span className="marks">79.54</span> %
            </p>
          </div>
        </div>

        <div className="container clock">
          <div className="text-box left-container">
            <img src="/images/pes.jpg" alt="" className="right-container-img" />
            <h2 className="card-title">Graduation:Bachelor of Technology</h2>
            <h3 className="card-subtitle">
              <a href="http://pescoe.ac.in/" target="_blanck">
                P.E.S College of Engineering, Aurangabad
              </a>
            </h3>
            <h4 className="card-year">(2020-2024)</h4>
            <p className="card-marks">
              CGPA: <span className="marks">8.2</span>
            </p>
          </div>
        </div>

        <div className="container antiClock">
          <div className="text-box right-container">
            <img
              src="/images/naresh.jpg"
              alt=""
              className="left-container-img"
            />
            <h2 className="card-title">Course</h2>
            <h3 className="card-subtitle">
              <a
                href="https://www.nareshit.in/course-schedule/"
                target="_blanck"
              >
                Naresh IT(MERN Stack)
              </a>
            </h3>
            <h4 className="card-year">(mar 2024-nov 2024)</h4>
          </div>
        </div>
        <div className="container clock">
          <div className="text-box left-container">
            <img
              src="/images/companyOne.jpg"
              alt=""
              className="right-container-img"
            />
            <h2 className="card-title">Working</h2>
            <h3 className="card-subtitle">
              <a
                href="https://www.ameripro-solutions.com"
                target="_blanck"
              >
                AmeriPro Solutions Pvt Ltd (India)
              </a>
            </h3>
              <p className="card-marks">
               Jr. Software Developer
            </p>
            <h4 className="card-year">(Jan 2025 – Present)</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
