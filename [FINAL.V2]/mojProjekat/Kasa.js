import {Stanje} from "./Stanje.js";
import {Pecivo} from "./Pecivo.js";
export class Kasa
{
    constructor(id, novac)
    {
        this.id=id;
        this.novac=novac; 
        this.stanje = new Stanje();
        this.Racun=0;

    }

    returnNovac()
    {
        return this.novac;
    }

    drawKasa(host)
    {
        const kasa=document.createElement("div");
        kasa.className="FinalKasa";
        host.appendChild(kasa);

        const levaKasa = document.createElement("div");
        levaKasa.className="levaKasa";
        kasa.appendChild(levaKasa);

        const novacukasi=document.createElement("label");
        novacukasi.innerHTML= "Trenutnu novac u kasi:     " + this.returnNovac();
        novacukasi.className="NovacuKasi";
        levaKasa.appendChild(novacukasi);

        let divzainputPeciva=document.createElement("div");
        divzainputPeciva.className="divzainputPeciva";
        levaKasa.appendChild(divzainputPeciva);

    
        let ina = document.createElement("label");
        ina.innerHTML="Izaberite zeljeno pecivo:    ";
        divzainputPeciva.appendChild(ina);
        let labela=document.createElement("select");
        labela.className="Pecivooo";
        let opcija;
        divzainputPeciva.appendChild(labela);
        
        opcija = document.createElement("option");            
        opcija.innerHTML="Pica";
        opcija.value="Pica";
        labela.appendChild(opcija);
        
        opcija = document.createElement("option");            
        opcija.innerHTML="Pogacica";
        opcija.value="Pogacica";
        labela.appendChild(opcija);

        opcija = document.createElement("option");            
        opcija.innerHTML="Sapica";
        opcija.value="Sapica";
        labela.appendChild(opcija);
        
        opcija = document.createElement("option");            
        opcija.innerHTML="Burek";
        opcija.value="Burek";
        labela.appendChild(opcija);

        opcija = document.createElement("option");            
        opcija.innerHTML="Rol virsla";
        opcija.value="Rol virsla";
        labela.appendChild(opcija);
    
     
        let divzainputKolicine=document.createElement("div");
        divzainputKolicine.className="divzainputkolicine";
        levaKasa.appendChild(divzainputKolicine);

        let fixlabela=document.createElement("label");
        fixlabela.innerHTML= "Uneti zeljenu kolicinu  ";
        fixlabela.className="fixlabela";
        divzainputKolicine.appendChild(fixlabela);

        let inputKolicina  = document.createElement("input");
        inputKolicina.type="number";
        inputKolicina.className="inputZaKolicinu";
        divzainputKolicine.appendChild(inputKolicina);
        
        let racun= document.createElement("div");
        racun.className="racun";
        levaKasa.appendChild(racun);

        let fixlabelazaRacun=document.createElement("label");
        fixlabelazaRacun.className="labelazaRacun";
        racun.appendChild(fixlabelazaRacun);
        fixlabelazaRacun.innerHTML="Vas racun je : ";

        racun= document.createElement("div");
        racun.className="racun";
        levaKasa.appendChild(racun); 

        
        let fixlabelaMusterijaUplatio=document.createElement("label");
        fixlabelaMusterijaUplatio.className="fixlabelaMusterijaUplatio";
        racun.appendChild(fixlabelaMusterijaUplatio);
        fixlabelaMusterijaUplatio.innerHTML="Kupac je uplatio :     ";

        let transakcija = document.createElement("input");
        transakcija.className="transakcija";
        transakcija.type="number";
        racun.appendChild(transakcija);


         racun= document.createElement("div");
        racun.className="racun";
        levaKasa.appendChild(racun);

        
        
        
        
       


        let kusur= document.createElement("label");
        kusur.className="kusur";
        racun.appendChild(kusur);
        kusur.innerHTML="Kusur za vratiti je :    " ;

        const desnaKasa = document.createElement("div");
        desnaKasa.className="DesnaKasa";
        kasa.appendChild(desnaKasa);

        let prodaj= document.createElement("button");
        prodaj.innerHTML="Skeniraj ";
        prodaj.className="prodaj";
        desnaKasa.appendChild(prodaj);
        prodaj.onclick = ( ev => 
            {
                this.izracunajRacun(); 
          
         }
        );
        
        
        
        let obrisiRacun= document.createElement("button");
        obrisiRacun.innerHTML="Obrisi Racun ";
        obrisiRacun.className="ObrisatiRacun";
        desnaKasa.appendChild(obrisiRacun);
        obrisiRacun.onclick = ( ev => 
            {
                this.ObrisiRacun();
          
         }
        );





        let VratiKusur= document.createElement("button");
        VratiKusur.innerHTML="VratiKusur ";
        VratiKusur.className="VratiKusur";
        desnaKasa.appendChild(VratiKusur);
        VratiKusur.onclick = ( ev => 
            {
                this.VratiKKKusur();
          
         }
        );


        
    }

