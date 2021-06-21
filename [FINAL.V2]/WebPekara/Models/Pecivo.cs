using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic; 
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace WebPekara.Models
{
     [Table("Peciva")]
public class Pecivo
{
    [Key]
    [Column("ID")]
    public int ID { get; set; }
   
    [Column("Naziv")]
    public string Naziv { get; set; }   
    
    [Column("Gramaza")]
    public int Gramaza { get; set; }
    
    [Column("Cena")]
    public int Cena { get; set; }
    
    [Column("Kolicina")]
     public int Kolicina { get; set; }

    [JsonIgnore]
    public Stanje Stanje{get; set;}
// [JsonIgnore]
//  public Kasa Kasa{get; set;}




}


}