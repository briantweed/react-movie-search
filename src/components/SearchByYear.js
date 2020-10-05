import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";


const SearchByYear = (props) => {

    return (
        <Autocomplete
            id="year"
            fullWidth
            autoSelect
            autoHighlight
            options={props.options}
            onChange={props.action}
            value={props.year}
            renderInput={(params) => {
                return <TextField
                    {...params}
                    label="Release Year"
                    size="small"
                    variant="outlined"
                    color="primary"
                    InputLabelProps={{shrink: true}}
                />
            }}
        />
    )

};


export default SearchByYear;