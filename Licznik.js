class gracz {
    constructor() {
        this.hajs = 20;
        this.hajs_p = 1;
        this.zelazo = 0;
        this.zelazo_p = 1;
        this.tytan = 0;
        this.tytan_p = 1
        this.roslinnosc = 0;
        this.roslinnosc_p = 1
        this.energia = 0;
        this.energia_p = 1;
        this.cieplo = 0;
        this.cieplo_p = 1;
    }
 
    dodajHajs(wartosc) {
        this.hajs = this.hajs + wartosc;
        document.getElementById('hajsID').innerHTML = this.hajs
    }
    przyrostHajs(wartosc) {
        this.hajs_p = this.hajs_p + wartosc;
        document.getElementById('hajsP').innerHTML = this.hajs_p
    }

    dodajZelazo(wartosc) {
        this.zelazo = this.zelazo + wartosc;
        document.getElementById('zelazoID').innerHTML = this.zelazo
    }
    przyrostZelazo(wartosc) {
        this.zelazo_p = this.zelazo_p + wartosc;
        document.getElementById('zelazoP').innerHTML = this.zelazo_p
    }

    dodajTytan(wartosc) {
        this.tytan = this.tytan + wartosc;
        document.getElementById('tytanID').innerHTML = this.tytan
    }
    przyrostTytan(wartosc) {
        this.tytan_p = this.tytan_p + wartosc;
        document.getElementById('tytanP').innerHTML = this.tytan_p
    }

    dodajRoslinnosc(wartosc) {
        this.roslinnosc = this.roslinnosc + wartosc;
        document.getElementById('roslinnoscID').innerHTML = this.roslinnosc
    }
    przyrostRoslinnosc(wartosc) {
        this.roslinnosc_p = this.roslinnosc_p + wartosc;
        document.getElementById('roslinnoscP').innerHTML = this.roslinnosc_p
    }
    dodajEnergia(wartosc) {
        this.energia = this.energia + wartosc;
        document.getElementById('energiaID').innerHTML = this.energia
    }
    przyrostEnergia(wartosc) {
        this.energia_p = this.energia_p + wartosc;
        document.getElementById('energiaP').innerHTML = this.energia_p
    }
    dodajCieplo(wartosc) {
        this.cieplo = this.cieplo + wartosc;
        document.getElementById('cieploID').innerHTML = this.cieplo
    }
    przyrostCieplo(wartosc) {
        this.cieplo_p = this.cieplo_p + wartosc;
        document.getElementById('cieploP').innerHTML = this.cieplo_p
    }

	podliczenie()
	{
	this.hajs = this.hajs + this.hajs_p;
	this.zelazo = this.zelazo + this.zelazo_p;
	this.tytan = this.tytan + this.tytan_p;
	this.roslinnosc = this.roslinnosc + this.roslinnosc_p;
	this.energia = this.energia + this.energia_p;
	this.cieplo = this.cieplo + this.cieplo_p + this.energia;
	this.energia = 0;
	}
}
 
gracz1 = new gracz();
gracz2 = new gracz();
gracz3 = new gracz();
gracz4 = new gracz();
gracz5 = new gracz();


function koniecTury()
{
	gracz1.podliczenie()
	document.getElementById('hajsID').innerHTML = gracz1.hajs;
	document.getElementById('zelazoID').innerHTML = gracz1.zelazo;
	document.getElementById('tytanID').innerHTML = gracz1.tytan;
	document.getElementById('roslinnoscID').innerHTML = gracz1.roslinnosc;
	document.getElementById('energiaID').innerHTML = gracz1.energia;
	document.getElementById('cieploID').innerHTML = gracz1.cieplo;
	
}


