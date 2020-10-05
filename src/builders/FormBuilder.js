import React, {lazy, useState} from "react";
import Grid from "@material-ui/core/Grid";
import {capitalize} from "../helpers";


const FormBuilder = (props) => {

    const {form} = props;
    const {fields} = form;

    const [formValues, setFormValues] = useState({});

    const updateInputs = (e) => {

    };


    return fields.map((field, index) => {

        let Field = lazy(() => import('../components/' + capitalize(field.type) + 'Filter'));

        return (
            <Grid key={index} item xs={12} sm={4} lg={5}>
                <Field
                    {...field}
                    action={e => updateInputs(e)}
                />
            </Grid>
        )

    })

};


export default FormBuilder;