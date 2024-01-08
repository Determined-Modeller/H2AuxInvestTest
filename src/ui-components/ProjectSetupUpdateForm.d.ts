/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ProjectSetup } from "../models";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProjectSetupUpdateFormInputValues = {
    ProjectName?: string;
    ProjectArchetype?: string;
    H2Supply?: string;
    UserType?: string;
    PurityRequirement?: number;
    MaxAnnualUtilisation?: number;
};
export declare type ProjectSetupUpdateFormValidationValues = {
    ProjectName?: ValidationFunction<string>;
    ProjectArchetype?: ValidationFunction<string>;
    H2Supply?: ValidationFunction<string>;
    UserType?: ValidationFunction<string>;
    PurityRequirement?: ValidationFunction<number>;
    MaxAnnualUtilisation?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjectSetupUpdateFormOverridesProps = {
    ProjectSetupUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ProjectName?: PrimitiveOverrideProps<TextFieldProps>;
    ProjectArchetype?: PrimitiveOverrideProps<TextFieldProps>;
    H2Supply?: PrimitiveOverrideProps<TextFieldProps>;
    UserType?: PrimitiveOverrideProps<TextFieldProps>;
    PurityRequirement?: PrimitiveOverrideProps<TextFieldProps>;
    MaxAnnualUtilisation?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProjectSetupUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProjectSetupUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    projectSetup?: ProjectSetup;
    onSubmit?: (fields: ProjectSetupUpdateFormInputValues) => ProjectSetupUpdateFormInputValues;
    onSuccess?: (fields: ProjectSetupUpdateFormInputValues) => void;
    onError?: (fields: ProjectSetupUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProjectSetupUpdateFormInputValues) => ProjectSetupUpdateFormInputValues;
    onValidate?: ProjectSetupUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProjectSetupUpdateForm(props: ProjectSetupUpdateFormProps): React.ReactElement;
