import React, { useState, useEffect } from 'react';
import { getProjectByID } from "../store/actions"
import { useSelector, useDispatch } from "react-redux"
import ProjectLinks from "./ProjectLinks"
import { postCategory, postLink } from "../store/actions"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddDialog from "./AddDialog"


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    ".MuiInput-root": {
        color: "white",
    }
}));




const ProjectDetails = () => {

    const project = useSelector(state => state.fullProject)
    const dispatch = useDispatch()
    const [activeCategory, setActiveCategory] = useState(null)
    const [open, setOpen] = useState(false);
    const [newCategory, setNewCategory] = useState({ name: "" })
    const [newLink, setNewLink] = useState({
        url: "",
        name: ""
    })
    const [dialogProps, setDialogProps] = useState([newCategory, setNewCategory])
    const projectArr = window.location.pathname.split('/')
    const projectId = projectArr[projectArr.length - 1]
    const classes = useStyles();



    useEffect(() => {
        dispatch(getProjectByID(projectId))
    }, [])


    const activeHandler = (category) => {
        if (activeCategory) {
            activeCategory.category === category.category ? setActiveCategory(null) : setActiveCategory(category)
        } else {
            setActiveCategory(category)
        }
    }

    const newCategoryEvent = () => {
        setDialogProps([newCategory, setNewCategory])
        setOpen(true)
    }

    const newLinkEvent = () =>{
        setDialogProps([newLink, setNewLink])
        setOpen(true)
    }


    return (

        project.project !== null ? <div className="projectDetailsRoot">
            <div className="projectDetailsColumn">
                <p className="projectDetailsTitle">{project.project}</p>
            </div>
            <div className="projectContent">
                {/* <div className="newCategory">
                    <p>{activeCategory ? "Add Link" : "Add Category"}</p>
                    {activeCategory ?
                        <>
                            <TextField
                                name="name"
                                onChange={(e) => categoryOnChange(e)}
                                value={newLink.name}
                                placeholder="enter name"
                                className={classes["MuiInputBase-input"]} />
                            <TextField
                                name="url"
                                onChange={(e) => categoryOnChange(e)}
                                value={newLink.url}
                                placeholder={"enter url*"}
                                className={classes["MuiInputBase-input"]}
                            />
                        </>
                        : <TextField
                            name="category"
                            onChange={(e) => categoryOnChange(e)}
                            value={newCategory}
                            placeholder={"enter category*"}
                            className={classes["MuiInputBase-input"]}
                        />}
                    <div className="categoryButton">
                        <Button
                            variant="contained"
                            style={{ borderRadius: "0" }}
                            color="primary"
                            onClick={() => categoryHandler()}
                            disabled={activeCategory ? newLink.url === "" : newCategory === ""}
                        >Submit</Button>
                    </div>
                </div> */}
                <div className="projectContentDetailsColumn clickable">
                    {project.categories.map((category, index) => (
                        <div className="projectCategoryTextWrap" key={index} onClick={() => activeHandler(category)}>
                            <p
                                style={{ color: !activeCategory ? null : category.category == activeCategory.category ? "mediumseagreen" : null, transition: "0.35s" }}
                            >{category.category}</p>
                        </div>
                    ))}
                    <div style={{ display: "flex", flexDirection: "column", width: "60%" }}>
                        <div>
                            <Button variant="contained" onClick={newCategoryEvent} color="primary">+</Button>
                        </div>
                    </div>
                </div>
                {activeCategory ?
                    <ProjectLinks category={activeCategory} />
                    : null}
                <AddDialog open={open} setOpen={setOpen} addForm={dialogProps}/>
            </div>
        </div> : null

    );
};

export default ProjectDetails;