function BaseCache() {
    
}

BaseCache.prototype = {

    put: function(key, value) {
        this.doPut(key, value);
    },

    get: function(key, createFunc) {
        var value = this.doGet(key);
        if (value === undefined && createFunc) {
            value = createFunc();
            if (value === undefined) {
                value = null;
            }
            this.doPut(key, value);
        }
        return value;
    }
};

module.exports = BaseCache;