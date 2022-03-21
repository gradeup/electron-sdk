# Electron-sdk

> Tiny sdk to interact with electron media-server apis.

## Install

```bash
npm install @gradeup/electron-sdk
```

## Usage

```js
import Electron from "@gradeup/electron-sdk";
const e1 = new Electron("url", "token");

async function prep() {
  const r = await e1.prepareStream();
  console.log(r);
}

prep();
```

## License

MIT © [Vikas Kumar](https://gradeup.github.io)
