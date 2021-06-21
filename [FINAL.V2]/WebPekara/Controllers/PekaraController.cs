using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebPekara.Models;
using Microsoft.EntityFrameworkCore;
namespace WebPekara.Controllers

{
    [ApiController]
    [Route("[controller]")]
    public class PekaraController : ControllerBase
    {
        public PekaraContext Context { get; set; }
        public PekaraController(PekaraContext context)
        {
            Context=context;
        }

        //PECIVO

        [Route("PreuzmiPeciva")]    
        [HttpGet]   
        public async Task<List<Pecivo>> PreuzmiPeciva()
         {
         return await Context.Peciva.ToListAsync();
         }


        [Route("UpisiPecivo/{idStanja}")]
        [HttpPost]
        public async Task UpisiPecivo(int idStanja, [FromBody] Pecivo pecivo)
        {
           
            var stanje= await Context.Stanja.FindAsync(idStanja);
            pecivo.Stanje=stanje;
            Context.Peciva.Add(pecivo);
            await  Context.SaveChangesAsync();
        }

        [Route("IzbrisiPecivo/{id}")]
        [HttpDelete]
        public async Task IzbrisiPecivo(int id)
        {
            var pecivo= await Context.Peciva.FindAsync(id);
            Context.Remove(pecivo);
            await Context.SaveChangesAsync();
        }

        ///KASA
        
        [Route("PreuzmiKasu")]    
        [HttpGet]   
        public async Task<List<Kasa>> PreuzmiKasu()
         {
         return await Context.Kase.Include(p => p.Stanje).ThenInclude(p=>p.nizPeciva).ToListAsync();

         }

         [Route("IzmeniKasu")]
        [HttpPut]
        public async Task IzmeniKasu([FromBody]Kasa kasa)
        {
         
            Context.Update<Kasa>(kasa);
            await Context.SaveChangesAsync();
        }

        [Route("IzbrisiKasu/{id}")]
        [HttpDelete]
        public async Task IzbirisiKasu(int id)
        {
            var kasa= await Context.Kase.FindAsync(id);
            Context.Remove(kasa);
            await Context.SaveChangesAsync();
        }
        
        
        [Route("UpisiKasu")]
        [HttpPost]
        public async Task UpisiKasu([FromBody] Kasa kasa)
        {
            Context.Kase.Add(kasa);
           await  Context.SaveChangesAsync();
        }

        /// STANJE 


        [Route("PreuzmiStanje")]    
        [HttpGet]   
        public async Task<List<Stanje>> PreuzmiStanje()
         {
         return await Context.Stanja.Include(p => p.nizPeciva).ToListAsync();
         }

        
        [Route("UpisiStanje/{idKase}")]
        [HttpPost]
        public async Task UpisiStanje(int idKase, [FromBody] Stanje stanje)
        {
            var kasa= await Context.Kase.FindAsync(idKase);
            stanje.Kasa= kasa;
            Context.Stanja.Add(stanje);
           await  Context.SaveChangesAsync();
        }

        [Route("IzbrisiStanje/{id}")]
        [HttpDelete]
        public async Task IzbirisiStanje(int id)
        {
            var kasa= await Context.Stanja.FindAsync(id);
            Context.Remove(kasa);
            await Context.SaveChangesAsync();
        }

        ///RADNJA

         [Route("PreuzmiRadnju")]    
        [HttpGet]   
        public async Task<List<Radnja>> PreuzmiRadnju()
         {
         return await Context.Radnje.Include(p=>p.NizRadnika).ToListAsync();
         }
 

          [Route("UpisiRadnju")]
        [HttpPost]
        public async Task UpisiRadnju( [FromBody] Radnja radnja)
        {
           Context.Radnje.Add(radnja);
           await  Context.SaveChangesAsync();
        }

        //RADNIK

           [Route("UpisiRadnika/{idRadnje}")]
        [HttpPost]
        public async Task UpisiRadnika(int idRadnje, [FromBody] Radnik radnik)
        {
          var radnja = await Context.Radnje.FindAsync(idRadnje);
          radnik.Radnja=radnja;
           Context.Radnici.Add(radnik);
           await  Context.SaveChangesAsync();
        }

        [Route("IzbrisiRadnika/{idRadnika}")]
        [HttpDelete]
        public async Task IzbrisiRadnika(int idRadnika)
        {
            var radnik= await Context.Radnici.FindAsync(idRadnika);
            Context.Remove(radnik);
            await Context.SaveChangesAsync();
        }

       [Route("IzmeniRadnika")]
        [HttpPut]
        public async Task IzmeniRadnika([FromBody]Radnik radnik)
        {
            Context.Update<Radnik>(radnik);
            await Context.SaveChangesAsync();
        }

 
     [Route("IzmeniPoziciju/{idRadnika}/{pozicija}")]
        [HttpPut]
        public async Task IzmeniPoziciju( int idRadnika, string pozicija)
        {
            var radnik= await Context.Radnici.FindAsync(idRadnika);
            radnik.Pozicija=pozicija;
            Context.Update<Radnik>(radnik);
            await Context.SaveChangesAsync();
        }

    }
}
