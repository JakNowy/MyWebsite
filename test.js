function wypisz(argument){
//    ciało funkcji
    console.log(argument)
}



// Pętla for
function silnia(x) {
    wynik = 1;
    for(i=x; i>0; i--){
        wynik = wynik * i;
    }
    return wynik
}


// Pętla while
function populacja(limit) {
    var x = 1;
    var i = 0;
    while(x<limit) {
        x = x*2;
        i ++;
    }
    if (i>0){
    wypisz('Limit został osiągnięty w '+i+' pokoleniu.')};
}

populacja(0)