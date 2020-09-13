import React from "react";
import Alert from '@material-ui/lab/Alert';
import {useSelector} from "react-redux";


const ErrorMessage = () => {

    const {error} = useSelector((state) => state.results);

    if (!error) {
        return null;
    }

    return (
        <Alert style={{marginBottom: '1rem'}} severity="error">Error: {error}</Alert>
    )

};


export default ErrorMessage;