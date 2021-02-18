import React from 'react';
import { useHistory } from "react-router-dom"

const Project = ({ project, deletingProject, setProjectDelId }) => {

    const history = useHistory()
    const projectEventHandler = (id) => {
        if (deletingProject) {
            setProjectDelId(id)
        } else {
            history.push({
                pathname: `/projectDetails/${id}`,
                // state: props
            })
        }
    }

    return (
        <div className={`project ${deletingProject? "projectDeletion":''}`}  onClick={() => projectEventHandler(project.id)}>
            <p className="projectText">{project.name}</p>
        </div>
    );
};

export default Project;