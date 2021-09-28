import { Component, OnInit } from '@angular/core';
import { LivroService, Livro } from '../shared';

@Component({
  selector: 'app-listar-livro',
  templateUrl: './listar-livro.component.html',
  styleUrls: ['./listar-livro.component.css']
})
export class ListarLivroComponent implements OnInit {

  livros: Livro[]

  constructor(private livroService: LivroService) { }

  ngOnInit(){
    this.livros = this.listarTodos();
  }

  listarTodos(): Livro[]{
    return this.livroService.listarTodos();
  }

}
