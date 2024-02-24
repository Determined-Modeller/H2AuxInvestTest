from typing import List, Optional
import json

from pydantic import BaseModel, Field

from aws_lambda_powertools import Logger, Tracer
from aws_lambda_powertools.event_handler import APIGatewayRestResolver
from aws_lambda_powertools.utilities.typing import LambdaContext

tracer = Tracer()
logger = Logger()
app = APIGatewayRestResolver(enable_validation=True)  


class CalculatorForm(BaseModel):  
    energyCost: int
    id_: Optional[int] = Field(alias="id", default=None)


@app.post("/calculator/calculate")
@tracer.capture_method
def create_todo(formData: CalculatorForm) -> str:  
    return json.dumps(formData) 


@app.get("/calculator")
@tracer.capture_method
def get_todos():
    return json.dumps("This is a test") 


@tracer.capture_lambda_handler
def handler(event: dict, context: LambdaContext) -> dict:
    return app.resolve(event, context)