[![Coverage Status](https://coveralls.io/repos/github/rksan/mock-mediaDevices/badge.svg?branch=main)](https://coveralls.io/github/rksan/mock-mediaDevices?branch=main)

# mock-mediaDevices

## overview

WebAPI window.navigator.mediaDevices のモックを生成

## Usage

以下の構成で説明する

- [nodejs | nodejs.org](https://nodejs.org/ja)
- [typescript | github](https://github.com/microsoft/TypeScript)
- [jsdom | github](https://github.com/jsdom/jsdom)
- [mocha | github](https://github.com/mochajs/mocha)
- [chai | github](https://github.com/chaijs/chai)

### setup

まず[`jsdom`](https://github.com/jsdom/jsdom)を用いて、[nodejs](https://nodejs.org/ja)で動作可能な[`window.navigator`](https://developer.mozilla.org/ja/docs/Web/API/Navigator)を生成し、`mockMediaDevices()`によって生成される`mediaDevices`オブジェクトを`window.navigator`へ登録するセットアップモジュールを作成する

`test/setup.ts`

```typescript
// test/setup.ts

import jsdom from "jsdom";
import { mockMediaDevices } from "@rksan/mock-media-devices";

const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html>`);

const fakeMediaDevices = mockMediaDevices();

// nodejs
globalThis.navigator ??= dom.window.navigator;

if(Object.prototype.hasOwnProperty.call(navigator, "mediaDevices")){
  Object.defineProperty(navigator, "mediaDevices". {value: fakeMediaDevices})
}
```

### With test runner

次に、テストコード内で`test/setup.ts`を呼び出してテストコードを実行する

```typescript
// test/index.spec.ts

import { describe, it } from "mocha";
import { assert } from "chai";

// call setup module
import "test/setup.ts";

// Implementation of test runner
describe("unit testing...", () => {
  it("mediaDevices", (done) => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        // test codes ...
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
```

## install

```shell
npm i -D @rksan/mock-media-devices
```

## Requirement

- Node.js - v18.x

## syntax

```typescript
const mediaDevices: MediaDevices =
  mockMediaDevices(deviceInfos?: MediaDeviceInfo[])
```

### arguments

#### `deviceInfos?`

[`MediaDeviceInfo` | MDN](https://developer.mozilla.org/ja/docs/Web/API/MediaDeviceInfo) の配列。

`@type` `MediaDeviceInfo[]`

`@default` 次に記載

```typescript
[
  {
    deviceId: UUID, // *1
    groupId: UUID,
    kind: "videoinput",
    label: "mock-videoinput-device",
  },
  {
    deviceId: UUID,
    groupId: UUID,
    kind: "audioinput",
    label: "mock-audioinput-device",
  },
  {
    deviceId: UUID,
    groupId: UUID,
    kind: "audiooutput",
    label: "mock-audiooutput-device",
  },
];
```

\*1 `UUDD` は `nodejs` 標準パッケージ `crypto.randomUUID()` にて生成される

# Reference

- [navigator.mediaDevices | MDN](https://developer.mozilla.org/ja/docs/Web/API/Navigator/mediaDevices)

# Author

@rksan https://github.com/rksan | github

# Licence

MIT
