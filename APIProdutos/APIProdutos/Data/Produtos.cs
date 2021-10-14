using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace APIProdutos.Data
{
    public class Produtos
    {
        [Key]
        public Guid Id { get; set; }
        [Required]
        [MaxLength(120)]        
        public string Codigo { get; set; }
        [Required]
        [MaxLength(120)]
        public string Descricao { get; set; }
        [Required]
        [MaxLength(120)]
        public string Departamento { get; set; }        
        public decimal Preco { get; set; }
        public bool Ativo { get; set; }

    }
}
