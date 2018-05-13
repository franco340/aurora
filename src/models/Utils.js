'use strict';
class Utils {
    constructor() {
        this.fs = require('fs');
    }
    readFileUtf8(path, callback) {
        this.fs.readFile(path, 'utf-8', callback);
    }
    readFielSyncUtf8(path) {
        return this.fs.readFileSync(path, 'utf8');
    }
}
exports.Utils = Utils;