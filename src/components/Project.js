import React from 'react';
import { useHistory } from "react-router-dom"

const Project = ({ project, props }) => {

    console.log(props)

    const history = useHistory()
    const projectEventHandler = (id) => {
        history.push({
            pathname: `/projectDetails/${id}`,
            // state: props
        })
    }

    return (
        <div className="project" onClick={() => projectEventHandler(project.id)}>
            <p className="projectText">{project.name}</p>
        </div>
    );
};

export default Project;