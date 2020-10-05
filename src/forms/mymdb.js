import {searchableYears, getMovieRatingOptions, getMovieTags} from "../helpers";


module.exports = {

    name: "MyMDb",

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
        },


        // RATING
        {
            "type": "text",
            "name": "rating",
            "label": "Rating",
            "options": getMovieRatingOptions(),
            "class": ""
        },


        // TAG
        {
            "type": "text",
            "name": "tag",
            "label": "Tag",
            "options": getMovieTags(),
            "class": ""
        }

    ]

};