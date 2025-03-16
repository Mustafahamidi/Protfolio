

export default function Skill() {
  return (
    <section id="skills" className="bg-gray-100 py-16">
    <div className="container mx-auto px-6 sm:px-12 lg:px-24">
      <h2 className="text-3xl font-bold text-center text-purple-900 mb-8">My Skills</h2>
  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-center text-purple-900 mb-4">Front-End</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <i className="fas fa-code text-purple-500"></i>
              HTML5
            </li>
            <li className="flex items-center gap-3">
              <i className="fas fa-paint-brush text-purple-500"></i>
              CSS3
            </li>
            <li className="flex items-center gap-3">
              <i className="fab fa-js-square text-yellow-500"></i>
              JavaScript
            </li>
            <li className="flex items-center gap-3">
              <i className="fab fa-react text-blue-500"></i>
              React.js
            </li>
            <li className="flex items-center gap-3">
              <i className="fab fa-css3-alt text-teal-500"></i>
              Tailwind CSS
            </li>
          </ul>
        </div>
  
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-center text-purple-900 mb-4">Back-End</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <i className="fab fa-node text-green-500"></i>
              Node.js
            </li>
            <li className="flex items-center gap-3">
              <i className="fab fa-node-js text-green-500"></i>
              Express.js
            </li>
            <li className="flex items-center gap-3">
              <i className="fas fa-database text-gray-700"></i>
              MongoDB
            </li>
            <li className="flex items-center gap-3">
              <i className="fas fa-database text-gray-700"></i>
              SQL
            </li>
          </ul>
        </div>
  
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-center text-purple-900 mb-4">Tools & Other Skills</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <i className="fab fa-github text-gray-700"></i>
              Git & GitHub
            </li>
            <li className="flex items-center gap-3">
              <i className="fas fa-code text-gray-700"></i>
              VS Code
            </li>
            <li className="flex items-center gap-3">
              <i className="fab fa-npm text-red-500"></i>
              NPM & Yarn
            </li>
            <li className="flex items-center gap-3">
              <i className="fas fa-pencil-ruler text-pink-500"></i>
              Figma
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  
  
  )
}
