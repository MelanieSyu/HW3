describe('sumIfEven', () => {
    it('should return product (even number)', () => {
        const first = 2;
        const second = 4;
        const expected = 8;

        const actual = sumIfEven(first, second);

        assert.deepEqual(actual, expected);
    });
    it('should return sum (odd number)', () => {
        const first = 3;
        const second = 4;
        const expected = 7;

        const actual = sumIfEven(first, second);

        assert.deepEqual(actual, expected);
    });
});