import boto3
from boto3.dynamodb.types import TypeSerializer
from repository.calculation_dict import CalculationDict

class CalculationRepository:
    def __init__(self):
        dynamodb = boto3.resource('dynamodb')
        self.dynamo_table = dynamodb.Table('h2auxcalculations')
        
    def serialize(self, dict: CalculationDict) -> dict:
            serializer = TypeSerializer()
            return {
                k: serializer.serialize(v)
                for k, v in dict.items()
            }
            
    def save(self, dict: CalculationDict) -> dict:
        self.dynamo_table.put_item(Item=self.serialize(dict))