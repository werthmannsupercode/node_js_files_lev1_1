const fs = require('fs');

// const text = fs.readFileSync('blog1.txt');
// console.log(text.toString());

// fs.writeFileSync('blog1.txt', "Hallo Welt! Ich bin Michaela");
// fs.writeFileSync('blog2.txt', "ich bin die zweite Textdatei");

// const folderName = 'assets';
// fs.mkdirSync(folderName);

// fs.rmdirSync(folderName);

// fs.writeFileSync("delete.txt", "irgendwas");
// fs.unlinkSync('./delete.txt');

// fs.writeFileSync("halloText.txt", "irgendein Text");
// fs.renameSync('./halloText.txt', './hallomylove.txt')

fs.readFile('blog1.txt', (err, data) => {
    if (err) {
        console.log("Fehler");
    }
    console.log(data.toString());

    fs.writeFile('blog1.txt', "Hallo Welt! Ich bin Michaela", err => {
        if (err) {
            throw err;
        }
        fs.writeFile('blog2.txt', "ich bin die zweite Textdatei", err => {
            if (err) {
                throw err;
            }
            const folderName = 'assets';
            fs.mkdir(folderName, err => {
                if (err) {
                    throw err;
                }
                fs.rmdir('assets', err => {
                    if (err) {
                        throw err;
                    }
                    console.log(`${'assets'} is deleted!`);
                    fs.writeFile("halloText.txt", "irgendein Text", err => {
                        if (err) {
                            throw err;
                        }
                        fs.rename('./halloText.txt', './hallomylove.txt', err => {
                            if (err) {
                                throw err;
                            }
                            console.log("endlich fertig");
                        })
                    })
                })
            })
        })
    })
})