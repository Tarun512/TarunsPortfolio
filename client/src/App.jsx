import logo from './assets/images.png';
import certificateData from './certificatesData.js';
import projectsData from './projectsData.js'
import ProjectCard from './components/ProjectCard';
import CertificateCard from './components/CertificateCard';
import { useState } from 'react';
import Education from './components/Education.jsx';
import Skills from './components/Skills.jsx';
import { FaMapMarkerAlt,FaPhoneAlt,FaLinkedinIn,FaWhatsapp } from "react-icons/fa"
import { MdEmail } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import TypedText from './components/TypedText.jsx';
import { ImCross } from "react-icons/im";
function App() {
  const [item,setItem] = useState('education');
  const [isOpen,setIsOpen] = useState(false);
  const handleItemClick = (e)=>{
    const {id} = e.target
    setItem(id);
  }
  const toggleMenu = (e)=>{
    setIsOpen(!isOpen);
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "7582ede0-4feb-4a39-a50b-2dd54d0264fb");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <>
      <header className='fixed w-full top-0 z-50'>
      <nav className="flex justify-between items-center bg-blue-600 p-4 shadow-lg">
        <div className="text-white text-xl font-bold">
          <span>Tarun's </span>
          <span className="text-yellow-400">Portfolio</span>
        </div>

        {/* Hamburger Menu for small screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? (
              <ImCross size={25} color='black' />
            ) : (
              <GiHamburgerMenu size={25} />
            )}
          </button>
        </div>

        {/* Nav Links - inline for md and above, dropdown for small screens */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          <ul className="flex space-x-4">
            <li className="group relative">
              <a href="#home" className="block py-2 hover:underline hover:text-yellow-400 transition duration-300 ease-in-out">
                Home
              </a>
            </li>
            <li><a href="#about" className="block py-2 hover:underline hover:text-yellow-400 transition duration-300 ease-in-out">About Me</a></li>
            <li><a href="#projects" className="block py-2 hover:underline hover:text-yellow-400 transition duration-300 ease-in-out">Projects</a></li>
            <li><a href="#certifications" className="block py-2 hover:underline hover:text-yellow-400 transition duration-300 ease-in-out">Certifications</a></li>
            <li><a href="#contact" className="block py-2 hover:underline hover:text-yellow-400 transition duration-300 ease-in-out">Contact Me</a></li>
          </ul>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden absolute bg-blue-600 w-full top-full left-0 p-4 shadow-lg`}>
          <ul className="space-y-4">
            <li><a href="#home" className="block py-2 hover:underline hover:text-yellow-400 transition duration-300 ease-in-out">Home</a></li>
            <li><a href="#about" className="block py-2 hover:underline hover:text-yellow-400 transition duration-300 ease-in-out">About Me</a></li>
            <li><a href="#projects" className="block py-2 hover:underline hover:text-yellow-400 transition duration-300 ease-in-out">Projects</a></li>
            <li><a href="#certifications" className="block py-2 hover:underline hover:text-yellow-400 transition duration-300 ease-in-out">Certifications</a></li>
            <li><a href="#contact" className="block py-2 hover:underline hover:text-yellow-400 transition duration-300 ease-in-out">Contact Me</a></li>
          </ul>
        </div>
      </nav>
    </header>

      <section id="home" className="w-full h-screen scroll-mt-20 flex flex-col-reverse md:flex-row items-center p-6 bg-gradient-to-r from-blue-400 to-indigo-600 text-white">
        <div className="flex-1 space-y-4">
          <h2 className="text-4xl font-bold">Hi, I am J. Tarun</h2>
          <h2 className="text-3xl font-semibold">And I am a passionate <br/>
          <TypedText
            strings={['Developer','Learner','Explorer']}
            speed ={100}
            backSpeed={50}
            loop
          />
          </h2>
          <div className="flex space-x-4 mt-4">
            <button className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg shadow-md hover:bg-yellow-500 transition duration-300 ease-in-out">
              Download Resume
            </button>
            <a href="https://github.com/Tarun512">
              <button className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg shadow-md hover:bg-yellow-500 transition duration-300 ease-in-out">
                Visit Github
              </button>
            </a>
          </div>
          <div className="flex space-x-4 mt-6">
            <a href="https://www.linkedin.com/in/j-tarun-51a68b2a1/" className="hover:scale-110 transition-transform">
            <FaLinkedinIn size={30} color='blue'/>
            </a>
            <a href="https://wa.me/919938966752" className="hover:scale-110 transition-transform">
              <FaWhatsapp size={30} color='green'/>
            </a>
          </div>
        </div>
        <div className="flex-1">
          <img src={logo} alt="developer" className="w-8/12 h-8/12 rounded-lg shadow-xl" />
        </div>
      </section>

      <section id="about" className="w-full h-screen scroll-mt-20 md:flex-row items-center p-6 bg-gradient-to-r from-blue-400 to-indigo-600 text-white">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <h3 className="text-xl font-semibold mb-4">Software Developer</h3>
        <p className="text-lg text-gray-700 mb-6">
          "As a dedicated student, I'm on a journey of continuous learning and growth. I'm passionate about Software Development.
          I thrive on challenges and believe that every experience is an opportunity to gain knowledge!"
        </p>
        <ul className="flex justify-center space-x-6">
          <li><div className="cursor-pointer hover:text-yellow-500 transition duration-300" id="education" onClick={handleItemClick}>Education</div></li>
          <li><div className="cursor-pointer hover:text-yellow-500 transition duration-300" id="skills" onClick={handleItemClick}>Skills</div></li>
        </ul>
        {item == 'education'? <Education/> : <Skills/>}
      </section>

      <section id="projects" className="w-full h-screen scroll-mt-20 md:flex-row items-center p-6 bg-gradient-to-r from-blue-400 to-indigo-600 text-white">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>

      <section id="certifications" className="w-full h-screen scroll-mt-20 md:flex-row items-center p-6 bg-gradient-to-r from-blue-400 to-indigo-600 text-white">
        <h2 className="text-3xl font-bold text-center mb-8">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificateData.map((certificate) => (
            <CertificateCard key={certificate.id} {...certificate} />
          ))}
        </div>
      </section>

      <section id="contact" className="w-full h-screen scroll-mt-20 md:flex-row items-center p-6 bg-gradient-to-r from-blue-400 to-indigo-600 text-white">
        <h2 className="text-3xl font-bold text-center mb-4">Connect</h2>
        <h3 className="text-xl text-center mb-6">Get in touch</h3>
        <div className="flex flex-row justify-between space-x-8 text-lg">
        {/* Form Section */}
        <form onSubmit={onSubmit} className="flex flex-col items-center space-y-4 w-1/2">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full max-w-md p-2 rounded-md text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full max-w-md p-2 rounded-md text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full max-w-md p-4 rounded-md text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-lg shadow-md hover:bg-yellow-500 transition duration-300 ease-in-out">
            Send Message
          </button>
        </form>

        {/* Vertical Line Divider */}
        <div className="border-r-2 border-gray-300 h-auto"></div>

        {/* Contact Information Section */}
        <div className="w-1/2 flex flex-col space-y-8">
          <div className="flex items-center space-x-4">
          <FaMapMarkerAlt size={30}/>
            <div>
              <h2 className="font-semibold text-xl">Address</h2>
              <p>Oriya Bazar, Cuttack-753001</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
          <FaPhoneAlt size={30}/>
            <div>
              <h2 className="font-semibold text-xl">Phone</h2>
              <p>+91 9938966752</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
          <MdEmail size={30}/>
            <div>
              <h2 className="font-semibold text-xl">Email</h2>
              <p>jt1612056@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      </section>
      <footer className='h-fit md:flex-row items-center p-6 bg-gradient-to-r from-blue-400 to-indigo-600 text-white'>
          <p className='text-center'>Copyright © TarunPortfolio | All rights reserved </p>
      </footer>
    </>
  );
}

export default App;
