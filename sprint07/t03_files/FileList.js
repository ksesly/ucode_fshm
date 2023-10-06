const fs = require('fs');

class FileList {
    getList() {
        return fs.readdirSync('./tmp');
    }

    hasFiles() {
        return fs.existsSync('./tmp');
    }

    getHTMLList() {
        let arr = fs.readdirSync('./tmp');
        let htmlOutput = '<ul>';
        for (let i = 0; i < arr.length; i++) {
            htmlOutput += `<li><a onclick="renderFile(event)" href="/select-file?file=${arr[i]}">${arr[i]}</a></li>`;
        }
        return htmlOutput + '</ul>';
    }
}

module.exports = FileList;