import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovies, storeMovieSearch, clearMovies, clearMovie, clearSearch, storeSearchHistory, changePage} from "../storage/actions";
import Grid from "@material-ui/core/Grid";
import SearchSubmitButton from "./SearchSubmitButton";
import form from "../forms/myapimovies";
import FormBuilder from "../builders/FormBuilder";


const SearchForm = () => {

    const dispatch = useDispatch();

    const history = useHistory();

    const {title, year} = useSelector((state) => state.search);
    const filters = useSelector((state) => state.search);

    const [searchForm, setSearchForm] = useState({
        title: title,
        year: year
    });
    //
    //
    // const updateField = e => {
    //     setSearchForm({
    //         ...searchForm,
    //         [e.target.name]: e.target.value
    //     });
    // };
    //
    //
    // const updateSelect = (e, value) => {
    //     setSearchForm({
    //         ...searchForm,
    //         year: value
    //     });
    // };
    //

    const clearFields = () => {
        setSearchForm({
            title: '',
            year: ''
        });
        dispatch(clearMovies());
        dispatch(clearMovie());
        dispatch(clearSearch());
        history.push("/");
    };


    useEffect(() => {
        dispatch(storeMovieSearch(searchForm));
    }, [dispatch, searchForm]);


    const submitForm = () => {
        history.push("/");
        dispatch(changePage(1));
        dispatch(fetchMovies());
        dispatch(storeSearchHistory(searchForm));
    };


    return (

        <form onSubmit={e => { e.preventDefault(); submitForm() }}>

            <Grid container spacing={4}>

                <FormBuilder
                    form={form}
                    values={filters}
                />

                <Grid item xs={12} sm={4} lg={2}>
                    <SearchSubmitButton clear={clearFields} />
                </Grid>

            </Grid>

        </form>
    )

};


export default SearchForm;