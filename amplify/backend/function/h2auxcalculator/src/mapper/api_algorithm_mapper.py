

from openapi_client.models.request_schema import RequestSchema
from openapi_client.models.response_schema import ResponseSchema


class ApiAlgorithmMapper:
    def __init__(self):
        self.mockResponse
    
    def requestToAlgInput(request: RequestSchema) -> dict:
        return {}
    def AlgOutToResponse(out: dict) -> ResponseSchema:
        return ResponseSchema.from_json("{}")
        