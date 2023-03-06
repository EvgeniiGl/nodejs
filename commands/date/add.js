const builder = (yargs) => {
    yargs.options("year", {
        alias: "y",
        type: "number",
        description: "Show future date in the specified years",
    });
    yargs.options("month", {
        alias: "m",
        type: "number",
        description: "Show future date in the specified months",
    });
    yargs.options("date", {
        alias: "d",
        type: "number",
        description: "Show future date in the specified days",
    });
};

const handler = (argv) => {
    const date = new Date();

    if (argv.year) {
        date.setFullYear(date.getFullYear() + argv.year);
    }

    if (argv.month) {
        date.setMonth(date.getMonth() + argv.month);
    }

    if (argv.date) {
        date.setDate(date.getDate() + argv.date);
    }

    console.log(date);
};

module.exports = {
    builder,
    handler,
};
