import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { getProjects } from "../store/actions"
import Project from "./Project"
import Input from "@material-ui/core/Input"
import { postProject } from "../store/actions"

const Projects = (props) => {

    const [newProject, setNewProject] = useState("")
    const [addingProject, setAddingProject] = useState(false)

    const state = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProjects())
    }, [])

    const createProject = () => {
        if (addingProject) {
            dispatch(postProject({name: newProject, description: null}))
            setAddingProject(false)
        } else {
            setAddingProject(true)
        }
    }

    const projectOnChange = (e) => {
        setNewProject(e.target.value)
        console.log(newProject)
    }

    return (
        <div className="projectsRoot">
            <div className="projects">
                <div className="projectHeaderTextWrap">
                    <p className="projectHeaderText">PROJECTS</p>
                    <div style={{ "display": "flex", width: addingProject ? "5%" : null, justifyContent: "space-between" }}>
                        {addingProject ?
                            <div className="addProject" onClick={() => setAddingProject(false)}>
                                <p>-</p>
                            </div> : null}
                        <div className="addProject" onClick={() => createProject()}>
                            <p style={{ color: addingProject && newProject ? "mediumseagreen" : "white" }}>+</p>
                        </div>
                    </div>
                </div>
                <div className="projectWrap">
                    {addingProject ?
                        <div >
                            <Input
                                name="project"
                                onChange={(e) => projectOnChange(e)}
                            ></Input>
                        </div>
                        : null}
                    {state.projects.map(project => <Project props={props} key={project.id} project={project} />)}
                </div>
            </div>
        </div>
    );
};

export default Projects;