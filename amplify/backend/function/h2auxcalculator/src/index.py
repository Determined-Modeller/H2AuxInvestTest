import json
from typing import List, Optional
from pydantic import BaseModel, Field

from aws_lambda_powertools import Logger, Tracer
from aws_lambda_powertools.event_handler import APIGatewayRestResolver
from aws_lambda_powertools.logging import correlation_paths
from aws_lambda_powertools.utilities.typing import LambdaContext

from service.calculator_service import CalculatorService

tracer = Tracer()
logger = Logger()
app = APIGatewayRestResolver(enable_validation=False)  
calculatorService = CalculatorService()


@app.post("/calculator/calculate")
def calculate() -> str:  
    return json.dumps(calculatorService.calculate("test"))


@app.get("/calculator")
def home() -> str:  
    return json.dumps(calculatorService.calculate({}))


@logger.inject_lambda_context(correlation_id_path=correlation_paths.API_GATEWAY_HTTP)
@tracer.capture_lambda_handler
def handler(event: dict, context: LambdaContext) -> dict:
    return app.resolve(event, context)