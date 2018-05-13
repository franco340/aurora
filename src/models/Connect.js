'use strict';
class Connect {
    constructor() {
        this.configData = require('./../config/config');
        this.mysql = require('mysql');
        this.DataBase = require('DataBase').DataBase;
        this.con = this.mysql.createConnection({
            host: this.configData.host,
            user: this.configData.user,
            password: this.configData.password
        });
    }
    con(success, callback) {
        this.con.connect((err) => {
            var x = 'hola'
            if (err) throw err;
            if (success!=undefined) console.log(success);
            if (callback!=undefined||callback!=null) callback(x);
        })
    }
    start() {

    }
}
exports.Connect = Connect;