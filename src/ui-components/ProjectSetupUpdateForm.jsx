/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { ProjectSetup } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function ProjectSetupUpdateForm(props) {
  const {
    id: idProp,
    projectSetup: projectSetupModelProp,
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
    const cleanValues = projectSetupRecord
      ? { ...initialValues, ...projectSetupRecord }
      : initialValues;
    setProjectName(cleanValues.ProjectName);
    setProjectArchetype(cleanValues.ProjectArchetype);
    setH2Supply(cleanValues.H2Supply);
    setUserType(cleanValues.UserType);
    setPurityRequirement(cleanValues.PurityRequirement);
    setMaxAnnualUtilisation(cleanValues.MaxAnnualUtilisation);
    setErrors({});
  };
  const [projectSetupRecord, setProjectSetupRecord] = React.useState(
    projectSetupModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(ProjectSetup, idProp)
        : projectSetupModelProp;
      setProjectSetupRecord(record);
    };
    queryData();
  }, [idProp, projectSetupModelProp]);
  React.useEffect(resetStateValues, [projectSetupRecord]);
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
          await DataStore.save(
            ProjectSetup.copyOf(projectSetupRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ProjectSetupUpdateForm")}
      {...rest}
    >
      <TextField
        label="Project name"
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
      <TextField
        label="Project archetype"
        isRequired={true}
        isReadOnly={false}
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
      ></TextField>
      <TextField
        label="H2 supply"
        isRequired={true}
        isReadOnly={false}
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
      ></TextField>
      <TextField
        label="User type"
        isRequired={true}
        isReadOnly={false}
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
      ></TextField>
      <TextField
        label="Purity requirement"
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
        label="Max annual utilisation"
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
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || projectSetupModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || projectSetupModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
