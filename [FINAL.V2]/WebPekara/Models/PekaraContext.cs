using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic; 
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;
//using System.ComponentModel.DataAnnotations.ValidationAttribute;


namespace WebPekara.Models

{   
    public class PekaraContext : DbContext
    {
        public DbSet<Kasa> Kase {get; set; }
        public DbSet<Stanje> Stanja {get; set; }
        public DbSet<Pecivo> Peciva {get; set; }
        public DbSet<Radnik> Radnici {get; set; }
        public DbSet<Radnja> Radnje {get; set; }
        public PekaraContext(DbContextOptions options) : base(options)
        {
            
        }
    }
}