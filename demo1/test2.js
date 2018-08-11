const mod = require('./test1');
mod.fn();
const {argv,argv0,execArgv,execPath,env}  = process;
// console.warn( argv,argv0,execArgv,execPath);
console.warn( env);