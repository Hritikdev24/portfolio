
import "./Navbar.css"



export function Navbar(){
    
    return (
        <div className="hritik">
          <header className="navBar">
             <span className="title">MERNDev</span>
             <ul className="nav-menu">
                <li>About</li>
                <li>Education</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
             </ul>
             <div className="nav-btn">Get Connect</div>
          </header>
        </div>
    )
}