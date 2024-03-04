import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  operandoA: number;
  operandoB: number;

  @Output() resultadoSoma = new EventEmitter<number>();
  @Output() resultadoSubtrair = new EventEmitter<number>();
  @Output() resultadoMultiplicar = new EventEmitter<number>();
  @Output() resultadoDividir = new EventEmitter<number>();

  soma(): void {
    let resultado = this.operandoA + this.operandoB;
    this.resultadoSoma.emit(resultado);
  }
  subtrair(): void {
    let resultado = this.operandoA - this.operandoB;
    this.resultadoSubtrair.emit(resultado);
  }
  multiplicar(): void {
    let resultado = this.operandoA * this.operandoB;
    this.resultadoMultiplicar.emit(resultado);
  }
  dividir(): void {
    let resultado = this.operandoA / this.operandoB;
    this.resultadoDividir.emit(resultado);
  }
}
