import React, { useState, useEffect } from 'react';
import { getProjectByID } from "../store/actions"
import { useSelector, useDispatch } from "react-redux"
import ProjectLinks from "./ProjectLinks"
import { postCategory } from "../store/actions"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


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
    const [newCategory, setNewCategory] = useState("")
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

    const categoryOnChange = (e) => {
        setNewCategory(e.target.value)
    }

    const categoryHandler = () => {
        dispatch(postCategory(projectId, { name: newCategory }))
    }


    return (

        project.project !== null ? <div className="projectDetailsRoot">
            <div className="projectDetailsColumn">
                <p className="projectDetailsTitle">{project.project}</p>
            </div>
            <div className="projectContent">
                <div className="newCategory">
                    <p>Add Category</p>
                    <TextField
                        name="category"
                        onChange={(e) => categoryOnChange(e)}
                        value={newCategory}
                        placeholder="new category"
                        className={classes["MuiInputBase-input"]}
                    />
                    <div className="categoryButton">
                        <Button 
                        variant="contained"
                        style={{borderRadius:"0"}}
                        color="primary"
                        onClick={()=>categoryHandler()}
                        disabled={newCategory===""}
                        >Submit</Button>
                    </div>
                </div>
                <div className="projectContentDetailsColumn clickable">{project.categories.map((category, index) => (
                    <div className="projectCategoryTextWrap" key={index} style={{ color: !activeCategory ? null : category.category == activeCategory.category ? "mediumseagreen" : null, borderRadius: "15px" }} onClick={() => activeHandler(category)}>
                        <p>{category.category}</p>
                    </div>
                ))}
                </div>
                {activeCategory ?
                    <ProjectLinks category={activeCategory} />
                    : null}
            </div>
        </div> : null

    );
};

export default ProjectDetails;