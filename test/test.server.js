
const assert = require('assert');

describe('h1 test', () => {

    //load script
    const name = require('../client/scripts/user');
  
     it('should return Tom Peeters', () => {
   
        assert.equal(name, "Tom Peeters");
    });

 
});