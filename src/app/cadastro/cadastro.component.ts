import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from '../model/pessoa.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit{
  pessoaForm: FormGroup = new FormGroup({});
  id: string | null = '';

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private http: HttpClient,  private router: Router) {}


  ngOnInit(): void {
    this.pessoaForm = this.fb.group({
      id: [''],
      nome: ['', Validators.required],
      perfil: ['', Validators.required],
      idade: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      ativo: ['', [Validators.required]],
      pais: ['', Validators.required],
      nivelExperiencia: ['', Validators.required],
    });

      this.route.paramMap.subscribe(params => {
        this.id = params.get('id');
        console.log(this.id);
      });
  }

  onSubmit(): void {
    if (this.pessoaForm.valid) {
      const formData = this.pessoaForm.value; // Extrai os valores do FormGroup
      this.http.post<Pessoa[]>('http://localhost:3000/profiles', formData).subscribe(data => {
        this.router.navigate(['/']);      
      }, error => {
        console.error('Erro ao salvar pessoa', error);
      });
    }
  }
}

