const fs = require('fs');

fs.copyFile(
  './CHANGELOG.md',
  '../react-magma-docs/src/pages/api-intro/changelog.mdx',
  err => {
    if (err) throw err;
    console.log('File was copied to destination');

    const file = './src/pages/api-intro/changelog.mdx';

    const data = fs.readFileSync(file);
    const fd = fs.openSync(file, 'w+');
    const buffer = Buffer.from('---\ntitle: Changelog\norder: 4\n---\n\n');

    let textData = data.toString();

    textData = textData.replace(
      /http:\/\/stash.cengage.com:7999\/FRONT\/react-magma\//g,
      'http://stash.cengage.com/projects/FRONT/repos/react-magma/'
    );

    textData = textData.replace(
      /(http:\/\/stash\.cengage\.com\/projects\/FRONT\/repos\/react-magma\/compare\/)(.*)\.\.\.(.*)/g,
      '$1diff?targetBranch=refs%2Ftags%2F$2&sourceBranch=refs%2Ftags%2F$3'
    );

    textData = textData.replace(/(#)( \[.*)/g, '##$2');

    const newBufferData = Buffer.from(textData);

    fs.writeSync(fd, buffer, 0, buffer.length, 0);
    fs.writeSync(fd, newBufferData, 0, newBufferData.length, buffer.length);
    fs.closeSync(fd);
  }
);