function InsertString(str1, str2, index) {
    if (str2 == null && index == null) {
        str1 = str1;
    }
    else if (index == null) {
        str1 = str2 + str1;
    }
    else {
        tmp = str1.substring(0, index);
        tmp += str2;
        tmp += str1.substring(index, str1.length);
        str1 = tmp;
    }
    return str1;
}

console.log(InsertString('We are doing some exercises.'));
//Output: We are doing some exercises.
console.log(InsertString('We are doing some exercises.', 'JavaScript '));
// //Output: Javascript We are doing some exercises.
console.log(InsertString('We are doing some exercises.', 'JavaScript ', 18));
// //Output: We are doing some JavaScript exercises.