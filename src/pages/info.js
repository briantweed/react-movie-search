import React from 'react';
import {useSelector} from "react-redux";
import Helmet from "react-helmet";


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
                    <td>{ title ? title : "n/a" }</td>
                </tr>
                <tr>
                    <td><b>Year:</b></td>
                    <td>{ year ? year : "n/a" }</td>
                </tr>
                </tbody>
            </table>

        </>
    )

};


export default Text;