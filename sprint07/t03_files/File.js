const fs = require('fs');

class File {
    constructor(name) {
        this.name = name;
    }

    write(content) {
        let dir = './tmp';

        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }

        if (fs.existsSync(`tmp/${this.name}`)) {
            fs.appendFileSync(`tmp/${this.name}`, content);
        } else {
            fs.writeFileSync(`tmp/${this.name}`, content);
        }
    }

    read() {
        return fs.readFileSync(`tmp/${this.name}`, 'utf8');
    }

    delete() {
        if (fs.existsSync(`tmp/${this.name}`)) {
            fs.unlinkSync(`tmp/${this.name}`);
        }
    }
}

module.exports = File;