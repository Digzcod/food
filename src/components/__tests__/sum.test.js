import { sum } from "../sum"

test('sum function calculate the two numbers properly', () => {
    const result = sum(5, 10);
      

    //Assertion
    expect(result).toBe(15);
})