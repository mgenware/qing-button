import * as mfs from 'm-fs';

const publicFiles = await mfs.subFiles('./public');
const mainJS = publicFiles[0];
if (!mainJS) {
  console.error(`main.[hash].js not found in files:\n${publicFiles}`);
  process.exit(1);
}

let indexHTML = await mfs.readTextFileAsync('./index.html');
indexHTML = indexHTML.replace(
  '<script type="module" src="./main.js"></script>',
  `<script src="./${mainJS}"></script>`,
);
await mfs.writeFileAsync('./public/index.html', indexHTML);
