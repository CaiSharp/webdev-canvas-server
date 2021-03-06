//GLOBAL VARIABLES
const fs = require('fs');
const directory = require('../server').directory;


const postDataController = (request, response) => {

    const dataToAdd = request.body;

    //GET DATA FROM JSON DATABASE
    fs.readFile(directory, "utf8", (err, data)=>{
        if (err) {return response.send('Error');}

        let dbData = JSON.parse(data);

        if(dbData.find(el=>el.id=== dataToAdd.id)){
            console.log('Entry already exists');
            return response.send('Entry already exists');
        }
        else{
            dbData.push(dataToAdd);

            fs.writeFile(directory, JSON.stringify(dbData), (err) => {
                if (err) throw err;
                console.log('Entry has been saved!');
                return response.send('Entry has been saved!');
            });
        }
    });
};

module.exports = postDataController;
