function hello(name) {
   return "Hello, " + name + "!!!"; 
}

var input = prompt("Digite seu nome:");
var output = hello(input);
module.exports = hello;