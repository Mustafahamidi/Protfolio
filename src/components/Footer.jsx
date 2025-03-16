

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white py-12">
    <div className="container mx-auto px-6 sm:px-12 lg:px-24">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        
        <div className="text-center sm:text-left mb-6 sm:mb-0">
          <p className="text-lg font-semibold">© 2025 M.mustafa hamidi. All Rights Reserved.</p>
        </div>
  
        
        <div className="flex justify-center sm:justify-end gap-6">
          <a href="https://www.linkedin.com/in/mustafa-hamidi-45916134a/" target="_blank" className="text-white hover:text-purple-400 transition duration-300">
            <i className="fab fa-linkedin-in fa-2x"></i>
          </a>
          <a href="https://github.com/Mustafahamidi" target="_blank" className="text-white hover:text-purple-400 transition duration-300">
            <i className="fab fa-github fa-2x"></i>
          </a>
          
        </div>
      </div>
    </div>
  </footer>
  
  )
}
