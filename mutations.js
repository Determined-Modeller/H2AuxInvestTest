/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDistributedFillingStationInputs = /* GraphQL */ `
  mutation CreateDistributedFillingStationInputs(
    $input: CreateDistributedFillingStationInputsInput!
    $condition: ModelDistributedFillingStationInputsConditionInput
  ) {
    createDistributedFillingStationInputs(
      input: $input
      condition: $condition
    ) {
      id
      TTSupplyPressure
      TTEffectiveCapacity
      NumTTDeliveries
      TTUsageProfile
      VFDispensingOption
      VFMaxVehicleTankCapacity
      VFSizeOfFleet
      VFTimeToFill
      VFLingeringTime
      VFFillingProfile
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateDistributedFillingStationInputs = /* GraphQL */ `
  mutation UpdateDistributedFillingStationInputs(
    $input: UpdateDistributedFillingStationInputsInput!
    $condition: ModelDistributedFillingStationInputsConditionInput
  ) {
    updateDistributedFillingStationInputs(
      input: $input
      condition: $condition
    ) {
      id
      TTSupplyPressure
      TTEffectiveCapacity
      NumTTDeliveries
      TTUsageProfile
      VFDispensingOption
      VFMaxVehicleTankCapacity
      VFSizeOfFleet
      VFTimeToFill
      VFLingeringTime
      VFFillingProfile
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteDistributedFillingStationInputs = /* GraphQL */ `
  mutation DeleteDistributedFillingStationInputs(
    $input: DeleteDistributedFillingStationInputsInput!
    $condition: ModelDistributedFillingStationInputsConditionInput
  ) {
    deleteDistributedFillingStationInputs(
      input: $input
      condition: $condition
    ) {
      id
      TTSupplyPressure
      TTEffectiveCapacity
      NumTTDeliveries
      TTUsageProfile
      VFDispensingOption
      VFMaxVehicleTankCapacity
      VFSizeOfFleet
      VFTimeToFill
      VFLingeringTime
      VFFillingProfile
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createDistributedIndustrialUser = /* GraphQL */ `
  mutation CreateDistributedIndustrialUser(
    $input: CreateDistributedIndustrialUserInput!
    $condition: ModelDistributedIndustrialUserConditionInput
  ) {
    createDistributedIndustrialUser(input: $input, condition: $condition) {
      id
      TTSupplyPressure
      TTEffectiveCapacity
      NumTTDeliveries
      TTUsageProfile
      MinServiceFlowrate
      MinServicePressure
      IndUsageProfile
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateDistributedIndustrialUser = /* GraphQL */ `
  mutation UpdateDistributedIndustrialUser(
    $input: UpdateDistributedIndustrialUserInput!
    $condition: ModelDistributedIndustrialUserConditionInput
  ) {
    updateDistributedIndustrialUser(input: $input, condition: $condition) {
      id
      TTSupplyPressure
      TTEffectiveCapacity
      NumTTDeliveries
      TTUsageProfile
      MinServiceFlowrate
      MinServicePressure
      IndUsageProfile
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteDistributedIndustrialUser = /* GraphQL */ `
  mutation DeleteDistributedIndustrialUser(
    $input: DeleteDistributedIndustrialUserInput!
    $condition: ModelDistributedIndustrialUserConditionInput
  ) {
    deleteDistributedIndustrialUser(input: $input, condition: $condition) {
      id
      TTSupplyPressure
      TTEffectiveCapacity
      NumTTDeliveries
      TTUsageProfile
      MinServiceFlowrate
      MinServicePressure
      IndUsageProfile
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createCentralHDSInputs = /* GraphQL */ `
  mutation CreateCentralHDSInputs(
    $input: CreateCentralHDSInputsInput!
    $condition: ModelCentralHDSInputsConditionInput
  ) {
    createCentralHDSInputs(input: $input, condition: $condition) {
      id
      PipelineSupplyPressure
      PipelineSupplyFlowrateMax
      TTEffectiveCapacity
      TTPressureReq
      TTMaxFleetSize
      TTLingeringTime
      TTTimeToFill
      TTFillingProfile
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateCentralHDSInputs = /* GraphQL */ `
  mutation UpdateCentralHDSInputs(
    $input: UpdateCentralHDSInputsInput!
    $condition: ModelCentralHDSInputsConditionInput
  ) {
    updateCentralHDSInputs(input: $input, condition: $condition) {
      id
      PipelineSupplyPressure
      PipelineSupplyFlowrateMax
      TTEffectiveCapacity
      TTPressureReq
      TTMaxFleetSize
      TTLingeringTime
      TTTimeToFill
      TTFillingProfile
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteCentralHDSInputs = /* GraphQL */ `
  mutation DeleteCentralHDSInputs(
    $input: DeleteCentralHDSInputsInput!
    $condition: ModelCentralHDSInputsConditionInput
  ) {
    deleteCentralHDSInputs(input: $input, condition: $condition) {
      id
      PipelineSupplyPressure
      PipelineSupplyFlowrateMax
      TTEffectiveCapacity
      TTPressureReq
      TTMaxFleetSize
      TTLingeringTime
      TTTimeToFill
      TTFillingProfile
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createCentralFillingStationInputs = /* GraphQL */ `
  mutation CreateCentralFillingStationInputs(
    $input: CreateCentralFillingStationInputsInput!
    $condition: ModelCentralFillingStationInputsConditionInput
  ) {
    createCentralFillingStationInputs(input: $input, condition: $condition) {
      id
      PipelineSupplyPressure
      PipelineSupplyFlowrateMax
      VFDispensingOption
      VFMaxVehicleTankCapacity
      VFSizeOfFleet
      VFTimeToFill
      VFLingeringTime
      VFFillingProfile
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateCentralFillingStationInputs = /* GraphQL */ `
  mutation UpdateCentralFillingStationInputs(
    $input: UpdateCentralFillingStationInputsInput!
    $condition: ModelCentralFillingStationInputsConditionInput
  ) {
    updateCentralFillingStationInputs(input: $input, condition: $condition) {
      id
      PipelineSupplyPressure
      PipelineSupplyFlowrateMax
      VFDispensingOption
      VFMaxVehicleTankCapacity
      VFSizeOfFleet
      VFTimeToFill
      VFLingeringTime
      VFFillingProfile
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteCentralFillingStationInputs = /* GraphQL */ `
  mutation DeleteCentralFillingStationInputs(
    $input: DeleteCentralFillingStationInputsInput!
    $condition: ModelCentralFillingStationInputsConditionInput
  ) {
    deleteCentralFillingStationInputs(input: $input, condition: $condition) {
      id
      PipelineSupplyPressure
      PipelineSupplyFlowrateMax
      VFDispensingOption
      VFMaxVehicleTankCapacity
      VFSizeOfFleet
      VFTimeToFill
      VFLingeringTime
      VFFillingProfile
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createCentralIndustrialUserInputs = /* GraphQL */ `
  mutation CreateCentralIndustrialUserInputs(
    $input: CreateCentralIndustrialUserInputsInput!
    $condition: ModelCentralIndustrialUserInputsConditionInput
  ) {
    createCentralIndustrialUserInputs(input: $input, condition: $condition) {
      id
      PipelineSupplyPressure
      PipelineSupplyFlowrateMax
      MinServiceFlowrate
      MinServicePressure
      MinServiceTemperature
      IndDemandHours
      IndUsageProfile
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateCentralIndustrialUserInputs = /* GraphQL */ `
  mutation UpdateCentralIndustrialUserInputs(
    $input: UpdateCentralIndustrialUserInputsInput!
    $condition: ModelCentralIndustrialUserInputsConditionInput
  ) {
    updateCentralIndustrialUserInputs(input: $input, condition: $condition) {
      id
      PipelineSupplyPressure
      PipelineSupplyFlowrateMax
      MinServiceFlowrate
      MinServicePressure
      MinServiceTemperature
      IndDemandHours
      IndUsageProfile
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteCentralIndustrialUserInputs = /* GraphQL */ `
  mutation DeleteCentralIndustrialUserInputs(
    $input: DeleteCentralIndustrialUserInputsInput!
    $condition: ModelCentralIndustrialUserInputsConditionInput
  ) {
    deleteCentralIndustrialUserInputs(input: $input, condition: $condition) {
      id
      PipelineSupplyPressure
      PipelineSupplyFlowrateMax
      MinServiceFlowrate
      MinServicePressure
      MinServiceTemperature
      IndDemandHours
      IndUsageProfile
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createProjectSetup = /* GraphQL */ `
  mutation CreateProjectSetup(
    $input: CreateProjectSetupInput!
    $condition: ModelProjectSetupConditionInput
  ) {
    createProjectSetup(input: $input, condition: $condition) {
      id
      ProjectName
      ProjectArchetype
      H2Supply
      UserType
      PurityRequirement
      MaxAnnualUtilisation
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateProjectSetup = /* GraphQL */ `
  mutation UpdateProjectSetup(
    $input: UpdateProjectSetupInput!
    $condition: ModelProjectSetupConditionInput
  ) {
    updateProjectSetup(input: $input, condition: $condition) {
      id
      ProjectName
      ProjectArchetype
      H2Supply
      UserType
      PurityRequirement
      MaxAnnualUtilisation
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteProjectSetup = /* GraphQL */ `
  mutation DeleteProjectSetup(
    $input: DeleteProjectSetupInput!
    $condition: ModelProjectSetupConditionInput
  ) {
    deleteProjectSetup(input: $input, condition: $condition) {
      id
      ProjectName
      ProjectArchetype
      H2Supply
      UserType
      PurityRequirement
      MaxAnnualUtilisation
      createdAt
      updatedAt
      __typename
    }
  }
`;
