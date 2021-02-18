import React from 'react';
import Button from '@material-ui/core/Button';

const ProjectLinks = ({ category, newLinkEvent }) => {

    return (
        <div className="projectDetailsColumn clickable">
            <div style={{ alignSelf: "flex-start", marginBottom: "5px" }}>
                <Button variant="contained" onClick={newLinkEvent} color="primary">+</Button>
            </div>
            {category.links.length ? category.links.map(link => (
                <div className="linkWrap">
                    <a className="link" key={link.id} href={link.url} target="_blank">
                        <p className="linkText">{link.name ? link.name : link.url}</p>
                    </a>
                </div>
            )) : <p>No links so far..</p>}
        </div>
    );
};

export default ProjectLinks;