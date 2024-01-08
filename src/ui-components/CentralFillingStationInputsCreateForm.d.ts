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
export declare type CentralFillingStationInputsCreateFormInputValues = {
    PipelineSupplyPressure?: number;
    PipelineSupplyFlowrateMax?: number;
    VFDispensingOption?: string;
    VFMaxVehicleTankCapacity?: number;
    VFSizeOfFleet?: number;
    VFTimeToFill?: number;
    VFLingeringTime?: number;
    VFFillingProfile?: number[];
};
export declare type CentralFillingStationInputsCreateFormValidationValues = {
    PipelineSupplyPressure?: ValidationFunction<number>;
    PipelineSupplyFlowrateMax?: ValidationFunction<number>;
    VFDispensingOption?: ValidationFunction<string>;
    VFMaxVehicleTankCapacity?: ValidationFunction<number>;
    VFSizeOfFleet?: ValidationFunction<number>;
    VFTimeToFill?: ValidationFunction<number>;
    VFLingeringTime?: ValidationFunction<number>;
    VFFillingProfile?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CentralFillingStationInputsCreateFormOverridesProps = {
    CentralFillingStationInputsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    PipelineSupplyPressure?: PrimitiveOverrideProps<TextFieldProps>;
    PipelineSupplyFlowrateMax?: PrimitiveOverrideProps<TextFieldProps>;
    VFDispensingOption?: PrimitiveOverrideProps<SelectFieldProps>;
    VFMaxVehicleTankCapacity?: PrimitiveOverrideProps<TextFieldProps>;
    VFSizeOfFleet?: PrimitiveOverrideProps<TextFieldProps>;
    VFTimeToFill?: PrimitiveOverrideProps<TextFieldProps>;
    VFLingeringTime?: PrimitiveOverrideProps<TextFieldProps>;
    VFFillingProfile?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CentralFillingStationInputsCreateFormProps = React.PropsWithChildren<{
    overrides?: CentralFillingStationInputsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CentralFillingStationInputsCreateFormInputValues) => CentralFillingStationInputsCreateFormInputValues;
    onSuccess?: (fields: CentralFillingStationInputsCreateFormInputValues) => void;
    onError?: (fields: CentralFillingStationInputsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CentralFillingStationInputsCreateFormInputValues) => CentralFillingStationInputsCreateFormInputValues;
    onValidate?: CentralFillingStationInputsCreateFormValidationValues;
} & React.CSSProperties>;
export default function CentralFillingStationInputsCreateForm(props: CentralFillingStationInputsCreateFormProps): React.ReactElement;
