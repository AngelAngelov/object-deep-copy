var t = require('assert'),
    dcopy = require('../lib/clone');

describe('preserve', function () {
    it('number', function () {
        var copy = dcopy(42);
        t.deepStrictEqual(copy, 42);
    })

    it('string', function () {
        var copy = dcopy('a');
        t.deepStrictEqual(copy, 'a');
    })

    it('boolean', function () {
        var copy = dcopy(true);
        t.deepStrictEqual(copy, true);
    })
})

describe('copy', function () {
    it('object', function () {
        var target = { a: 0 };
        var copy = dcopy(target);
        t.deepStrictEqual(target, copy);

        copy.a = 1;
        t.notDeepStrictEqual(target, copy);

        t.deepStrictEqual(target, { a: 0 });
        t.deepStrictEqual(copy, { a: 1 });
    })

    it('array', function () {
        var target = [0];
        var copy = dcopy(target);
        t.deepStrictEqual(target, copy);

        copy[0] = 1;
        t.notDeepStrictEqual(target, copy);

        t.deepStrictEqual(target, [0]);
        t.deepStrictEqual(copy, [1]);
    })

    it('date', function () {
        var target = new Date(2017, 0, 1);
        var copy = dcopy(target);

        t.deepStrictEqual(target, copy);

        copy.setMonth(5);

        t.notDeepStrictEqual(target, copy);
        t.deepStrictEqual(target.getMonth(), 0);
        t.deepStrictEqual(copy.getMonth(), 5);
    })

    it('regexp', function () {
        var target = /w3schools/i;
        var copy = dcopy(target);
        t.deepStrictEqual(target, copy);
    })
})

describe('deep preserve', function () {
    it('function', function () {
        var target = {
            func: function () { }
        }
        var copy = dcopy(target);
        t.deepStrictEqual(target, copy);

        t.deepStrictEqual(typeof copy.func, 'function');
    })
})