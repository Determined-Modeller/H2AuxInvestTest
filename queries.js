/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDistributedFillingStationInputs = /* GraphQL */ `
  query GetDistributedFillingStationInputs($id: ID!) {
    getDistributedFillingStationInputs(id: $id) {
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
export const listDistributedFillingStationInputs = /* GraphQL */ `
  query ListDistributedFillingStationInputs(
    $filter: ModelDistributedFillingStationInputsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDistributedFillingStationInputs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getDistributedIndustrialUser = /* GraphQL */ `
  query GetDistributedIndustrialUser($id: ID!) {
    getDistributedIndustrialUser(id: $id) {
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
export const listDistributedIndustrialUsers = /* GraphQL */ `
  query ListDistributedIndustrialUsers(
    $filter: ModelDistributedIndustrialUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDistributedIndustrialUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getCentralHDSInputs = /* GraphQL */ `
  query GetCentralHDSInputs($id: ID!) {
    getCentralHDSInputs(id: $id) {
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
export const listCentralHDSInputs = /* GraphQL */ `
  query ListCentralHDSInputs(
    $filter: ModelCentralHDSInputsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCentralHDSInputs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getCentralFillingStationInputs = /* GraphQL */ `
  query GetCentralFillingStationInputs($id: ID!) {
    getCentralFillingStationInputs(id: $id) {
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
export const listCentralFillingStationInputs = /* GraphQL */ `
  query ListCentralFillingStationInputs(
    $filter: ModelCentralFillingStationInputsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCentralFillingStationInputs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getCentralIndustrialUserInputs = /* GraphQL */ `
  query GetCentralIndustrialUserInputs($id: ID!) {
    getCentralIndustrialUserInputs(id: $id) {
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
export const listCentralIndustrialUserInputs = /* GraphQL */ `
  query ListCentralIndustrialUserInputs(
    $filter: ModelCentralIndustrialUserInputsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCentralIndustrialUserInputs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getProjectSetup = /* GraphQL */ `
  query GetProjectSetup($id: ID!) {
    getProjectSetup(id: $id) {
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
export const listProjectSetups = /* GraphQL */ `
  query ListProjectSetups(
    $filter: ModelProjectSetupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjectSetups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
