const { readFileSync, writeFileSync } = require('fs');
const { chunk } = require('lodash');
const path = require('path');
const rp = require('request-promise');

const names = readFileSync(
  path.resolve(__dirname, './lodashNames.txt'),
  'utf-8'
)
  .split('\n')
  .filter(value => !!value)
  .map(fnName => fnName.toLowerCase())
  .map(functionName => `lodash.${functionName}`);

const chunks = chunk(names, 128);

const registryDownloadsByPointURL = 'https://api.npmjs.org/downloads/point/';

async function run() {
  let results = await Promise.all(
    chunks.map(arrayOfNames =>
      rp(`${registryDownloadsByPointURL}last-week/${arrayOfNames.join(',')}`, {
        json: true,
      })
    )
  ).catch(console.log);
  results = Object.assign({}, ...results);
  results = Object.entries(results)
    // some of the function names don't match their published names, or aren't published
    // 13 functions return null results by their name on the registry
    .filter(kv => (kv[1] ? kv : console.log('Item was found to be null', kv)))
    .map(keyValueTuple => keyValueTuple[1]);

  results = results.sort(
    (a, b) =>
      // console.log({ a, b });
      b.downloads - a.downloads
  );
  writeFileSync(
    path.join(__dirname, 'sorted.json'),
    JSON.stringify(results, null, 2)
  );
}

run();
