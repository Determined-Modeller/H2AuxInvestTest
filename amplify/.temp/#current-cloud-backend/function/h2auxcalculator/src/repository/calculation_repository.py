from aws_lambda_powertools import Logger
import boto3
from boto3.dynamodb.types import TypeSerializer
from repository.calculation_dict import CalculationDict

import os

logger = Logger()

class CalculationRepository:
    def __init__(self):
        dynamodb = boto3.resource('dynamodb')
        self.dynamo_table = dynamodb.Table('h2auxcalculations' + '-' + os.environ.get('ENV'))
            
    def save(self, dict: CalculationDict) -> dict:
        logger.info('Saving data to dynamo')
        logger.info(dict.get_dict())
        self.dynamo_table.put_item(Item=dict.get_dict())
        logger.info('Saved successfully')