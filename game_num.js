const readline = require("readline");
const input = readline.createInterface(process.stdin, process.stdout);

const number = Math.floor(Math.random() * 100);
let answers = 0;

const question = (text) =>
    new Promise((resolve) => {
        input.question(text, (answer) => resolve(answer));
    });

const exit = () => input.close();

console.log("Загадано число в диапазоне от 0 до 100.");

const game = async () => {
    const raw = await question("Ответ: ");
    const answer = Number.parseInt(raw);
    if (Number.isNaN(answer)) {
        console.log("Ошибка, ответ должен быть числом");
        return;
    }
    answers += 1;

    if (answer < number) {
        console.log("Больше");
        await game();
    } else if (answer > number) {
        console.log("Меньше");
        await game();
    } else {
        console.log(`Отгадано число ${answer}.`);
    }
};

game().then(() => {
    exit();
});

