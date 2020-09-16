import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovies, storeMovieSearch, clearMovies, storeSearchHistory} from "../storage/actions";
import Grid from "@material-ui/core/Grid";
import SearchByTitle from "./SearchByTitle";
import SearchByYear from "./SearchByYear";
import SubmitFormButton from "./SubmitFormButton";


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


    const updateSelect = (e, value) => {
        setSearchForm({
            ...searchForm,
            year: value
        });
    };


    const clearFields = () => {
        setSearchForm({
            title: '',
            year: ''
        });
        dispatch(clearMovies())
    };


    useEffect(() => {
        dispatch(storeMovieSearch(searchForm));
    }, [dispatch, searchForm]);


    const submitForm = () => {
        dispatch(fetchMovies());
        dispatch(storeSearchHistory(searchForm));
    };


    return (
        <form onSubmit={e => { e.preventDefault(); submitForm() }}>

            <Grid container spacing={4}>
                <Grid item xs={12} sm={4} lg={5}>
                    <SearchByTitle
                        action={updateField}
                        title={searchForm.title}
                    />
                </Grid>
                <Grid item xs={12} sm={4} lg={5}>
                    <SearchByYear
                        action={updateSelect}
                        year={searchForm.year}
                    />
                </Grid>
                <Grid item xs={12} sm={4} lg={2}>
                    <SubmitFormButton clear={clearFields} />
                </Grid>
            </Grid>

        </form>
    )

};


export default MovieSearch;