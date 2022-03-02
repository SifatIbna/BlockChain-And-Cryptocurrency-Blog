const Block = require('./block');
const BlockChain = require('./block-chain');

describe("BlockChain",()=>{
    let bc;

    beforeEach(()=>{
        bc = new BlockChain();
    });

    it("Starts with `genesis` block",()=>{
        expect(bc.chain[0]).toEqual(Block.genesis());
    });

    it("add a new block",()=>{
        
        const data = "foo";
        bc.addBlock(data);

        expect(bc.chain[bc.chain.length-1].data).toEqual(data);
    })
})