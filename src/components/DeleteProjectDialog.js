import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Input from "@material-ui/core/Input"
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function DeleteProjectDialog(props) {
    const { open, handleClose, deleteSubject } = props


    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Attention</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this Project? This actions is irreversible.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={deleteSubject} style={{color:"red"}}>
                        Delete
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}