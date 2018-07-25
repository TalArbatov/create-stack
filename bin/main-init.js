#!/usr/bin/env node
const program = require('commander');
const path = require('path');
const fs = require('fs');
const shelljs = require('shelljs');

program
    .option('-p, --path <path>', 'specify a relative path')
    .parse(process.argv);


shelljs.exec('running ShellJS...');
console.log('running console.log()...');

shelljs.exec('git init &&'+
             'git clone https://github.com/TalArbatov/MernStack.git temp &&' + 
             'mv temp/* ./ &&' + 
             'rm -rf temp');

