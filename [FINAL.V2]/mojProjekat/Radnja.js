import {Radnik} from "./Radnik.js";
export class Radnja
{
    constructor(id)
    {
     this.id=id;
     this.NizRadnik=[];   
    }

   AddRadnik(Radnik)
   {
     
  /*  if(this.RadnikuNizu(Radnik)===true)
       {
            alert("Radnik je vec u nizu")
            return 0;    
        }   
      else 
    */  this.NizRadnik.push(Radnik);
   
   }
  

  
   RadnikuNizu(Radnik)
   {
    let provera = 0;
    
    for(let i=0; i<this.NizRadnik.length; i++)
    {
        if(Radnik.Rjmbg == this.NizRadnik[i].Rjmbg)
        {
            provera=1;
        }
    }


    if (provera==0)
    {
        return provera  ;
    }
    return provera ;
}


DrawRadnja(host)
    {
        const tata=document.createElement("div");
        tata.className="TATA";
        host.appendChild(tata); 

        const gornji=document.createElement("div");
        gornji.className="gornjaRadnja";
        tata.appendChild(gornji);
        
        const kasa=document.createElement("div");
        kasa.className="kasa";
        gornji.appendChild(kasa);

        let labelaaa=document.createElement("label");
        labelaaa.innerHTML="Kasa";
        labelaaa.classname="Fejkz";
        kasa.appendChild(labelaaa);
       

        const stovariste=document.createElement("div");
        stovariste.className="stovariste";
        gornji.appendChild(stovariste);

        labelaaa=document.createElement("label");
        labelaaa.innerHTML="Stovariste";
        labelaaa.classname="Fejkz";
        stovariste.appendChild(labelaaa);
        
     
        
        const donji=document.createElement("div");
        donji.className="donjaRadnja";
        tata.appendChild(donji);
        
       

        const pecnica=document.createElement("div");
        pecnica.className="pecnica";
        donji.appendChild(pecnica);

        labelaaa=document.createElement("label");
        labelaaa.innerHTML="Pecnica";
        labelaaa.classname="Fejkz";
        pecnica.appendChild(labelaaa);

         
        
        const spremanje=document.createElement("div");
        spremanje.className="spremanje";  
        donji.appendChild(spremanje);labelaaa=document.createElement("label");
        
        labelaaa.innerHTML="SpremaČ";
        labelaaa.classname="Fejkz";
        spremanje.appendChild(labelaaa);

      
      
    }
    
    
    DrawRadnik(Radnik)
    {

        const pecnicaa = document.querySelector(".pecnica");
        const kasaa = document.querySelector(".kasa");
        const spremanjee = document.querySelector(".spremanje");
        const stovaristee = document.querySelector(".stovariste");
        
        if(Radnik.Rpozicijaa() === "Kasir")
        {   
            let u= document.createElement("div");
            u.className="fejkkkdivv";
            kasaa.appendChild(u);

            let uu=document.createElement("label");
            uu.className="ImeRadnikaa";
            uu.innerHTML=Radnik.Rime + "   " + Radnik.Rprezime + "  " + Radnik.Rjmbg;
            u.appendChild(uu);
        }
        else if(Radnik.Rpozicijaa() === "Burekdzija")
        {   
            let u= document.createElement("div");
            u.className="fejkkkdivv";
            pecnicaa.appendChild(u);

            let uu=document.createElement("label");
            uu.className="ImeRadnikaa";
            uu.innerHTML=Radnik.Rime + "   " + Radnik.Rprezime + "  " + Radnik.Rjmbg;
            u.appendChild(uu);
        }

        else if(Radnik.Rpozicijaa() === "Peciva")
        {   
            let u= document.createElement("div");
            u.className="fejkkkdivv";
            spremanjee.appendChild(u);

            let uu=document.createElement("label");
            uu.className="ImeRadnikaa";
            uu.innerHTML=Radnik.Rime + "   " + Radnik.Rprezime + "  " + Radnik.Rjmbg;
            u.appendChild(uu);
        }
        else if(Radnik.Rpozicijaa() === "Stovariste")
        {   
            let u= document.createElement("div");
            u.className="fejkkkdivv";
            stovaristee.appendChild(u);

            let uu=document.createElement("label");
            uu.className="ImeRadnikaa" ;
            uu.innerHTML=Radnik.Rime + "   " + Radnik.Rprezime + "  " + Radnik.Rjmbg;
            u.appendChild(uu);
        }
}

drawRadnikUI(host)
    {
        const radnikkkk=document.createElement("div");
        radnikkkk.className="radnik";
        host.appendChild(radnikkkk);
        
        const levi = document.createElement("div");
        levi.className="leviradnik";
        radnikkkk.appendChild(levi);

        let div= document.createElement("div");
        div.className="inpuzaRadnika";
        levi.appendChild(div);

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
        levi.appendChild(div);

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
        levi.appendChild(div);

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
        levi.appendChild(div);
       
       
        
        labela=document.createElement("label");
        labela.innerHTML= "Pozicija:" ;
        labela.className="labelazaradnika";  
        div.appendChild(labela);

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

            

                div= document.createElement("div");
                div.className="izmeni";
                levi.appendChild(div);

                labela=document.createElement("label");
        labela.innerHTML= "Promeni poziciju u:" ;
        labela.className="labelazaradnika";  
        div.appendChild(labela);

                labela=document.createElement("select");
                labela.innerHTML= "Pozicija :   " ;
                labela.className="NovaPozicijaRadnik";
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

                let p = document.createElement("div");
                p.className="p";
                levi.appendChild(p);

                labela=document.createElement("label");
                labela.innerHTML="Izaberite radnika: ";
                p.appendChild(labela);

                labela=document.createElement("select");
                labela.className="sel";
                p.appendChild(labela);
               this.NizRadnik.forEach(radnik => 
                {
                    opcija = document.createElement("option");
                    opcija.innerHTML=radnik.Rime +' '+ radnik.Rprezime;
                     opcija.value=radnik.Rjmbg;
                     labela.appendChild(opcija);
                     opcija.className="opcijaa";

                });
                

                const desni = document.createElement("div");
                desni.className="desnirandik";
                radnikkkk.appendChild(desni);

                let y = document.createElement("button");
                y.innerHTML="Dodaj Radnika";
                y.className="DodajRadnika";
                desni.appendChild(y);
                y.onclick = ( ev => 
                    {
                        this.DodajRadnika(); 
                     
                 }
                );

                let z = document.createElement("button");
                z.innerHTML="Izbrisi Radnika";
                z.className="IzbrisiRadnika";
                desni.appendChild(z);
                z.onclick = ( ev => 
                    {
                        this.DeleteRadnik()
                     
                 }
                );
               const w  = document.createElement("button");
                w.innerHTML="Premesti Radnika";
                w.className="IzmeniRadnika";
                desni.appendChild(w);
                w.onclick = ( ev => 
                    {

                        this.PomeriRadnika(); 
                     
                 }
                );
    }

