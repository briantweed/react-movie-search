import React from "react";
import TextField from "@material-ui/core/TextField";
import withStyles from "@material-ui/core/styles/withStyles";


const SearchByTitle = (props) => {

    const SearchField = withStyles(() => ({
        root: {
            "& label .MuiFormLabel-asterisk": {
                color: "#d8000d"
            }
        }
    }))(TextField);


    return (
        <SearchField
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
        />
    )

};


export default SearchByTitle;