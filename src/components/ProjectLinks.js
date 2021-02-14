import React from 'react';
import Button from '@material-ui/core/Button';

const ProjectLinks = ({ category, newLinkEvent }) => {
    console.log(category)
    return (
        <div className="projectDetailsColumn clickable">
            <div style={{ alignSelf: "flex-start" }}>
                <Button variant="contained" onClick={newLinkEvent} color="primary">+</Button>
            </div>
            {category.links.map(link => (
                <a className="link" key={link.id} href={link.url} target="_blank">
                    <p className="linkText">{link.name ? link.name : link.url}</p>
                </a>
            ))}
        </div>
    );
};

export default ProjectLinks;