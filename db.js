const dbpath = "../database.json";
const fs = require("fs");
 

let i = 0;
let ii = 0;
var log = m => {
  i++;
  ii++;

};



var DB = {};

class db {
  
  static load(){
    log("loading")
    DB = JSON.parse(fs.readFileSync(dbpath).toString());
    console.log("loading complet lol", Object.keys(DB).length, "stuff ")
  };
  static save(){
 //   log("saving :flushed:")
    fs.writeFileSync(dbpath, JSON.stringify(DB));
 //   console.log("saved owo");
  };
  static get(id){
  //  log("get", id)
    if(!DB[id]) return null;
    return JSON.parse(JSON.stringify(DB[id])) // string -> parse :: deep copy
  };
  static set(id, val){ //haha static go brr
  //  log("set", id, val)
    DB[id] = val;
    db.save();
  };
  static add(id, val){
//    log("add", id, val)
    if(!DB[id]) DB[id] = 0;
    DB[id] = Number(DB[id]) + val;
    db.save();
  };
  static async fetch(id){ 
  //  log("fetch", id)
    return db.get(id);
  };
  static has(id){
  //  log("has", id)
    
    return Boolean(DB[id])
  }
  static delete (id){
   return delete DB[id];
};
  static lol(){
    return ii;
  }
};

db.load();

db.version = "v31.31" //db versionu



module.exports = db;
