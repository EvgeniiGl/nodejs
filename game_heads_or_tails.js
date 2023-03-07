const readline = require("readline");
const fs = require("fs");
const path = require("path");

const input = readline.createInterface(process.stdin, process.stdout);
const number = Math.floor(Math.random() * 2 + 1);


const fileName = process.argv.slice(2)[0];

console.log("Наименование файла логов: " + fileName);

if (!fileName) {
    throw new Error("Нужно указать имя файла!");
}

const logsDir = path.join(__dirname, "logs");

fs.mkdir(logsDir, (err) => {
    if (err) {
        if (err.code !== "EEXIST") {
            throw new Error(err);
        }
    }

    const file = path.join(logsDir, fileName);
    game(logsDir, file);
});


function game(logsDir, file) {
    console.log('Игра "Орёл или решка".');

    input.on("line", (data) => {
        const num = Number(data);

        if (isNaN(num) || (num !== 1 && num !== 2)) {
            console.log("Введите 1 или 2");
            return;
        }
        let content
        if (num === number) {
            content = "Верно: " + num + "\r\n";
        } else {
            content = "Не верно: " + num + "\r\n";
        }

        console.log(content);

        fs.appendFile(file, content, (err) => {
            if (err) {
                throw new Error(err);
            }
        });

        input.close();
    });
}

