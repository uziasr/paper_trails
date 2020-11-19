import React, { useState } from 'react';
import ProjectLinks from "./ProjectLinks"

const ProjectDetails = () => {

    const [project, setProject] = useState({
        title: "Gym Buddy",
        categories:
            [
                {
                    title: "login registration", content: [
                        { name: "sample form", src: "https://medium.com/@mixalisdobs/just-another-registration-form-with-react-native-707943a9edaf" },
                        { name: "easy form", src: "https://medium.com/react-native-development/easily-build-forms-in-react-native-9006fcd2a73b" },
                        { name: "example code", src: "https://www.bootdey.com/react-native-snippet/10/Signup-form-ui-example" }
                    ]
                },

                {
                    title: "analytics", content: [
                        { name: "victory library", src: "https://formidable.com/open-source/victory/" },
                        { name: "list of libraries", src: "https://openbase.io/packages/top-react-data-visualization-libraries" },
                        { src: "https://reactfordataviz.com/" }

                    ]
                }
            ]
    })

    const [activeCategory, setActiveCategory] = useState(null)

    console.log(activeCategory)

    const activeHandler = (category) => {
        if (activeCategory) {
            activeCategory.title === category.title ? setActiveCategory(null) : setActiveCategory(category)
        } else {
            setActiveCategory(category)
        }
    }

    return (
        <div className="projectDetailsRoot">
            <div className="projectDetailsColumn">
                <p className="projectDetailsTitle">{project.title}</p>
            </div>
            <div className="projectDetailsColumn clickable">{project.categories.map((category, index) => (
                <div className="projectCategoryTextWrap" key={index} style={{ color: !activeCategory ? null : category.title == activeCategory.title ? "mediumseagreen" : null, borderRadius: "15px" }} onClick={() => activeHandler(category)}>
                    <p>{category.title}</p>
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
        </div>
    );
};

export default ProjectDetails;