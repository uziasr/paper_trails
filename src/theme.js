import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    overrides: {
        "MuiInputBase-input": {
            root: {
                borderRadius: 0,
                backgroundColor: "#fff",
                border: '1px solid pink',
                fontSize: 16,
                padding: '10px 12px',
                width: 'calc(100% - 24px)',
                background: "black"
            },
        }
    }
});

export default theme
