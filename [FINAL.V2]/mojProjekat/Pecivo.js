export class Pecivo
{
    constructor(id, naziv,gramaza,cena,kolicina)
    {
        this.id=id;
        this.naziv=naziv;
        this.gramaza=gramaza;
        this.cena=cena;
        this.kolicina=kolicina;
        


    }

    pecivoNaziv()
    {
        return this.naziv;
    }
    pecivoCena()
    {
        return this.cena;
    }

    pecivoKolicina()
    {
        return this.kolicina;
    }


}