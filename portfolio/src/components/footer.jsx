import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"

const Footer = ()=>{

    const List = [
        {Name:"About",links:'/'},
        {Name:"Resume",links:'/resume'},
        {Name:"Contact",links:'/contact'},
        {Name:"Projects",links:'/project'}
    ]
    
    return(
<div className="bg-black rounded-3xl content-block">
    <ul className=" text-white py-10">
        <li className="flex justify-center mb-10">
    
    {List.map(tag =>(

        <a key={tag.Name} href={tag.links} className="flex footer-li">
            <div className="mx-2 md:mx-8">{tag.Name}</div>
            </a>
    ))}
             </li>
                    <ul className="flex justify-center">
                    <li className="flex justify-center footer-li">
                        <a href="/">
                    <FaGithub className="text-3xl mx-4" />
                    </a>
                    </li>

                    <li className="flex justify-center footer-li">
                        <a href="https://www.linkedin.com/in/m-hari-prasanth-fsd-ev" target="blank">
                    <FaLinkedin className="text-3xl mx-4"/>
                        </a>
                    </li>

                    <li className="flex justify-center footer-li">
                        <a href="/contact">
                    <FaEnvelope className="text-3xl mx-4"/>
                    </a>
                    </li>

                    </ul>

                <li className="text-center bg-gray-900 py-2 mt-4">"Driven by heart, written in code, and shaped by dedication."</li>
            </ul>

</div>
    )
}

export default Footer