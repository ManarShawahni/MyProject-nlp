import { handleClick } from '../client/js/handleClick';

describe('handleClick', () => {
    test('is defined', () => {
        expect(handleClick).toBeDefined();
    });

    test('is not undefined explicitly using toBe', () => {
        expect(handleClick).not.toBe(undefined);
    });
});
