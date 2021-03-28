import {getPosition} from './getPosition';

describe('getProgress', () => {

    it('should return 0 when audioPos is 0', () => {
        const text = "some input text";
        const actual = getPosition(0, 100, text.length)
        expect(actual).toBe(0)
    })

    it('should return middle of text when audioPos is at 50%', () => {
        const text = "some input text";
        const actual = getPosition(50, 100, text.length)
        expect(actual).toBe(Math.ceil(text.length / 2))
    })

    it('should return last char when audioPos equals audioLength', () => {
        const text = "some input text";
        const actual = getPosition(100, 100, text.length)
        expect(actual).toBe(text.length)
    })

})