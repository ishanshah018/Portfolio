// ...existing code...
import biographyCSS from './../Biography/Biography.module.css'

function Biography () {
    return (
    <div className={`${biographyCSS.Biography_wrapper} section`} id="biography" data-aos="fade-up">
            <h2 className="section_title" data-aos="fade-down">Biography</h2>
            <p data-aos="fade-up" data-aos-delay="100">I’m a Computer Science student passionate about web development. I enjoy building projects that solve problems and improve user experiences. Currently, I’m exploring Full Stack/MERN development and expanding my skills every day.</p>
            <div className={biographyCSS.biography_Cards}>
                <div className={biographyCSS.card} data-aos="zoom-in" data-aos-delay="150">
                    <h2>Name : <span>Ishan Shah</span></h2>
                </div>
                <div className={biographyCSS.card} data-aos="zoom-in" data-aos-delay="200">
                    <h2>Birthday : <span>October 18 ,  2005</span></h2>
                </div>
                <div className={biographyCSS.card} data-aos="zoom-in" data-aos-delay="250">
                    <h2>Age : <span>19 Years</span></h2>
                </div>
                <div className={biographyCSS.card} data-aos="zoom-in" data-aos-delay="300">
                    <h2>Address : <span>Ahmedabad , Gujarat,India</span></h2>
                </div>
                <div className={biographyCSS.card} data-aos="zoom-in" data-aos-delay="350">
                    <h2>Phone : <span>+91 91065 50238</span></h2>
                </div>
                <div className={biographyCSS.card} data-aos="zoom-in" data-aos-delay="400">
                    <h2>Github : <span>ishanshah018</span></h2>
                </div>
                <div className={biographyCSS.card} data-aos="zoom-in" data-aos-delay="450">
                    <h2>Email : <span>ishanrshah087@gmail.com</span></h2>
                </div>
                <div className={biographyCSS.card} data-aos="zoom-in" data-aos-delay="500">
                    <h2>Telegram : <span>Avaliable</span></h2>
                </div>
            </div>

            <div className={biographyCSS.Download_btn}>
                <span className={biographyCSS.LineTop}></span>
                <a
                    href="/cv.pdf"
                    download
                    className={biographyCSS.DownloadBTN}
                >
                    <span>Download CV <i className="ri-download-line"></i></span>
                </a>
                <span className={biographyCSS.LineBottom}></span>
            </div>

            <div className={biographyCSS.Experience_Education_wrapper}>
                <h2 className="section_title">Experience</h2>

                <div className={biographyCSS.Experience_cards}>
                    <div className={biographyCSS.card}>
                        <small>Student</small>
                        <h2>Looking for an Internship Opportunity</h2>
                        <p>Eager to apply my skills in real-world projects and gain industry experience.</p>
                    </div>
                </div>
            </div>
            <div className={biographyCSS.Experience_Education_wrapper}>
                <h2 className="section_title">Education</h2>

                <div className={biographyCSS.Experience_cards}>
                    <div className={biographyCSS.card}>
                        <small>B.E/B.tech Computer Science (2023 -2027 )</small>
                        <h2>LJ University</h2>
                        <p>Building a strong foundation in programming, databases, and problem-solving to prepare for real-world challenges.</p>
                    </div>
                    <div className={biographyCSS.card}>
                        <small>H.S.C (2022)</small>
                        <h2>Karnavati English School</h2>
                        <p>Completed H.S.C with a focus on Science and Mathematics, laying the groundwork for my engineering studies.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Biography