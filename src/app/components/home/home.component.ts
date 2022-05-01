import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'teste novo';
  // no angular agente nao usa var para criar uma variavel
  // no angular agente usa o let
  // quando agente ja inicia variavel atribuindo um valor a ela agente nao precisa usar o let
  // var e um escopo global e let e um escopo da funcao
  numberOne = 1;
  numberTwo = 1;
  soma = 0;
  text = ''
  
  // funcao
  calcular(){
    // quando agente declara uma variavel e inicia para poder chamar essa variavel agente tem que usar this
    this.soma = this.numberOne + this.numberTwo;
    if(this.soma > 20){
      this.text='legal'
    }else{
      this.text=''
    }
  }
}