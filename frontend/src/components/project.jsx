import Navbar from "./navbar";
import Sidebar from "./sidebar";
import portflio_img from "../assets/portfolio_img.png";
import VjSiddhu_Website from "../assets/vjsiddhu.png";
import Landing_page from "../assets/landingpage.png";
import App_Store from "../assets/appStore.png";
import Event_Managment from "../assets/eventmanage_img.png";
import dashboard from "../assets/Dashboard.png";
import VideoStreaming_Website from "../assets/VideoStreaming.png";
import Footer from "./footer";
import govreport from "../assets/govreport.png";
import younder from "../assets/younder.png";
import theBusStand from "../assets/thebusstand.png"
import ePayroll from "../assets/epayroll.png"
import webScraping from "../assets/webscraping.png"

// https://superb-fairy-f33f55.netlify.app/


function Project() {
  const projects = [
    { name: "GovReports Dashboard", link: "https://courageous-marigold-e18987.netlify.app/", img: govreport },

    { name: "Portfolio", link: "/", img: portflio_img },
    {
      name: "Vj Siddhu Website",
      link: "https://rococo-truffle-a30132.netlify.app/",
      img: VjSiddhu_Website,
    },
    {
      name: "Landing Page UI",
      link: "https://mellifluous-ganache-012dd0.netlify.app/",
      img: Landing_page,
    },
    {
      name: "App Store",
      link: "https://glittering-pika-6cfd40.netlify.app/",
      img: App_Store,
    },
    {
      name: "Event Management",
      link: "https://lovely-blini-5b9ed3.netlify.app/",
      img: Event_Managment,
    }, {
      name: "Dashboard",
      link: "https://superb-fairy-f33f55.netlify.app/",
      img: younder,
    },
    { name: "Simple Dashboard", img: dashboard },
    { name: "Video Streaming Website", img: VideoStreaming_Website },
  ];

  const professional_projects = [
    {
      name: "thebusstand.com - B2C",
      link: "https://thebusstand.com/",
      img: theBusStand,
      tools: ["Node js , Express js , Postgres sql"],
      status: "Live (Production)",
      about: "TheBusStand.com is a complete bus booking platform where users can search buses, book tickets, cancel bookings, download tickets, and track schedules in real time.",
      responsibilty:
        <ul>
          <li>⭐ Built and maintained core production API endpoints</li>
          <li>⭐ Implemented structured global error handling & centralized global functions</li>
          <li>⭐ Created centralized logger for debugging and monitoring</li>
          <li>⭐ Designed and optimized database queries and schema in PostgreSQL</li>
          <li>⭐ Implemented PDF ticket + email + WhatsApp message automation</li>
          <li>⭐ Worked on performance optimization of high-traffic APIs</li>
        </ul>

    },
    {
      name: "HR E-payroll software - B2B + SaaS",
      link: "#",
      img: ePayroll,
      tools: ["Node js , Express js , Postgres sql"],
      status: "About to Go Live (Production Stage)",
      about: "ePayroll is a cloud-based payroll automation application built to handle salary processing, PF/ESI computations, attendance management, leaves, and payslip generation for companies.",
      responsibilty:
        <ul>
          <li>⭐ Developed the entire backend from scratch</li>

          <li>⭐ Implemented layer-based architecture with class-based API controllers</li>

          <li>⭐ Built complex salary calculation logic & attendance + leave handling</li>

          <li>⭐ Developed automatic payslip generation and export</li>

          <li>⭐ Implemented global error handler with structured logger</li>

          <li>⭐ Ensured high data security and role-based access</li>
        </ul>
    },
    {
      name: "Web Scraping Application",
      link: "#",
      img: webScraping,
      tools: ["Node js , Express js , Postgres sql ,Node-selenium"],
      status: "Completed",
      about: "A smart eCommerce scraping and analytics system that automatically collects product data and pricing from online marketplaces and analyzes trends for reporting.",
      responsibilty:
        <ul>
          <li>⭐ Developed the whole project from scratch</li>

          <li>⭐ Used Node.js + Selenium to scrape multiple product pages dynamically</li>

          <li>⭐ Wrote strong handlers to skip error products and avoid scraper break</li>

          <li>⭐ Stored data in PostgreSQL for reporting & analytics</li>

          <li>⭐ Implemented logic to analyze price, rating, reviews, and product variations</li>
        </ul>

    }
  ]

  return (
    <div
      className="bg-gray-900 pb-10 px-5 md:px-8 lg:px-5 xl:px-8 py-5"
    >
      <div
        className="lg:flex gap-4 w-full container-box bg-gray-900"
      >
        <div
          className="profile-block w-full lg:w-1/4 my-5 rounded-3xl"
        >
          <Sidebar />
        </div>
        <div
          className="content-block w-full lg:w-3/4 bg-black text-white my-5 sm:mx-3 rounded-3xl"
        >
          <Navbar />

          <div className="mx-10 my-5 text-center">
            <h2 className="text-sm md:text-2xl font-bold font-serif">
              🚀 Real-World Production Projects
              <hr className="md:w-72 h-0.5 opacity-75 mx-auto my-1 rounded-bl-full rounded-tr-full bg-orange-500" />
            </h2>
          </div>
          <div className="w-full mt-10">
            {professional_projects.map((project) => {
              return (
                <div>
                  <div className="xl:flex justify-center items-center w-full px-1 md:px-10 lg:px-14 gap-5 xl:gap-12 mt-10">
                    <div className="mx-auto xl:mx-0 w-5/6 md:w-4/6 xl:w-2/6 m-10 border-4 border-yellow-600 border-dashed rounded-xl hover:shadow-[0_0_20px_yellow] transition duration-500 mb-2">
                      <img
                        src={project.img}
                        alt={project.name}
                        className="
                            rounded-xl
                            h-52
                            xl:h-full
                            w-full  
                            p-3
                          "
                      />
                    </div>
                    <div className="xl:w-4/6 mx-8 xl:mx-0 text-sm md:text-base">
                      <div className="font-bold text-lg md:text-3xl text-yellow-500 text-center xl:text-left mb-2">
                        {project.name}
                      </div>


                      <ul className="space-y-1">
                        <li>
                          <b
                            className="
                                font-bold 
                                text-yellow-400
                                ">Role :
                          </b>
                          <span className="">
                            Backend Developer
                          </span>
                        </li>

                        <li>
                          <b className="
                          font-bold 
                          text-yellow-400"
                          >Status :
                          </b>
                          <span className="">
                            {project.status}
                          </span>
                        </li>

                        <li className="
                        flex gap-2 
                        items-start
                        
                        ">
                          <b className="
                          inline 
                          font-bold  
                          text-yellow-400"
                          >About:
                          </b>
                          <span className="inline"> {project.about}</span>
                        </li>

                        <li><b className="
                        font-bold  
                        text-yellow-400"
                        >Tech Stack Used :
                        </b><span className=""
                        > {project.tools}
                          </span>
                        </li>

                        <li>
                          <b className="font-bold text-yellow-400">Responsibilities :</b>
                          <div className="pl-6 md:pl-14">
                            {project.responsibilty}
                          </div>

                        </li>


                      </ul>
                    </div>
                  </div>
                  <hr className="mt-10 mx-20 opacity-25" />
                </div>
              )
            })}
          </div>
          {/* 
          <hr
            className="mx-20 my-14 h-1 rounded-bl-full rounded-tr-full bg-orange-900"
          /> */}

          <div className="mx-10 my-10 text-center">
            <h2 className="text-sm md:text-2xl  font-bold font-serif">
              🔧 Experimental / Self-Learning Projects
              <hr className="md:w-72 opacity-75 h-0.5 mx-auto my-1 rounded-bl-full rounded-tr-full bg-orange-500" />
            </h2>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 lg:gap-y-8 my-10 md:pt-10 lg:pt-0 pb-16 px-2 w-full"
          >
            {projects.map((project) => (
              <div
                key={project.name}
                className="text-center w-full h-60 lg:h-60 lg:w-80 xl:h-full xl:w-full px-10 md:pt-2 md:px-5 xl:px-20 xl:pt-5 group"
              >
                <a
                  href={project.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-row justify-center items-center"
                >
                  <img
                    src={project.img}
                    alt={project.name}
                    className="
                      project-lii 
                      border-4
                      border-yellow-600
                      border-dashed
                      p-2
                      project-item 
                      rounded-3xl 
                      h-40
                      lg:h-40
                      xl:h-64
                      md:w-80
                      lg:w-full
                      xl:w-full
                      mx-auto
                      lg:mx-2
                      xl:mx-0
                      xl:my-1
                      group-hover:shadow-[0_0_20px_yellow]
                      transition
                      duration-500
                    "
                  />
                  <div
                    className="
                      my-3
                      xl:my-5
                      sm:my-7
                      font-bold
                      text-xl
                      sm:text-2xl
                      project_name                   
                      transition-all
                      duration-700
 
                      group-hover:text-3xl
                      group-hover:text-yellow-500
                      

                    "
                  >
                    {project.name}
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Project;
