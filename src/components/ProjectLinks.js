import React from 'react';

const ProjectLinks = ({ category }) => {
    return (
        <div className="projectDetailsColumn clickable">
            {category.content.map(link => (
                <a href={link.src} target="_blank">
                    <p className="linkText">{link.name ? link.name : link.src}</p>
                </a>
            ))}
            <div className="newCategory newLink">
                <div>
                    <input
                        placeholder="add name"
                        className="categoryInput">
                    </input>
                    <input
                        placeholder="add url*"
                        className="categoryInput">
                    </input> 
                </div>
                <div className="categoryButton">
                    <p>+</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectLinks;