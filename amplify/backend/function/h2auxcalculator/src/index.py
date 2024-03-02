import json
from typing import List, Optional
from openapi_client.models.request_schema import RequestSchema
from pydantic import BaseModel, Field

from aws_lambda_powertools import Logger, Tracer
from aws_lambda_powertools.event_handler import APIGatewayRestResolver, Response, content_types, CORSConfig
from aws_lambda_powertools.logging import correlation_paths
from aws_lambda_powertools.utilities.typing import LambdaContext
from aws_lambda_powertools.event_handler.openapi.exceptions import RequestValidationError
from repository.calculation_repository import CalculationRepository

from service.calculator_service import CalculatorService
import os

tracer = Tracer()
logger = Logger()
cors_config = CORSConfig(allow_origin="*", allow_headers=["x-test"], max_age=300)
app = APIGatewayRestResolver(cors=cors_config,enable_validation=True)

calculatorService = CalculatorService()



@app.exception_handler(RequestValidationError)  
def handle_validation_error(ex: RequestValidationError):
    logger.error("Request failed validation", path=app.current_event.path, errors=ex.errors())

    return Response(
        status_code=400,
        content_type=content_types.APPLICATION_JSON,
        body="Invalid data",
    )

@app.post("/calculator/calculate")
def calculate(request: RequestSchema) -> str:
    logger.info("processing POST")
    logger.info(os.environ)
    return json.dumps(calculatorService.calculate(request))


@app.get("/calculator")
def home() -> str:  
    return json.dumps(calculatorService.calculate({}))


@logger.inject_lambda_context(correlation_id_path=correlation_paths.API_GATEWAY_HTTP)
@tracer.capture_lambda_handler
def handler(event: dict, context: LambdaContext) -> dict:
    logger.info("Processing event: {}", event)
    return app.resolve(event, context)