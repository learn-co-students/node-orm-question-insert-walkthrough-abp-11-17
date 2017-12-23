const db = require("../config/db")

class Question{
  static CreateTable() {
    return new Promise(function(resolve){
      const sql = `CREATE TABLE questions (
        id INTEGER PRIMARY KEY,
        content TEXT
      )`

      db.run(sql, function(){
        resolve("questions table created")
      })
    })
  }

  constructor(content){
    this.content = self.content
  }

  insert(){
    const self = this // THIS IS THE CRUX
    const sql = `INSERT INTO questions (content) VALUES (?)`
    return new Promise(function(resolve){
      db.run(sql, [self.content], function(err, result){
        resolve("Row inserted!")
      })
    })
  }
}

module.exports = Question;
