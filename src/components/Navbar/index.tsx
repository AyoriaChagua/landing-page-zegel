import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import './index.css';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`p-2 fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <nav className='flex items-center justify-between relative'>
        <img src="/landing-page-zegel/zegel.svg" height={30} width={30} alt="Logo" className="z-10" />
        <div className='absolute left-1/2 transform -translate-x-1/2'>
          <h2 className='font-bold text-red-500 text-2xl'>ZEGEL</h2>
        </div>
        <button 
          className="md:hidden z-20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>
        <ul className={`
          flex flex-col md:flex-row gap-5 
          absolute md:static right-0 top-full md:top-auto
          bg-white md:bg-transparent
          w-full md:w-auto
          p-4 md:p-0
          shadow-lg md:shadow-none
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible md:opacity-100 md:visible'}
        `}>
          <li className="relative">
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-200 rounded-full -z-10 w-8 h-8 opacity-50 blur-sm"></span>
            <a href="#" className="font-semibold px-4 py-2 block text-red-500">Inicio</a>
          </li>
          <li className="relative">
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-200 rounded-full -z-10 w-8 h-8 opacity-50 blur-sm"></span>
            <a href="#" className="font-semibold px-4 py-2 block text-red-500">Nosotros</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
