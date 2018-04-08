//This file represent in-memory database implementation
//the reason for this decision is within assigment
// Take into account the interviewer will only have NodeJS installed on his or her machine.
//So I cannot expect that interviewer will have MongoDB, Postgress or any other database available

let idCounter = 0;
const db = {
    wishes: {}
};

module.exports = {
    createItem: (data) => {
        db.wishes[idCounter] = data;
        idCounter++;

    },
    getItems: () => {
        return db.wishes;
    },
    deleteItem: (id)=>{
        delete db.wishes[id];
    }
};