    izracunajRacun()
    {
        let pecivo= document.querySelector(".Pecivooo").value;
        let kolicina= document.querySelector(".inputZaKolicinu").value;
    
        let cena=this.stanje.IzracunajCenu(pecivo);
       


        
      //  if(cena===0)
       // alert("ne postiji uneto pecivo");
         

        let stanjePeciva=this.stanje.IzracunajKolicinu(pecivo);
        
        if(stanjePeciva===0)
        {
            alert("peciva nema na stanju");
        }
        else if(stanjePeciva < kolicina)
        {
            alert("Ima manje peciva nego sto musterija zeli da kupi");
        }

        let racun= kolicina * cena ;
       
        let menjamo= document.querySelector(".labelazaRacun");
        menjamo.innerHTML="Vas racun je : " +   racun;
        
        this.Racun=racun;
        
        

        

        

        


    }

    VratiKKKusur()
    {
        let pecivo= document.querySelector(".Pecivooo").value;
        let kolicina= document.querySelector(".inputZaKolicinu").value;
        let uplata= document.querySelector(".transakcija").value;
        
        let Kusur=uplata-this.Racun;
        let povracaj= document.querySelector(".kusur");
        povracaj.innerHTML="Kusur za vratiti je :     " + Kusur ;

        

        this.novac=this.novac+this.Racun;
        let index;
        let promena= document.querySelector(".NovacuKasi");
        promena.innerHTML="Trenutnu novac u kasi:     " + this.novac;
        //this.stanje.updateKolicine(pecivo,kolicina);
        
        for(let i=0;i<this.stanje.nizPeciva.length; i++)
            if(this.stanje.nizPeciva[i].naziv===pecivo)
               {
                index=i;
                i=this.stanje.nizPeciva.length+1;
               } 

        fetch("https://localhost:5001/Pekara/IzmeniKasu/",{
            method: "PUT",
            headers: { 
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({
                "id": 2,
                "novac": this.novac,
                "racun": 0,
                "stanje": [
                  {
                   "id": 2,
                    "nizPeciva": [
                      {
                        "id": this.stanje.nizPeciva[index].id,
                        "naziv": this.stanje.nizPeciva[index].naziv,
                        "gramaza": this.stanje.nizPeciva[index].gramaza,
                        "cena": this.stanje.nizPeciva[index].cena,
                        "kolicina": this.stanje.nizPeciva[index].kolicina-kolicina
                  } ] 
                } ]
              })
          });
          alert("Kusur je: "+ Kusur);
          setTimeout(( ) => {
            location.reload();
        },2000);
         
    }

    ObrisiRacun()
    {
        let uplata= document.querySelector(".labelazaRacun");
        uplata.innerHTML="Vas racun je : ";
        
    }
    
    }
    
    
   

