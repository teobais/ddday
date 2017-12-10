var ddday = require('../index');

describe('#boilerplate', function() {

    describe("Testing a function", function () {
        it('function should exist', function() {
            expect(ddday(new Date().getDate()-1)).toEqual('09');
            expect(ddday(new Date().getDate())).toEqual(10);
        });
    });

});


