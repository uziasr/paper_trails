import React from 'react';
import Button from '@material-ui/core/Button';

const ProjectLinks = ({ category, newLinkEvent }) => {
    console.log(category)
    return (
        <div className="projectDetailsColumn clickable">
            <div>
                <Button variant="contained" onClick={newLinkEvent} color="primary">+</Button>
            </div>
            {category.links.map(link => (
                <a key={link.id} href={link.url} target="_blank">
                    <p className="linkText">{link.name ? link.name : link.url}</p>
                </a>
            ))}
            {/* <div className="newCategory newLink">
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
            </div> */}
        </div>
    );
};

export default ProjectLinks;