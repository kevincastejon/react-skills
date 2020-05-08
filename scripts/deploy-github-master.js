const child_process = require('child_process');
const message = '"'+process.argv[2]+'"';
if (!message) {
  throw new Error('"message" argument is mandatory!')
}
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
    console.log('Committing repo...');
    await exec('git add . && git commit -m '+message);
    console.log('Committed repo');
    console.log('Pushing component on github master branch...');
    await exec('git push');
    console.log('Pushed component on github master branch');
  } catch (e) {
    console.log(e);
  }

}());
