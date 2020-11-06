import React, { useState } from 'react';
import Project from "./Project"

const Projects = () => {

    const [projects, setProjects] = useState([
        "Project1", "Project2", "Project3", "Project4", "Project5"
    ])

    return (
        <div className="projects">
            <div className="projectHeaderTextWrap">
                <p className="projectHeaderText">PROJECTS</p>
            </div>
            <div className="projectWrap">
                {projects.map(project => <Project project={project} />)}
            </div>
        </div>
    );
};

export default Projects;