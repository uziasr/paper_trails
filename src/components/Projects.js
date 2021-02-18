import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { getProjects } from "../store/actions"
import Project from "./Project"
import { postProject, deleteProject } from "../store/actions"
import DeleteProjectDialog from "./DeleteProjectDialog"
import AddProjectDialog from "./AddProjectDialog"

const Projects = (props) => {

    const [addingProject, setAddingProject] = useState(false)
    const [projectDelId, setProjectDelId] = useState(null)
    const [deletingProject, setDeletingProject] = useState(false)

    const state = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProjects())
    }, [])

    const createProject = () => {
        setAddingProject(true)
        setDeletingProject(false)
    }

    const currentlyDeleting = () => {
        setAddingProject(false)
        setDeletingProject(!deletingProject)
        setProjectDelId(null)
    }

    const abortDeletion = () => {
        setDeletingProject(false)
    }

    const deleteProjectPermanently = () => {
        dispatch(deleteProject(projectDelId))
        setProjectDelId(null)
        setDeletingProject(null)
    }

    const addProject = (projectName) => {
        dispatch(postProject({ name: projectName, description: null }))
        setAddingProject(false)
    }

    const abortAddition = () => {
        setAddingProject(false)
    }

    return (
        <div className="projectsRoot">
            <div className="projects">
                <div className="projectHeaderTextWrap">
                    <p className="projectHeaderText">PROJECTS</p>
                    <div style={{ "display": "flex", width: "5%", justifyContent: "space-between" }}>
                        <div className="addProject" style={{ color: deletingProject ? "dodgerblue" : "white" }} onClick={currentlyDeleting}>
                            <p>-</p>
                        </div>
                        <div className="addProject" onClick={() => createProject()}>
                            <p style={{ color: addingProject ? "mediumseagreen" : "white" }}>+</p>
                        </div>
                    </div>
                </div>
                <div className="projectWrap">
                    {state.projects.map(project => <Project props={props} key={project.id} project={project} deletingProject={deletingProject} setProjectDelId={setProjectDelId} />)}
                </div>
            </div>
            <DeleteProjectDialog open={deletingProject && projectDelId !== null} handleClose={abortDeletion} deleteSubject={deleteProjectPermanently} />
            <AddProjectDialog open={addingProject} projects={state.projects} addProject={addProject} handleClose={abortAddition} />
        </div>
    );
};

export default Projects;