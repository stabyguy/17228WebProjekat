import {Radnja} from "./Radnja.js";
export class Radnik
{
    constructor(id,ime,prezime,jmbg,pozicija)
    {
        this.id=id;
        this.Rime=ime;
        this.Rprezime=prezime;
        this.Rjmbg=jmbg;
        this.Rpozicija=[ "Kasir","Burekdzija","Peciva","Stovariste"];
        this.Rpozicija.forEach(element => 
            {
                if(pozicija === element)
                {   
                    this.Rpozicija=pozicija;
                    
                }

            }
        );
     }  
        

    Rpozicijaa()
    {
        return this.Rpozicija;
    }
    Rjmbgg()
    {
        return this.jmbg;
    }

    ChangeRpozicija(x)
    {
        this.Rpozicija=x;
    }


  /*  drawRadnikUI(host)
    {
        const radnikkkk=document.createElement("div");
        radnikkkk.className="radnik";
        host.appendChild(radnikkkk);
        
        let div= document.createElement("div");
        div.className="inpuzaRadnika";
        radnikkkk.appendChild(div);

        let labela=document.createElement("label");
        labela.innerHTML= "Ime :   " ;
        labela.className="labelazaradnika";  
        div.appendChild(labela);

        let input=document.createElement("input");
        input.type="text";  
        div.appendChild(input);
        input.className="InputzaImeRadnika";



         div= document.createElement("div");
        div.className="inpuzaRadnika";
        radnikkkk.appendChild(div);

         labela=document.createElement("label");
        labela.innerHTML= "Prezime :   " ;
        labela.className="labelazaradnika";  
        div.appendChild(labela);

         input=document.createElement("input");
        input.type="text";  
        div.appendChild(input);
        input.className="InputzaPrezimeRadnika";


        div= document.createElement("div");
        div.className="inpuzaRadnika";
        radnikkkk.appendChild(div);

         labela=document.createElement("label");
        labela.innerHTML= "jmbg :   " ;
        labela.className="labelazaradnika";  
        div.appendChild(labela);

         input=document.createElement("input");
        input.type="number";  
        div.appendChild(input);
        input.className="InputzaJMBGRadnika";

        div= document.createElement("div");
        div.className="inpuzaRadnika";
        radnikkkk.appendChild(div);

         labela=document.createElement("select");
        labela.innerHTML= "Pozicija :   " ;
        labela.className="PozicijaRadnik";
        let opcija;
        div.appendChild(labela);
        opcija = document.createElement("option");
                opcija.innerHTML="Kasir";
                opcija.value="Kasir";
                labela.appendChild(opcija);
        
                opcija = document.createElement("option");
                opcija.innerHTML="Burekdzija";
                opcija.value="Burekdzija";
                labela.appendChild(opcija);
        
                opcija = document.createElement("option");
                opcija.innerHTML="Peciva";
                opcija.value="Peciva";
                labela.appendChild(opcija);

                opcija = document.createElement("option");
                opcija.innerHTML="Stovariste";
                opcija.value="Stovariste";
                labela.appendChild(opcija);

                let y = document.createElement("button");
                y.innerHTML="Dodaj Radnika";
                y.className="DodajRadnika";
                radnikkkk.appendChild(y);
                y.onclick = ( ev => 
                    {
                        this.DodajRadnika(); 
                        this.drawRadnik();
                 }
                );

                /*let z = document.createElement("button");
                z.innerHTML="Izbrisi Radnika";
                z.className="IzbrisiRadnika";
                radnikkkk.appendChild(z);
            */

    }
/*
    DodajRadnika()
    {
        let xime= document.querySelector(".InputzaImeRadnika").value;
        let xprezime=document.querySelector(".InputzaPrezimeRadnika").value;
        let xjmbg=document.querySelector(".InputzaJMBGRadnika").value;
        let xpozicija=document.querySelector(".PozicijaRadnik").value;
       
        const radnikkkkkkk=new Radnik(xime,xprezime,xjmbg,xpozicija);
        Radnja.AddRadnik(radnikkkkkkk);
        
    }

*/

