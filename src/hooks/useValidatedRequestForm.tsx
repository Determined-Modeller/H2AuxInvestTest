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
        console.log(request);

        const newErrorMessages = { ...errorMessages };
        console.log(validate.errors);

        if (!valid && validate.errors) {
            validate.errors.forEach((error: ErrorObject) => {
                newErrorMessages[error.instancePath.substring(1).split('/').join('.')] = error.message || '';
            });
        }
        setErrorMessages(newErrorMessages);
        return valid;
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
                validate.errors.forEach((error: ErrorObject) => {
                    if (error.instancePath === '/' + path.join('/')) {
                        newErrorMessages[path.join('.')] = error.message || '';
                        console.log(newErrorMessages);
                    }
                });
            } else {
                delete newErrorMessages[path.join('.')];
                delete newErrorMessages[path[0]]
            }
            setErrorMessages(newErrorMessages);
            return updatedRequest;
        });
    };

    return { request, errorMessages, handleChange, validateForm };
};

export default useRequest;