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

     const sql = 'INSERT INTO questions (content) VALUES (?)' //need () around ?
     const self = this

    return new Promise(function(resolve){ //promise(function(resolve){}) two sets of ()
       db.run(sql,[self.content],function(){ //don't need interpolation around self.content
         self.id = this.lastID  // this.lastID not this.id
         resolve(self)
       })
    })
  }

}

module.exports = Question;
