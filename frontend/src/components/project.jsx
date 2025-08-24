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
    },{
      name: "Dashboard",
      link: "https://superb-fairy-f33f55.netlify.app/",
      img: younder,
    },
    { name: "Simple Dashboard", img: dashboard },
    { name: "Video Streaming Website", img: VideoStreaming_Website },
  ];

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
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-y-8 w-full my-10 pt-10 lg:pt-0 pb-16 px-2"
          >
            {projects.map((project) => (
              <div
                key={project.name}
                className="flex-row justify-center mx-auto text-center w-80 h-60 lg:h-60 lg:w-80 xl:h-80 xl:w-full md:pt-2 md:px-5 xl:p-5 group"
              >
                <a
                  href={project.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
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
                      xl:h-60
                      md:w-80
                      lg:w-100
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
