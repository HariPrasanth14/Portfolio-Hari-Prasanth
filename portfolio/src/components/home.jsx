import { FaLaptopCode, FaLightbulb, FaRobot, FaPaintBrush } from "react-icons/fa";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import html_img from "../assets/htmlicon.jpg";
import css_img from "../assets/cssicon.png";
import Boot_img from "../assets/bootstrap.png";
import tailwind_img from "../assets/tailwind.png";
import Javacript_icon from "../assets/javascript.png";
import react_icon from "../assets/react.png";
import python_icon from "../assets/python-logo.png";
import Flask_logo from "../assets/flask.png";
import mysql_img from "../assets/mysql.png";
import reduc_icon from "../assets/redux.png";
import postman_icon from "../assets/postman.png";
import github from '../assets/github.png';
import Footer from "./footer";

function Home() {
    return (
        <div className="bg-gray-900 px-8 lg:px-4 xl:px-8 py-5">

             <div className="
                container-box 
                flex-row 
                md:flex-row
                lg:flex 
                w-full 
                bg-gray-900 
                gap-6 
                lg:gap-3
                xl:gap-6
                justify-center
            ">
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
                    rounded-3xl
                "> 
                    <Navbar />
                    <div className="
                        content-area 
                        m-2 
                        md:m-5 
                        p-5
                    ">
                        <p className="
                            mt-5 
                            mb-15 
                            mx-0 
                            md:mx-5 
                            leading-relaxed 
                            text-xs 
                            md:text-base
                        ">
                            Hello!<span className="wave-hand"> 👋 </span>I’m <span className='
                                text-2xl 
                                font-serif 
                                font-bold 
                                text-yellow-400
                                ' style={{letterSpacing: '2px'}}
                            >Hari</span>, a web developer who’s passionate about turning ideas into reality through code. I specialize in both front-end and back-end development, creating responsive websites that are visually engaging and highly functional. I enjoy crafting designs that capture attention and working with databases to ensure everything runs seamlessly.
                            <br/><br/>
                            What started as a hobby quickly grew into a career I’m truly passionate about ❤️. I’m always curious and eager to learn 📚, keeping up with new technologies to sharpen my skills. My goal is simple: to create web solutions that are as functional as they are creative, making the web a better place for everyone.
                        </p>

                        <p className="
                            mt-10 
                            font-bold 
                            text-xl 
                            md:text-3xl 
                            font-serif
                        ">Technical Skills</p>
                        <hr className="
                            w-16 
                            h-1 
                            mt-1 
                            mb-5 
                            rounded-bl-full 
                            rounded-tr-full 
                            bg-yellow-500
                        " />

                        <div className="
                            
                            skills 
                            md:mx-5
                            lg:mx-5 
                            my-10 
                            md:my-14 
                            grid 
                            grid-cols-3
                            md:grid-cols-3
                            lg:grid-cols-3
                            xl:grid-cols-4 
                            gap-10 
                            text-center
                        ">
                            {[
                                { img: html_img, name: "HTML" },
                                { img: css_img, name: "CSS" },
                                { img: Boot_img, name: "Bootstrap" },
                                { img: tailwind_img, name: "Tailwind CSS" },
                                { img: Javacript_icon, name: "Java Script" },
                                { img: react_icon, name: "React" },
                                { img: python_icon, name: "Python" },
                                { img: Flask_logo, name: "Flask" },
                                { img: mysql_img, name: "MySQL" },
                                { img: reduc_icon, name: "Redux" },
                                { img: postman_icon, name: "Postman" },
                                { img: github, name: 'GitHub' }
                            ].map(skill => (
                                <div key={skill.name} className="
                                    skill-box 
                                    w-20 
                                    md:w-40
                                    p-4
                                    rounded-3xl 
                                    bg-gray-900 
                                    shadow-[0_0_5px_rgba(255,215,0,0.7),0_0_15px_rgba(255,215,0,0.7)] 
                                    transition-transform 
                                    duration-300 
                                    ease-in-out 
                                    hover:cursor-none 
                                    hover:shadow-[0_0_rgba(243, 178, 0, 0.993] 
                                    group

                                ">
                                    <img src={skill.img} className="
                                        mx-auto 
                                        transform 
                                        transition-transform 
                                        duration-300 
                                        sm:h-10
                                        md:h-16
                                        lg:h-16
                                        xl:h-auto
                                        group-hover:scale-110 
                                        group-hover:translate-y-1
                                     " alt={`${skill.name} Icon`} />
                                    <p className="
                                        mt-3 
                                        font-bold 
                                        text-xs
                                        lg:text-base
                                        font-serif
                                    ">{skill.name}</p>
                                </div>
                            ))}
                        </div>

                        <h1 className="
                            mt-5 
                            font-bold 
                            text-xl
                            md:text-3xl 
                            font-serif
                        ">What I'm Doing</h1>
                        <hr className="
                            w-16 
                            h-1 
                            mt-1 
                            mb-5 
                            rounded-bl-full 
                            rounded-tr-full 
                            bg-yellow-500
                        " />

                        <div className="
                            what-doing 
                            justify-center 
                            grid 
                            grid-cols-1
                            
                            xl:grid-cols-2
                        ">
                            {[
                                {
                                    icon: FaLaptopCode,
                                    title: "Web Development",
                                    description: "I create responsive and dynamic websites, ensuring a seamless user experience and robust functionality."
                                },
                                {
                                    icon: FaLightbulb,
                                    title: "Learning New Technology",
                                    description: "Constantly exploring new technologies to stay updated and improve my skill set in the evolving tech landscape."
                                },
                                {
                                    icon: FaRobot,
                                    title: "Exploring AI",
                                    description: "Delving into artificial intelligence to understand its capabilities and develop AI-driven solutions."
                                },
                                {
                                    icon: FaPaintBrush,
                                    title: "Drawing",
                                    description: "Engaging in drawing to relax and enhance concentration, fostering a creative mindset and a tranquil state of mind."
                                }
                            ].map((activity, index) => (
                                <div key={index} className="
                                    box 
                                    m-5 
                                    p-5 
                                    flex 
                                    gap-5 
                                    justify-center 
                                    items-center 
                                    bg-gray-900 
                                    rounded-3xl 
                                    w-100 
                                    text-center 
                                    shadow-lg 
                                    border-2 
                                    border-gray-700
                                ">
                                    <div>
                                        <activity.icon className="
                                            text-3xl 
                                            text-yellow-400
                                        " />
                                    </div>
                                    <div>
                                        <h1 className="
                                            text-start 
                                            text-sm
                                            md:text-lg 
                                            text-yellow-400
                                        ">{activity.title}</h1>
                                        <p className="
                                            text-xs
                                            md:text-sm 
                                            text-start
                                        ">{activity.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <Footer />
        </div>
    );
}

export default Home;
