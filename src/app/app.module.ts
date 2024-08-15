import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaCadastrosComponent } from './lista-cadastros/lista-cadastros.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';

import { MatSelectModule } from '@angular/material/select';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ListaCadastrosComponent,
    MenuComponent,
    ConfirmDialogComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatOptionModule,
    MatSelectModule,
    MatDialogModule,

    NgIf,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
