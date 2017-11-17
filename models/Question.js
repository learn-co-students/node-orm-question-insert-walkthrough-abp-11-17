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
    this.content = content
  }

  insert(){
    const self = this                                       //using this below in db.run would actually refer to a different this.... so self is holding current values of this
    const sql = `INSERT INTO questions (content) VALUES (?)`

    return new Promise(function(resolve){
      db.run(sql, [self.content], function(err, result){   //passed without err, result as parameters
        self.id = this.lastID                              //this refers to db
        resolve(self)
      })
    })

  }

}

module.exports = Question;
