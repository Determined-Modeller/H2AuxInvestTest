import fs from 'fs';

const oasPath = __dirname + "\\..\\openapi.json";

const readOas = () => {
    return JSON.parse(fs.readFileSync(oasPath).toString());
}

export default readOas;