'use strict';
let Connect = require('./Connect').Connect;
class DataBase extends Connect {
    constructor() {
        super();
    }
    create(success) {
        this.start('conectado', () => {
            this.con.query("CREATE DATABASE prueba_con_node", (err, result) => {
                if(err) throw err;
                if(success!=undefined) console.log(success);
            })
        });
    }
    delete(success) {
        this.con('conectado', () => {
            this.con.query("DROP DATABASE prueba_con_node", (err, result) => {
                if(err) throw err;
                if (success!=undefined) console.log(success);
                console.log(this.con)
                this.con = null;
                console.log(this.con)
            })
        });
    }
    
}
exports.DataBase = DataBase;