    DeleteRadnikBez(radnik)
    {
        let xime= document.querySelector(".InputzaImeRadnika").value;
        let xprezime=document.querySelector(".InputzaPrezimeRadnika").value;
        let xjmbg=document.querySelector(".InputzaJMBGRadnika").value;
        let xpozicija=document.querySelector(".PozicijaRadnik").value;
        let onogdebrisemo;
        let pokupi = document.querySelector(".sel").value;
        let provera =0;
        
        for(let q=0;q<this.NizRadnik.length;q++)
        {
            
            if(pokupi == this.NizRadnik[q].Rjmbg )
            {
                onogdebrisemo=q;
                provera=1;
                q=this.NizRadnik.length+1;
                
            }

        }
        if(provera===1)
        {
         
            let x= document.querySelector(".NovaPozicijaRadnik").value;     
            fetch("https://localhost:5001/Pekara/IzmeniPoziciju/"+this.NizRadnik[onogdebrisemo].id+"/"+x,{
                method: "PUT",
                headers: { 
                    'Content-Type': 'application/json'
                }, 
            });
            
            
        }

        setTimeout(( ) => {
            location.reload();
        },2000);
         
         
      /*     
        let j = document.querySelector(".pecnica");
        let k = document.querySelector(".kasa");
        let l = document.querySelector(".spremanje");
        let m = document.querySelector(".stovariste");
        while (j.firstChild) {
            j.removeChild(j.lastChild);
          }
          while (k.firstChild) {
            k.removeChild(k.lastChild);
          }
          while (l.firstChild) {
            l.removeChild(l.lastChild);
          }
          while (m.firstChild) {
            m.removeChild(m.lastChild);
          }
        
        let labelaaa=document.createElement("label");
        labelaaa.innerHTML="Kasa";
        labelaaa.classname="Fejkz";
        k.appendChild(labelaaa);

         labelaaa=document.createElement("label");
        labelaaa.innerHTML="Stovariste";
        labelaaa.classname="Fejkz";
        m.appendChild(labelaaa);

         labelaaa=document.createElement("label");
        labelaaa.innerHTML="Pecnica";
        labelaaa.classname="Fejkz";
        j.appendChild(labelaaa);

         labelaaa=document.createElement("label");
        labelaaa.innerHTML="SpremaČ";
        labelaaa.classname="Fejkz";
        l.appendChild(labelaaa);  

          for(let v=0;v<this.NizRadnik.length;v++)
          {
              this.DrawRadnik(this.NizRadnik[v]);
          }
        
        }
           
     
*/
    }

