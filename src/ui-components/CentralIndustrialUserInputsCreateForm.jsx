/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { CentralIndustrialUserInputs } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function CentralIndustrialUserInputsCreateForm(props) {
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
    PipelineSupplyPressure: "",
    PipelineSupplyFlowrateMax: "",
    MinServiceFlowrate: "",
    MinServicePressure: "",
    MinServiceTemperature: "",
    IndDemandHours: "",
    IndUsageProfile: "",
  };
  const [PipelineSupplyPressure, setPipelineSupplyPressure] = React.useState(
    initialValues.PipelineSupplyPressure
  );
  const [PipelineSupplyFlowrateMax, setPipelineSupplyFlowrateMax] =
    React.useState(initialValues.PipelineSupplyFlowrateMax);
  const [MinServiceFlowrate, setMinServiceFlowrate] = React.useState(
    initialValues.MinServiceFlowrate
  );
  const [MinServicePressure, setMinServicePressure] = React.useState(
    initialValues.MinServicePressure
  );
  const [MinServiceTemperature, setMinServiceTemperature] = React.useState(
    initialValues.MinServiceTemperature
  );
  const [IndDemandHours, setIndDemandHours] = React.useState(
    initialValues.IndDemandHours
  );
  const [IndUsageProfile, setIndUsageProfile] = React.useState(
    initialValues.IndUsageProfile
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setPipelineSupplyPressure(initialValues.PipelineSupplyPressure);
    setPipelineSupplyFlowrateMax(initialValues.PipelineSupplyFlowrateMax);
    setMinServiceFlowrate(initialValues.MinServiceFlowrate);
    setMinServicePressure(initialValues.MinServicePressure);
    setMinServiceTemperature(initialValues.MinServiceTemperature);
    setIndDemandHours(initialValues.IndDemandHours);
    setIndUsageProfile(initialValues.IndUsageProfile);
    setErrors({});
  };
  const validations = {
    PipelineSupplyPressure: [{ type: "Required" }],
    PipelineSupplyFlowrateMax: [{ type: "Required" }],
    MinServiceFlowrate: [{ type: "Required" }],
    MinServicePressure: [{ type: "Required" }],
    MinServiceTemperature: [{ type: "Required" }],
    IndDemandHours: [{ type: "Required" }],
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
          PipelineSupplyPressure,
          PipelineSupplyFlowrateMax,
          MinServiceFlowrate,
          MinServicePressure,
          MinServiceTemperature,
          IndDemandHours,
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
          await DataStore.save(new CentralIndustrialUserInputs(modelFields));
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
      {...getOverrideProps(overrides, "CentralIndustrialUserInputsCreateForm")}
      {...rest}
    >
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Pipeline Supply Pressure (bar a)</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={PipelineSupplyPressure}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              PipelineSupplyPressure: value,
              PipelineSupplyFlowrateMax,
              MinServiceFlowrate,
              MinServicePressure,
              MinServiceTemperature,
              IndDemandHours,
              IndUsageProfile,
            };
            const result = onChange(modelFields);
            value = result?.PipelineSupplyPressure ?? value;
          }
          if (errors.PipelineSupplyPressure?.hasError) {
            runValidationTasks("PipelineSupplyPressure", value);
          }
          setPipelineSupplyPressure(value);
        }}
        onBlur={() =>
          runValidationTasks("PipelineSupplyPressure", PipelineSupplyPressure)
        }
        errorMessage={errors.PipelineSupplyPressure?.errorMessage}
        hasError={errors.PipelineSupplyPressure?.hasError}
        {...getOverrideProps(overrides, "PipelineSupplyPressure")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Pipeline Maximum Supply Flowrate (kg/s)</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        descriptiveText="Note: if unknown choose an arbitrarily high value"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={PipelineSupplyFlowrateMax}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              PipelineSupplyPressure,
              PipelineSupplyFlowrateMax: value,
              MinServiceFlowrate,
              MinServicePressure,
              MinServiceTemperature,
              IndDemandHours,
              IndUsageProfile,
            };
            const result = onChange(modelFields);
            value = result?.PipelineSupplyFlowrateMax ?? value;
          }
          if (errors.PipelineSupplyFlowrateMax?.hasError) {
            runValidationTasks("PipelineSupplyFlowrateMax", value);
          }
          setPipelineSupplyFlowrateMax(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "PipelineSupplyFlowrateMax",
            PipelineSupplyFlowrateMax
          )
        }
        errorMessage={errors.PipelineSupplyFlowrateMax?.errorMessage}
        hasError={errors.PipelineSupplyFlowrateMax?.hasError}
        {...getOverrideProps(overrides, "PipelineSupplyFlowrateMax")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Minimum Service Flowrate (kg/s)</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        descriptiveText="Minimum flowrate required for the hydrogen equipment during operation"
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
              PipelineSupplyPressure,
              PipelineSupplyFlowrateMax,
              MinServiceFlowrate: value,
              MinServicePressure,
              MinServiceTemperature,
              IndDemandHours,
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
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Minimum Service Pressure (bar a)</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        descriptiveText="Minimum supply pressure for the hydrogen equipment"
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
              PipelineSupplyPressure,
              PipelineSupplyFlowrateMax,
              MinServiceFlowrate,
              MinServicePressure: value,
              MinServiceTemperature,
              IndDemandHours,
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
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Minimum Service Temperature (C)</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        descriptiveText="Required Service Temperature (C)"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={MinServiceTemperature}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              PipelineSupplyPressure,
              PipelineSupplyFlowrateMax,
              MinServiceFlowrate,
              MinServicePressure,
              MinServiceTemperature: value,
              IndDemandHours,
              IndUsageProfile,
            };
            const result = onChange(modelFields);
            value = result?.MinServiceTemperature ?? value;
          }
          if (errors.MinServiceTemperature?.hasError) {
            runValidationTasks("MinServiceTemperature", value);
          }
          setMinServiceTemperature(value);
        }}
        onBlur={() =>
          runValidationTasks("MinServiceTemperature", MinServiceTemperature)
        }
        errorMessage={errors.MinServiceTemperature?.errorMessage}
        hasError={errors.MinServiceTemperature?.hasError}
        {...getOverrideProps(overrides, "MinServiceTemperature")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Service Demand Hours</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        descriptiveText="Maximum number of hours per day of operation"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={IndDemandHours}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              PipelineSupplyPressure,
              PipelineSupplyFlowrateMax,
              MinServiceFlowrate,
              MinServicePressure,
              MinServiceTemperature,
              IndDemandHours: value,
              IndUsageProfile,
            };
            const result = onChange(modelFields);
            value = result?.IndDemandHours ?? value;
          }
          if (errors.IndDemandHours?.hasError) {
            runValidationTasks("IndDemandHours", value);
          }
          setIndDemandHours(value);
        }}
        onBlur={() => runValidationTasks("IndDemandHours", IndDemandHours)}
        errorMessage={errors.IndDemandHours?.errorMessage}
        hasError={errors.IndDemandHours?.hasError}
        {...getOverrideProps(overrides, "IndDemandHours")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Service Usage Profile</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
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
              PipelineSupplyPressure,
              PipelineSupplyFlowrateMax,
              MinServiceFlowrate,
              MinServicePressure,
              MinServiceTemperature,
              IndDemandHours,
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
