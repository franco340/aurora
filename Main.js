'use strict';
let Router = require('./src/models/Router').Router;
class Main {
    static main() {
        let appSever = new Router();
        appSever.routerTemplates();
    }
}
Main.main();