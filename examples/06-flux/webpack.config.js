let exampleVersion = 'v1.0';
let confName =  'webpack.config.' + exampleVersion + '.js';
console.log( '\n\nUSING ' + confName + '\n\n' );
module.exports = require( './' + confName );
