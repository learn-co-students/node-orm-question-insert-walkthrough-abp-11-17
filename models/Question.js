'use strict';

const db = require("../config/db")

class Question{
  constructor(content){
    this.content = content
  }



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

  insert(){
    const self=this
    const sql=`INSERT INTO questions (content) VALUES (?)`
    return new Promise(function(resolve){
      const thingToBeResolved= db.run(sql, [self.content], function(error, result){
        self.id= this.lastID
        resolve(self)
      })
    })
  }


}


module.exports = Question;
