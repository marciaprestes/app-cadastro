import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCadastrosComponent } from './lista-cadastros/lista-cadastros.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Routes = [
  { path: '', component: ListaCadastrosComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'cadastro/:id', component: CadastroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }