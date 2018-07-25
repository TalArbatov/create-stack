#!/usr/bin/env node
const program = require('commander');
const path = require('path');
const fs = require('fs');

program
    .version('0.1.0')
    .command('init', 'initiate a new MERN stack')
    .parse(process.argv)