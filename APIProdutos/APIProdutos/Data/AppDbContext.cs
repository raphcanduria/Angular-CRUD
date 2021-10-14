using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIProdutos.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        public DbSet<Produtos> Produtos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Produtos>()
                .HasData(
                    new Produtos { Id = Guid.NewGuid(),  Codigo = "11521", Descricao = "VIDEO GAME", Preco = 2200.00M, Departamento = "Eletrônicos", Ativo = true });
        }
        

    }
}
