//GLOBAL VARIABLES
const fs = require('fs');
const directory = require('../server').directory;


const updateDataController = (request, response) => {

    const dataToUpdate = request.body;

    //GET DATA FROM JSON DATABASE
    fs.readFile(directory, "utf8", (err, data)=>{
        if (err) {return response.send('Error');}

        let dbData = JSON.parse(data);
        dbData = dbData.filter(el=>el.id!== dataToUpdate.id);
        dbData.push(dataToUpdate);

        fs.writeFile(directory, JSON.stringify(dbData), (err) => {
            if (err) throw err;
            console.log('Entry has been updated!');
            return response.send('Entry has been updated!');
        });
    });
};

module.exports = updateDataController;
