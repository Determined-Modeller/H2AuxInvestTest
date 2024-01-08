/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ProjectSetupCreateFormInputValues = {
    ProjectName?: string;
    ProjectArchetype?: string;
    H2Supply?: string;
    UserType?: string;
    PurityRequirement?: number;
    MaxAnnualUtilisation?: number;
};
export declare type ProjectSetupCreateFormValidationValues = {
    ProjectName?: ValidationFunction<string>;
    ProjectArchetype?: ValidationFunction<string>;
    H2Supply?: ValidationFunction<string>;
    UserType?: ValidationFunction<string>;
    PurityRequirement?: ValidationFunction<number>;
    MaxAnnualUtilisation?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjectSetupCreateFormOverridesProps = {
    ProjectSetupCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ProjectName?: PrimitiveOverrideProps<TextFieldProps>;
    ProjectArchetype?: PrimitiveOverrideProps<SelectFieldProps>;
    H2Supply?: PrimitiveOverrideProps<SelectFieldProps>;
    UserType?: PrimitiveOverrideProps<SelectFieldProps>;
    PurityRequirement?: PrimitiveOverrideProps<TextFieldProps>;
    MaxAnnualUtilisation?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProjectSetupCreateFormProps = React.PropsWithChildren<{
    overrides?: ProjectSetupCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProjectSetupCreateFormInputValues) => ProjectSetupCreateFormInputValues;
    onSuccess?: (fields: ProjectSetupCreateFormInputValues) => void;
    onError?: (fields: ProjectSetupCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProjectSetupCreateFormInputValues) => ProjectSetupCreateFormInputValues;
    onValidate?: ProjectSetupCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProjectSetupCreateForm(props: ProjectSetupCreateFormProps): React.ReactElement;
