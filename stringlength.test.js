function testStringLength() {
    // Tests for the original function
    console.assert(stringLength('hello') === 5);
    console.assert(stringLength('') === 0);
    console.assert(stringLength('a') === 1);
    
    // Tests for the updated function
    try {
      stringLength('this is a very long string');
    } catch (e) {
      console.assert(e.message === 'String length must be between 1 and 10 characters.');
    }
    
    try {
      stringLength('');
    } catch (e) {
      console.assert(e.message === 'String length must be between 1 and 10 characters.');
    }
  }
  