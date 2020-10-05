import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";


const SelectFilter = (props) => {

    console.log('hi');

    return (
        <Autocomplete
            id={props.name}
            fullWidth
            autoSelect
            autoHighlight
            options={props.options}
            onChange={props.action}
            value={props.value}
            renderInput={(params) => {
                return <TextField
                    {...params}
                    label={props.label}
                    size="small"
                    variant="outlined"
                    color="primary"
                    InputLabelProps={{shrink: true}}
                />
            }}
        />
    )

};


export default SelectFilter;