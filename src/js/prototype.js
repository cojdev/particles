EventTarget.prototype.evt = function (event, callback) {
    return this.addEventListener(event, callback);
}