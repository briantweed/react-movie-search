import React from "react";
import TextField from "@material-ui/core/TextField";
// import withStyles from "@material-ui/core/styles/withStyles";
//
//
// const SearchField = withStyles(() => ({
//     root: {
//         "& label .MuiFormLabel-asterisk": {
//             color: "#d8000d"
//         }
//     }
// }))(TextField);


const TextFilter = (props) => {

    return (
        <TextField
            id={props.id}
            name={props.id}
            label={props.label}
            value={props.value}
            size="small"
            color="primary"
            variant="outlined"
            fullWidth
            InputLabelProps={{shrink: true}}
            onChange={props.action}
        />
    )

};


export default TextFilter;