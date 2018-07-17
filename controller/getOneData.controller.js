//GLOBAL VARIABLES
const fs = require('fs');
const directory = require('../server').directory;


const getOneDataController = (request, response) => {

    let reqId = parseInt(request.params.id);

    fs.readFile(directory, "utf8", (err, data)=>{
        if (err) {return response.send('Error');}

        let dbData = JSON.parse(data);

        const requestedData = dbData.find(el=>el.id=== reqId);

        return requestedData !== typeof undefined ? response.send(requestedData) : response.end;
    });
};

module.exports = getOneDataController;
