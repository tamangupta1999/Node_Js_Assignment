const assert = require('chai').assert;
const fun = () => {
    return 200;
}
const App = require('./app');
const User = require('./models/User');

describe('App', () => {
    it('app should return ', () => {
        let result = fun();
        assert.equal(result, 200)
    })
})
//find query testing
describe('#find()', function() {
  it('respond with matching records', function() {
    return User.find({name:'test'})
  });
});

//saving user into database testing
describe('User', function() {
    describe('#save()', function() {
      it('should save without error', function(done) {
        var user = new User({name:"test",email:"test@gmail.com",password:"test123"});
        user.save(done);
      });
    });
});


// there are some other hooks are also available like
// describe('hooks', function() {
//   before(function() {
//     // runs once before the first test in this block
//   });

//   after(function() {
//     // runs once after the last test in this block
//   });

//   beforeEach(function() {
//     // runs before each test in this block
//   });

//   afterEach(function() {
//     // runs after each test in this block
//   });

//   // test cases
// });

//For Pending test 
describe('Array', function() {
  describe('#indexOf()', function() {
    // pending test below
    it('should return -1 when the value is not present');
  });
});

// Retry test
escribe('retries', function() {
  // Retry all tests in this suite up to 4 times
  this.retries(4);

  beforeEach(function() {
    browser.get('http://www.yahoo.com');
  });

  it('should succeed on the 3rd try', function() {
    // Specify this test to only retry up to 2 times
    this.retries(2);
    expect($('.foo').isDisplayed()).to.eventually.be.true;
  });
});