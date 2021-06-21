using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic; 
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
namespace WebPekara.Models

{
    [Table("Stanje")]
public class Stanje
{
    [Key]
    [Column("ID")]
    public int ID { get; set; }

     public virtual List<Pecivo>  nizPeciva { get; set; }

    [JsonIgnore]
     public Kasa Kasa{get; set;}

  
}



}