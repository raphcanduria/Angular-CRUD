import { ProdutosService } from './../../produtos.service';
import { Produtos } from './../../Produtos';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  formulario: any;
  tituloFormulario: string;
  produtos: Produtos[];
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;

  tabelaVisivel: boolean = true;
  formularioVisivel: boolean = false;



  constructor(private produtoservice: ProdutosService) { }

  ngOnInit(): void {

    this.produtoservice.obterProdutos().subscribe(result => {

      this.produtos = result;

    });


  }

  ExibirFormCadastro(): void
  {
    this.tabelaVisivel = false;
    this.formularioVisivel = true;
    this.tituloFormulario = 'Novo Produto';
    this.formulario = new FormGroup({
      codigo: new FormControl(null),
      descricao: new FormControl(null),
      departamento: new FormControl(null),
      preco: new FormControl(null),
      ativo: new FormControl(true)

    });

  }

  ExibirFormAtualiza(produtoId: string): void
  {
    this.tabelaVisivel = false;
    this.formularioVisivel = true;

    this.produtoservice.getById(produtoId).subscribe(result => {
      this.tituloFormulario = `Alterar Produto ${result.codigo}`;

      this.formulario = new FormGroup({
        produtoId: new FormControl(result.id),
        codigo: new FormControl(result.codigo),
        descricao: new FormControl(result.descricao),
        departamento: new FormControl(result.departamento),
        preco: new FormControl(result.preco),
        ativo: new FormControl(result.ativo)
      })

    });

  }

  EnviarForm(): void{
    const produto : Produtos = this.formulario.value;

    if (produto.id != '')
    {
      this.produtoservice.atualizarProduto(produto).subscribe(result => {
        this.formularioVisivel = false;
        this.tabelaVisivel = true;
        alert('Produto atualizado com sucesso!');
        this.produtoservice.obterProdutos().subscribe(reg => {
          this.produtos = reg;
        });
      });
    }else
    {
      this.produtoservice.incluirProduto(produto).subscribe(resultado => {
        this.formularioVisivel = false;
        this.tabelaVisivel = true;
        alert('Produto inserido com sucesso!');
        this.produtoservice.obterProdutos().subscribe(reg => {
          this.produtos = reg;
        });
      });
    }
  }

  Voltar(): void
  {
    this.tabelaVisivel = true;
    this.formularioVisivel = false;
  }

  ExcluirProduto(produtoId: string)
  {
    this.produtoservice.deletarProduto(produtoId).subscribe(result => {

      alert('Produto Excluido com Sucesso!');
      this.produtoservice.obterProdutos().subscribe(reg => {
        this.produtos = reg;
      });
    });


  }

}

