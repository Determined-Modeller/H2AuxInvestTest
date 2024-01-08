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
export declare type CentralHDSInputsCreateFormInputValues = {
    PipelineSupplyPressure?: number;
    PipelineSupplyFlowrateMax?: number;
    TTEffectiveCapacity?: number;
    TTPressureReq?: number;
    TTMaxFleetSize?: number;
    TTLingeringTime?: number;
    TTTimeToFill?: number;
    TTFillingProfile?: number;
};
export declare type CentralHDSInputsCreateFormValidationValues = {
    PipelineSupplyPressure?: ValidationFunction<number>;
    PipelineSupplyFlowrateMax?: ValidationFunction<number>;
    TTEffectiveCapacity?: ValidationFunction<number>;
    TTPressureReq?: ValidationFunction<number>;
    TTMaxFleetSize?: ValidationFunction<number>;
    TTLingeringTime?: ValidationFunction<number>;
    TTTimeToFill?: ValidationFunction<number>;
    TTFillingProfile?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CentralHDSInputsCreateFormOverridesProps = {
    CentralHDSInputsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    PipelineSupplyPressure?: PrimitiveOverrideProps<TextFieldProps>;
    PipelineSupplyFlowrateMax?: PrimitiveOverrideProps<TextFieldProps>;
    TTEffectiveCapacity?: PrimitiveOverrideProps<TextFieldProps>;
    TTPressureReq?: PrimitiveOverrideProps<TextFieldProps>;
    TTMaxFleetSize?: PrimitiveOverrideProps<TextFieldProps>;
    TTLingeringTime?: PrimitiveOverrideProps<TextFieldProps>;
    TTTimeToFill?: PrimitiveOverrideProps<TextFieldProps>;
    TTFillingProfile?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CentralHDSInputsCreateFormProps = React.PropsWithChildren<{
    overrides?: CentralHDSInputsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CentralHDSInputsCreateFormInputValues) => CentralHDSInputsCreateFormInputValues;
    onSuccess?: (fields: CentralHDSInputsCreateFormInputValues) => void;
    onError?: (fields: CentralHDSInputsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CentralHDSInputsCreateFormInputValues) => CentralHDSInputsCreateFormInputValues;
    onValidate?: CentralHDSInputsCreateFormValidationValues;
} & React.CSSProperties>;
export default function CentralHDSInputsCreateForm(props: CentralHDSInputsCreateFormProps): React.ReactElement;
