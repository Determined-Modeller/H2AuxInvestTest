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
from pydantic import BaseModel, StrictBool, StrictFloat, StrictInt, StrictStr
from openapi_client.models.response_schema_dispensers_inner_equipment import ResponseSchemaDispensersInnerEquipment
from openapi_client.models.response_schema_dispensers_inner_meta import ResponseSchemaDispensersInnerMeta

class ResponseSchemaCompressorsInner(BaseModel):
    """
    ResponseSchemaCompressorsInner
    """
    id: Optional[StrictStr] = None
    static: Optional[StrictBool] = None
    meta: Optional[ResponseSchemaDispensersInnerMeta] = None
    power: Optional[Union[StrictFloat, StrictInt]] = None
    cooling_energy: Optional[Union[StrictFloat, StrictInt]] = None
    compression_energy: Optional[Union[StrictFloat, StrictInt]] = None
    equipment: Optional[ResponseSchemaDispensersInnerEquipment] = None
    equipment_lcoh: Optional[ResponseSchemaDispensersInnerEquipment] = None
    installation: Optional[ResponseSchemaDispensersInnerEquipment] = None
    installation_lcoh: Optional[ResponseSchemaDispensersInnerEquipment] = None
    maintenance: Optional[ResponseSchemaDispensersInnerEquipment] = None
    maintenance_lcoh: Optional[ResponseSchemaDispensersInnerEquipment] = None
    energy: Optional[ResponseSchemaDispensersInnerEquipment] = None
    energy_lcoh: Optional[ResponseSchemaDispensersInnerEquipment] = None
    sum_capex: Optional[ResponseSchemaDispensersInnerEquipment] = None
    sum_opex: Optional[ResponseSchemaDispensersInnerEquipment] = None
    sum_lcoh: Optional[ResponseSchemaDispensersInnerEquipment] = None
    __properties = ["id", "static", "meta", "power", "cooling_energy", "compression_energy", "equipment", "equipment_lcoh", "installation", "installation_lcoh", "maintenance", "maintenance_lcoh", "energy", "energy_lcoh", "sum_capex", "sum_opex", "sum_lcoh"]

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
    def from_json(cls, json_str: str) -> ResponseSchemaCompressorsInner:
        """Create an instance of ResponseSchemaCompressorsInner from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # override the default output from pydantic by calling `to_dict()` of meta
        if self.meta:
            _dict['meta'] = self.meta.to_dict()
        # override the default output from pydantic by calling `to_dict()` of equipment
        if self.equipment:
            _dict['equipment'] = self.equipment.to_dict()
        # override the default output from pydantic by calling `to_dict()` of equipment_lcoh
        if self.equipment_lcoh:
            _dict['equipment_lcoh'] = self.equipment_lcoh.to_dict()
        # override the default output from pydantic by calling `to_dict()` of installation
        if self.installation:
            _dict['installation'] = self.installation.to_dict()
        # override the default output from pydantic by calling `to_dict()` of installation_lcoh
        if self.installation_lcoh:
            _dict['installation_lcoh'] = self.installation_lcoh.to_dict()
        # override the default output from pydantic by calling `to_dict()` of maintenance
        if self.maintenance:
            _dict['maintenance'] = self.maintenance.to_dict()
        # override the default output from pydantic by calling `to_dict()` of maintenance_lcoh
        if self.maintenance_lcoh:
            _dict['maintenance_lcoh'] = self.maintenance_lcoh.to_dict()
        # override the default output from pydantic by calling `to_dict()` of energy
        if self.energy:
            _dict['energy'] = self.energy.to_dict()
        # override the default output from pydantic by calling `to_dict()` of energy_lcoh
        if self.energy_lcoh:
            _dict['energy_lcoh'] = self.energy_lcoh.to_dict()
        # override the default output from pydantic by calling `to_dict()` of sum_capex
        if self.sum_capex:
            _dict['sum_capex'] = self.sum_capex.to_dict()
        # override the default output from pydantic by calling `to_dict()` of sum_opex
        if self.sum_opex:
            _dict['sum_opex'] = self.sum_opex.to_dict()
        # override the default output from pydantic by calling `to_dict()` of sum_lcoh
        if self.sum_lcoh:
            _dict['sum_lcoh'] = self.sum_lcoh.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> ResponseSchemaCompressorsInner:
        """Create an instance of ResponseSchemaCompressorsInner from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return ResponseSchemaCompressorsInner.parse_obj(obj)

        _obj = ResponseSchemaCompressorsInner.parse_obj({
            "id": obj.get("id"),
            "static": obj.get("static"),
            "meta": ResponseSchemaDispensersInnerMeta.from_dict(obj.get("meta")) if obj.get("meta") is not None else None,
            "power": obj.get("power"),
            "cooling_energy": obj.get("cooling_energy"),
            "compression_energy": obj.get("compression_energy"),
            "equipment": ResponseSchemaDispensersInnerEquipment.from_dict(obj.get("equipment")) if obj.get("equipment") is not None else None,
            "equipment_lcoh": ResponseSchemaDispensersInnerEquipment.from_dict(obj.get("equipment_lcoh")) if obj.get("equipment_lcoh") is not None else None,
            "installation": ResponseSchemaDispensersInnerEquipment.from_dict(obj.get("installation")) if obj.get("installation") is not None else None,
            "installation_lcoh": ResponseSchemaDispensersInnerEquipment.from_dict(obj.get("installation_lcoh")) if obj.get("installation_lcoh") is not None else None,
            "maintenance": ResponseSchemaDispensersInnerEquipment.from_dict(obj.get("maintenance")) if obj.get("maintenance") is not None else None,
            "maintenance_lcoh": ResponseSchemaDispensersInnerEquipment.from_dict(obj.get("maintenance_lcoh")) if obj.get("maintenance_lcoh") is not None else None,
            "energy": ResponseSchemaDispensersInnerEquipment.from_dict(obj.get("energy")) if obj.get("energy") is not None else None,
            "energy_lcoh": ResponseSchemaDispensersInnerEquipment.from_dict(obj.get("energy_lcoh")) if obj.get("energy_lcoh") is not None else None,
            "sum_capex": ResponseSchemaDispensersInnerEquipment.from_dict(obj.get("sum_capex")) if obj.get("sum_capex") is not None else None,
            "sum_opex": ResponseSchemaDispensersInnerEquipment.from_dict(obj.get("sum_opex")) if obj.get("sum_opex") is not None else None,
            "sum_lcoh": ResponseSchemaDispensersInnerEquipment.from_dict(obj.get("sum_lcoh")) if obj.get("sum_lcoh") is not None else None
        })
        return _obj


