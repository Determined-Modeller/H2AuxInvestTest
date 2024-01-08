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
import { ProjectSetup } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function FirstInput(props) {
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
    ProjectName: "",
    ProjectArchetype: "",
    H2Supply: "",
    UserType: "",
    PurityRequirement: "",
    MaxAnnualUtilisation: "",
  };
  const [ProjectName, setProjectName] = React.useState(
    initialValues.ProjectName
  );
  const [ProjectArchetype, setProjectArchetype] = React.useState(
    initialValues.ProjectArchetype
  );
  const [H2Supply, setH2Supply] = React.useState(initialValues.H2Supply);
  const [UserType, setUserType] = React.useState(initialValues.UserType);
  const [PurityRequirement, setPurityRequirement] = React.useState(
    initialValues.PurityRequirement
  );
  const [MaxAnnualUtilisation, setMaxAnnualUtilisation] = React.useState(
    initialValues.MaxAnnualUtilisation
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setProjectName(initialValues.ProjectName);
    setProjectArchetype(initialValues.ProjectArchetype);
    setH2Supply(initialValues.H2Supply);
    setUserType(initialValues.UserType);
    setPurityRequirement(initialValues.PurityRequirement);
    setMaxAnnualUtilisation(initialValues.MaxAnnualUtilisation);
    setErrors({});
  };
  const validations = {
    ProjectName: [{ type: "Required" }],
    ProjectArchetype: [{ type: "Required" }],
    H2Supply: [{ type: "Required" }],
    UserType: [{ type: "Required" }],
    PurityRequirement: [{ type: "Required" }],
    MaxAnnualUtilisation: [{ type: "Required" }],
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
          ProjectName,
          ProjectArchetype,
          H2Supply,
          UserType,
          PurityRequirement,
          MaxAnnualUtilisation,
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
          await DataStore.save(new ProjectSetup(modelFields));
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
      {...getOverrideProps(overrides, "FirstInput")}
      {...rest}
    >
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Project Name</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={ProjectName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ProjectName: value,
              ProjectArchetype,
              H2Supply,
              UserType,
              PurityRequirement,
              MaxAnnualUtilisation,
            };
            const result = onChange(modelFields);
            value = result?.ProjectName ?? value;
          }
          if (errors.ProjectName?.hasError) {
            runValidationTasks("ProjectName", value);
          }
          setProjectName(value);
        }}
        onBlur={() => runValidationTasks("ProjectName", ProjectName)}
        errorMessage={errors.ProjectName?.errorMessage}
        hasError={errors.ProjectName?.hasError}
        {...getOverrideProps(overrides, "ProjectName")}
      ></TextField>
      <SelectField
        label="Project Archetype"
        placeholder="Please select an option"
        isDisabled={false}
        value={ProjectArchetype}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ProjectName,
              ProjectArchetype: value,
              H2Supply,
              UserType,
              PurityRequirement,
              MaxAnnualUtilisation,
            };
            const result = onChange(modelFields);
            value = result?.ProjectArchetype ?? value;
          }
          if (errors.ProjectArchetype?.hasError) {
            runValidationTasks("ProjectArchetype", value);
          }
          setProjectArchetype(value);
        }}
        onBlur={() => runValidationTasks("ProjectArchetype", ProjectArchetype)}
        errorMessage={errors.ProjectArchetype?.errorMessage}
        hasError={errors.ProjectArchetype?.hasError}
        {...getOverrideProps(overrides, "ProjectArchetype")}
      >
        <option
          children="Industrial User"
          value="Industrial User"
          {...getOverrideProps(overrides, "ProjectArchetypeoption0")}
        ></option>
        <option
          children="Tube Trailer Filling"
          value="Tube Trailer Filling"
          {...getOverrideProps(overrides, "ProjectArchetypeoption1")}
        ></option>
        <option
          children="Vehicle Filling"
          value="Vehicle Filling"
          {...getOverrideProps(overrides, "ProjectArchetypeoption2")}
        ></option>
      </SelectField>
      <SelectField
        label="Hydrogen Supply Route"
        placeholder="Please select an option"
        isDisabled={false}
        value={H2Supply}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ProjectName,
              ProjectArchetype,
              H2Supply: value,
              UserType,
              PurityRequirement,
              MaxAnnualUtilisation,
            };
            const result = onChange(modelFields);
            value = result?.H2Supply ?? value;
          }
          if (errors.H2Supply?.hasError) {
            runValidationTasks("H2Supply", value);
          }
          setH2Supply(value);
        }}
        onBlur={() => runValidationTasks("H2Supply", H2Supply)}
        errorMessage={errors.H2Supply?.errorMessage}
        hasError={errors.H2Supply?.hasError}
        {...getOverrideProps(overrides, "H2Supply")}
      >
        <option
          children="Pipeline"
          value="Pipeline"
          {...getOverrideProps(overrides, "H2Supplyoption0")}
        ></option>
        <option
          children="Tube Trailer"
          value="Tube Trailer"
          {...getOverrideProps(overrides, "H2Supplyoption1")}
        ></option>
      </SelectField>
      <SelectField
        label="User Type"
        placeholder="Please select an option"
        isDisabled={false}
        value={UserType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ProjectName,
              ProjectArchetype,
              H2Supply,
              UserType: value,
              PurityRequirement,
              MaxAnnualUtilisation,
            };
            const result = onChange(modelFields);
            value = result?.UserType ?? value;
          }
          if (errors.UserType?.hasError) {
            runValidationTasks("UserType", value);
          }
          setUserType(value);
        }}
        onBlur={() => runValidationTasks("UserType", UserType)}
        errorMessage={errors.UserType?.errorMessage}
        hasError={errors.UserType?.hasError}
        {...getOverrideProps(overrides, "UserType")}
      >
        <option
          children="Developer"
          value="Developer"
          {...getOverrideProps(overrides, "UserTypeoption0")}
        ></option>
        <option
          children="Policy Maker"
          value="Policy Maker"
          {...getOverrideProps(overrides, "UserTypeoption1")}
        ></option>
        <option
          children="Equipment Manufacturer"
          value="Equipment Manufacturer"
          {...getOverrideProps(overrides, "UserTypeoption2")}
        ></option>
        <option
          children="Educator"
          value="Educator"
          {...getOverrideProps(overrides, "UserTypeoption3")}
        ></option>
        <option
          children="Unspecified"
          value="Unspecified"
          {...getOverrideProps(overrides, "UserTypeoption4")}
        ></option>
      </SelectField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Purity Requirement</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={PurityRequirement}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              ProjectName,
              ProjectArchetype,
              H2Supply,
              UserType,
              PurityRequirement: value,
              MaxAnnualUtilisation,
            };
            const result = onChange(modelFields);
            value = result?.PurityRequirement ?? value;
          }
          if (errors.PurityRequirement?.hasError) {
            runValidationTasks("PurityRequirement", value);
          }
          setPurityRequirement(value);
        }}
        onBlur={() =>
          runValidationTasks("PurityRequirement", PurityRequirement)
        }
        errorMessage={errors.PurityRequirement?.errorMessage}
        hasError={errors.PurityRequirement?.hasError}
        {...getOverrideProps(overrides, "PurityRequirement")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Max Annual Utilisation</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        descriptiveText="Enter the maximum percentage utilisation of the infrastructure (0-100)"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={MaxAnnualUtilisation}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              ProjectName,
              ProjectArchetype,
              H2Supply,
              UserType,
              PurityRequirement,
              MaxAnnualUtilisation: value,
            };
            const result = onChange(modelFields);
            value = result?.MaxAnnualUtilisation ?? value;
          }
          if (errors.MaxAnnualUtilisation?.hasError) {
            runValidationTasks("MaxAnnualUtilisation", value);
          }
          setMaxAnnualUtilisation(value);
        }}
        onBlur={() =>
          runValidationTasks("MaxAnnualUtilisation", MaxAnnualUtilisation)
        }
        errorMessage={errors.MaxAnnualUtilisation?.errorMessage}
        hasError={errors.MaxAnnualUtilisation?.hasError}
        {...getOverrideProps(overrides, "MaxAnnualUtilisation")}
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
