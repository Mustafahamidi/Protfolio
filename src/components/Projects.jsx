import React from 'react';
import { projects } from '../projects';
import { Link } from 'react-router-dom';

export default function Projects() {
  
  const [showMore , setShowMore] = React.useState(false)

  const displayedProjects = showMore ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-16 sm:py-24 bg-gray-100">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-900 mb-4">
            My Projects
          </h2>
          <p className="text-lg sm:text-xl text-gray-700">
            Take a look at some of the projects I've worked on. I love building user-centric, beautiful, and functional applications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {displayedProjects.map((project) => (
            <div key={project.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-56 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-purple-700 mb-2">{project.name}</h3>
              <p className="text-gray-600 mb-4">{project.link && project.description }</p>

            { project.link ? (
            <Link to={project.link} className="text-purple-500 hover:text-purple-700 font-semibold">
              View Project
            </Link>):
            (
              <span className="text-gray-400 cursor-not-allowed font-semibold">
                View Project (Coming Soon)
              </span>
            )}
            </div>
          ))}
        </div>
      </div>

      
      <div className="text-center mt-6">
        <button
          onClick={() => setShowMore(prevShowMore => !prevShowMore)}
          className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-300"
        >
          {showMore ? "Show Less" : "See More"}
        </button>
      </div>
    </section>
  );
}
