import React, { useState } from 'react';

const ProjectDetails = () => {

    const [project, setProject] = useState({
        title: "Gym Buddy",
        categories:
        {
            "login registration": [
                { name: "sample form", src: "https://medium.com/@mixalisdobs/just-another-registration-form-with-react-native-707943a9edaf" },
                { name: "easy form", src: "https://medium.com/react-native-development/easily-build-forms-in-react-native-9006fcd2a73b" },
                { name: "example code", src: "https://www.bootdey.com/react-native-snippet/10/Signup-form-ui-example" }
            ],

            "analytics": [
                { name: "victory library", src: "https://formidable.com/open-source/victory/" },
                { name: "list of libraries", src: "https://openbase.io/packages/top-react-data-visualization-libraries" },
                { src: "https://reactfordataviz.com/" }
            ]
        }
    })

    const [activeCategory, setActiveCategory] = useState(null)

    const activeHandler = (category) => {
        setActiveCategory(category)
    }

    return (
        <div className="projectDetailsRoot">
            <div className="projectDetailsColumn">
                <p className="projectDetailsTitle">{project.title}</p>
            </div>
            <div className="projectDetailsColumn clickable">{Object.keys(project.categories).map(category => (
                <div className="projectCategoryTextWrap" style={{ background: category == activeCategory ? "rgb(41, 41, 41)" : null, borderRadius: "15px" }} onClick={() => activeHandler(category)}>
                    <p>{category}</p>
                </div>
            ))}
                <div className="newCategory">
                    <input
                        placeholder="type here"
                        className="categoryInput">
                    </input>
                    <div className="categoryButton">
                        <p>+</p>
                    </div>
                </div>
            </div>
            {project.categories[activeCategory] ?
                <div className="projectDetailsColumn clickable">
                    {project.categories[activeCategory].map(link => (
                        <a href={link.src} target="_blank">
                            <p className="linkText">{link.name ? link.name : link.src}</p>
                        </a>
                    ))}
                    <div className="newCategory">
                        <input
                            placeholder="type here"
                            className="categoryInput">
                        </input>
                        <div className="categoryButton">
                            <p>+</p>
                        </div>
                    </div>
                </div>
                : null}
        </div>
    );
};

export default ProjectDetails;