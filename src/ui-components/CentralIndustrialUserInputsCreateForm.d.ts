/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type CentralIndustrialUserInputsCreateFormInputValues = {
    PipelineSupplyPressure?: number;
    PipelineSupplyFlowrateMax?: number;
    MinServiceFlowrate?: number;
    MinServicePressure?: number;
    MinServiceTemperature?: number;
    IndDemandHours?: number;
    IndUsageProfile?: number[];
};
export declare type CentralIndustrialUserInputsCreateFormValidationValues = {
    PipelineSupplyPressure?: ValidationFunction<number>;
    PipelineSupplyFlowrateMax?: ValidationFunction<number>;
    MinServiceFlowrate?: ValidationFunction<number>;
    MinServicePressure?: ValidationFunction<number>;
    MinServiceTemperature?: ValidationFunction<number>;
    IndDemandHours?: ValidationFunction<number>;
    IndUsageProfile?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CentralIndustrialUserInputsCreateFormOverridesProps = {
    CentralIndustrialUserInputsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    PipelineSupplyPressure?: PrimitiveOverrideProps<TextFieldProps>;
    PipelineSupplyFlowrateMax?: PrimitiveOverrideProps<TextFieldProps>;
    MinServiceFlowrate?: PrimitiveOverrideProps<TextFieldProps>;
    MinServicePressure?: PrimitiveOverrideProps<TextFieldProps>;
    MinServiceTemperature?: PrimitiveOverrideProps<TextFieldProps>;
    IndDemandHours?: PrimitiveOverrideProps<TextFieldProps>;
    IndUsageProfile?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CentralIndustrialUserInputsCreateFormProps = React.PropsWithChildren<{
    overrides?: CentralIndustrialUserInputsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CentralIndustrialUserInputsCreateFormInputValues) => CentralIndustrialUserInputsCreateFormInputValues;
    onSuccess?: (fields: CentralIndustrialUserInputsCreateFormInputValues) => void;
    onError?: (fields: CentralIndustrialUserInputsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CentralIndustrialUserInputsCreateFormInputValues) => CentralIndustrialUserInputsCreateFormInputValues;
    onValidate?: CentralIndustrialUserInputsCreateFormValidationValues;
} & React.CSSProperties>;
export default function CentralIndustrialUserInputsCreateForm(props: CentralIndustrialUserInputsCreateFormProps): React.ReactElement;
