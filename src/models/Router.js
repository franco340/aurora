'use strict';
let Server = require('./Server').Server;
class Router extends Server {
    constructor() {
        super();
    }
    routerTemplates() {
        var routingStar = (req, res) => {
            var hola = '<h1>Hola Mundo</h1>';
            var otra = '<h2>Otra vez</h2>';
            
            res.writeHead(200, {'Content-Type':'text/html'});
            this.readFileUtf8('./src/views/home.jsh', (err, data) => {
                if (err) throw err;
                let code = data.match(/[^\{\}]+(?=\})/g);
                var lineCode = [];
                var x = 10,y = 20;
                var dataR;
                for (let key in code) {
                    lineCode[key] = (code[key].match(/[ \w\+\=]+(?=\;)/g));
                    for (let i in lineCode[key]) {
                        
                        lineCode[key][i] = lineCode[key][i].replace(/^\s+|\s+$/g, "");
                        let a = eval(lineCode[key][i]);
                        //console.log(lineCode[key][i]); console.log(a)
                        data = data.replace(lineCode[key][i], a);
                        //console.log(dataR)
                        
                    } 
                }
                //console.log(dataR)
                console.log('LINECODE:\n', lineCode)
                res.end(data);
            });        
        }
        this.create(routingStar, 8000, null, true);    
    }
}
exports.Router = Router;