import {Kasa} from "./Kasa.js";
import {Stanje} from "./Stanje.js";
import {Pecivo} from "./Pecivo.js";
import {Radnik} from "./Radnik.js";
import {Radnja} from "./Radnja.js";


/* const kasa= new Kasa(5000);
kasa.drawKasa(document.body);
let pecivo = new Pecivo("Burek",5,30,6);
let pecivo1 = new Pecivo("Pogaca",5,30,2);
let pecivo2 = new Pecivo("Kifla",5,30,2);
kasa.stanje.addPecivo(pecivo);
kasa.stanje.addPecivo(pecivo1);
kasa.stanje.addPecivo(pecivo2);
kasa.stanje.drawStanje(document.body);

const radnja=new Radnja();
const radnik= new Radnik("Dejan","Milenkovic", 555, "Kasir");
const radnik2= new Radnik("Lazar","Miladinovic", 666, "Stovariste");
radnja.AddRadnik(radnik);
radnja.AddRadnik(radnik2);
radnja.DrawRadnja(document.body);
radnja.DrawRadnik(radnik);
radnja.DrawRadnik(radnik2);

radnja.drawRadnikUI(document.body);
console.log(radnja);




radnik.drawRadnikUI(document.body);

*/

    fetch("https://localhost:5001/Pekara/PreuzmiKasu").then(p=>
    {
        p.json().then(data =>
            {
                 data.forEach(kasa =>
                 {
                    let kasica= new Kasa(kasa.id,kasa.novac);
                    kasica.drawKasa(document.body); 
                    kasa.stanje.forEach(stanjee =>
                        {
                           stanjee.nizPeciva.forEach(pecivo => 
                            {
                                let pec = new Pecivo(pecivo.id,pecivo.naziv,pecivo.gramaza,pecivo.cena,pecivo.kolicina);
                                kasica.stanje.addPecivo(pec);
                            });
                            kasica.stanje.drawStanje(document.body);
                        });
                 });
            });
    });
    
    
  
setTimeout(( ) => {
fetch("https://localhost:5001/Pekara/PreuzmiRadnju").then(p=>
{
    p.json().then(data =>
        {
             data.forEach(radnja =>
             {
              
                let radnjica=new Radnja(radnja.id);
                radnjica.DrawRadnja(document.body); 

                radnja.nizRadnika.forEach(radnik =>
                    {
                       let rad = new Radnik (radnik.id,radnik.ime,radnik.prezime,radnik.jmbg,radnik.pozicija);
                       radnjica.AddRadnik(rad);
                       radnjica.DrawRadnik(rad);
                   
                    });
                  radnjica.drawRadnikUI(document.body);
             });
        });
});

},1000);







    