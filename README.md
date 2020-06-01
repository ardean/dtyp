# dtyp

> DTYP / Windows Data Type library in TypeScript.

[![Github Version](https://img.shields.io/github/release/ardean/dtyp.svg)](https://github.com/ardean/dtyp)
[![NPM Version](https://img.shields.io/npm/v/dtyp.svg)](https://npmjs.org/package/dtyp)
[![NPM Downloads](https://img.shields.io/npm/dm/dtyp.svg)](https://npmjs.org/package/dtyp)
[![License](https://img.shields.io/npm/l/dtyp.svg)](LICENSE.md)

## Installation
```sh
$ npm i dtyp
```

## Usage
```ts
import dtyp from "dtyp";

const buffer = dtyp.serializeFiletime(new Date());
console.log(buffer); // <Buffer b0 ab ee 3a 1f 38 d6 01>

const date = dtyp.parseFiletime(buffer);
console.log(date); // 2020-06-01T14:16:23.787Z
```

## Features
- filetime parse / serialize

## License

[MIT](LICENSE.md)