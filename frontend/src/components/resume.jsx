import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Footer from "./footer";
import hari_resume from '../assets/Hari-Prasanth-M-FSD.pdf'
import resume_one from '../assets/resume-one.jpg';
import resume_two from '../assets/resume-two.jpg';
import { FaDownload } from "react-icons/fa";

function Resume() {
  return (
    <div className="bg-gray-900 pb-10 px-8 py-5">
      <div className="container-box flex-row lg:flex gap-4 w-full bg-gray-900 ">
        <div className="
          profile-block
          w-full 
          lg:w-1/4 
          my-5 
          rounded-3xl
          
        ">
          <Sidebar />
        </div>

        <div className="
          content-block 
          w-full
          lg:w-3/4 
          bg-black 
          text-white 
          my-5 
          mx-2 
          rounded-3xl
        ">
          <Navbar />

        

         
        
          

          <div className="flex-row pb-2">
            <img 
              src={resume_one} 
              alt="resume image" 

              
              className="
                          w-full
                          px-7
                          
                          
                          resume_img
                          mt-5 
                          xl:py-0
                          
                          " 
            />
             <img 
              src={resume_two} 
              alt="resume image" 

              
              className="
                          w-full
                          px-7
                          
                          
                          resume_img
                           mb-5
                          xl:py-0
                          
                          " 
            />
          

          
           <button className="bookmarkBtn 
                          mx-auto 
                          mb-7
                          
                          
           ">
          <a href={hari_resume} download='Hari-Prasanth-M-FSD.pdf' className=" flex ">
            <span className="IconContainer">
              <FaDownload className="text-black" />
              
            </span>
            <p className="text">Resume</p>
            </a>
          </button>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Resume;