    DeleteRadnik(Radnik)
    {
        let xime= document.querySelector(".InputzaImeRadnika").value;
        let xprezime=document.querySelector(".InputzaPrezimeRadnika").value;
        let xjmbg=document.querySelector(".InputzaJMBGRadnika").value;
        let xpozicija=document.querySelector(".PozicijaRadnik").value;
        let onogdebrisemo;
        let provera =0;
        let pokupi = document.querySelector(".sel").value;
        for(let q=0;q<this.NizRadnik.length;q++)
        {
            
            if(pokupi == this.NizRadnik[q].Rjmbg )
            {
                onogdebrisemo=q;
                provera=1;
                            
            }

        }
        
        
        if(provera===1)
        {
           let l = this.NizRadnik[onogdebrisemo].id;
           //  this.NizRadnik.splice(onogdebrisemo,1);
           fetch("https://localhost:5001/Pekara/IzbrisiRadnika/"+this.NizRadnik[onogdebrisemo].id,{
               method: "DELETE"
        })
        setTimeout(( ) => {
            location.reload();
        },2000);
         }

        /*let j = document.querySelector(".pecnica");
        let k = document.querySelector(".kasa");
        let l = document.querySelector(".spremanje");
        let m = document.querySelector(".stovariste");
        while (j.firstChild) {
            j.removeChild(j.lastChild);
          }
          while (k.firstChild) {
            k.removeChild(k.lastChild);
          }
          while (l.firstChild) {
            l.removeChild(l.lastChild);
          }
          while (m.firstChild) {
            m.removeChild(m.lastChild);
          }
        
        let labelaaa=document.createElement("label");
        labelaaa.innerHTML="Kasa";
        labelaaa.classname="Fejkz";
        k.appendChild(labelaaa);

         labelaaa=document.createElement("label");
        labelaaa.innerHTML="Stovariste";
        labelaaa.classname="Fejkz";
        m.appendChild(labelaaa);

         labelaaa=document.createElement("label");
        labelaaa.innerHTML="Pecnica";
        labelaaa.classname="Fejkz";
        j.appendChild(labelaaa);

         labelaaa=document.createElement("label");
        labelaaa.innerHTML="SpremaČ";
        labelaaa.classname="Fejkz";
        l.appendChild(labelaaa);  

          for(let v=0;v<this.NizRadnik.length;v++)
          {
              this.DrawRadnik(this.NizRadnik[v]);
          }
        
        }
            
*/

        
else if(provera===0)
{
            alert("Uneti Radnik ne postoji u sistemu");
            return 0;
}
                         
        
                        
}
    
    DodajRadnika()
    {
        let xime= document.querySelector(".InputzaImeRadnika").value;
        let xprezime=document.querySelector(".InputzaPrezimeRadnika").value;
        let xjmbg=document.querySelector(".InputzaJMBGRadnika").value;
        let xpozicija=document.querySelector(".PozicijaRadnik").value;
       
        
        const radnikkkkkkk=new Radnik(1,xime,xprezime,xjmbg,xpozicija);
        let provera = 0;
    
    for(let i=0; i<this.NizRadnik.length; i++)
    {
        if(xjmbg == this.NizRadnik[i].Rjmbg)
        {
            provera=1;
        }
        
    }

        if(provera==1)
          alert("Radnik vec postoji");
     else if(provera==0)
        {
            this.AddRadnik(radnikkkkkkk);
            this.DrawRadnik(radnikkkkkkk);
    
            fetch("https://localhost:5001/Pekara/UpisiRadnika/"+1, {
                method: "POST", 
                headers: 
                {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(
                    {
                        ime: xime,
                        prezime: xprezime,
                        jmbg: xjmbg,
                        pozicija: xpozicija
                    })
            })
            
   setTimeout(( ) => {
            location.reload();
       },1000);
         }
    

    }
    

   PomeriRadnika()
    {
        let xime= document.querySelector(".InputzaImeRadnika").value;
        let xprezime=document.querySelector(".InputzaPrezimeRadnika").value;
        let xjmbg=document.querySelector(".InputzaJMBGRadnika").value;
        let xpozicija=document.querySelector(".PozicijaRadnik").value;
        let novaPozicija= document.querySelector(".NovaPozicijaRadnik").value;
        let pokupi = document.querySelector(".sel").value;

        let rad = new Radnik (xime, xprezime, pokupi, xpozicija);
        const novi = new Radnik (xime, xprezime, pokupi, novaPozicija);
        this.AddRadnik(novi);
     
        this.DeleteRadnikBez(rad);
        
      
     
  
    }
          



}