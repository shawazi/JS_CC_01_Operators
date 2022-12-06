function area(a, b, c) {
    s = (a + b + c)/2
    return sqrt(s(s-a)(s-b)(s-c));
}

function Nao_area(a, b, c) {
    s = (a + b + c) / 2;
    return Math.sqrt((s - a) * (s - b) * (s - c) * s);
}


/* Thanks for the fixes, Nao. I'll also make a point to use proper spacing from now on. */