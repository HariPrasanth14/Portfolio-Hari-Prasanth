import React from 'react';
import Sidebar from './sidebar';
import Navbar from './navbar';
import rvs_logo from '../assets/Rvs.png'
import stMichaels from '../assets/st-michaels.png'
import govt_logo from '../assets/govt_logo.png'
import JavaScript_certificate from '../assets/Js_certificate.png'
import ReactBasic_certificate from '../assets/React_basic.jpeg'
import ReactAdvance_certificate from '../assets/React_advanced.jpeg'
import mysql_certificate from '../assets/mysqlCertificate.png'
import nbz_logo from '../assets/nbzlogo.png'
import kgisl from '../assets/kgisl.jpg';
import Footer from './footer';

const Education = () => {
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
                        <h1 className='text-white text-xl md:text-3xl font-serif'>Exprience</h1>
                        <hr className='bg-yellow-500 h-1 w-16 rounded-bl-full rounded-tr-full'/>

                        <div className=' border-4 
                                            border-dashed 
                                            rounded-3xl 
                                            md:mx-10 
                                            my-7 
                                            gap-9 
                                            p-5
                                            hover:cursor-pointer
                                            hover:-translate-y-1
                                            hover:duration-300
                                            md:flex
                                            items-center
                                            hover:shadow-[0_0_20px_gray]
                                            '>
                            <div>
                                <img src={nbz_logo} className="h-24
                                            bg-gray-100
                                            rounded-xl
                                            shadow-[0_0_20px_brown]
                                            mb-5
                                            md:mb-auto
                                            mx-auto
                                            w-28
                                            lg:w-24
                                        " alt="logo" />
                            </div>

                            <div className='text-center md:text-left'>
                                <div className='text-base lg:text-2xl mb-2'>Backend Developer at Nubiznez pvt ltd</div>

                                <div className='mb-2'>
                                    
                                    <div className="text-white text-base tracking-wider "> 
                                        <span className=''> Tools Working With </span> 

                                        <span className='text-green-400'> NodeJs</span>,
                                        <span className='text-yellow-400'> ExpressJs</span>,
                                        <span className='text-blue-400'> PostgresSql </span>,
                                        <span className='text-red-500'> MSSql</span>
                                    </div>
                                </div>

                                <div className=''>
                                     <div className="text-white text-base lg:text-base"> Duration : April 2025 to Present</div>
                                </div>
                            </div>
                        </div>

                        {/*  */}
                            <div className='
                                            md:flex 
                                            border-4 
                                            border-dashed 
                                            rounded-3xl 
                                            md:mx-10 
                                            my-7 
                                            gap-9 
                                            p-5
                                            hover:cursor-pointer
                                            hover:-translate-y-1
                                            hover:duration-300
                                            items-center
                                            hover:shadow-[0_0_20px_gray]
                                            '>
                            <div>
                                <img src={kgisl} className="h-24
                                            bg-gray-100
                                            rounded-full
                                            shadow-[0_0_20px_brown]
                                            w-48
                                            lg:w-32
                                            mx-auto
                                            mb-5
                                            md:mb-auto
                                        " alt="logo" />
                            </div>

                            <div className='text-center md:text-left'>
                                <div className='text-base lg:text-2xl mb-2'>Mern Stack development Trainee <br /> KGISL Micro College - cbe</div>

                                     <div className='mb-2'>
                                        <span className='text-base'>Tools worked with</span>

                                         <span className="text-yellow-200 text-bas  tracking-wider">
                                        <span></span>
                                        <span className='text-orange-400'> HTML</span>,
                                        <span className='text-blue-300'> CSS</span>,
                                        <span className='text-purple-400'> Bootstrap</span>,
                                        <span className='text-blue-500'>Tailwind CSS</span>,
                                        <span className='text-yellow-400'> JavaScript</span>,
                                        <span className='text-blue-700'> ReactJs</span>,
                                        <span className='text-green-400'> NodeJs</span>,
                                        <span className='text-yellow-400'> ExpressJs</span>,
                                        <span className='text-green-500'> Mongo Db</span>

                                       
                                    </span> 
                                     </div>
 
                                <div className=''>
                                     <div className="text-white text-base lg:text-base  ">Duration : June 2024 to May 2025</div>
                                </div>
                            </div>
                        </div>
                        {/*  */}

                        <h1 className="
                            mt-5
                            font-bold
                            text-xl
                            md:text-3xl
                            font-serif
                        ">
                            Academic Education
                        </h1>
                        <hr className="
                            w-16
                            h-1
                            mt-1
                            mb-16
                            rounded-bl-full
                            rounded-tr-full
                            bg-yellow-500
                        " />

                        <div>
                            {[ 
                                { name: 'RVS College Of Arts And Science, Coimbatore', edu: 'Bachelor of Commerce in Computer Applications', logo: rvs_logo, year: '2021 - 2024' },
                                { name: 'St. Michaels Higher Secondary School', edu: 'Higher Secondary Education', logo: stMichaels, year: '2019 - 2021' },
                                { name: 'Govt Higher Secondary School', edu: 'Secondary Education', logo: govt_logo, year: '2019' },
                                
                            ].map((educate, index) => (
                                <div key={index} className="
                                                        md:flex
                                                        md:mx-10
                                                        my-7
                                                        items-center
                                                        gap-9
                                                        p-5
                                                        rounded-3xl
                                                        border-4
                                                        border-dashed
                                                        hover:cursor-pointer
                                                        hover:-translate-y-1
                                                        hover:duration-300
                                                        hover:shadow-[0_0_20px_gray]
                                                        
                                                     ">
                                    <div>
                                        <img src={educate.logo} className="
                                            h-24
                                            bg-white
                                            shadow-[0_0_20px_brown]
                                            rounded-full
                                            mx-auto
                                            mb-5
                                            md:mb-auto
                                            
                                            
                                        " alt="logo"/>
                                    </div>
                                    <div className="space-y-3 text-center md:text-left">
                                        <div className="text-base lg:text-2xl">{educate.edu}</div>
                                        <div className="text-yellow-200 text-sm lg:text-base">{educate.year}</div>
                                        <div className="text-yellow-500 text-sm lg:text-base">{educate.name}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="
                        content-area
                        m-2
                        md:m-5
                        p-5
                    ">
                        <h1 className="
                            mt-5
                            font-bold
                            text-xl
                            md:text-3xl
                            font-serif
                        ">
                            Professional Courses & Certifications
                        </h1>
                        <hr className="
                            w-16
                            h-1
                            mt-1
                            mb-12
                            rounded-bl-full
                            rounded-tr-full
                            bg-yellow-500
                        " />
                        <div className="
                            grid
                            grid-cols-1
                            md:grid-cols-2
                            lg:grid-cols-2
                            gap-8
                        ">
                            {[ 
                                { course_name: 'Java Script', from: 'Coursera', course_logo: JavaScript_certificate },
                                { course_name: 'React Fundamentals', from: 'Coursera', course_logo: ReactBasic_certificate },
                                { course_name: 'React Advanced', from: 'Coursera', course_logo: ReactAdvance_certificate },
                                { course_name: 'DBMS & MySQL', from: 'LetsUpgrade', course_logo: mysql_certificate },
                            ].map((course, index) => (
                                <div key={index} className="
                                    lg:mb-16
                                    w-full
                                    group
                                    text-center
                                ">
                                    <div>
                                        <img 
                                            src={course.course_logo} 
                                            className="
                                                border-4
                                                border-yellow-600
                                                border-dashed
                                                p-2
                                                project-item
                                                rounded-3xl
                                                h-50
                                                md:h-60
                                                xl:h-72
                                                md:w-80
                                                lg:w-100
                                                xl:w-96
                                                mx-auto
                                            
                                                 
                                                group-hover:shadow-[0_3px_13px_gray]
                                                group-hover:cursor-pointer
                                                transition
                                                duration-500
                                            " 
                                            alt="certificate"
                                        />
                                    </div>

                                    <div className="text-center">
                                        <div className="
                                            mt-3
                                            xl:mt-5
                                            sm:mt-7
                                            font-bold
                                            text-xl
                                            sm:text-2xl
                                            project_name
                                            transition-all
                                            duration-700
                                            group-hover:text-3xl
                                            group-hover:cursor-pointer
                                            text-center
                                            group-hover:text-yellow-500
                                        ">
                                            {course.course_name}
                                        </div>
                                        <div className="
                                            my-3
                                            sm:my-7
                                            md:my-1
                                            xl:my-1
                                            font-bold
                                            text-xl
                                            sm:text-2xl
                                            xl:text-xl
                                            text-yellow-500
                                            project_name
                                            transition-all
                                            duration-700
                                            group-hover:text-xl
                                            group-hover:cursor-pointer

                                            group-hover:text-white
                                        ">
                                            {course.from}
                                        </div>
                                    </div>



                                        
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Education;
