import React from 'react'
import Mustafa from '../assets/mustafa.png'

export default function About() {
  
  return (
    <section id="about" className="py-16 sm:py-24 bg-gray-100">
    <div className="container mx-auto px-6 sm:px-12 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-900 mb-4">
          About Me
        </h2>
        <p className="text-lg sm:text-xl text-gray-700">
          I'm a passionate Full Stack Developer who loves building engaging and interactive web experiences. Here's a little bit about me.
        </p>
      </div>
  
      <div className="flex flex-col-reverse lg:flex-row items-center">
        
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img
            src={Mustafa} // Assuming Mustafa is imported correctly
            alt="Your Image"
            className="w-full max-w-xs lg:max-w-sm mx-auto rounded-full shadow-lg"
          />
        </div>
  
        
        <div className="lg:w-1/2 text-center lg:text-left">
          <h3 className="text-2xl sm:text-3xl font-semibold text-purple-700 mb-4">
            Hello, I'm M.mustafa hamidi
          </h3>
          <p className="text-lg sm:text-xl text-gray-600 mb-6">
            With 1 year of experience as a Full Stack Developer, I specialize in building visually appealing, functional, and scalable web applications that deliver seamless user experiences. I’m passionate about writing clean, maintainable code and continuously learning modern technologies to grow my skills across both front-end and back-end development.          </p>
          <p className="text-lg sm:text-xl text-gray-600">
            When I'm not coding, you can find me exploring new tech trends, reading, or working on personal projects.
          </p>
        </div>
      </div>
    </div>
  </section>
  
  )
}
