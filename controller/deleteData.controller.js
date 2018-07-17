//GLOBAL VARIABLES
const fs = require('fs');
const directory = require('../server').directory;


const deleteDataController = (request, response) => {

    const dataToDelete = request.body;

    //GET DATA FROM JSON DATABASE
    fs.readFile(directory, "utf8", (err, data)=>{
        if (err) {return response.send('Error');}

        let dbData = JSON.parse(data);

        if(dbData.find(el=>el.id=== dataToDelete.id)){

            const dbDataEntryDeleted = dbData.filter(el=> el.id !== dataToDelete.id);

            fs.writeFile(directory, JSON.stringify(dbDataEntryDeleted), (err) => {
                if (err) throw err;
                console.log('Entry was deleted');
                return response.send('Entry was deleted');
            });
        }
        else{
            console.log('Entry not found and thus not deleted');
            return response.send('Entry not found and thus not deleted');
        }
    });
};

module.exports = deleteDataController;
