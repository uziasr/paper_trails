import React from 'react';

const Project = ({ project }) => {
    return (
        <div className="project">
            <p className="projectText">{project}</p>
        </div>
    );
};

export default Project;