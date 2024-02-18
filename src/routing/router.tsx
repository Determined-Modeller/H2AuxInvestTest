import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ROUTE_CONSTANTS from "./routeConstants";
import Calculator from "../pages/Calculator";
import Docs from "../pages/Docs";
import CalculatorIntake from "../pages/CalculatorIntake";
import CalculatorPlantType from "../pages/CalculatorPlantType";

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
    },
    {
        "path": ROUTE_CONSTANTS.CALCULATOR_INTAKE,
        "element": <CalculatorIntake />,
    },
    {
        "path": ROUTE_CONSTANTS.CALCULATOR_PLANT_TYPE,
        "element": <CalculatorPlantType />,
    }
])


export default router;