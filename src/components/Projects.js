import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { getProjects } from "../store/actions"
import Project from "./Project"

const Projects = (props) => {

    const state = useSelector(state => state)
    const dispatch = useDispatch()
    console.log("this is props", props)
    useEffect(()=>{
        dispatch(getProjects())
    },[])

    return (
        <div className="projectsRoot">
            <div className="projects">
                <div className="projectHeaderTextWrap">
                    <p className="projectHeaderText">PROJECTS</p>
                </div>
                <div className="projectWrap">
                    {state.projects.map(project => <Project props={props} key={project.id} project={project} />)}
                </div>
            </div>
        </div>
    );
};

export default Projects;