import { expect } from "chai";
import { describe, it } from "mocha";

const hoge = (huga: number) => {
  return huga + 1;
}

describe('divided', function () {
  it('should return 2 when the value is 4', () => {
    const test = hoge(1);
    expect(test).to.equal(2);
  }
  );
});