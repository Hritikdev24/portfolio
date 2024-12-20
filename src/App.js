

import { Navbar } from './components/Nabar/Navbar';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Education } from './components/education/Education';
import { Skill } from './components/skills/skill';
import { Project } from './components/project/project';
import { Contacts } from './components/contacts/contacts';
import { Login } from './components/login/login';
import { Info } from './components/info/info';
import{Route,Routes} from "react-router-dom"
function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/login" element={<Login/>}></Route>
         <Route path="/info" element={<Info/>}></Route>
      </Routes>
   <Navbar/>
   <Hero/>
   <About/>
   <Education/>
   <Skill/>
   <Project/>
   <Contacts/>

    </div>
  );
}

export default App;
