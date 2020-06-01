import chai from "chai";
import dtyp from "../src";
import chaiBytes from "chai-bytes";
import moment from "moment-timezone";
import chaiDatetime from "chai-datetime";

chai.use(chaiBytes).use(chaiDatetime);

const { assert } = chai;

const testDate = moment("1996-10-15T00:05:32.000Z").toDate();
const testBuffer = Buffer.from([0x00, 0xae, 0xc3, 0x94, 0x2c, 0xba, 0xbb, 0x01]);

describe("dtyp", () => {
  describe(`parseFiletime(buffer: Buffer)`, () => {
    it("returns matching date", () => {
      const date = dtyp.parseFiletime(testBuffer);
      assert.equalDate(date, testDate, "not expected date");
      assert.equalTime(date, testDate, "not expected time");
    });
  });

  describe(`serializeFiletime(date: Date)`, () => {
    it("returns dtype filetime buffer", () => {
      const buffer = dtyp.serializeFiletime(testDate);
      assert.equalBytes(buffer, Array.from(testBuffer), "not a dtyp filetime buffer");
    });
  });
});