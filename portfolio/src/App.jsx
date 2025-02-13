import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Resume from "./components/resume";
import Contact from "./components/contact";
import Project from "./components/project";
import Sidebar from './components/sidebar';
import Footer from "./components/footer";
import Education from "./components/Education";

function App() {
  

  return (
<>
 <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/navbar' element={<Navbar />} />
        <Route path="/resume" element={<Resume />} />
        <Route path='/contact' element = {<Contact />} />
        <Route path='/project' element ={<Project />} />
        <Route path='/sidebar' element={<Sidebar />} />
        <Route path="/footer" element={<Footer />} />
        <Route path='/education' element={<Education />} />
     </Routes>
</BrowserRouter>
</>
  );
}

export default App;
