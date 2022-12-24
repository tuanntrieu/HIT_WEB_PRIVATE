function dem(a) {
    a = a.toString();
    var dem = 0;
    for (var i in a) {
        if (a[i] % 2 != 0) dem++;
    }
    return dem;
}

console.log(dem(12345));
console.log(dem(11111112));
console.log(dem(2222222));