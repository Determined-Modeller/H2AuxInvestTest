/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { CentralHDSInputs } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function CentralHDSInputsCreateForm(props) {
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
    TTEffectiveCapacity: "",
    TTPressureReq: "",
    TTMaxFleetSize: "",
    TTLingeringTime: "",
    TTTimeToFill: "",
    TTFillingProfile: "",
  };
  const [PipelineSupplyPressure, setPipelineSupplyPressure] = React.useState(
    initialValues.PipelineSupplyPressure
  );
  const [PipelineSupplyFlowrateMax, setPipelineSupplyFlowrateMax] =
    React.useState(initialValues.PipelineSupplyFlowrateMax);
  const [TTEffectiveCapacity, setTTEffectiveCapacity] = React.useState(
    initialValues.TTEffectiveCapacity
  );
  const [TTPressureReq, setTTPressureReq] = React.useState(
    initialValues.TTPressureReq
  );
  const [TTMaxFleetSize, setTTMaxFleetSize] = React.useState(
    initialValues.TTMaxFleetSize
  );
  const [TTLingeringTime, setTTLingeringTime] = React.useState(
    initialValues.TTLingeringTime
  );
  const [TTTimeToFill, setTTTimeToFill] = React.useState(
    initialValues.TTTimeToFill
  );
  const [TTFillingProfile, setTTFillingProfile] = React.useState(
    initialValues.TTFillingProfile
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setPipelineSupplyPressure(initialValues.PipelineSupplyPressure);
    setPipelineSupplyFlowrateMax(initialValues.PipelineSupplyFlowrateMax);
    setTTEffectiveCapacity(initialValues.TTEffectiveCapacity);
    setTTPressureReq(initialValues.TTPressureReq);
    setTTMaxFleetSize(initialValues.TTMaxFleetSize);
    setTTLingeringTime(initialValues.TTLingeringTime);
    setTTTimeToFill(initialValues.TTTimeToFill);
    setTTFillingProfile(initialValues.TTFillingProfile);
    setErrors({});
  };
  const validations = {
    PipelineSupplyPressure: [{ type: "Required" }],
    PipelineSupplyFlowrateMax: [{ type: "Required" }],
    TTEffectiveCapacity: [{ type: "Required" }],
    TTPressureReq: [{ type: "Required" }],
    TTMaxFleetSize: [{ type: "Required" }],
    TTLingeringTime: [{ type: "Required" }],
    TTTimeToFill: [{ type: "Required" }],
    TTFillingProfile: [{ type: "Required" }],
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
          TTEffectiveCapacity,
          TTPressureReq,
          TTMaxFleetSize,
          TTLingeringTime,
          TTTimeToFill,
          TTFillingProfile,
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
          await DataStore.save(new CentralHDSInputs(modelFields));
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
      {...getOverrideProps(overrides, "CentralHDSInputsCreateForm")}
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
              TTEffectiveCapacity,
              TTPressureReq,
              TTMaxFleetSize,
              TTLingeringTime,
              TTTimeToFill,
              TTFillingProfile,
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
            <span>Pipeline Supply Maximum Flowrate (kg/s)</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        descriptiveText="If unknown, please use an arbitrary high value."
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
              TTEffectiveCapacity,
              TTPressureReq,
              TTMaxFleetSize,
              TTLingeringTime,
              TTTimeToFill,
              TTFillingProfile,
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
            <span>Tube Trailer Effective Capacity (kg)</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
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
              PipelineSupplyPressure,
              PipelineSupplyFlowrateMax,
              TTEffectiveCapacity: value,
              TTPressureReq,
              TTMaxFleetSize,
              TTLingeringTime,
              TTTimeToFill,
              TTFillingProfile,
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
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Tube Trailer Pressure Requirement (bar)</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        descriptiveText="Pressure that tube trailers will fill up to on site"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={TTPressureReq}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              PipelineSupplyPressure,
              PipelineSupplyFlowrateMax,
              TTEffectiveCapacity,
              TTPressureReq: value,
              TTMaxFleetSize,
              TTLingeringTime,
              TTTimeToFill,
              TTFillingProfile,
            };
            const result = onChange(modelFields);
            value = result?.TTPressureReq ?? value;
          }
          if (errors.TTPressureReq?.hasError) {
            runValidationTasks("TTPressureReq", value);
          }
          setTTPressureReq(value);
        }}
        onBlur={() => runValidationTasks("TTPressureReq", TTPressureReq)}
        errorMessage={errors.TTPressureReq?.errorMessage}
        hasError={errors.TTPressureReq?.hasError}
        {...getOverrideProps(overrides, "TTPressureReq")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Tube Trailer Maximum Fleet Size</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        descriptiveText="The maximum number of tube trailers filled daily"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={TTMaxFleetSize}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              PipelineSupplyPressure,
              PipelineSupplyFlowrateMax,
              TTEffectiveCapacity,
              TTPressureReq,
              TTMaxFleetSize: value,
              TTLingeringTime,
              TTTimeToFill,
              TTFillingProfile,
            };
            const result = onChange(modelFields);
            value = result?.TTMaxFleetSize ?? value;
          }
          if (errors.TTMaxFleetSize?.hasError) {
            runValidationTasks("TTMaxFleetSize", value);
          }
          setTTMaxFleetSize(value);
        }}
        onBlur={() => runValidationTasks("TTMaxFleetSize", TTMaxFleetSize)}
        errorMessage={errors.TTMaxFleetSize?.errorMessage}
        hasError={errors.TTMaxFleetSize?.hasError}
        {...getOverrideProps(overrides, "TTMaxFleetSize")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Tube Trailer Lingering Time (mins)</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        descriptiveText="Time spent by tube trailers on site not fuelling"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={TTLingeringTime}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              PipelineSupplyPressure,
              PipelineSupplyFlowrateMax,
              TTEffectiveCapacity,
              TTPressureReq,
              TTMaxFleetSize,
              TTLingeringTime: value,
              TTTimeToFill,
              TTFillingProfile,
            };
            const result = onChange(modelFields);
            value = result?.TTLingeringTime ?? value;
          }
          if (errors.TTLingeringTime?.hasError) {
            runValidationTasks("TTLingeringTime", value);
          }
          setTTLingeringTime(value);
        }}
        onBlur={() => runValidationTasks("TTLingeringTime", TTLingeringTime)}
        errorMessage={errors.TTLingeringTime?.errorMessage}
        hasError={errors.TTLingeringTime?.hasError}
        {...getOverrideProps(overrides, "TTLingeringTime")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Tube Trailer Maximum Time to Fill (mins)</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        descriptiveText="Maximum allowable time spent fuelling"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={TTTimeToFill}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              PipelineSupplyPressure,
              PipelineSupplyFlowrateMax,
              TTEffectiveCapacity,
              TTPressureReq,
              TTMaxFleetSize,
              TTLingeringTime,
              TTTimeToFill: value,
              TTFillingProfile,
            };
            const result = onChange(modelFields);
            value = result?.TTTimeToFill ?? value;
          }
          if (errors.TTTimeToFill?.hasError) {
            runValidationTasks("TTTimeToFill", value);
          }
          setTTTimeToFill(value);
        }}
        onBlur={() => runValidationTasks("TTTimeToFill", TTTimeToFill)}
        errorMessage={errors.TTTimeToFill?.errorMessage}
        hasError={errors.TTTimeToFill?.hasError}
        {...getOverrideProps(overrides, "TTTimeToFill")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Tube Trailer Filling Profile</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={TTFillingProfile}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              PipelineSupplyPressure,
              PipelineSupplyFlowrateMax,
              TTEffectiveCapacity,
              TTPressureReq,
              TTMaxFleetSize,
              TTLingeringTime,
              TTTimeToFill,
              TTFillingProfile: value,
            };
            const result = onChange(modelFields);
            value = result?.TTFillingProfile ?? value;
          }
          if (errors.TTFillingProfile?.hasError) {
            runValidationTasks("TTFillingProfile", value);
          }
          setTTFillingProfile(value);
        }}
        onBlur={() => runValidationTasks("TTFillingProfile", TTFillingProfile)}
        errorMessage={errors.TTFillingProfile?.errorMessage}
        hasError={errors.TTFillingProfile?.hasError}
        {...getOverrideProps(overrides, "TTFillingProfile")}
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
