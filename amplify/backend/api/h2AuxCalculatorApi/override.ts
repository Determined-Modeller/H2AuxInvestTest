// This file is used to override the REST API resources configuration
import { AmplifyApiRestResourceStackTemplate, AmplifyProjectInfo } from '@aws-amplify/cli-extensibility-helper';
import oas from './openapi';

const replace = /ARNSUBLAMBDA/g;


export function override(resources: AmplifyApiRestResourceStackTemplate, project: AmplifyProjectInfo) {
    console.log(project);
    const oldArn = resources.restApi.body.paths["/calculator"]['x-amazon-apigateway-any-method']['x-amazon-apigateway-integration']['uri'];



    let oasString = JSON.stringify(oas)
    oasString = oasString.replace(replace, oldArn)
    const oasJson = JSON.parse(oasString)
    oasJson["host"] = resources.restApi.body.host;


    resources.restApi.body = oasJson;
}
