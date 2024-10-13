import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Ado from '../assets/ado.png';
import '../styles/Header.css';

function Header() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [underlineStyle, setUnderlineStyle] = useState({
    width: '0px',
    left: '0px',
  });
  const linksRef = useRef([]);
  const location = useLocation();

  const handleLinkClick = (index) => {
    setActiveIndex(index);

    const link = linksRef.current[index];
    if (link) {
      const { offsetWidth, offsetLeft } = link;
      setUnderlineStyle({
        width: `${offsetWidth}px`,
        left: `${offsetLeft}px`,
      });
    }
  };

  useEffect(() => {
    const currentPath = location.pathname;
    const currentIndex = ['/', '/about', '/our-services', '/portfolio', '/blog', '/contact'].indexOf(currentPath);

    if (currentIndex !== -1) {
      setActiveIndex(currentIndex);

      const link = linksRef.current[currentIndex];
      if (link) {
        const { offsetWidth, offsetLeft } = link;
        setUnderlineStyle({
          width: `${offsetWidth}px`,
          left: `${offsetLeft}px`,
        });
      }
    } else {
      setUnderlineStyle({
        width: '0px',
        left: '0px',
      });
    }
  }, [location]);

  return (
    <header>
      <Link to="/" className='logo-ado' onClick={() => {
        setUnderlineStyle({
          width: '0px',
          left: '0px',
        });
        handleLinkClick(0);
      }}>
        <div className="logo-container">
          <img src={Ado} alt="Logo" />
        </div>
        <div>Adovelopers</div>
      </Link>

      <div className="nav-container">
        <ul>
          {['About', 'Our Services', 'Portfolio', 'Blog', 'Contact'].map((item, index) => (
            <li key={item} onClick={() => handleLinkClick(index + 1)} ref={el => (linksRef.current[index + 1] = el)}>
              <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="nav-link">
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="underline"
          style={{
            width: underlineStyle.width,
            left: underlineStyle.left,
          }}
        />
        <button className='get-in-touch-btn'>Get In Touch</button>
      </div>
    </header>
  );
}

export default Header;
