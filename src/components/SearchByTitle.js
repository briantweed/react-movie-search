import React from "react";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";


const SearchByTitle = (props) => {

    const useStyles = makeStyles(() => ({
        root: {
            "& label .MuiFormLabel-asterisk": {
                color: "#d8000d"
            }
        }
    }));

    const classes = useStyles();


    return (
        <TextField
            id="title"
            name="title"
            label="Movie Title"
            variant="outlined"
            size="small"
            color="primary"
            fullWidth
            required
            InputLabelProps={{shrink: true}}
            onChange={props.action}
            value={props.title}
            className={classes.root}
        />
    )

};


export default SearchByTitle;