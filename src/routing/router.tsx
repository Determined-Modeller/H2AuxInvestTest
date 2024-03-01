import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ROUTE_CONSTANTS from "./routeConstants";
import Calculator from "../pages/Calculator";
import Docs from "../pages/Docs";
import CalculatorIntake from "../pages/CalculatorIntake";
import CalculatorPlantType from "../pages/CalculatorPlantType";
import CalculatorConfig from "../pages/CalculatorConfig";
import CalculatorSales from "../pages/CalculatorSales";
import CalculatorConsumer from "../pages/CalculatorConsumer";
import Results from "../pages/Results";

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
        "path": ROUTE_CONSTANTS.CALCULATOR_CONFIG,
        "element": <CalculatorConfig />,
    },
    {
        "path": ROUTE_CONSTANTS.CALCULATOR_SALES,
        "element": <CalculatorSales />,
    },
    {
        "path": ROUTE_CONSTANTS.CALCULATOR_PLANT_TYPE,
        "element": <CalculatorPlantType />,
    },
    {
        "path": ROUTE_CONSTANTS.CALCULATOR_CONSUMER,
        "element": <CalculatorConsumer />,
    },
    {
        "path": ROUTE_CONSTANTS.CALCULATOR_RESULTS,
        "element": <Results />,
    }

])


export default router;