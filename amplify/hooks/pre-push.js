/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const fs = require('fs');
const testFolder = __dirname;

fs.readdir(testFolder, (err, files) => {
    files.forEach(file => {
        console.log(file);
    });
});
