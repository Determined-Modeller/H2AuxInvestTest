import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ROUTE_CONSTANTS from "./routeConstants";
import Calculator from "../pages/Calculator";
import Docs from "../pages/Docs";

const router = createBrowserRouter([
    {
        "path": ROUTE_CONSTANTS.HOME,
        "element": <Home />,
    },
    {
        "path": ROUTE_CONSTANTS.DOCS,
        "element": <Docs />,
    },
    {
        "path": ROUTE_CONSTANTS.CALCULATOR,
        "element": <Calculator />,
    }
])


export default router;