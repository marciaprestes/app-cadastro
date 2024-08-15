import { Component } from '@angular/core';
import { Pessoa } from '../model/pessoa.model';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-cadastros',
  templateUrl: './lista-cadastros.component.html',
  styleUrls: ['./lista-cadastros.component.css'],

})
export class ListaCadastrosComponent {
  constructor(private dialog: MatDialog, private http: HttpClient) {}

  ngOnInit(): void {
    this.carregarPessoas();
  };

  pessoas: Pessoa[] = [
    {nome: 'João', perfil: 'Desenvolvedor', idade: 25, email: 'teste@teste.com', ativo: true, pais: 'Brasil', nivelExperiencia: 1},
    
  ];
  displayedColumns: string[] = ['nome', 'perfil', 'idade', 'email', 'ativo', 'pais', 'nivelExperiencia' ,'actions'];
  dataSource = this.pessoas;

  delete(element: Pessoa): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Registro apagado:', element);
      }
    });
  }

  carregarPessoas(): void {
    this.http.get<Pessoa[]>('http://localhost:3000/profiles').subscribe(data => {
      this.dataSource = data;
    }, error => {
      console.error('Erro ao carregar pessoas', error);
    });
  }
}

