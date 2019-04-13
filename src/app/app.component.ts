import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  resultado = '';
  op1: number = 0;
  operador='';
  estaAutenticado:boolean=false;

  obtenerNumero(boton: string) {
    if (boton === '+' || boton === '-' || boton === '*' || boton === '%' || boton === '=' || boton === 'C') {
      if (boton != '=') {
        this.op1 = Number(this.resultado);
        this.resultado = '';
        this.operador=boton;
      }else{
        if (this.operador === '+'){
          this.resultado= this.op1 + Number(this.resultado)+'';
          return;
        }
        if (this.operador === '-'){
          this.resultado= this.op1 - Number(this.resultado)+'';
          return;
        }
        if (this.operador === '*'){
          this.resultado= this.op1 * Number(this.resultado)+'';
          return;
        }
        if (this.operador === '%'){
          this.resultado= this.op1 / Number(this.resultado)+'';
          return;
        }
        if (this.operador === 'C'){
          this.resultado= '';
          this.op1=0;
          this.operador='';
          return;
        }
      }
    } else {
      this.resultado += boton;
    }
  }
  autenticar(){
    this.estaAutenticado=!this.estaAutenticado;
  }

}
