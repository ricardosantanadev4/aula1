import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'aula1';
  // no angular agente nao usa var para criar uma variavel
  // no angular agente usa o let
  // quando agente ja inicia variavel atribuindo um valor a ela agente nao precisa usar o let
  // var e um escopo global e let e um escopo da funcao
  numberOne = 0;
  numberTwo = 0;
  soma = 0;
  
  // funcao
  calcular(){
    // quando agente declara uma variavel e inicia para poder chamar essa variavel agente tem que usar this
    this.soma = this.numberOne + this.numberTwo;
  }
}