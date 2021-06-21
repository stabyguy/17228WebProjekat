import {Pecivo} from "./Pecivo.js";
import {Kasa} from "./Kasa.js";

export class Stanje
{
    constructor(id)
    {
        this.id=id;
        this.nizPeciva=[]; 
        
    }

    pecivouNizu(x)
    {
     
        let provera = 0;
        

     this.nizPeciva.forEach(element => 

     {
         if(x == element.naziv)
         
         {
             provera=1;
            
             return true ;
             
         }
     }
     );
     if (provera===0)
     {
         return  false ;
     }
    
        
          
         
    }
    addPecivo(Pecivo)
    {
        if(this.pecivouNizu())
        {
            alert("Pecivo vec postoji");
            return 0;
        }
        this.nizPeciva.push(Pecivo);
    }    
    DeletePecivo(Pecivo)
    {const index = this.NizPeciva.indexOf(Pecivo);
         if (index > -1) {
             this.nizPeciva.splice(index, 1);
                         }
     }

     drawStanje(host)
     {
      
     
        const red=document.createElement("div");
        red.className="red";
        host.appendChild(red);

        let div , l ,d  ; 


        d= document.createElement("div");
                d.className="divvv";

                div = document.createElement("div");
                div.className="polje";
                l = document.createElement("label");
                l.innerHTML="Naziv";
                div.appendChild(l);
                d.appendChild(div);
                
                div = document.createElement("div");
                div.className="polje";
                l = document.createElement("label");
                l.innerHTML="Gramaza";
                div.appendChild(l);
                d.appendChild(div);
              
                div = document.createElement("div");
                div.className="polje";
                l = document.createElement("label");
                l.innerHTML="Cena";
                div.appendChild(l);
                d.appendChild(div);

                div = document.createElement("div");
                div.className="polje";
                l = document.createElement("label");
                l.innerHTML="Kolicina";
                div.appendChild(l);
                d.appendChild(div);
                
               red.appendChild(d);

        this.nizPeciva.forEach(pecivo => 
            {
                d= document.createElement("div");
                d.className="divvv";

                div = document.createElement("div");
                div.className="polje";
                l = document.createElement("label");
                l.innerHTML=pecivo.naziv;
                div.appendChild(l);
                d.appendChild(div);
                
                div = document.createElement("div");
                div.className="polje";
                l = document.createElement("label");
                l.innerHTML=pecivo.gramaza;
                div.appendChild(l);
                d.appendChild(div);
              
                div = document.createElement("div");
                div.className="polje";
                l = document.createElement("label");
                l.innerHTML=pecivo.cena;
                div.appendChild(l);
                d.appendChild(div);

                div = document.createElement("div");
                div.className="polje";
                l = document.createElement("label");
                l.innerHTML=pecivo.kolicina;
                div.appendChild(l);
                d.appendChild(div);
                
               red.appendChild(d);
        
            });
    
/*
        div = document.createElement("div");
        div.className="polje";
        l = document.createElement("label");
        l.innerHTML=this.naziv;
        this.conteiner.appendChild(div);
        div.appendChild(l);

        
        div = document.createElement("div");
        div.className="polje";
        l = document.createElement("label");
        l.innerHTML=this.cena;
        this.conteiner.appendChild(div);
        div.appendChild(l);

        div = document.createElement("div");
        div.className="polje";
        l = document.createElement("label");
        l.innerHTML=this.kolicina;
        l.className="kolicina";
        this.conteiner.appendChild(div);
        div.appendChild(l);
*/
     }

     drawPecivo(Pecivo,host)
     {

        let fejk=document.createElement("div");
        fejk.className="fejk";
        host.appendChild(fejk);

        let x=document.createElement("label");
        x.className="Pecivoustanju";
        x.innerHTML= Pecivo.naziv + "   " +Pecivo.gramaza + "   " + Pecivo.cena + "   " + Pecivo.kolicina ;
        fejk.appendChild(x);

       /* let x=document.createElement("label");
        x.className="Pecivoustanju";
        x.innerHTML= Pecivo.naziv + "   " +Pecivo.gramaza + "   " + Pecivo.cena + "   " + Pecivo.kolicina ; ;
        host.appendChild(x);
        */
     }

     IzracunajCenu(string)
     {
        
        for(let i=0;i<this.nizPeciva.length;i++)
        {
            if(string == this.nizPeciva[i].naziv)
            {
                
                return this.nizPeciva[i].cena;

            }


        }
        
        return 0;
    }
    IzracunajKolicinu(string)
    {
        for(let i=0;i<this.nizPeciva.length;i++)
        {
            if(string == this.nizPeciva[i].naziv)
            {
                
                return this.nizPeciva[i].kolicina;

            }


        }
        
        return 0;

    }
        
    updateKolicine(pecivo,kolicina)
    {
        for(let i=0;i<this.nizPeciva.length;i++)
        {
            if(pecivo == this.nizPeciva[i].naziv && this.nizPeciva[i].kolicina >= kolicina)
            {
                
                this.nizPeciva[i].kolicina=this.nizPeciva[i].kolicina - kolicina;
               
                let h=document.querySelector(".stanje");
                while (h.firstChild) {
                    h.removeChild(h.lastChild);
                  }
                  
                for(let i=0;i<this.nizPeciva.length;i++)
                {
                    this.drawPecivo(this.nizPeciva[i],h);
                }

                return 0;

            }


        }
        return 0;

    }
        
        
     
}