import * as mfs from 'm-fs';

const publicFiles = await mfs.subFiles('./public');
const indexJS = publicFiles[0];
if (!indexJS) {
  console.error(`Index.[hash].js not found in files:\n${publicFiles}`);
  process.exit(1);
}

let indexHTML = await mfs.readTextFileAsync('./index.html');
indexHTML = indexHTML.replace(
  '<script type="module" src="./index.js"></script>',
  `<script src="./${indexJS}"></script>`,
);
await mfs.writeFileAsync('./public/index.html', indexHTML);
