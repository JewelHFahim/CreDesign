import { NavLink } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import './Navbar.css';

const Navbar = () => {

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about-us' },
    {
      label: 'Services',
      path: '#!',
      subMenu: [
        { label: 'Casino Software', path: '/services/1' },
        { label: 'API Integration', path: '/services/2' },
        { label: 'Custom Web App', path: '/services/5' },
        { label: 'Movie Streaming', path: '/contact-us' },
        { label: 'Movie Database', path: '/contact-us' },
      ],
    },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact-us' },
  ];

  return (
    <nav className="navbar lg:px-[120px] py-[20px] border-b shadow-md">
      
      <NavLink to="/" exact>
        <img src={logo} alt="Logo" />
      </NavLink>

      <ul className="navbar-menu">
        {navLinks.map((link, index) => (
          <li key={index} className={link.subMenu ? 'has-children' : ''}>
            {link.subMenu ? (
              <>
                <NavLink to={link.path} exact activeClassName="active">
                  {link.label}
                </NavLink>
                <ul aria-label="submenu" className='z-[9999]'>
                  {link.subMenu.map((subLink, subIndex) => (
                    <li key={subIndex}>
                      <NavLink to={subLink.path}> {subLink.label} </NavLink>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <NavLink to={link.path} exact activeClassName="active">
                {link.label}
              </NavLink>
            )}
          </li>
        ))}
      </ul>

      <div className="hidden lg:block">
        <button className="border px-8 py-1 rounded-lg bg-orange-500 text-white text-lg font-medium">
          Contact Us
        </button>
      </div>

    </nav>
  );
};

export default Navbar;