'use strict';
let Utils = require('./Utils').Utils;
class Server extends Utils {
    constructor() {
        super();
        this.http = require('http');
    }
    create(callback, port, hostname, messege) {
        let x = this.http.createServer(callback);
        let y = [];
        y['port'] = (port==undefined||port==false)?8080:port;
        y['hostname'] = (hostname==undefined||hostname==false)?'localhost':hostname;
        x.listen(y['port'], y['hostname'] ,()=>{
            if(messege==undefined||messege==false) return;
            if(messege==true) {
                console.log(`listening in: ${y['hostname']}:${y['port']}`)
            } else if(typeof(messege) == 'function'){
                messege();
            }
        });
    }
}
exports.Server = Server;