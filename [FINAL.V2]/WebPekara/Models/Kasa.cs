using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic; 
using System.ComponentModel.DataAnnotations;

namespace WebPekara.Models
{
    [Table("Kasica")]
    public class Kasa
    {
        [Key]
        [Column("ID")]
        public int ID { get; set; }
        
        [Column("Novac")]
        public int Novac { get; set; }    
        [Column("Racun")]  
        public int Racun { get; set; }
        
  
        public virtual List<Stanje>  Stanje { get; set; }
        //  public virtual List<Pecivo>  Pecivo { get; set; }

    }
}