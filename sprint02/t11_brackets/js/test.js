describe('the checkBrackets function', () => {
    it('Correct cases 1 ', () => {
        const result = checkBrackets('1)()(())2(()')
        assert.equal(result, 2);        
    })    

    it('Correct cases 2 ', () => {
        const result = checkBrackets('()))')
        assert.equal(result, 2);        
    }) 

    it('Correct cases 3 ', () => {
        const result = checkBrackets('()')
        assert.equal(result, 0);        
    })  

    it('Correct cases 4 ', () => {
        const result = checkBrackets(')0)(()')
        assert.equal(result, 3);        
    }) 

    it('Correct cases 5 ', () => {
        const result = checkBrackets('((()')
        assert.equal(result, 2);        
    }) 

    it('Correct cases 6 ', () => {
        const result = checkBrackets('lg;fk(hello()')
        assert.equal(result, 1);        
    })  

    it('Correct cases 7 ', () => {
        const result = checkBrackets('**)(((()))))')
        assert.equal(result, 2);        
    })  
 
    it('Correct cases 8 ', () => {
        const result = checkBrackets(')))(()()())()((()()()()')
        assert.equal(result, 5);        
    })  

    it('Correct cases 9 ', () => {
        const result = checkBrackets(')))))')
        assert.equal(result, 5);        
    })   

    it('Correct cases 10 ', () => {
        const result = checkBrackets('((((((')
        assert.equal(result, 6);        
    }) 

    it('Uncorrect cases 1 ', () => {
        assert.equal(checkBrackets(' '), -1);        
    })    

    it('Uncorrect cases 2 ', () => {
        assert.equal(checkBrackets('hello'), -1);        
    }) 

    it('Uncorrect cases 3 ', () => {
        assert.equal(checkBrackets(undefined), -1);        
    })   

    it('Uncorrect cases 4 ', () => {
        assert.equal(checkBrackets(''), -1);        
    })    

    it('Uncorrect cases 5 ', () => {
        assert.equal(checkBrackets('1238-'), -1);        
    })   

})
