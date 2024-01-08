/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DistributedIndustrialUser } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function DistributedIndustrialUserCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    TTSupplyPressure: "",
    TTEffectiveCapacity: "",
    NumTTDeliveries: "",
    TTUsageProfile: "",
    MinServiceFlowrate: "",
    MinServicePressure: "",
    IndUsageProfile: "",
  };
  const [TTSupplyPressure, setTTSupplyPressure] = React.useState(
    initialValues.TTSupplyPressure
  );
  const [TTEffectiveCapacity, setTTEffectiveCapacity] = React.useState(
    initialValues.TTEffectiveCapacity
  );
  const [NumTTDeliveries, setNumTTDeliveries] = React.useState(
    initialValues.NumTTDeliveries
  );
  const [TTUsageProfile, setTTUsageProfile] = React.useState(
    initialValues.TTUsageProfile
  );
  const [MinServiceFlowrate, setMinServiceFlowrate] = React.useState(
    initialValues.MinServiceFlowrate
  );
  const [MinServicePressure, setMinServicePressure] = React.useState(
    initialValues.MinServicePressure
  );
  const [IndUsageProfile, setIndUsageProfile] = React.useState(
    initialValues.IndUsageProfile
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTTSupplyPressure(initialValues.TTSupplyPressure);
    setTTEffectiveCapacity(initialValues.TTEffectiveCapacity);
    setNumTTDeliveries(initialValues.NumTTDeliveries);
    setTTUsageProfile(initialValues.TTUsageProfile);
    setMinServiceFlowrate(initialValues.MinServiceFlowrate);
    setMinServicePressure(initialValues.MinServicePressure);
    setIndUsageProfile(initialValues.IndUsageProfile);
    setErrors({});
  };
  const validations = {
    TTSupplyPressure: [{ type: "Required" }],
    TTEffectiveCapacity: [{ type: "Required" }],
    NumTTDeliveries: [{ type: "Required" }],
    TTUsageProfile: [{ type: "Required" }],
    MinServiceFlowrate: [{ type: "Required" }],
    MinServicePressure: [{ type: "Required" }],
    IndUsageProfile: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          TTSupplyPressure,
          TTEffectiveCapacity,
          NumTTDeliveries,
          TTUsageProfile,
          MinServiceFlowrate,
          MinServicePressure,
          IndUsageProfile,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(new DistributedIndustrialUser(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "DistributedIndustrialUserCreateForm")}
      {...rest}
    >
      <TextField
        label="Tube Trailer Supply Pressure (bar a)"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={TTSupplyPressure}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              TTSupplyPressure: value,
              TTEffectiveCapacity,
              NumTTDeliveries,
              TTUsageProfile,
              MinServiceFlowrate,
              MinServicePressure,
              IndUsageProfile,
            };
            const result = onChange(modelFields);
            value = result?.TTSupplyPressure ?? value;
          }
          if (errors.TTSupplyPressure?.hasError) {
            runValidationTasks("TTSupplyPressure", value);
          }
          setTTSupplyPressure(value);
        }}
        onBlur={() => runValidationTasks("TTSupplyPressure", TTSupplyPressure)}
        errorMessage={errors.TTSupplyPressure?.errorMessage}
        hasError={errors.TTSupplyPressure?.hasError}
        {...getOverrideProps(overrides, "TTSupplyPressure")}
      ></TextField>
      <TextField
        label="Tube Trailer Effective Capacity (kg)"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={TTEffectiveCapacity}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              TTSupplyPressure,
              TTEffectiveCapacity: value,
              NumTTDeliveries,
              TTUsageProfile,
              MinServiceFlowrate,
              MinServicePressure,
              IndUsageProfile,
            };
            const result = onChange(modelFields);
            value = result?.TTEffectiveCapacity ?? value;
          }
          if (errors.TTEffectiveCapacity?.hasError) {
            runValidationTasks("TTEffectiveCapacity", value);
          }
          setTTEffectiveCapacity(value);
        }}
        onBlur={() =>
          runValidationTasks("TTEffectiveCapacity", TTEffectiveCapacity)
        }
        errorMessage={errors.TTEffectiveCapacity?.errorMessage}
        hasError={errors.TTEffectiveCapacity?.hasError}
        {...getOverrideProps(overrides, "TTEffectiveCapacity")}
      ></TextField>
      <TextField
        label="Number of Daily Tube Trailer Deliveries"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={NumTTDeliveries}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              TTSupplyPressure,
              TTEffectiveCapacity,
              NumTTDeliveries: value,
              TTUsageProfile,
              MinServiceFlowrate,
              MinServicePressure,
              IndUsageProfile,
            };
            const result = onChange(modelFields);
            value = result?.NumTTDeliveries ?? value;
          }
          if (errors.NumTTDeliveries?.hasError) {
            runValidationTasks("NumTTDeliveries", value);
          }
          setNumTTDeliveries(value);
        }}
        onBlur={() => runValidationTasks("NumTTDeliveries", NumTTDeliveries)}
        errorMessage={errors.NumTTDeliveries?.errorMessage}
        hasError={errors.NumTTDeliveries?.hasError}
        {...getOverrideProps(overrides, "NumTTDeliveries")}
      ></TextField>
      <TextField
        label="Tube Trailer Usage Profile"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={TTUsageProfile}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              TTSupplyPressure,
              TTEffectiveCapacity,
              NumTTDeliveries,
              TTUsageProfile: value,
              MinServiceFlowrate,
              MinServicePressure,
              IndUsageProfile,
            };
            const result = onChange(modelFields);
            value = result?.TTUsageProfile ?? value;
          }
          if (errors.TTUsageProfile?.hasError) {
            runValidationTasks("TTUsageProfile", value);
          }
          setTTUsageProfile(value);
        }}
        onBlur={() => runValidationTasks("TTUsageProfile", TTUsageProfile)}
        errorMessage={errors.TTUsageProfile?.errorMessage}
        hasError={errors.TTUsageProfile?.hasError}
        {...getOverrideProps(overrides, "TTUsageProfile")}
      ></TextField>
      <TextField
        label="Minimum Service Flowrate"
        descriptiveText="Minimum industrial use flowrate when in use"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={MinServiceFlowrate}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              TTSupplyPressure,
              TTEffectiveCapacity,
              NumTTDeliveries,
              TTUsageProfile,
              MinServiceFlowrate: value,
              MinServicePressure,
              IndUsageProfile,
            };
            const result = onChange(modelFields);
            value = result?.MinServiceFlowrate ?? value;
          }
          if (errors.MinServiceFlowrate?.hasError) {
            runValidationTasks("MinServiceFlowrate", value);
          }
          setMinServiceFlowrate(value);
        }}
        onBlur={() =>
          runValidationTasks("MinServiceFlowrate", MinServiceFlowrate)
        }
        errorMessage={errors.MinServiceFlowrate?.errorMessage}
        hasError={errors.MinServiceFlowrate?.hasError}
        {...getOverrideProps(overrides, "MinServiceFlowrate")}
      ></TextField>
      <TextField
        label="Minimum Service Pressure (bar a)"
        descriptiveText="Minimum supply pressure for industrial use case during activity"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={MinServicePressure}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              TTSupplyPressure,
              TTEffectiveCapacity,
              NumTTDeliveries,
              TTUsageProfile,
              MinServiceFlowrate,
              MinServicePressure: value,
              IndUsageProfile,
            };
            const result = onChange(modelFields);
            value = result?.MinServicePressure ?? value;
          }
          if (errors.MinServicePressure?.hasError) {
            runValidationTasks("MinServicePressure", value);
          }
          setMinServicePressure(value);
        }}
        onBlur={() =>
          runValidationTasks("MinServicePressure", MinServicePressure)
        }
        errorMessage={errors.MinServicePressure?.errorMessage}
        hasError={errors.MinServicePressure?.hasError}
        {...getOverrideProps(overrides, "MinServicePressure")}
      ></TextField>
      <TextField
        label="Service usage profile"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={IndUsageProfile}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              TTSupplyPressure,
              TTEffectiveCapacity,
              NumTTDeliveries,
              TTUsageProfile,
              MinServiceFlowrate,
              MinServicePressure,
              IndUsageProfile: value,
            };
            const result = onChange(modelFields);
            value = result?.IndUsageProfile ?? value;
          }
          if (errors.IndUsageProfile?.hasError) {
            runValidationTasks("IndUsageProfile", value);
          }
          setIndUsageProfile(value);
        }}
        onBlur={() => runValidationTasks("IndUsageProfile", IndUsageProfile)}
        errorMessage={errors.IndUsageProfile?.errorMessage}
        hasError={errors.IndUsageProfile?.hasError}
        {...getOverrideProps(overrides, "IndUsageProfile")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
