// eslint-disable-next-line no-undef
describe('Test main functional', () => {
    // eslint-disable-next-line no-undef
    test('Work as expected', () => {
        // eslint-disable-next-line no-undef
        expect([1, 2, 3]).toEqual([1, 2, 3]);
        // eslint-disable-next-line no-undef
        expect('hello').toEqual('hello');
        // eslint-disable-next-line no-undef
        expect(true).toEqual(true);
        // eslint-disable-next-line no-undef
        expect(false).toEqual(false);
        // eslint-disable-next-line no-undef
        expect(42).toBe(42);
        // eslint-disable-next-line no-undef
        expect({ foo: 'bar' }).toHaveProperty('foo', 'bar');
        // eslint-disable-next-line no-undef
        expect([1, 2, 3]).toHaveLength(3);
        // eslint-disable-next-line no-undef
        expect(1 + 2).toBe(3);
        // eslint-disable-next-line no-undef
        expect(1 + 2).not.toBe(4);
        // eslint-disable-next-line no-undef
        expect(null).toBeNull();
    });

    // eslint-disable-next-line no-undef
    test('test algorithm', () => {
        // eslint-disable-next-line no-undef
        expect(1 + 6).toBe(7);
    });
});