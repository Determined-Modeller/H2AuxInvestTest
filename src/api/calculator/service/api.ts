import { RequestSchema, ResponseSchema } from "../models";
import { post } from 'aws-amplify/api';



const postCalculate = async (req: RequestSchema): Promise<ResponseSchema> => {
    const restOperation = post({
        apiName: 'h2AuxCalculatorApi',
        path: '/calculator/calculate',
        options: {
            body: JSON.parse(JSON.stringify(req)),
        }
    })
    const response = await restOperation.response;
    const responseData: ResponseSchema = (await response.body.json()) as ResponseSchema;
    return responseData;
}

export { postCalculate };