// ...existing code...
import skillsCSS from './Skills.module.css';

function Skills() {
    const skillCategories = [
        {
            category: "Frontend Development",
            skills: [
                { name: "React.js" },
                { name: "JavaScript (ES6+)" },
                { name: "HTML5" },
                { name: "CSS3" },
                { name: "Bootstrap & Tailwind" },
                { name: "Responsive Design" }
            ]
        },
        {
            category: "Backend Development",
            skills: [
                { name: "Node.js" },
                { name: "Django Framework" },
                { name: "Express.js" },
                { name: "RESTful API Design" },
                { name: "JWT Authentication" },
                { name: "API Integration" }
            ]
        },
        {
            category: "Database & Cloud",
            skills: [
                { name: "MongoDB" },
                { name: "SQLite" },
                { name: "PostgreSQL" },
                { name: "AWS Services" },
            ]
        },
        {
            category: "Tools & Technologies",
            skills: [
                { name: "Git & GitHub" },
                { name: "VS Code" },
                { name: "Postman" },
                { name: "Figma" },
                { name: "Webpack & Vite" },
            ]
        }
    ];

    return (
        <div className={`${skillsCSS.skills_wrapper} section`} id="skills" data-aos="fade-up">
            <h2 className="section_title" data-aos="fade-down">Skills & Expertise</h2>
            <p className="section_paragraph" data-aos="fade-up" data-aos-delay="100">
                A comprehensive overview of my technical skills, tools, and technologies I work with to create amazing digital experiences.
            </p>

            <div className={skillsCSS.skills_container}>
                {skillCategories.map((category, categoryIndex) => (
                    <div
                        key={categoryIndex}
                        className={skillsCSS.skill_category}
                        data-aos="zoom-in-up"
                        data-aos-delay={150 + categoryIndex * 100}
                    >
                        <h3 className={skillsCSS.category_title}>{category.category}</h3>
                        <div className={skillsCSS.skills_list}>
                            {category.skills.map((skill, skillIndex) => (
                                <div
                                    key={skillIndex}
                                    className={skillsCSS.skill_item}
                                    data-aos="fade-up"
                                    data-aos-delay={200 + skillIndex * 50}
                                >
                                    <span className={skillsCSS.skill_name}>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className={skillsCSS.skills_summary}>
                <div className={skillsCSS.summary_card} data-aos="fade-right" data-aos-delay="200">
                    <h4>5+ Projects</h4>
                    <p>Completed successfully with modern technologies</p>
                </div>
                <div className={skillsCSS.summary_card} data-aos="fade-up" data-aos-delay="300">
                    <h4>Full Stack Development</h4>
                    <p>Frontend to backend expertise</p>
                </div>
                <div className={skillsCSS.summary_card} data-aos="fade-left" data-aos-delay="400">
                    <h4>Always Learning</h4>
                    <p>Staying updated with latest trends</p>
                </div>
            </div>
        </div>
    );
}

export default Skills;
