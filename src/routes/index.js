import HomeIcon from "@material-ui/icons/Home";
import HistoryIcon from '@material-ui/icons/History';
import CacheIcon from '@material-ui/icons/Autorenew';


const routes = [
    {
        "page": "Home",
        "path": "/",
        "icon": HomeIcon
    },
    {
        "page": "History",
        "path": "/history",
        "icon": HistoryIcon
    },
    {
        "page": "Cache",
        "path": "/cache",
        "icon": CacheIcon
    },
    {
        "page": "Movie",
        "path": "/movie",
        "sidebar": false
    }
];


export default routes;