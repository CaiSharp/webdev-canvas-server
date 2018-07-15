//GLOBAL VARIABLES
const fs = require('fs');
const directory = require('../server').directory;


const getAllDataController = (request, response) => {

    fs.readFile(directory, "utf8", (err, data)=>{
        if (err) {return response.send('Error');}

        return response.send(JSON.parse(data));
    });
};

module.exports = getAllDataController;
