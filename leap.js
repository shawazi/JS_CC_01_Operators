function isleap(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

function nao(year) {
    return (year % 4 == 0 && year % 100 !==0) || year % 400 === 0;
}

console.log(isleap(1500));
console.log(isleap(2000));

console.log(nao(1500));
console.log(nao(2000));

console.log(isleap(1700));
console.log(isleap(2004));

console.log(nao(1700));
console.log(nao(2004));

console.log(isleap(1383));
console.log(isleap(2008));

console.log(nao(1383));
console.log(nao(2008));

console.log(isleap(1627));
console.log(isleap(2024));

console.log(nao(1627));
console.log(nao(2024));