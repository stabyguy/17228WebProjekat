using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic; 
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace WebPekara.Models
{
   [Table("Radnik")]
public class Radnik
{
        [Key]
        [Column("ID")]
        public int ID { get; set; }
        
        [Column("Ime")]
        [MaxLength(255)]
        public string Ime { get; set; }
        
        [Column("Prezime")]
        [MaxLength(255)]
        public string Prezime { get; set; }

        [Column("Jmbg")]
        public int Jmbg { get; set; }

        [Column("Pozicija")]
        [MaxLength(255)]
        public string Pozicija { get; set; }

        [JsonIgnore]
        public Radnja Radnja {get; set;}

}


}