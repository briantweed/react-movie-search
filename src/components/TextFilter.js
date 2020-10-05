import React from "react";
import TextField from "@material-ui/core/TextField";


const TextFilter = (props) => {

    console.log('yo');

    return (
        <TextField
            id={props.name}
            name={props.name}
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