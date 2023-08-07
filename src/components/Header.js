import '../index.css'
import { useState,useEffect } from 'react'


const Header = () => {
  const icon={ 
    fontSize:35,
    margin:18
  }

  const [nav, setnav] = useState(false)
  function open() {
        nav ? setnav(false):setnav(true)
  }
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  
  

  return (
    <header className={`md:flex md:justify-between text-slate-200 bg-gray-900 bg-opacity-70 navbar ${visible ? '' : 'navbar--hidden'}`} >
       <div className='flex justify-center md:px-14'>
        <a href="https://www.linkedin.com/in/sarmad-irfan/" target="blank"><i className="fa-brands fa-linkedin hover:text-xl"  style={icon}></i></a>
        <a href="https://www.instagram.com/sarmxd_/" target="blank"><i className="fa-brands fa-instagram hover:text-xl"style={icon}></i></a>
        <a href="https://github.com/sarmad0324" target="blank"><i className="fa-brands fa-square-github hover:text-xl" style={icon}></i></a>
        <a href="https://www.facebook.com/sarmad.irfan.9" target="blank"><i className="fa-brands fa-square-facebook hover:text-xl" style={icon}></i></a>
      </div>
      <div className={`${nav ? 'block ' : 'hidden md:flex md:items-center md:gap-10 md:pr-14'}  `}>
        <a href='#/'  className='font-semibold flex underline font-sans justify-center pt-4 hover:text-xl  md:pt-0 md:no-underline'>Home</a>
        <a href='#project'  className='font-semibold flex underline font-sans justify-center pt-4 hover:text-xl  md:pt-0 md:no-underline'>Projects</a>
        <a href='#contact'  className='font-semibold flex underline font-sans justify-center pt-4 hover:text-xl md:pt-0 md:no-underline'>Contact Me</a>
      </div>
     
      <div className='text-center md:hidden'>
        {nav ? <i className="fa-solid fa-xmark  hover:text-xl py-4" onClick={open}></i> : <i className="fa-solid fa-bars-staggered  hover:text-xl pb-3" onClick={open} ></i>}
      </div>
    </header>
  )
}

export default Header
//<img alt='logo' src={require("../assets/logo1.png")}/>