import moment from "moment-timezone";

const filetimeStartDate = moment.utc("1601-01-01");

export const parseFiletime = (buffer: Buffer) => {
  const milliseconds = Number(buffer.readBigUInt64LE(0) / 10000n);
  return moment(filetimeStartDate).add(milliseconds, "milliseconds").toDate();
};

export const serializeFiletime = (date: Date) => {
  const milliseconds = moment(date).diff(filetimeStartDate, "milliseconds");
  const buffer = Buffer.allocUnsafe(8);
  buffer.writeBigInt64LE(BigInt(milliseconds) * 10000n, 0);
  return buffer;
};