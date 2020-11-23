import React, { useState, useEffect } from 'react';
import { getProjectByID } from "../store/actions"
import { useSelector, useDispatch } from "react-redux"
import ProjectLinks from "./ProjectLinks"

const ProjectDetails = () => {

    const project = useSelector(state => state.fullProject)
    const dispatch = useDispatch()

    useEffect(() => {
        const projectArr = window.location.pathname.split('/')
        const projectId = projectArr[projectArr.length - 1]
        dispatch(getProjectByID(projectId))
    }, [])


    const [activeCategory, setActiveCategory] = useState(null)

    console.log(activeCategory)

    const activeHandler = (category) => {
        if (activeCategory) {
            activeCategory.category === category.category ? setActiveCategory(null) : setActiveCategory(category)
        } else {
            setActiveCategory(category)
        }
    }

    return (

        project.project !== null ? <div className="projectDetailsRoot">
            <div className="projectDetailsColumn">
                <p className="projectDetailsTitle">{project.project}</p>
            </div>
            <div className="projectDetailsColumn clickable">{project.categories.map((category, index) => (
                <div className="projectCategoryTextWrap" key={index} style={{ color: !activeCategory ? null : category.category == activeCategory.category ? "mediumseagreen" : null, borderRadius: "15px" }} onClick={() => activeHandler(category)}>
                    <p>{category.category}</p>
                </div>
            ))}

                <div className="newCategory">
                    <input
                        placeholder="add category"
                        className="categoryInput">
                    </input>
                    <div className="categoryButton">
                        <p>+</p>
                    </div>
                </div>
            </div>
            {activeCategory ?
                <ProjectLinks category={activeCategory} />
                : null}
        </div> : null

    );
};

export default ProjectDetails;