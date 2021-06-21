using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic; 
using System.ComponentModel.DataAnnotations;

namespace WebPekara.Models
{
 [Table("Radnja")]
public class Radnja
{

        [Key]
        [Column("ID")]
        public int ID { get; set; }

        public virtual List<Radnik>  NizRadnika { get; set; }



}

}