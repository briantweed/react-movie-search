import React, {lazy} from "react";
import Grid from "@material-ui/core/Grid";
import {capitalize} from "../helpers";


const FormBuilder = (props) => {

    const {form} = props;
    const {fields} = form;


    return fields.map(field => {

        let Field = lazy(() => import('../components/' + capitalize(field.type) + 'Filter'));

        return (
            <Grid item xs={12} sm={4} lg={5}>
                <Field {...field}/>
            </Grid>
        )

    })

};


export default FormBuilder;