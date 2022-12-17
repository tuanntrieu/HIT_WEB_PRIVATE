const obj = {
    name: "Tuấn",
    age: 19,
    email: "trieudangtuan@gmail.com"
}
function run(obj) {
    let a =[];
    var i=0;
    for(const key in obj){
        a[i++]=key+': '+obj[key];
    } 
    return a;   
}
console.log(run(obj));
    
    
