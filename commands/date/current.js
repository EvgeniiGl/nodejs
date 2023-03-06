const builder = (yargs) => {
    yargs.options("year", {
        alias: "y",
        type: "boolean",
        description: "Show current year",
    });
    yargs.options("month", {
        alias: "m",
        type: "boolean",
        description: "Show current month",
    });
    yargs.options("date", {
        alias: "d",
        type: "boolean",
        description: "Show current date",
    });
};

const handler = (argv) => {
    if (argv.year) {
        console.log(new Date().getFullYear());
        return;
    }

    if (argv.month) {
        console.log(new Date().getMonth() + 1);
        return;
    }

    if (argv.date) {
        console.log(new Date().getDate());
        return;
    }

    console.log(new Date());
};

module.exports = {
    builder,
    handler,
};
