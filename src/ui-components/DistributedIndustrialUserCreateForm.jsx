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
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { DistributedIndustrialUser } from "../models";
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
    TTUsageProfile: [],
    MinServiceFlowrate: "",
    MinServicePressure: "",
    IndUsageProfile: [],
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
    setCurrentTTUsageProfileValue("");
    setMinServiceFlowrate(initialValues.MinServiceFlowrate);
    setMinServicePressure(initialValues.MinServicePressure);
    setIndUsageProfile(initialValues.IndUsageProfile);
    setCurrentIndUsageProfileValue("");
    setErrors({});
  };
  const [currentTTUsageProfileValue, setCurrentTTUsageProfileValue] =
    React.useState("");
  const TTUsageProfileRef = React.createRef();
  const [currentIndUsageProfileValue, setCurrentIndUsageProfileValue] =
    React.useState("");
  const IndUsageProfileRef = React.createRef();
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              TTSupplyPressure,
              TTEffectiveCapacity,
              NumTTDeliveries,
              TTUsageProfile: values,
              MinServiceFlowrate,
              MinServicePressure,
              IndUsageProfile,
            };
            const result = onChange(modelFields);
            values = result?.TTUsageProfile ?? values;
          }
          setTTUsageProfile(values);
          setCurrentTTUsageProfileValue("");
        }}
        currentFieldValue={currentTTUsageProfileValue}
        label={"Tube Trailer Usage Profile"}
        items={TTUsageProfile}
        hasError={errors?.TTUsageProfile?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("TTUsageProfile", currentTTUsageProfileValue)
        }
        errorMessage={errors?.TTUsageProfile?.errorMessage}
        setFieldValue={setCurrentTTUsageProfileValue}
        inputFieldRef={TTUsageProfileRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Tube Trailer Usage Profile"
          isRequired={true}
          isReadOnly={false}
          type="number"
          step="any"
          value={currentTTUsageProfileValue}
          onChange={(e) => {
            let value = isNaN(parseFloat(e.target.value))
              ? e.target.value
              : parseFloat(e.target.value);
            if (errors.TTUsageProfile?.hasError) {
              runValidationTasks("TTUsageProfile", value);
            }
            setCurrentTTUsageProfileValue(value);
          }}
          onBlur={() =>
            runValidationTasks("TTUsageProfile", currentTTUsageProfileValue)
          }
          errorMessage={errors.TTUsageProfile?.errorMessage}
          hasError={errors.TTUsageProfile?.hasError}
          ref={TTUsageProfileRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "TTUsageProfile")}
        ></TextField>
      </ArrayField>
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              TTSupplyPressure,
              TTEffectiveCapacity,
              NumTTDeliveries,
              TTUsageProfile,
              MinServiceFlowrate,
              MinServicePressure,
              IndUsageProfile: values,
            };
            const result = onChange(modelFields);
            values = result?.IndUsageProfile ?? values;
          }
          setIndUsageProfile(values);
          setCurrentIndUsageProfileValue("");
        }}
        currentFieldValue={currentIndUsageProfileValue}
        label={"Service usage profile"}
        items={IndUsageProfile}
        hasError={errors?.IndUsageProfile?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "IndUsageProfile",
            currentIndUsageProfileValue
          )
        }
        errorMessage={errors?.IndUsageProfile?.errorMessage}
        setFieldValue={setCurrentIndUsageProfileValue}
        inputFieldRef={IndUsageProfileRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Service usage profile"
          isRequired={true}
          isReadOnly={false}
          type="number"
          step="any"
          value={currentIndUsageProfileValue}
          onChange={(e) => {
            let value = isNaN(parseFloat(e.target.value))
              ? e.target.value
              : parseFloat(e.target.value);
            if (errors.IndUsageProfile?.hasError) {
              runValidationTasks("IndUsageProfile", value);
            }
            setCurrentIndUsageProfileValue(value);
          }}
          onBlur={() =>
            runValidationTasks("IndUsageProfile", currentIndUsageProfileValue)
          }
          errorMessage={errors.IndUsageProfile?.errorMessage}
          hasError={errors.IndUsageProfile?.hasError}
          ref={IndUsageProfileRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "IndUsageProfile")}
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
