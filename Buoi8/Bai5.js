//Dua String ve array

var str1 = "Hưng, Cương, Tài";

function strToArr(char) {
    return str1.split(char);
}
console.log(strToArr(", "))

function getStr(str){
    var a=str1.slice(str1.indexOf(',')+1,str1.lastIndexOf(','))
    return a;
}
console.log(getStr(str1)) //output: Cương

var str2 = "    Dinh Tan Hung      ";

str2=str2.trim();

function getUpperStr(str){
    return str.toUpperCase();
}
console.log(getUpperStr(str2)) //output : DINH TAN HUNG

function getLowerStr(str){
    return str.toLowerCase();
}
console.log(getLowerStr(str2)) //output : dinh tan hung