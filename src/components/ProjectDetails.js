import React, { useState, useEffect, memo } from 'react';
import { getProjectByID } from "../store/actions"
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import ProjectLinks from "./ProjectLinks"
import { postCategory, postLink } from "../store/actions"
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddDialog from "./AddDialog"
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from "react-router-dom"



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

    const history = useHistory()
    const state = useSelector(state => (state), shallowEqual)
    const { loading } = state
    const project = state.fullProject
    const dispatch = useDispatch()
    // const [project, setProject] = useState()
    const [activeCategory, setActiveCategory] = useState(null)
    const [open, setOpen] = useState(false);
    const [newCategory, setNewCategory] = useState({ name: "" })
    const [newLink, setNewLink] = useState({
        url: "",
        name: ""
    })
    const [addingNewCategory, setAddingNewCategory] = useState(true)
    const projectArr = window.location.pathname.split('/')
    const projectId = projectArr[projectArr.length - 1]


    useEffect(() => {
        dispatch(getProjectByID(projectId))
    }, [])

    useEffect(() => {
        let currentCategory = activeCategory ? project.categories.filter(category => activeCategory.id === category.id)[0] : null
        setActiveCategory(currentCategory)
    }, [project])

    const activeHandler = (category) => {
        if (activeCategory) {
            activeCategory.name === category.name ? setActiveCategory(null) : setActiveCategory(category)
        } else {
            setActiveCategory(category)
        }
    }

    const onInputChange = (event) => {
        if (!event.target) return
        if (addingNewCategory) {
            setNewCategory({ name: event.target.value })
        } else {
            setNewLink({ ...newLink, [event.target.name]: event.target.value })
        }
    }

    const newCategoryEvent = () => {
        setAddingNewCategory(true)
        setOpen(true)
    }

    const newLinkEvent = () => {
        setAddingNewCategory(false)
        setOpen(true)
    }

    const handleClose = () => {
        addingNewCategory ? setNewCategory({ name: '' }) : setNewLink({ url: "", name: "" })
        setOpen(false);
    }

    const postCategoryOrLink = () => {
        if (addingNewCategory) {
            dispatch(postCategory(projectId, newCategory))
        } else {
            dispatch(postLink(activeCategory.id, newLink))
        }
        handleClose()
    }
    if (loading) {
        return (<h1>loading...</h1>)
    }

    return (
        project.project !== null ? <div className="projectDetailsRoot">
            <div className="projectDetailsColumn">
                <div style={{ display: "flex" }}>
                    <Tooltip style={{ margin: "0 6%" }} title="Back">
                        <IconButton aria-label="back">
                            <ArrowBackIcon onClick={() => history.push({
                                pathname: `/`,
                            })} style={{ color: "white" }} />
                        </IconButton>
                    </Tooltip>
                    <div>
                        <p className="projectDetailsTitle">{project.project}</p>
                    </div>

                </div>
            </div>
            <div className="projectContent">
                <div className="projectContentDetailsColumn clickable">
                    <div style={{ display: "flex", flexDirection: "column", width: "60%" }}>
                        <div>
                            <Button variant="contained" onClick={newCategoryEvent} color="primary">+</Button>
                        </div>
                    </div>
                    {project.categories.map((category, index) => {
                        return <div className="projectCategoryTextWrap" key={index} onClick={() => activeHandler(category)}>
                            <p style={{ color: !activeCategory ? null : category.name == activeCategory.name ? "mediumseagreen" : null, transition: "0.35s" }}
                            >{category.name}</p>
                        </div>
                    })}
                </div>
                {activeCategory ?
                    <ProjectLinks category={activeCategory} newLinkEvent={newLinkEvent} />
                    : null}
                <AddDialog open={open} postCategoryOrLink={postCategoryOrLink} dispatch={dispatch} handleClose={handleClose} getObj={addingNewCategory ? newCategory : newLink} setObj={onInputChange} post={addingNewCategory ? postCategory : postLink} id={activeCategory ? activeCategory.id : projectId} />
            </div>
        </div> : null

    );
};

export default memo(ProjectDetails);