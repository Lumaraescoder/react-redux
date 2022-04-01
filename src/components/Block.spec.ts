import {zeroPad} from './Block'

it('should add 00 at start of reach index',()=>{
 expect(zeroPad(1)).toBe('001')
})