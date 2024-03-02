/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const fs = require('fs');
const path = require("path")

const testFolder = path.dirname(path.basename(__dirname)) + "/amplify/backend/api/h2AuxCalculatorApi";

fs.readdir(testFolder, (err, files) => {
    files.forEach(file => {
        console.log(file);
    });
});
