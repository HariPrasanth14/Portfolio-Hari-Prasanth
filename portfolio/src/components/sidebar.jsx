import { FaEnvelope, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import dpImg from '../assets/dp.jpg';
import { FaLocationDot } from 'react-icons/fa6';
import { useEffect, useState } from 'react';

const ContactItem = ({ Icon, title, content, link }) => (
  <div className="flex gap-5 lg:gap-3 items-center">
    <div className="
      text-yellow-400 
      text-base lg:text-xs xl:text-base
      p-3 
      rounded-xl 
      border-yellow-100 
      shadow-[0_0_5px_rgba(255,215,0,0.7),0_0_10px_rgba(255,215,0,0.7)]
    ">
      <Icon />
    </div>
    {link ? (
      <a href={link}>
        <div>
          <h2 className="
            font-semibold 
            text-yellow-200 
            text-base lg:text-sm xl:text-base
          ">
            {title}
          </h2>
          <p className="text-sm lg:text-xs xl:text-sm">
            {content}
          </p>
        </div>
      </a>
    ) : (
      <div>
        <h2 className="
          font-semibold 
          text-yellow-200 
          text-base lg:text-sm xl:text-base
        ">
          {title}
        </h2>
        <p className="text-sm lg:text-xs xl:text-sm">
          {content}
        </p>
      </div>
    )}
  </div>
);

const Sidebar = () => {


const titles = ['Web Developer','Frontend developer']

const [index , setIndex]=useState(0)

useEffect(()=>{
  const interval = setInterval(() => {
      setIndex((prev)=>(prev+1) % titles.length)
  }, 3000);
  return ()=>clearInterval(interval)
},[])

  
  return (
    <div className="
      sidebar-component 
      flex 
      flex-col 
      items-center 
      p-8 
      text-white 
      bg-black 
      rounded-3xl 
      shadow-[0_0_8px_white]
    ">
      <img 
        src={dpImg} 
        alt="dp image" 
        className="
          rounded-3xl 
          mb-4
          shadow-[0_0_5px_1px_white]
          border
          border-black
        " 
        style={{
          height: '230px',
          width: '230px'
        }} 
      />
      
      <h1 className="
        text-center 
        my-5 
        font-bold 
        text-3xl 
        sm:text-3xl 
        md:text-3xl 
        lg:text-2xl 
        xl:text-3xl
        font-serif
      ">
        Hari Prasanth 
      </h1>

      <p className="
        text-xl 
        lg:text-base
        xl:text-xl
        text-center 
        font-semibold 
        bg-gray-900 
        rounded-2xl 
        px-4 
        py-2 
        mx-auto 
        w-fit
      ">
        <span className="text-yellow-400">&lt;</span> {titles[index]}  <span className="text-yellow-400">&#47;</span>
        <span className="text-yellow-400">&gt;</span>
      </p>
      
      <hr className="
        my-8 
        w-full 
        border-gray-400
      " />

      <div className="space-y-6">
        <ContactItem
          Icon={FaEnvelope}
          title="Email"
          content="srihariprasanth123@gmail.com"
        />
        <ContactItem
          Icon={FaPhoneAlt}
          title="Phone"
          content="9952674972"
        />
        <ContactItem
          Icon={FaLinkedin}
          title="LinkedIn"
          content="m-hari-prasanth-fsd-ev"
          link="https://www.linkedin.com/in/m-hari-prasanth-fsd-ev/"
        />
        <ContactItem
          Icon={FaLocationDot}
          title="Address"
          content="Coimbatore - 103"
          link="/contact"
        />
      </div>
    </div>
  );
};

export default Sidebar;
