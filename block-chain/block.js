class Block {
    constructor(timestamp,lasthash,hash,data) {
        this.timestamp = timestamp;
        this.lasthash = lasthash;
        this.hash = hash;
        this.data = data;
    }

    toString() {
        return `Block -
        TimeStamp: ${this.timestamp}
        Last Hash: ${this.lasthash.substring(0,10)}
        Hash: ${this.hash.substring(0,10)}
        Data: ${this.data}
        `
    }

    static genesis() {
        return new this("Genesis time","------","firs90897y3cpm",[]);
    }
}

module.exports = Block;