var courses = ['C++', 'Java', 'Javascript'];
function addCourse(arr, add) {
    arr.push(add);
}
addCourse(courses, 'Go')
console.log(courses)

function getFirstElement(arr) {
    return arr[0]
}
var firstElement = getFirstElement(courses);
console.log(firstElement)
function joinArr(arr, key) {
    var a = '';
    for (var i = 0; i < arr.length; i++) {
        if (i == arr.length-1) {
            a += arr[i];
        }
        else a += arr[i] + key
    }
    return a;
}
var result1 = joinArr(courses, ",");
var result2 = joinArr(courses, " * ")
console.log(result1);
console.log(result2);