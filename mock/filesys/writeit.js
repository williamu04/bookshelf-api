const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'input.txt');
const readable =  fs.createReadStream(filePath, 
    {highWaterMark: 15}
);

const writeable = fs.createWriteStream('filesys/output.txt');

readable.on('readable', () => {
    try {
        writeable.write(`${readable.read()}\n`)
    } catch (error) {
        
    }
})

