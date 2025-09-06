// ...existing code...
import portfolioCSS from './../Portfolio/Portfolio.module.css'

function Portfolio() {
    const projects = [
        {
            id: 1,
            title: "StoreZen - Dual Side Retail System",
            tech: "ReactJS, Node.js, MongoDB, Django, SQLite, Trie DS,",
            description: "A comprehensive smart retail management system featuring inventory tracking, customer analytics, and AI-powered shopping assistance. Built with React, Node.js, and Django with Razorpay payments and Twilio notifications..",
            githubLink: "https://github.com/ishanshah018/StoreZen-Retail-system"
        },
        {
            id: 2,
            title: "EV-Path",
            tech: "ReactJS, Node.js, MongoDB, Django, Open Charge Map API, Leaflet",
            description: "An electric vehicle trip planner that suggests optimized routes, charging stations, and range estimation. Integrated with Open Charge Map API for real-time charging stations and route visualization.",
            githubLink: "https://github.com/ishanshah018/Ev-Path"
        },
        {
            id: 3,
            title: "Figma Design to React Code - IdentityHub",
            tech: "ReactJS, Tailwind CSS",
            description: "Frontend development based on Figma design, implemented in React and Tailwind CSS.Demonstrates modern component-based architecture and responsive design.",
            githubLink: "https://github.com/ishanshah018/Figma-UI-Implementation-with-React--Tailwind.",
            liveLink: "https://ishan-work.vercel.app/",
            figmaLink: "https://www.figma.com/design/g6NcOBlJv22SjAk7UKHIm9/IdentityHub?node-id=0-1"
            
        },
        {
            id: 4,
            title: "TransCargo",
            tech: "HTML, CSS, JavaScript",
            description: "A logistics and cargo service website designed with a responsive frontend. Highlights services, pricing, and logistics in a modern UI. Built purely with HTML, CSS, and JavaScript.",
            githubLink: "https://github.com/ishanshah018/TransCargo",
            liveLink: "http://logixpress.me/TransCargo/"
        },
        {
            id: 5,
            title: "Car Rental Website",
            tech: "HTML, CSS, JavaScript",
            description: "A simple car rental booking website with a user-friendly frontend. Features include car listings, rental pricing, and responsive design. Developed with HTML, CSS, and JavaScript.",
            githubLink: "https://github.com/ishanshah018/Car_Rental_Website",
            liveLink: "https://autoluxee.netlify.app/"
        },
        {
            id: 6,
            title: "Movie Review Django Web App",
            tech: "Django, SQLite, Bootstrap",
            description: "A web application where users can post, manage, and read movie reviews. Includes authentication, CRUD functionality, and a clean responsive interface with Bootstrap.",
            githubLink: "https://github.com/ishanshah018/MovieReview--Django-Web-App."
        }
    ];


    return (
        <div className={`${portfolioCSS.Portfolio_wrapper} section`} id="portfolio">
            <h2 className="section_title">Projects</h2>
            <p className="section_paragraph">From small projects to full applications, these projects reflect my passion for coding and continuous learning.</p>

            <div className={portfolioCSS.Portfolio_Cards}>
                {projects.map((project) => (
                    <div key={project.id} className={portfolioCSS.Portfolio_Card}>
                        <div className={portfolioCSS.project_header}>
                            <small className={portfolioCSS.project_tech}>{project.tech}</small>
                            <h3 className={portfolioCSS.project_title}>{project.title}</h3>
                        </div>
                        
                        <p className={portfolioCSS.project_description}>
                            {project.description}
                        </p>

                        <div className={portfolioCSS.button_group}>
                            <a 
                                href={project.githubLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={portfolioCSS.github_button}
                            >
                                <svg className={portfolioCSS.github_icon} viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                                View on GitHub
                            </a>
                            
                            {project.liveLink && (
                                <a 
                                    href={project.liveLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className={portfolioCSS.live_button}
                                >
                                    <svg className={portfolioCSS.live_icon} viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                                    </svg>
                                    Live Website
                                </a>
                            )}

                            {project.id === 6 && project.figmaLink && (
                                <a 
                                    href={project.figmaLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className={portfolioCSS.figma_button}
                                >
                                    <svg className={portfolioCSS.figma_icon} viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M15.5 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"/>
                                        <path d="M8.5 8.5a3.5 3.5 0 0 1 3.5-3.5h3.5a3.5 3.5 0 1 1 0 7H12a3.5 3.5 0 0 1-3.5-3.5Z"/>
                                        <path d="M8.5 15.5a3.5 3.5 0 0 1 3.5-3.5h3.5a3.5 3.5 0 1 1 0 7H12a3.5 3.5 0 0 1-3.5-3.5Z"/>
                                    </svg>
                                    View Figma Design
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio