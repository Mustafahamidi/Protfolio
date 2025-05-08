
import { Link } from 'react-router-dom'
import Mustafa from '../assets/mustafa.png'

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-16 sm:py-24">
    <div className="container mx-auto px-6 sm:px-12 lg:px-24 flex flex-col-reverse lg:flex-row items-center">
      
      <div className="text-center lg:text-left lg:w-1/2">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
        Hi, I'm <span className="text-yellow-400">M.mustafa hamidi</span>, a Full Stack Developer
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-8">
        I'm a passionate Full Stack Developer dedicated to building responsive, user-friendly, and high-performance web applications. This portfolio showcases my work with technologies like HTML, CSS, JavaScript, React, TypeScript, and Tailwind CSS on the front end, as well as Node.js, Express.js, and MongoDB on the back end. Explore my projects—and let’s build something amazing together!        </p>
        <div className="flex justify-center lg:justify-start gap-4">
        <a
            href="/Mustafa_Hamidi_Resume.pdf" 
            download="My_Resume.pdf" 
            className="px-6 py-3 bg-yellow-400 text-purple-900 font-bold rounded-md hover:bg-yellow-300 transition duration-300"
          >
            Download Cv
          </a>

          <Link
            to="/contact"
            className="px-6 py-3 border border-white text-white font-bold rounded-md hover:bg-white hover:text-purple-900 transition duration-300"
          >
            Contact Me
          </Link>
        </div>
      </div>
  
      <div className="lg:w-1/2 mb-10 lg:mb-0">
      <img
              src={Mustafa}
              loading="lazy" 
              alt="Hero Illustration"
              className="w-full max-w-xs lg:max-w-sm mx-auto rounded-lg" // Even smaller image size
      />
      </div>

      
    </div>
  </section>
  
  )
}
