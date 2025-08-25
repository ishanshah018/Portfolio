// ...existing code...
import headerCSS from './../Header/Header.module.css';

import heroImg from './../../assets/about.webp'
// ...existing code...
import { Tilt } from "react-tilt";

function  Header () {

    const defaultOptions = {
        max : 20,
        perspective: 2000,
        scale : 1,
        speed:1000
    } 


    return (
        <div className={`${headerCSS.headerWrapper} section`} id="home">
            <Tilt className={headerCSS.hero_img} options={defaultOptions }>
                <img src={heroImg} alt="" />
            </Tilt>
            <div className={headerCSS.hero_content}>
                <small>Hello, I am Ishan Shah ,</small>
                <h1>Website <br /> Developer</h1>
                <p>I build modern and responsive websites.
                    <br />Always learning and improving my skills.
                    <br />Passionate about turning ideas into reality.</p>
        
            </div>
        </div>
    )
}

export default Header