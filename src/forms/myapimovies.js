import {searchableYears} from "../helpers";


export default {

    name: "MyApiMovies",

    fields: [

        // MOVIE TITLE
        {
            "type": "text",
            "name": "title",
            "label": "Movie Title",
            "class": "",
            "validation": [
                "required"
            ]
        },

        // RELEASE YEAR
        {
            "type": "select",
            "name": "year",
            "label": "Release Year",
            "options": searchableYears(),
            "class": ""
        }

    ]

};