describe('Test main functional', () => {
    test('Work as expected', () => {
        expect([1, 2, 3]).toEqual([1, 2, 3]);
        expect('hello').toEqual('hello');
        expect(true).toEqual(true);
        expect(false).toEqual(false)
        expect(42).toBe(42);
        expect({ foo: 'bar' }).toHaveProperty('foo', 'bar');
        expect([1, 2, 3]).toHaveLength(3);
        expect(1+2).toBe(3);
        expect(1+2).not.toBe(4);
        expect(null).toBeNull();
    });
});
