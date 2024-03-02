// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs')

const oasPath = __dirname + "\\..\\openapi.json";

const readOas = () => {
    return JSON.parse(fs.readFileSync(oasPath).toString());
}

export default readOas;