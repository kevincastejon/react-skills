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
    console.log('Configuring Jekyll...');
    await exec('fcli write ./architect/_config.yml "" && append-top ./architect/_config.yml "theme: jekyll-theme-architect" && cross-var append-top ./architect/_config.yml "description: $npm_package_description" && cross-var append-top ./architect/_config.yml "title: $npm_package_name"');
    console.log('Configured Jekyll');
    console.log('Building Jekyll beautiful readme page...');
    await exec('cpy ./readme.md ./architect/ --rename index.md && cross-var replace-in-file "# $npm_package_name" "" ./architect/index.md && cross-var replace-in-file $npm_package_description "" ./architect/index.md && append-top ./architect/index.md "---" && append-top ./architect/index.md "layout: default" && append-top ./architect/index.md "---" && cd ./architect && bundle exec jekyll build -d ../public/documentation && replace-in-file //assets/g ./assets ../public/documentation/index.html --isRegex');
    console.log('Built Jekyll beautiful readme page');
  } catch (e) {
    console.log(e);
  }

}());
