let emoji = require('node-emoji');

module.exports = function(input, context) {
    var output = { pass: false, value: null }
    
    let items = context.economy.items;

    if (!items[input]) { for (let i in items) { if (items[i].emoji == emoji.unemojify(input).split(' ').join('')) { input = i } } }
    if (items[input]) { output.pass = true; output.value = input }    

    return output;
}