
import { NavLink } from "react-router-dom";

export default function Navbar() {

  const activeStyle = {
    color: '#5e3bee',  
    textDecoration: 'underline'  
  };
  return (
    <nav className="flex flex-col sm:flex-row items-start justify-between p-4 sm:p-6">
      
      <p
        className="font-bold text-xl sm:text-2xl lg:text-3xl mb-4 sm:mb-0 ml-0 sm:ml-[50px] hover:text-[#5E3BEE] transition-all duration-300"
      >
        Portfolio
      </p>

      
      <ul className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8 mb-4 sm:mb-0">
        <li>
          <NavLink to="/" className="sm:text-lg lg:text-xl hover:underline" style={({isActive}) => isActive ? activeStyle : {} }>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="sm:text-lg lg:text-xl hover:underline" style={({isActive}) => isActive ? activeStyle : {} }>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className="sm:text-lg lg:text-xl hover:underline" style={({isActive}) => isActive ? activeStyle : {} }>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/skill" className="sm:text-lg lg:text-xl hover:underline" style={({isActive}) => isActive ? activeStyle : {} }>
            Skill
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="sm:text-lg lg:text-xl hover:underline" style={({isActive}) => isActive ? activeStyle : {} }>
            Contact
          </NavLink>
        </li>
      </ul>

      
      <NavLink
        to="/contact"
        className="hidden sm:block  px-4 py-2 border border-[#5E3BEE] text-[#5E3BEE] font-medium rounded hover:bg-[#5E3BEE] hover:text-white transition duration-200"
      >
        Contact Me
      </NavLink>

      
    </nav>
  );
}
