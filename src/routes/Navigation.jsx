import {
    BrowserRouter as Router,
    Switch, 
    Route, 
    Link
} from "react-router-dom";

const routes = [
    {
        path: "/",
        exact: true,
        main: ()=> <h2>home</h2>
    },
    {
        path: "/",
        exact: true,
        main: ()=> <h2>Movies</h2>
    },
    {
        path: "/",
        exact: true,
        main: ()=> <h2>TV Shows</h2>
    },
    {
        path: "/",
        exact: true,
        main: ()=> <h2>People</h2>
    }
]
