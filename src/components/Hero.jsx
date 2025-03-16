
import { Link } from 'react-router-dom'
import Mustafa from '../assets/mustafa.png'

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-16 sm:py-24">
    <div className="container mx-auto px-6 sm:px-12 lg:px-24 flex flex-col-reverse lg:flex-row items-center">
      
      <div className="text-center lg:text-left lg:w-1/2">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
        Hi, I'm <span className="text-yellow-400">M.mustafa hamidi</span>, a Front-End Developer
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-8">
        I'm a passionate Front-End Developer, dedicated to creating beautiful, user-friendly, and responsive websites. Here, you'll find a collection of my work, showcasing my skills in HTML, CSS, JavaScript, and React. Explore my projects, and let’s build something amazing together!
        </p>
        <div className="flex justify-center lg:justify-start gap-4">
        <a
            href="/Mustafa_Hamidi_Safa_Resume[1].pdf" 
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
              src={Mustafa} // Assuming Mustafa is imported correctly
              alt="Hero Illustration"
              className="w-full max-w-xs lg:max-w-sm mx-auto rounded-lg" // Even smaller image size
      />
      </div>

      
    </div>
  </section>
  
  )
}
