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
    const { open, handleClose, getObj, setObj, postCategoryOrLink, post, id, dispatch } = props
    const [urlReg] = useState(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/))
    const contentText = {
        category: "Add a new category to this Project.",
        link: "Add a new link"
    }

    const isCategory = () => {
        return Object.keys(getObj).length === 1
    }

    const validInputs = () => {
        if (isCategory()) {
            return getObj.name.length
        } else {
            return urlReg.test(getObj.url)
        }
    }

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Attention</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {isCategory() ? contentText.category : contentText.link}
                    </DialogContentText>
                    {isCategory() ?
                        <TextField
                            autoFocus
                            margin="dense"
                            name="name"
                            onChange={setObj}
                            id="name"
                            label="category"
                            value={getObj.name}
                            fullWidth
                        /> :
                        <>
                            <TextField
                                autoFocus
                                margin="dense"
                                name="url"
                                onChange={setObj}
                                id="url"
                                label="link"
                                value={getObj.url}
                                fullWidth
                            />
                            <TextField
                                margin="dense"
                                name="name"
                                onChange={setObj}
                                id="name"
                                label="name"
                                value={getObj.name}
                                fullWidth
                            />
                        </>
                    }
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button disabled={!validInputs()} onClick={postCategoryOrLink} color="primary">
                        Add
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}