import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";


const SearchByYear = (props) => {

    const searchableYears = () => {
        const years = [];
        const thisYear = new Date().getFullYear();
        for (let year = thisYear; year >= 1900; year--) {
            years.push(year.toString());
        }
        return years;
    };


    return (
        <Autocomplete
            id="year"
            fullWidth
            autoSelect
            autoHighlight
            options={searchableYears()}
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