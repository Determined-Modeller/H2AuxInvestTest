// This file is used to override the REST API resources configuration
import { AmplifyApiRestResourceStackTemplate, AmplifyProjectInfo } from '@aws-amplify/cli-extensibility-helper';
import readOas from './readoas';

const replace = /ARNSUBLAMBDA/g;


export function override(resources: AmplifyApiRestResourceStackTemplate, project: AmplifyProjectInfo) {
    console.log(project);
    const oldArn = resources.restApi.body.paths["/calculator"]['x-amazon-apigateway-any-method']['x-amazon-apigateway-integration']['uri'];
    const oasJson = readOas();

    oasJson.host = resources.restApi.body.host;


    let oasString = JSON.stringify(oasJson);
    oasString = oasString.replace(replace, oldArn)
    const processedOas = JSON.parse(oasString)


    resources.restApi.body = processedOas;
}
