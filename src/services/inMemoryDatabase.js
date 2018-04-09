// This file represent in-memory database implementation
// the reason for this decision is within assigment
// Take into account the interviewer will only have NodeJS installed on his or her machine.
// So I cannot expect that interviewer will have MongoDB, Postgress or any other database available

let idCounter = 0
const db = {
  wishes: {}
}

module.exports = {
  createItem: (data) => {
    data.id = idCounter
    db.wishes[idCounter] = data
    idCounter++

    return db.wishes[idCounter - 1]
  },
  getItems: () => {
    return db.wishes
  },
  getItemById: (id) => {
    return db.wishes[id]
  },
  deleteItem: (id) => {
    delete db.wishes[id]
  },
  getIdCounter: () => {
    return idCounter
  }
}
