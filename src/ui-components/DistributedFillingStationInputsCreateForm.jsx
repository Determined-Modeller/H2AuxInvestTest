/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { DistributedFillingStationInputs } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function DistributedFillingStationInputsCreateForm(props) {
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
    VFDispensingOption: "",
    VFMaxVehicleTankCapacity: "",
    VFSizeOfFleet: "",
    VFTimeToFill: "",
    VFLingeringTime: "",
    VFFillingProfile: "",
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
  const [VFDispensingOption, setVFDispensingOption] = React.useState(
    initialValues.VFDispensingOption
  );
  const [VFMaxVehicleTankCapacity, setVFMaxVehicleTankCapacity] =
    React.useState(initialValues.VFMaxVehicleTankCapacity);
  const [VFSizeOfFleet, setVFSizeOfFleet] = React.useState(
    initialValues.VFSizeOfFleet
  );
  const [VFTimeToFill, setVFTimeToFill] = React.useState(
    initialValues.VFTimeToFill
  );
  const [VFLingeringTime, setVFLingeringTime] = React.useState(
    initialValues.VFLingeringTime
  );
  const [VFFillingProfile, setVFFillingProfile] = React.useState(
    initialValues.VFFillingProfile
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTTSupplyPressure(initialValues.TTSupplyPressure);
    setTTEffectiveCapacity(initialValues.TTEffectiveCapacity);
    setNumTTDeliveries(initialValues.NumTTDeliveries);
    setTTUsageProfile(initialValues.TTUsageProfile);
    setVFDispensingOption(initialValues.VFDispensingOption);
    setVFMaxVehicleTankCapacity(initialValues.VFMaxVehicleTankCapacity);
    setVFSizeOfFleet(initialValues.VFSizeOfFleet);
    setVFTimeToFill(initialValues.VFTimeToFill);
    setVFLingeringTime(initialValues.VFLingeringTime);
    setVFFillingProfile(initialValues.VFFillingProfile);
    setErrors({});
  };
  const validations = {
    TTSupplyPressure: [{ type: "Required" }],
    TTEffectiveCapacity: [{ type: "Required" }],
    NumTTDeliveries: [{ type: "Required" }],
    TTUsageProfile: [{ type: "Required" }],
    VFDispensingOption: [{ type: "Required" }],
    VFMaxVehicleTankCapacity: [{ type: "Required" }],
    VFSizeOfFleet: [{ type: "Required" }],
    VFTimeToFill: [{ type: "Required" }],
    VFLingeringTime: [{ type: "Required" }],
    VFFillingProfile: [{ type: "Required" }],
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
          VFDispensingOption,
          VFMaxVehicleTankCapacity,
          VFSizeOfFleet,
          VFTimeToFill,
          VFLingeringTime,
          VFFillingProfile,
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
          await DataStore.save(
            new DistributedFillingStationInputs(modelFields)
          );
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
      {...getOverrideProps(
        overrides,
        "DistributedFillingStationInputsCreateForm"
      )}
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
              VFDispensingOption,
              VFMaxVehicleTankCapacity,
              VFSizeOfFleet,
              VFTimeToFill,
              VFLingeringTime,
              VFFillingProfile,
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
              VFDispensingOption,
              VFMaxVehicleTankCapacity,
              VFSizeOfFleet,
              VFTimeToFill,
              VFLingeringTime,
              VFFillingProfile,
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
              VFDispensingOption,
              VFMaxVehicleTankCapacity,
              VFSizeOfFleet,
              VFTimeToFill,
              VFLingeringTime,
              VFFillingProfile,
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
              VFDispensingOption,
              VFMaxVehicleTankCapacity,
              VFSizeOfFleet,
              VFTimeToFill,
              VFLingeringTime,
              VFFillingProfile,
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
      <SelectField
        label="Vehicle Filling Dispensing Option"
        placeholder="Please select an option"
        isDisabled={false}
        value={VFDispensingOption}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              TTSupplyPressure,
              TTEffectiveCapacity,
              NumTTDeliveries,
              TTUsageProfile,
              VFDispensingOption: value,
              VFMaxVehicleTankCapacity,
              VFSizeOfFleet,
              VFTimeToFill,
              VFLingeringTime,
              VFFillingProfile,
            };
            const result = onChange(modelFields);
            value = result?.VFDispensingOption ?? value;
          }
          if (errors.VFDispensingOption?.hasError) {
            runValidationTasks("VFDispensingOption", value);
          }
          setVFDispensingOption(value);
        }}
        onBlur={() =>
          runValidationTasks("VFDispensingOption", VFDispensingOption)
        }
        errorMessage={errors.VFDispensingOption?.errorMessage}
        hasError={errors.VFDispensingOption?.hasError}
        {...getOverrideProps(overrides, "VFDispensingOption")}
      >
        <option
          children="700 bar Booster"
          value="700 bar Booster"
          {...getOverrideProps(overrides, "VFDispensingOptionoption0")}
        ></option>
        <option
          children="350 bar Cascade"
          value="350 bar Cascade"
          {...getOverrideProps(overrides, "VFDispensingOptionoption1")}
        ></option>
      </SelectField>
      <TextField
        label="Maximum Vehicle Tank Capacity (kg)"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={VFMaxVehicleTankCapacity}
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
              VFDispensingOption,
              VFMaxVehicleTankCapacity: value,
              VFSizeOfFleet,
              VFTimeToFill,
              VFLingeringTime,
              VFFillingProfile,
            };
            const result = onChange(modelFields);
            value = result?.VFMaxVehicleTankCapacity ?? value;
          }
          if (errors.VFMaxVehicleTankCapacity?.hasError) {
            runValidationTasks("VFMaxVehicleTankCapacity", value);
          }
          setVFMaxVehicleTankCapacity(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "VFMaxVehicleTankCapacity",
            VFMaxVehicleTankCapacity
          )
        }
        errorMessage={errors.VFMaxVehicleTankCapacity?.errorMessage}
        hasError={errors.VFMaxVehicleTankCapacity?.hasError}
        {...getOverrideProps(overrides, "VFMaxVehicleTankCapacity")}
      ></TextField>
      <TextField
        label="Maximum Number of Daily Vehicle Fills"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={VFSizeOfFleet}
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
              VFDispensingOption,
              VFMaxVehicleTankCapacity,
              VFSizeOfFleet: value,
              VFTimeToFill,
              VFLingeringTime,
              VFFillingProfile,
            };
            const result = onChange(modelFields);
            value = result?.VFSizeOfFleet ?? value;
          }
          if (errors.VFSizeOfFleet?.hasError) {
            runValidationTasks("VFSizeOfFleet", value);
          }
          setVFSizeOfFleet(value);
        }}
        onBlur={() => runValidationTasks("VFSizeOfFleet", VFSizeOfFleet)}
        errorMessage={errors.VFSizeOfFleet?.errorMessage}
        hasError={errors.VFSizeOfFleet?.hasError}
        {...getOverrideProps(overrides, "VFSizeOfFleet")}
      ></TextField>
      <TextField
        label="Maximum Acceptable Time for Vehicle Filling (mins)"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={VFTimeToFill}
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
              VFDispensingOption,
              VFMaxVehicleTankCapacity,
              VFSizeOfFleet,
              VFTimeToFill: value,
              VFLingeringTime,
              VFFillingProfile,
            };
            const result = onChange(modelFields);
            value = result?.VFTimeToFill ?? value;
          }
          if (errors.VFTimeToFill?.hasError) {
            runValidationTasks("VFTimeToFill", value);
          }
          setVFTimeToFill(value);
        }}
        onBlur={() => runValidationTasks("VFTimeToFill", VFTimeToFill)}
        errorMessage={errors.VFTimeToFill?.errorMessage}
        hasError={errors.VFTimeToFill?.hasError}
        {...getOverrideProps(overrides, "VFTimeToFill")}
      ></TextField>
      <TextField
        label="Vehicle Lingering Time (mins)"
        descriptiveText="Time taken at the filling station occupying a hose but not fuelling"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={VFLingeringTime}
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
              VFDispensingOption,
              VFMaxVehicleTankCapacity,
              VFSizeOfFleet,
              VFTimeToFill,
              VFLingeringTime: value,
              VFFillingProfile,
            };
            const result = onChange(modelFields);
            value = result?.VFLingeringTime ?? value;
          }
          if (errors.VFLingeringTime?.hasError) {
            runValidationTasks("VFLingeringTime", value);
          }
          setVFLingeringTime(value);
        }}
        onBlur={() => runValidationTasks("VFLingeringTime", VFLingeringTime)}
        errorMessage={errors.VFLingeringTime?.errorMessage}
        hasError={errors.VFLingeringTime?.hasError}
        {...getOverrideProps(overrides, "VFLingeringTime")}
      ></TextField>
      <TextField
        label="Vehicle Fuelling Profile"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={VFFillingProfile}
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
              VFDispensingOption,
              VFMaxVehicleTankCapacity,
              VFSizeOfFleet,
              VFTimeToFill,
              VFLingeringTime,
              VFFillingProfile: value,
            };
            const result = onChange(modelFields);
            value = result?.VFFillingProfile ?? value;
          }
          if (errors.VFFillingProfile?.hasError) {
            runValidationTasks("VFFillingProfile", value);
          }
          setVFFillingProfile(value);
        }}
        onBlur={() => runValidationTasks("VFFillingProfile", VFFillingProfile)}
        errorMessage={errors.VFFillingProfile?.errorMessage}
        hasError={errors.VFFillingProfile?.hasError}
        {...getOverrideProps(overrides, "VFFillingProfile")}
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
