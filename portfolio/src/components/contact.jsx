import React, { useState } from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Footer from './footer';

const Contact = () => {


  const [formData, setFormData] = useState({
    name:'',email:'',message:''
  })

  const [status,setStatus] = useState()

  const handleChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("Sending...")

    try{
      const response = await fetch(`https://${process.env.HOST}/api/send-mail`,
        {
          method:"POST",
          body:JSON.stringify(formData),
          headers:{
            'Content-Type':'application/json'
          }
        }
      )

      if(response.ok){
        setStatus("Message sent successfully!")
      }else{
        const result = await response.json();
        setStatus(`Error: ${result.message}`);
      }
      setTimeout(()=>{
        setFormData({
          name:'',
          email:'',
          message:''
        })
        setStatus("")
      },4000)
    }catch(err){
      setStatus("Error sending message.")
    }
  }

  return (
    <div className="bg-gray-900 pb-10 px-8 lg:px-4 xl:px-8 py-5">
      <div className="container-box lg:flex w-full bg-gray-900">
        <div className="
          profile-block 
          w-full 
          lg:w-1/4 
          my-5 
          mx-3 
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
          mx-3 
          rounded-3xl
        ">
          <Navbar />
          <div className="mr-20 ml-5 mt-10 md:pt-8 pt-3 sm:pt-0">
            <form onSubmit={handleSubmit}>
              <table className="w-full mx-5 md:mx-0 ">
                <tbody>
                  <tr className=''>
                    <th className="pt-5 pr-10 md:pr-0 text-left md:text-center text-white md:text-xl font-bold">Name</th>
                    <td>
                      <input
                        type="text"
                        name="name"
                        className="
                          w-full 
                          h-8
                          md:h-10 
                          rounded-xl 
                          focus:ring-4 
                          focus:outline-dashed 
                          border-black 
                          focus:ring-yellow-400 
                          p-2 
                          mt-3
                        "
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th className="pt-5 text-left md:text-center text-white font-bold md:text-xl">Email</th>
                    <td>
                      <input
                        type="email"
                        name="email"
                        className="
                          w-full 
                          h-8
                          md:h-10

                          rounded-xl 
                          focus:ring-4 
                          focus:outline-dashed 
                          border-black 
                          focus:ring-yellow-400 
                          p-2 
                          mt-3
                        "
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th className="pt-5 text-left md:text-center text-white font-bold md:text-xl">Message</th>
                    <td>
                      <textarea
                        name="message"
                        className="
                          w-full 
                          md:h-24 
                          rounded-xl 
                          text-black 
                          focus:ring-4 
                          focus:outline-dashed 
                          border-black 
                          focus:ring-yellow-400 
                          p-2 
                          mt-3
                        "
                        placeholder="Type something ..."
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2" className="pt-5 text-center">
                      <button
                        type="submit"
                        className="
                          bg-yellow-500 
                          text-black 
                           py-2 
                          px-4 
                          rounded-full 
                          hover:bg-yellow-950
                          active:bg-yellow-200 
                          active:text-black
                          hover:shadow-[0_2px_8px_yellow]
                          active:translate-y-1
                          hover:text-white
                          transition 
                          ease-in-out 
                          duration-300
                          text-xl
                          font-bold
                        "
                      >
                        Send Message
                      </button>
                      

                      


                      
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
            <p className="text-center text-white mt-4">{status}</p>
          </div>
          <div className=" p-8 md:p-20 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198100.7420830243!2d76.80241706882452!3d11.014261489796738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e1!3m2!1sen!2sin!4v1736787864425!5m2!1sen!2sin"
              width="100%"
               
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-3xl h-80 xl:h-96"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps location"
            ></iframe>
          </div>
        </div>
      </div>




      
      <Footer />
    </div>
  );
};

export default Contact;
