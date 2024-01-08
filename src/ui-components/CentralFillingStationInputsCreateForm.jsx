/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SelectField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { CentralFillingStationInputs } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function CentralFillingStationInputsCreateForm(props) {
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
    VFDispensingOption: "",
    VFMaxVehicleTankCapacity: "",
    VFSizeOfFleet: "",
    VFTimeToFill: "",
    VFLingeringTime: "",
    VFFillingProfile: [],
  };
  const [PipelineSupplyPressure, setPipelineSupplyPressure] = React.useState(
    initialValues.PipelineSupplyPressure
  );
  const [PipelineSupplyFlowrateMax, setPipelineSupplyFlowrateMax] =
    React.useState(initialValues.PipelineSupplyFlowrateMax);
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
    setPipelineSupplyPressure(initialValues.PipelineSupplyPressure);
    setPipelineSupplyFlowrateMax(initialValues.PipelineSupplyFlowrateMax);
    setVFDispensingOption(initialValues.VFDispensingOption);
    setVFMaxVehicleTankCapacity(initialValues.VFMaxVehicleTankCapacity);
    setVFSizeOfFleet(initialValues.VFSizeOfFleet);
    setVFTimeToFill(initialValues.VFTimeToFill);
    setVFLingeringTime(initialValues.VFLingeringTime);
    setVFFillingProfile(initialValues.VFFillingProfile);
    setCurrentVFFillingProfileValue("");
    setErrors({});
  };
  const [currentVFFillingProfileValue, setCurrentVFFillingProfileValue] =
    React.useState("");
  const VFFillingProfileRef = React.createRef();
  const validations = {
    PipelineSupplyPressure: [{ type: "Required" }],
    PipelineSupplyFlowrateMax: [{ type: "Required" }],
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
          PipelineSupplyPressure,
          PipelineSupplyFlowrateMax,
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
          await DataStore.save(new CentralFillingStationInputs(modelFields));
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
      {...getOverrideProps(overrides, "CentralFillingStationInputsCreateForm")}
      {...rest}
    >
      <TextField
        label="Pipeline Supply Pressure (Bar a)"
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
              VFDispensingOption,
              VFMaxVehicleTankCapacity,
              VFSizeOfFleet,
              VFTimeToFill,
              VFLingeringTime,
              VFFillingProfile,
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
        label="Pipeline Supply Maximum Flowrate (Kg/s)"
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
              VFDispensingOption,
              VFMaxVehicleTankCapacity,
              VFSizeOfFleet,
              VFTimeToFill,
              VFLingeringTime,
              VFFillingProfile,
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
      <SelectField
        label="Vehicle Filling Configuration"
        descriptiveText="Choose a filling station configuration"
        placeholder="Please select an option"
        isDisabled={false}
        value={VFDispensingOption}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              PipelineSupplyPressure,
              PipelineSupplyFlowrateMax,
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
          children="350 bar Cascade"
          value="350 bar Cascade"
          {...getOverrideProps(overrides, "VFDispensingOptionoption0")}
        ></option>
        <option
          children="700 bar Cascade"
          value="700 bar Cascade"
          {...getOverrideProps(overrides, "VFDispensingOptionoption1")}
        ></option>
        <option
          children="700 bar Booster Compressor"
          value="700 bar Booster Compressor"
          {...getOverrideProps(overrides, "VFDispensingOptionoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Vehicle Tank Dispensed Capacity (kg)"
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
              PipelineSupplyPressure,
              PipelineSupplyFlowrateMax,
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
        label="Size of Vehicle Fleet"
        descriptiveText="Number of Vehicles (1-100)"
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
              PipelineSupplyPressure,
              PipelineSupplyFlowrateMax,
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
        label="Maximum Time to Fill (mins)"
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
              PipelineSupplyPressure,
              PipelineSupplyFlowrateMax,
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
        descriptiveText="Time taken by vehicles in the fuelling station not spent fuelling"
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
              PipelineSupplyPressure,
              PipelineSupplyFlowrateMax,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              PipelineSupplyPressure,
              PipelineSupplyFlowrateMax,
              VFDispensingOption,
              VFMaxVehicleTankCapacity,
              VFSizeOfFleet,
              VFTimeToFill,
              VFLingeringTime,
              VFFillingProfile: values,
            };
            const result = onChange(modelFields);
            values = result?.VFFillingProfile ?? values;
          }
          setVFFillingProfile(values);
          setCurrentVFFillingProfileValue("");
        }}
        currentFieldValue={currentVFFillingProfileValue}
        label={"Vehicle Fuelling Profile"}
        items={VFFillingProfile}
        hasError={errors?.VFFillingProfile?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "VFFillingProfile",
            currentVFFillingProfileValue
          )
        }
        errorMessage={errors?.VFFillingProfile?.errorMessage}
        setFieldValue={setCurrentVFFillingProfileValue}
        inputFieldRef={VFFillingProfileRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Vehicle Fuelling Profile"
          descriptiveText="Please enter your anticipated demand profile over a 24h period"
          isRequired={true}
          isReadOnly={false}
          type="number"
          step="any"
          value={currentVFFillingProfileValue}
          onChange={(e) => {
            let value = isNaN(parseFloat(e.target.value))
              ? e.target.value
              : parseFloat(e.target.value);
            if (errors.VFFillingProfile?.hasError) {
              runValidationTasks("VFFillingProfile", value);
            }
            setCurrentVFFillingProfileValue(value);
          }}
          onBlur={() =>
            runValidationTasks("VFFillingProfile", currentVFFillingProfileValue)
          }
          errorMessage={errors.VFFillingProfile?.errorMessage}
          hasError={errors.VFFillingProfile?.hasError}
          ref={VFFillingProfileRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "VFFillingProfile")}
        ></TextField>
      </ArrayField>
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
