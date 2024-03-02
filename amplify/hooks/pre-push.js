/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const fs = require('fs');
const path = require("path")

const oasFile = path.dirname(path.basename(__dirname)) + "/amplify/backend/api/h2AuxCalculatorApi/openapi.json";
const oasTsFile = path.dirname(path.basename(__dirname)) + "/amplify/backend/api/h2AuxCalculatorApi/openapi.ts";


const oasObject = JSON.parse(fs.readFileSync(oasFile, 'utf8'));

const jsonString = JSON.stringify(oasObject);
const constDeclaration = `const oas = ${jsonString};\nexport default oas;`;

fs.writeFileSync(oasTsFile, constDeclaration, 'utf8')

