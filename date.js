#!/usr/bin/env node
const yargs = require('yargs/yargs')
const {hideBin} = require('yargs/helpers')
const current = require("./commands/date/current");
const add = require("./commands/date/add");
const sub = require("./commands/date/sub");

yargs(hideBin(process.argv))
    .scriptName("date")
    .usage("$0 <cmd> [args]")
    .command(
        'current [args]',
        'Return info about current date',
        current.builder,
        current.handler,
    )
    .command(
        'add [args]',
        'Return future date',
        add.builder,
        add.handler,
    )
    .command(
        'sub [args]',
        'Return past date',
        sub.builder,
        sub.handler,
    )
    .parse();
