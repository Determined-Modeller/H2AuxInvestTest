# coding: utf-8

"""
    h2AuxCalculatorApi

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 2018-05-24T17:52:00Z
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json


from typing import Optional, Union
from pydantic import BaseModel, Field, StrictBool, StrictFloat, StrictInt, StrictStr, confloat, conint, validator
from openapi_client.models.dispensing_rate import DispensingRate
from openapi_client.models.request_schema_dispensing_pressure import RequestSchemaDispensingPressure
from openapi_client.models.request_schema_hydrogen_inlet_pressure import RequestSchemaHydrogenInletPressure
from openapi_client.models.request_schema_storage_mass import RequestSchemaStorageMass
from openapi_client.models.request_schema_storage_pressure import RequestSchemaStoragePressure

class RequestSchema(BaseModel):
    """
    RequestSchema
    """
    hydrogen_inlet_pressure: RequestSchemaHydrogenInletPressure = Field(...)
    dispensing_type: StrictStr = Field(...)
    energy_price_per_mwh: Optional[Union[confloat(le=1.5E+2, ge=1E+1, strict=True), conint(le=150, ge=10, strict=True)]] = None
    is_storage_required: Optional[StrictBool] = None
    storage_mass: Optional[RequestSchemaStorageMass] = None
    storage_pressure: Optional[RequestSchemaStoragePressure] = None
    dispensing_pressure: Optional[RequestSchemaDispensingPressure] = None
    dispensing_mass: Optional[DispensingRate] = None
    avg_hydrogen_dispensing_rate: Optional[DispensingRate] = None
    peak_hydrogen_dispensing_rate: Optional[DispensingRate] = None
    lifetime_years: Optional[Union[StrictFloat, StrictInt]] = None
    wacc: Optional[Union[StrictFloat, StrictInt]] = None
    is_precooling_used: Optional[StrictBool] = None
    vehicle_type: Optional[StrictStr] = None
    __properties = ["hydrogen_inlet_pressure", "dispensing_type", "energy_price_per_mwh", "is_storage_required", "storage_mass", "storage_pressure", "dispensing_pressure", "dispensing_mass", "avg_hydrogen_dispensing_rate", "peak_hydrogen_dispensing_rate", "lifetime_years", "wacc", "is_precooling_used", "vehicle_type"]

    @validator('dispensing_type')
    def dispensing_type_validate_enum(cls, value):
        """Validates the enum"""
        if value not in ('TUBETRAILER', 'VEHICLE'):
            raise ValueError("must be one of enum values ('TUBETRAILER', 'VEHICLE')")
        return value

    @validator('vehicle_type')
    def vehicle_type_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in ('TUBETRAILER', 'CAR', 'HDV', 'CUSTOM'):
            raise ValueError("must be one of enum values ('TUBETRAILER', 'CAR', 'HDV', 'CUSTOM')")
        return value

    class Config:
        """Pydantic configuration"""
        allow_population_by_field_name = True
        validate_assignment = True

    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.dict(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> RequestSchema:
        """Create an instance of RequestSchema from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # override the default output from pydantic by calling `to_dict()` of hydrogen_inlet_pressure
        if self.hydrogen_inlet_pressure:
            _dict['hydrogen_inlet_pressure'] = self.hydrogen_inlet_pressure.to_dict()
        # override the default output from pydantic by calling `to_dict()` of storage_mass
        if self.storage_mass:
            _dict['storage_mass'] = self.storage_mass.to_dict()
        # override the default output from pydantic by calling `to_dict()` of storage_pressure
        if self.storage_pressure:
            _dict['storage_pressure'] = self.storage_pressure.to_dict()
        # override the default output from pydantic by calling `to_dict()` of dispensing_pressure
        if self.dispensing_pressure:
            _dict['dispensing_pressure'] = self.dispensing_pressure.to_dict()
        # override the default output from pydantic by calling `to_dict()` of dispensing_mass
        if self.dispensing_mass:
            _dict['dispensing_mass'] = self.dispensing_mass.to_dict()
        # override the default output from pydantic by calling `to_dict()` of avg_hydrogen_dispensing_rate
        if self.avg_hydrogen_dispensing_rate:
            _dict['avg_hydrogen_dispensing_rate'] = self.avg_hydrogen_dispensing_rate.to_dict()
        # override the default output from pydantic by calling `to_dict()` of peak_hydrogen_dispensing_rate
        if self.peak_hydrogen_dispensing_rate:
            _dict['peak_hydrogen_dispensing_rate'] = self.peak_hydrogen_dispensing_rate.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> RequestSchema:
        """Create an instance of RequestSchema from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return RequestSchema.parse_obj(obj)

        _obj = RequestSchema.parse_obj({
            "hydrogen_inlet_pressure": RequestSchemaHydrogenInletPressure.from_dict(obj.get("hydrogen_inlet_pressure")) if obj.get("hydrogen_inlet_pressure") is not None else None,
            "dispensing_type": obj.get("dispensing_type"),
            "energy_price_per_mwh": obj.get("energy_price_per_mwh"),
            "is_storage_required": obj.get("is_storage_required"),
            "storage_mass": RequestSchemaStorageMass.from_dict(obj.get("storage_mass")) if obj.get("storage_mass") is not None else None,
            "storage_pressure": RequestSchemaStoragePressure.from_dict(obj.get("storage_pressure")) if obj.get("storage_pressure") is not None else None,
            "dispensing_pressure": RequestSchemaDispensingPressure.from_dict(obj.get("dispensing_pressure")) if obj.get("dispensing_pressure") is not None else None,
            "dispensing_mass": DispensingRate.from_dict(obj.get("dispensing_mass")) if obj.get("dispensing_mass") is not None else None,
            "avg_hydrogen_dispensing_rate": DispensingRate.from_dict(obj.get("avg_hydrogen_dispensing_rate")) if obj.get("avg_hydrogen_dispensing_rate") is not None else None,
            "peak_hydrogen_dispensing_rate": DispensingRate.from_dict(obj.get("peak_hydrogen_dispensing_rate")) if obj.get("peak_hydrogen_dispensing_rate") is not None else None,
            "lifetime_years": obj.get("lifetime_years"),
            "wacc": obj.get("wacc"),
            "is_precooling_used": obj.get("is_precooling_used"),
            "vehicle_type": obj.get("vehicle_type")
        })
        return _obj


