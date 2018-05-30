function Gracz() {
    this.hajs = 10;
    this.hajs_p = 1;
    this.zelazo = 0;
    this.zelazo_p = 1;
    this.dodajHajs = dodajHajs;
}

function dodajHajs() {
    this.hajs = this.hajs + this.hajs_p;
    console.log(this.hajs)
}

gracz1 = new Gracz;
gracz1.dodajHajs();
