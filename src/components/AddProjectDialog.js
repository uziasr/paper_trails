import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Input from "@material-ui/core/Input"
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog(props) {
    const { open, handleClose, projects, addProject } = props

    const [newProject, setNewProject] = useState('')

    const invalidInputs = () => {
        return !newProject
    }

    const projectExist = () => {
        return projects.filter(project => project.name === newProject).length
    }

    const betterHandleClose = () => {
        setNewProject('')
        handleClose()
    }

    return (
        <div>
            <Dialog open={open} onClose={betterHandleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Attention</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Add the name of the new Project
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="name"
                        onChange={e => setNewProject(e.target.value)}
                        id="name"
                        label="Project"
                        value={newProject}
                        fullWidth
                    />
                    <DialogContentText>
                        {projectExist() ? "This project already exist, but you may create it" : null}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={betterHandleClose} color="primary">
                        Cancel
          </Button>
                    <Button disabled={invalidInputs()} onClick={() => {
                        addProject(newProject)
                        setNewProject('')
                    }} color="primary">
                        Add
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}