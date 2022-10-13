import React from 'react';

import SQLite from "react-native-sqlite-storage";
//Importing react library and SQLite module from sql-storage package.
let db;
//Creating class which extends react.component
class DbService extends React.Component {

  constructor(props) {                           
    super(props)                     
    db = SQLite.openDatabase({ name: 'stressless.db', createFromLocation: "~stressless.db", 
    location: 'Library'} , this._dbopen, this._dbclose);
  }                  //Opening the stressless.db from library (location)
  _dbopen() {
  }
  _dbclose() {
  }
  //Executing a SQL query on the db
  ExecuteQuery(sql, params = []) {
    return (new Promise((resolve, reject) => {
      db.transaction((trans) => {
        trans.executeSql(sql, params, (trans, results) => {
          resolve(results)   //resolve method 
        },
          (error) => {
            reject(error)  //reject method
          })
      })
    }) 
    )
  }

}
export default DbService;
