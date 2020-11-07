import React, { useState } from 'react';
import Project from "./Project"

const Projects = () => {

    const [projects, setProjects] = useState([
        "Gym Pal", "Form Critic", "Job Board Pro", "Portfolio", "Checkers Pro"
    ])

    return (
        <div className="projectsRoot">
            <div className="projects">
                <div className="projectHeaderTextWrap">
                    <p className="projectHeaderText">PROJECTS</p>
                </div>
                <div className="projectWrap">
                    {projects.map(project => <Project project={project} />)}
                </div>
            </div>
        </div>
    );
};

export default Projects;