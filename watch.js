#!/usr/bin/env node
'use strict';

const c = require('child_process');
const args = process.argv.splice(2);

if(!args.length){
    const help  = `
Error: missing arguments, 

Usage: 
watchjs <shell comd to repeat> 
`;
    console.error(help);
    process.exit(1);
}

const waitTime = 2000; 

function execFunction () {
    const output = c.spawnSync(args[0], args.slice(1));
    if(output.error){
        console.error(output.error);
    }
    if(output.stdout)
        process.stdout.write(output.stdout.toString());
    if(output.stderr)
        process.stderr.write(output.stderr.toString());
}

execFunction();

setInterval(function(){
    execFunction();
}, waitTime);

