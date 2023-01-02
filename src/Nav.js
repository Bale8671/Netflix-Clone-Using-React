import React, { useEffect, useState}from 'react'
import "./Nav.css"
function Nav() {
    const [show, handleShow] = useState(false);

    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
         } else {
            handleShow(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);     
        return () => window.removeEventListener("scroll", handleShow);
    }, []);
  return (
        <div className={`nav ${show && "nav__black"}`}>
        <img
        className="nav__logo"
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="Netflix Logo"
        />

        <img
        className="nav__avater"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
        alt="Avatar logo"
        />
         </div>
   
  )
}

export default Nav