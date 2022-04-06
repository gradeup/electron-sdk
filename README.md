# Electron-sdk

> Tiny sdk to interact with electron media-server apis.

## Install

```bash
npm install @gradeup/electron-sdk
```

## Usage

```js
const {
  prepareStream,
  getStream,
  liveStream,
  resetStream,
  stopStream,
} = require('./index.js');

const fetchData = async () => {
  const resp = await prepareStream('token', 'url');
  console.log(resp);
};

fetchData();
```

## License

MIT © [Vikas Kumar](https://gradeup.github.io)
