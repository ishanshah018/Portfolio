import { useRef } from "react";
import navCSS from './../Nav/Nav.module.css'
function Nav()   {

    const nav = useRef();

    const menuHandler = () =>{
        nav.current.classList.toggle(navCSS.ActiveNav);
    }


    return (
        <div className={navCSS.Nav_Wrapper}>
            <div className={navCSS.logo}>
                <a href="#">Portfolio</a>
            </div>

            <ul ref={nav}>
                <li><a href="#home">Home</a></li>
                <li><a href="#biography">Biography</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#portfolio">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className={navCSS.social}>
                <a 
                    href="https://www.linkedin.com/in/ishan-shah-630a65192/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <i className="ri-linkedin-line"></i>
                </a>

                <a 
                    href="https://github.com/ishanshah018" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <i className="ri-github-line"></i>
                </a>
                </div>

            <i className="ri-menu-4-line" id={navCSS.bar} onClick={menuHandler}></i>

        </div>
    )
}

export default Nav