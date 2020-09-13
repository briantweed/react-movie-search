import React from 'react';
import shortId from 'shortid';
import {useSelector} from "react-redux";
import Helmet from "react-helmet";
import {FAKE_MOVIES} from "../constants";

const Text = () => {

    const {title, year} = useSelector((state) => state.search);

    return (
        <>
            <Helmet>
                <title>MovieSearch | Search Info</title>
            </Helmet>

            <h2>Search Info:</h2>
            <table>
                <tbody>
                <tr>
                    <td><b>Title:</b></td>
                    <td>"{ title ? title : "n/a" }"</td>
                </tr>
                <tr>
                    <td><b>Year:</b></td>
                    <td>"{ year ? year : "n/a" }"</td>
                </tr>
                </tbody>
            </table>

            <br/><br/>

            <h2>Fake Movies</h2>
            <p>These are used when the API query limit is reached</p>
            <br/>
            {FAKE_MOVIES.map(movie => {
                return (
                    <div key={shortId.generate()}>
                        <p>{ movie.title } ({ movie.year })</p>
                    </div>
                )
            })}

        </>
    )

};


export default Text;