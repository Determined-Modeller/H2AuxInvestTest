


import datetime
import json
import uuid
from lib.h2_aux_cost_calculator import H2AuxCostCalculator
from openapi_client.models.request_schema import RequestSchema
from openapi_client.models.response_schema import ResponseSchema
from repository.calculation_dict import CalculationDict

from repository.calculation_repository import CalculationRepository

from mapper.api_algorithm_mapper import ApiAlgorithmMapper

class CalculatorService():
    def __init__(self):
        self.repository = CalculationRepository()
        self.algorithm = H2AuxCostCalculator()
        self.mapper = ApiAlgorithmMapper()
    
    def calculate(self, request: RequestSchema) -> ResponseSchema:

        request_id = str(uuid.uuid4())
        
        alg_inputs = self.mapper.requestToAlgInput(request)
        calculation_result = self.algorithm.calculate_costs(alg_inputs)
        
        calc_dict = CalculationDict(
            request_id = request_id,
            request_json = json.dumps(request.to_dict()),
            response_json = json.dumps(calculation_result),
            created_at = str(datetime.datetime.now()),
        )
        self.repository.save(calc_dict)
        
        response = self.mapper.algOutToResponse(calculation_result)
        
        return response