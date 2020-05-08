const child_process = require('child_process');
async function exec(cmd){
  return new Promise((res, rej) => {
    child_process.exec(cmd,{maxBuffer: 1024 * 1000}, (err) => {
      if (err) {
        rej(err)
      } else {
        res();
      }
    });
  })
}

(async function() {
  try {
    console.log('Generating "readme.md"...');
    await exec('node scripts/generate-readme.js');
    console.log('Generated "readme.md"');
    console.log('Building documentation page...');
    await exec('npm run build-documentation-page');
    console.log('Built documentation page');
    console.log('Building storybook page...');
    await exec('npm run build-storybook-page');
    console.log('Built storybook page');
    console.log('Building github page...');
    await exec('node scripts/demo.js');
    console.log('Built github page');
  } catch (e) {
    console.log(e);
  }

}());
