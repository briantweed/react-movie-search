import React, {lazy} from "react";
import {useSelector} from "react-redux";


const ErrorMessage = () => {

    const {error} = useSelector((state) => state.results);
    const Alert = lazy(() => import("@material-ui/lab/Alert"));

    if (!error || typeof error === 'object') {
        return null;
    }

    return (
        <Alert style={{marginBottom: '1rem'}} severity="error">Error: {error}</Alert>
    )

};


export default ErrorMessage;