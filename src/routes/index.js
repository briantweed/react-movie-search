import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info"


const routes = [
    {
        "page": "Home",
        "path": "/",
        "icon": HomeIcon
    },
    {
        "page": "History",
        "path": "/history",
        "icon": InfoIcon
    },
    {
        "page": "Movie",
        "path": "/movie",
        "sidebar": false
    }
];


export default routes;