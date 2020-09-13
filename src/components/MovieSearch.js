import React, {useState, useEffect} from "react";
import shortId from "shortid";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovies, setMovieSearch, clearMovies} from "../redux/actions/movieActions";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import SubmitFormButton from "./SubmitFormButton";
import {makeStyles} from "@material-ui/core/styles";


const MovieSearch = () => {

    const dispatch = useDispatch();

    const {title, year} = useSelector((state) => state.search);

    const [searchForm, setSearchForm] = useState({
        title: title,
        year: year
    });


    const updateField = e => {
        setSearchForm({
            ...searchForm,
            [e.target.name]: e.target.value
        });
    };


    const clear = () => {
        setSearchForm({
            title: '',
            year: ''
        });
        dispatch(clearMovies())
    };


    useEffect(() => {
        dispatch(setMovieSearch(searchForm));
    }, [dispatch, searchForm]);


    const searchableYears = () => {
        const years = [];
        const thisYear = new Date().getFullYear();
        for (let year = thisYear; year >= 1900; year--) {
            years.push(year);
        }
        return years;
    };


    const useStyles = makeStyles(() => ({
        root: {
            "& label .MuiFormLabel-asterisk": {
                color: "#d8000d"
            }
        }
    }));

    const classes = useStyles();


    return (
        <form onSubmit={e => { e.preventDefault(); dispatch(fetchMovies()) }}>

            <Grid container spacing={4}>
                <Grid item xs={12} sm={5} lg={5}>
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
                        onChange={updateField}
                        value={searchForm.title}
                        className={classes.root}
                    />
                </Grid>
                <Grid item xs={12} sm={4} lg={5}>
                    <TextField
                        select
                        id="year"
                        name="year"
                        label="Release Year"
                        variant="outlined"
                        size="small"
                        color="primary"
                        fullWidth
                        InputLabelProps={{shrink: true}}
                        onChange={updateField}
                        value={searchForm.year}
                    >
                        {searchableYears().map(year => {
                            return (
                                <MenuItem
                                    key={shortId.generate()}
                                    value={year}
                                >{ year }</MenuItem>
                            )
                        })}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={3} lg={2}>
                    <SubmitFormButton clear={clear}/>
                </Grid>
            </Grid>

        </form>
    )

};


export default MovieSearch;