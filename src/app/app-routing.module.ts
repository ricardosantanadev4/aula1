import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PerfilComponent } from './components/perfil/perfil.component';

// cria as rotas
// path nome da rota
// component component que vai ser acionado
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'perfil' ,component: PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
