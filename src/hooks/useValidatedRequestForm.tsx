/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import Ajv, { ErrorObject } from 'ajv';
import { RequestSchema } from '../api/calculator';

const useRequest = (initialRequest: RequestSchema, schema: object) => {
    const [request, setRequest] = useState(initialRequest);
    const [errorMessages, setErrorMessages] = useState<Record<string, string>>({});

    const ajv = new Ajv();
    const validate = ajv.compile(schema);

    const validateForm = () => {
        const valid = validate(request);
        const newErrorMessages = { ...errorMessages };
        if (!valid && validate.errors) {
            validate.errors.forEach((error: ErrorObject) => {
                newErrorMessages[error.instancePath.substring(1).split('/').join('.')] = error.message || '';
            });
        }
        setErrorMessages(newErrorMessages);
        return valid;
    }

    const isInValidationErrors = (errors: ErrorObject<string, Record<string, any>, unknown>[] | null | undefined, path: string) => {
        return errors && !!errors.find(e => e.instancePath === path)
    }
    const isInNewErrorMessages = (errors: Record<string, string>, path: string) => {
        return !!errors[path];
    }

    const handleChange = (newValue: any, path: string[]) => {
        setRequest(prevRequest => {
            const updatedRequest = { ...prevRequest };
            let target: any = updatedRequest;
            for (let i = 0; i < path.length - 1; i++) {
                target = target[path[i]];
            }
            target[path[path.length - 1]] = newValue;

            const valid = validate(updatedRequest);
            const newErrorMessages = { ...errorMessages };
            if (!valid && validate.errors) {
                console.log("invalid")
                console.log(validate.errors)
                console.log(errorMessages)
                validate.errors.forEach((error: ErrorObject) => {
                    if (error.instancePath === '/' + path.join('/')) {
                        newErrorMessages[path.join('.')] = error.message || '';
                    }
                });
            } else {
                delete newErrorMessages[path.join('.')];
                delete newErrorMessages[path[0]];
            }

            if (!isInValidationErrors(validate.errors, '/' + path.join('/')) && isInNewErrorMessages(newErrorMessages, path.join("."))) {
                delete newErrorMessages[path.join('.')];
                delete newErrorMessages[path[0]];
            }

            setErrorMessages(newErrorMessages);
            return updatedRequest;
        });
    };

    return { request, errorMessages, handleChange, validateForm };
};

export default useRequest;