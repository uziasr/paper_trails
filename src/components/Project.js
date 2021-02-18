import React from 'react';
import { useHistory } from "react-router-dom"

const Project = ({ project, deletingProject, setProjectDel }) => {

    const history = useHistory()
    const projectEventHandler = (project) => {
        if (deletingProject) {
            setProjectDel(project)
        } else {
            history.push({
                pathname: `/projectDetails/${project.id}`,
                // state: props
            })
        }
    }

    return (
        <div className={`project ${deletingProject ? "projectDeletion" : ''}`} onClick={() => projectEventHandler(project)}>
            <p className="projectText">{project.name}</p>
        </div>
    );
};

export default Project;